import {Movie} from "@/entities/movie";

export interface MovieResponse {
    dates : {
        maximum: string;
        minimum: string;
    },
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
