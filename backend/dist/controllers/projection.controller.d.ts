import { Request, Response, NextFunction } from 'express';
import ProjectionService from '../services/projection.service';
declare class ProjectionController {
    projectionService: ProjectionService;
    createProjection: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProjection: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default ProjectionController;
