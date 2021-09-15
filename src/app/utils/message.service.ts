import { Injectable } from "@angular/core";
import { Observable, Observer, Subscription } from "rxjs";
import { filter, share } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class MessageService {
    private observable: Observable<any>;
    private observer?: Observer<any>;

    constructor() {
        this.observable = new Observable(observer => {
            this.observer = observer;
        }).pipe(share());
    }

    emit(name: string): void {
        if ( this.observer ) {
            this.observer.next( name );
        }
    }

    subscribe(type: string | string[], callback: () => void): Subscription {
        if ( typeof type === 'string' ) {
            type = [type];
        }
        return this.observable.pipe( filter( name => type.includes( name ) ) )
        .subscribe( callback );
    }
}