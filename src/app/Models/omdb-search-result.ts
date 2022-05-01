import {Movie} from './movie';

export class OmdbSearchResult {
    public Search:Array<Movie> = new Array<Movie>();
    public totalResults:number | undefined;
    public Response:string | undefined;
}
