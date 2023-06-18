"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bad_request_1 = require("../errors/bad-request");
class HallService {
    hall = new client_1.PrismaClient().hall;
    crateHall = async (data) => {
        if (typeof data.number !== 'number') {
            throw new bad_request_1.BadRequestError('Number of seats must be number');
        }
        if (!data.number) {
            throw new bad_request_1.BadRequestError('You must provide number of setas');
        }
        if (data.number < 1) {
            throw new bad_request_1.BadRequestError('Number of seats must be a positive number');
        }
        if (!data.name.trim() && data.name.length < 1) {
            throw new bad_request_1.BadRequestError('You must provide Hall name');
        }
        let seats = [];
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
exports.default = HallService;
