import {Movie} from './movie';

export class OmdbSearchResult {
    public Search:Array<Movie>;
    public totalResults:number;
    public Response:string;
    public Error:string;

    constructor(response?:string, totalResults?:number, movies?:Array<Movie>, error?:string){
        this.Response = response ?? 'false';
        this.totalResults = totalResults?? 0;
        this.Search = movies??new Array<Movie>();
        this.Error = error?? '';
    }
}
