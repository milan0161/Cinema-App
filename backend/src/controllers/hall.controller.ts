import { Request, Response, NextFunction } from 'express';
import HallService from '../services/hall.service';
import { StatusCodes } from 'http-status-codes';

class HallController {
  hallService = new HallService();
  createHall = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { number, name } = req.body;
      const hall = await this.hallService.crateHall({ name, number });
      res.status(StatusCodes.CREATED).json({ message: hall });
    } catch (error) {
      next(error);
    }
  };
}

export default HallController;
