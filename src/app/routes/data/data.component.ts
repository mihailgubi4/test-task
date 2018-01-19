import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ItemsService } from "../../services/items-service";
import { LoadingStatusService} from "../../services/loading-status-service";
import { Item } from "../../models/item";

@Component({
    selector: 'data-app',
    templateUrl: './data.component.html',
    styleUrls: ['data.component.css'],
    providers: [ItemsService]
})
export class DataComponent {
    items: Item[];
    loadingStatus: any;
    showTable: boolean = false;

    constructor(private dataService: ItemsService, private loadingStatusService: LoadingStatusService, private router: Router){
        this.loadingStatus = this.loadingStatusService.getInitialSource();
    }

    startLoading():void {
        this.loadingStatus.dataIsLoading = true;
        this.updateStatus();
        this.items = this.dataService.generateRandomItems();
        this.showTable = true;

        //Increased timeout
        const delay = Math.floor(Math.random() * 100000) % 10000;

        console.log('Delay is: ' + delay);

        setTimeout(() => {
            this.loadingStatus.dataIsLoading = false;
            this.loadingStatus.dataIsLoaded = true;
            this.updateStatus();
        }, delay)
    }

    updateStatus(){
        this.loadingStatusService.updateStatus(this.loadingStatus);
    }

    startEditing():void {
        this.router.navigate(['edit']);
    }
}