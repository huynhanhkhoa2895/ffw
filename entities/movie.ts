export interface Movie {
    id: number;
    poster_path: string;
    overview: string;
    title: string;
    imdb_id?: string;
    genres?: MovieGenres[];
    release_date?: string;
    popularity?: number;
}
export interface MovieGenres {
    id: number;
    name: string;
}

export type MovieType = 'now_playing' | 'popular' | 'upcoming'
