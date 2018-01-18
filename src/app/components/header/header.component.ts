import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import {Component, ViewChild } from "@angular/core";
import { LoadingStatusService} from "../../services/loading-status-service";

@Component ({
    selector: 'header-component',
    templateUrl: './header.html',
    styleUrls: ['header.component.css'],
    providers: []
})

export class HeaderComponent {
    @ViewChild('p') public popover: NgbPopover;

    loadingStatus: any;

    constructor(private loadingStatusService: LoadingStatusService){
        this.loadingStatus = this.loadingStatusService.getInitialSource();
    }

    ngOnInit()
    {
        this.loadingStatusService.getStatus().subscribe(status => {
            this.openPopover(status)
        });
    }

    openPopover(changesObj:any){
        if(changesObj && changesObj.dataIsLoaded === true){
            this.popover.open();
        }
    }
}