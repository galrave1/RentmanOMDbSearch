export class Message {
    public blockMessage: string;
    public show: boolean;

    constructor(blockmessage?: string, show?: boolean) {
        this.blockMessage = blockmessage ?? 'Loading...';
        this.show = show ?? true;
    }
}
