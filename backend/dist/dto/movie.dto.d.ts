export interface MovieDtoInterface {
    title: string;
    genre: string;
    year: number;
    actors: string;
    director: string;
    description: string;
    image: string;
}
export declare class MovieDto implements MovieDtoInterface {
    title: string;
    genre: string;
    year: number;
    actors: string;
    director: string;
    description: string;
    image: string;
    id?: string;
}
