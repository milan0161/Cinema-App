import { IProjectionDto, ProjectionDtoInterface } from '../dto/projection/projection.dto';
declare class ProjectionService {
    projection: import(".prisma/client").Prisma.ProjectionDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
    movies: import(".prisma/client").Prisma.MovieDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
    hall: import(".prisma/client").Prisma.HallDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
    createProjection: (data: {
        movieId: string;
        date: string;
        hallName: string;
    }) => Promise<ProjectionDtoInterface>;
    getProjections: (date: any) => Promise<IProjectionDto[]>;
}
export default ProjectionService;
