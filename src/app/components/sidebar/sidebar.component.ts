import {Component } from "@angular/core";

@Component ({
    selector: 'sidebar-component',
    templateUrl: './sidebar.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent{
    private sub: any;
    constructor() {}

    showNavigation():boolean{
        return window.location.pathname === '/';
    }
}