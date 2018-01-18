export class Item{
    name: string;
    dateCreated: string;
    id: number;

    constructor(name: string, id: number, date: string) {
        this.name = name;
        this.id = id;
        this.dateCreated = date;
    }
}