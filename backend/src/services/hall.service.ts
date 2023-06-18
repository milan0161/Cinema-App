import { PrismaClient } from '@prisma/client';
import { BadRequestError } from '../errors/bad-request';

class HallService {
  hall = new PrismaClient().hall;

  public crateHall = async (data: { number: number; name: string }): Promise<string> => {
    if (typeof data.number !== 'number') {
      throw new BadRequestError('Number of seats must be number');
    }
    if (!data.number) {
      throw new BadRequestError('You must provide number of setas');
    }
    if (data.number < 1) {
      throw new BadRequestError('Number of seats must be a positive number');
    }
    if (!data.name.trim() && data.name.length < 1) {
      throw new BadRequestError('You must provide Hall name');
    }
    let seats: { number: number }[] = [];
    for (let i = 1; i <= data.number; i++) {
      seats.push({ number: i });
    }
    const sala = await this.hall.create({
      data: {
        name: data.name,
        capacity: {
          createMany: {
            data: seats,
          },
        },
      },
    });
    return 'Hall Created';
  };
}

export default HallService;
