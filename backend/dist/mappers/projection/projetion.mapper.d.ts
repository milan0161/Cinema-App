import { Movie, Projection } from '@prisma/client';
import { IProjectionDto, ProjectionDtoInterface } from '../../dto/projection/projection.dto';
export declare class ProjectionMapper {
    static toDto(data: {
        projection: Projection;
        movie: Movie;
    }): ProjectionDtoInterface;
    static toSingleProjDto(data: {
        movie: Movie;
        date: Date[];
    }): IProjectionDto;
}
