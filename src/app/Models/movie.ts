import {MovieRating} from './movie-rating';
export class Movie {
    public Title: string | undefined;
    public imdbID: string | undefined;
    public Poster: string | undefined;
    public Type: string | undefined;
    public Year: number | undefined;
    public Rated: string | undefined;
    public Released: Date | undefined;
    public Runtime: string | undefined;
    public Genre: string | undefined;
    public Director: string | undefined;
    public Writer: string | undefined;
    public Actors: string | undefined;
    public Plot: string | undefined;
    public Language: string | undefined;
    public Country: string | undefined;
    public Awards: string | undefined;
    public Metascore: string | undefined;
    public imdbRating: number | undefined;
    public imdbVotes: number | undefined;
    public DVD: string | undefined;
    public BoxOffice: string | undefined;
    public Production: string | undefined;
    public Website: string | undefined;
    public Response: boolean | undefined;
    public Ratings: Array<MovieRating> | undefined;
}
