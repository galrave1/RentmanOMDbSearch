export class Pager {
    currentPage: number = 1;
    maxPages: number = 0;
    totalItems: number = 0;
    pageSize: number = 6;

    constructor(currentPage?: number, totalItems?: number, pageSize?: number) {
        this.currentPage = currentPage ?? 1;
        this.totalItems = totalItems ?? 0;
        this.pageSize = pageSize ?? 6;
        this.maxPages = Math.floor(this.totalItems/ this.totalItems) + 1;
    }
}
