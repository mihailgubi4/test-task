import {Item} from './../models/item';

export class ItemsService{

    private data: Item[] = [
        { name: "Item15", dateCreated: '12.12.2017', id: 15 },
        { name: "Another item", dateCreated: '01.10.2018', id: 2 },
        { name: "Product", dateCreated: '21.02.2018', id: 1 },
        { name: "Shoes", dateCreated: '10.07.2015', id: 7 }
    ];

    getData(): Item[] {
        return this.data;
    }

    generateRandomItems():any{
        const count = Math.floor(Math.random() * 100) % 10;
        let items = [];

        for(let i = 0; i < count; i++){
            items.push({
                name: 'Item name ' + i,
                title: 'Item title ' + i
            })
        }

        return items;
    }

    removeItem(item: Item):void {
        let index = this.data.indexOf(item);
        this.data.splice(index, 1);
    }

    sort(isSortAscending:boolean):void{
        this.data.sort((a, b) => {
            if (a.name > b.name) {
                return isSortAscending ? 1 : -1;
            }
            if (a.name < b.name) {
                return isSortAscending ? -1 : 1;
            }
            // a must be equal to b
            return 0;
        });
    }
}