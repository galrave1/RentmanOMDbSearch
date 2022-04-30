export class SearchModel {
    //http://www.omdbapi.com/ Api Key
    public apikey: string;
    //Type of result to return.
    public type: string = 'movie';
    //Movie title to search for.
    public t: string | undefined;
    //Year of release.
    public y: string | undefined;
    //The data type to return.[json, xml]
    public r: string;
    //Page number to return.
    public page: number;

    constructor(key?: string, type?: string, page?: number, dataType?: string) {
        this.apikey = key || '6fae4cb1';
        this.type = type || 'movie';
        this.page = page || 1;
        this.r = dataType || 'json';
    }
}