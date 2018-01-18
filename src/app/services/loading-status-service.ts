import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs/Rx";


@Injectable()
export class LoadingStatusService{

    public statusCopy: object = {
        dataIsLoading: false,
        dataIsLoaded: false,
    };

    //private line:BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    private status: BehaviorSubject<object> = new BehaviorSubject({});

    getStatus(): Observable<object> {
        return this.status.asObservable();
    }

    getInitialSource(){
        return this.statusCopy;
    }

    updateStatus(newStatus:object):void{
        this.statusCopy = newStatus;
        this.status.next(this.statusCopy);
    }
}