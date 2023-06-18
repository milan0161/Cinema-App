import { Request, Response, NextFunction } from 'express';
import ProjectionService from '../services/projection.service';
import { StatusCodes } from 'http-status-codes';

class ProjectionController {
  projectionService = new ProjectionService();
  public createProjection = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movieId = req.params.id;
      const { date, hallName } = req.body as { movieId: string; date: string; hallName: string };
      const projection = await this.projectionService.createProjection({ movieId, date, hallName });
      res.status(StatusCodes.CREATED).json({ projection });
    } catch (error) {
      next(error);
    }
  };
  public getProjection = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { date } = req.query;
      const projections = await this.projectionService.getProjections(date);
      res.status(StatusCodes.OK).json({ projections });
    } catch (error) {
      next(error);
    }
  };
}

export default ProjectionController;
