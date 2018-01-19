import {Item} from './../models/item';

export class ItemsService{

    private data: Item[] = [
        { name: "Item15", dateCreated: '12.12.2017'},
        { name: "Another item", dateCreated: '01.10.2018'},
        { name: "Product", dateCreated: '21.02.2018'},
        { name: "Shoes", dateCreated: '10.07.2015' }
    ];

    getData(): Item[] {
        return this.data;
    }

    generateRandomItems():any{
        //From 1 to 10 items
        const count = Math.floor(Math.random() * 10) + 1
        let items = [];

        for(let i = 0; i < count; i++){
            items.push({
                name: 'Headline ' + i,
                title: 'Type something ' + String.fromCharCode(97 + i).toUpperCase()
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