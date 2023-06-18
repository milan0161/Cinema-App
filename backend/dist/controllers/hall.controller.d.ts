import { Request, Response, NextFunction } from 'express';
import HallService from '../services/hall.service';
declare class HallController {
    hallService: HallService;
    createHall: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default HallController;
