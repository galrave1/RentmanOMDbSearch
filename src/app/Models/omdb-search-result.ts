import { Movie } from './movie';

export class OmdbSearchResult {
    public Search: Array<Movie> | undefined;
    public totalResults: number | undefined;
    public Response: boolean = true;
}
