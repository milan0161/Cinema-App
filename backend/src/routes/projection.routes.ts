import { Router } from 'express';
import isAdmin from '../middleware/admin-middleware';
import ProjectionController from '../controllers/projection.controller';

const projectionController = new ProjectionController();
const projectionRouter = Router();

projectionRouter.post('/projection/create/:id', isAdmin, projectionController.createProjection);
projectionRouter.get('/projection/get-all', projectionController.getProjection);

export default projectionRouter;
