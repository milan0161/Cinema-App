"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const projetion_mapper_1 = require("../mappers/projection/projetion.mapper");
const not_found_1 = require("../errors/not-found");
const bad_request_1 = require("../errors/bad-request");
class ProjectionService {
    projection = new client_1.PrismaClient().projection;
    movies = new client_1.PrismaClient().movie;
    hall = new client_1.PrismaClient().hall;
    createProjection = async (data) => {
        const hall = await this.hall.findUnique({
            where: {
                name: data.hallName,
            },
            select: {
                id: true,
                projection: true,
            },
        });
        if (!hall) {
            throw new not_found_1.NotFoundError('Couldnt find Hall, please try again later');
        }
        const date = new Date(data.date);
        date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
        hall.projection.forEach((proj) => {
            if (proj.date.getTime() === date.getTime()) {
                throw new bad_request_1.BadRequestError('Projection at that time already exists! Please chose another time.');
            }
        });
        const projection = await this.projection.create({
            data: {
                date: date,
                movieId: data.movieId,
                hallId: hall.id,
            },
            select: {
                movie: true,
                id: true,
                date: true,
                hallId: true,
                movieId: true,
            },
        });
        const projectionDto = projetion_mapper_1.ProjectionMapper.toDto({
            movie: projection.movie,
            projection: projection,
        });
        return projectionDto;
    };
    getProjections = async (date) => {
        const count = await this.projection.count();
        if (count == 0) {
            throw new not_found_1.NotFoundError('No projections found');
        }
        const today = date || new Date().setHours(0, 0, 0, 0).toString();
        let tomorow = new Date(today);
        tomorow.setHours(tomorow.getHours() + 24);
        let yesterday = new Date(today);
        yesterday.setHours(yesterday.getHours() - 24);
        const projections = await this.movies.findMany({
            where: {
                projections: {
                    every: {
                        date: {
                            lt: tomorow,
                            gt: yesterday,
                        },
                    },
                },
            },
            include: {
                projections: true,
            },
        });
        let dtoProjections = [];
        if (!projections) {
            throw new not_found_1.NotFoundError('No projections found, please try again later');
        }
        for (let proj of projections) {
            dtoProjections.push(projetion_mapper_1.ProjectionMapper.toSingleProjDto({ movie: proj, date: proj.projections.map((date) => date.date) }));
        }
        return dtoProjections;
    };
}
exports.default = ProjectionService;
