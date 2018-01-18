import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { LoadingStatusService} from "../../services/loading-status-service";
import { ItemsService } from "../../services/items-service";
import { Item } from "../../models/item";

@Component({
    selector: 'edit-data-app',
    templateUrl: './edit-data.component.html',
    styleUrls: ['edit-data.component.css'],
    providers: [ItemsService]
})
export class EditDataComponent {
    items: Item[];
    sortAsc: boolean = true;
    editMode: boolean = false;

    constructor(private dataService: ItemsService, private loadingStatusService: LoadingStatusService, private router: Router){
        //check if access is by direct link - then redirect: Proper way to do it is using route guards
        let status = this.loadingStatusService.getInitialSource();

        if(!status.hasOwnProperty('dataIsLoaded') && status['dataIsLoaded'] === true){
            this.router.navigate(['']);
        }

        this.dataService.sort(this.sortAsc);
        this.items = this.dataService.getData();
    }

    deleteItem(item: Item){
        this.dataService.removeItem(item);
    }

    sortAlpabetically(){
        this.sortAsc = !this.sortAsc;
        this.dataService.sort(this.sortAsc);
    }
}