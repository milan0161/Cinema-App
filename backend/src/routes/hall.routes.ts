import { Router } from 'express';
const hallRouter = Router();
import HallController from '../controllers/hall.controller';
import isAdmin from '../middleware/admin-middleware';
const hallControler = new HallController();

hallRouter.post('/hall/create', isAdmin, hallControler.createHall);

export default hallRouter;
