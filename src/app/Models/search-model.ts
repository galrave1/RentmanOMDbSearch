import { environment } from 'src/environments/environment';
export class SearchModel {
    //http://www.omdbapi.com/ Api Key
    public apikey: string;
    //Type of result to return.
    public type: string;
    //Movie title to search for.
    public s: string | undefined;
    //Year of release.
    public y: string | undefined;
    //The data type to return.[json, xml]
    public r: string;
    //Page number to return.
    public page: number;
    //A valid IMDb ID
    public i: string | undefined;

    constructor(key?: string, type?: string, page?: number, dataType?: string) {
        this.apikey = key || environment.ApiKey;
        this.type = type || 'movie';
        this.page = page || 1;
        this.r = dataType || 'json';
    }
}