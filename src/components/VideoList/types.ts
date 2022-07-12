export type movieType = {
    alternativeName: string | null
    description: string | null
    enName: string | null
    externalId: {
        _id: string | null,
        imdb: string | null
    }
    id: number
    logo: {
        _id: string | null,
        url: string | null
    }
    movieLength: number | null
    name: string | null
    names: {
        _id: string | null,
        name: string | null
    }[]
    poster: {
        _id: string | null,
        url: string | null,
        previewUrl: string | null
    }
    rating: {
        _id: string | null,
        kp: number | null,
        imdb: number | null,
        filmCritics: number | null,
        russianFilmCritics: number | null,
    }
    shortDescription: string | null
    type: string | null
    votes: {
        _id: string | null,
        kp: number | null,
        imdb: number | null,
        filmCritics: number | null,
        russianFilmCritics: number | null,
    }
    year: number
}