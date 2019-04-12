export interface ILap {
    id: number;
    formated?: string;
    start();
    stop();

    unixTime(): number;
    formatedTime?(): string;

}
