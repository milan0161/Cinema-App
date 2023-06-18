import { PrismaClient } from '@prisma/client';
import { IProjectionDto, ProjectionDtoInterface } from '../dto/projection/projection.dto';
import { ProjectionMapper } from '../mappers/projection/projetion.mapper';
import { NotFoundError } from '../errors/not-found';
import { BadRequestError } from '../errors/bad-request';
class ProjectionService {
  projection = new PrismaClient().projection;
  movies = new PrismaClient().movie;
  hall = new PrismaClient().hall;

  public createProjection = async (data: { movieId: string; date: string; hallName: string }) => {
    const hall = await this.hall.findUnique({
      where: {
        name: data.hallName,
      },
      select: {
        id: true,
        projection: true,
      },
    });
    if (!hall) {
      throw new NotFoundError('Couldnt find Hall, please try again later');
    }
    const date = new Date(data.date);
    date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
    hall.projection.forEach((proj) => {
      if (proj.date.getTime() === date.getTime()) {
        throw new BadRequestError('Projection at that time already exists! Please chose another time.');
      }
    });

    const projection = await this.projection.create({
      data: {
        date: date,
        movieId: data.movieId,
        hallId: hall.id,
      },
      select: {
        movie: true,
        id: true,
        date: true,
        hallId: true,
        movieId: true,
      },
    });
    const projectionDto: ProjectionDtoInterface = ProjectionMapper.toDto({
      movie: projection.movie,
      projection: projection,
    });
    return projectionDto;
  };

  public getProjections = async (date: any) => {
    const count = await this.projection.count();
    if (count == 0) {
      throw new NotFoundError('No projections found');
    }
    const today: string = date || new Date().setHours(0, 0, 0, 0).toString();
    let tomorow = new Date(today);
    tomorow.setHours(tomorow.getHours() + 24);
    let yesterday = new Date(today);
    yesterday.setHours(yesterday.getHours() - 24);

    const projections = await this.movies.findMany({
      where: {
        projections: {
          every: {
            date: {
              lt: tomorow,
              gt: yesterday,
            },
          },
        },
      },

      include: {
        projections: true,
      },
    });
    let dtoProjections: IProjectionDto[] = [];
    if (!projections) {
      throw new NotFoundError('No projections found, please try again later');
    }
    for (let proj of projections) {
      dtoProjections.push(
        ProjectionMapper.toSingleProjDto({ movie: proj, date: proj.projections.map((date) => date.date) }),
      );
    }
    return dtoProjections;
  };
}

export default ProjectionService;
