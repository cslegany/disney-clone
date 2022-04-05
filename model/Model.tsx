export interface MovieResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_name: string;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieVideo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

export interface MovieVideoResults {
    id: number;
    results: MovieVideo[];
}

export interface MovieGenre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguages {
    iso_3166_1: string;
    name: string;
    english_name: string;
}

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    first_air_date: string;
    genres: MovieGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    number_of_seasons: number;
    original_language: string;
    original_name: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    videos: MovieVideoResults;
    vote_average: number;
    vote_count: number;
}