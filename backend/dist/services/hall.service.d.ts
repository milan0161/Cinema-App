declare class HallService {
    hall: import(".prisma/client").Prisma.HallDelegate<import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
    crateHall: (data: {
        number: number;
        name: string;
    }) => Promise<string>;
}
export default HallService;
