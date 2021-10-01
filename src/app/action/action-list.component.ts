import { HttpResponse } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { MessageService } from "../utils/message.service";
import { ActionDialogService } from "./action-dialog.service";
import { ActionModel } from "./action.model";
import { ActionService } from "./action.service";

@Component({
    templateUrl: './action-list.component.html'
})
export class ActionList implements OnInit, OnDestroy {

    entities: ActionModel[] = [];
    changeSubscription?: Subscription;

    constructor(
        private entityDialogService: ActionDialogService,
        private messageService: MessageService,
        private entityService: ActionService
    ) {}

    ngOnInit(): void {
        this.load();
        this.subscribeToChanges();
    }

    ngOnDestroy(): void {
        if ( this.changeSubscription ) this.changeSubscription.unsubscribe();
    }

    openDialog(id?: string): void {
        this.entityDialogService.openForm(id);
    }

    openDetails(id?: string): void {
        if ( id ) this.entityDialogService.openDetails(id);
    }

    subscribeToChanges(): void {
        this.changeSubscription = this.messageService.subscribe( 'actionUpdate', this.load.bind( this ) );
    }

    load(): void {
        this.entityService.query().subscribe( this.successLoad.bind( this ) );
    }

    successLoad(res: HttpResponse<ActionModel[]>): void {
        this.entities = res.body || [];
    }

    deactivateEntity(id?: string): void {
        if ( id ) this.entityService.delete( id ).subscribe( this.load.bind( this ) );
    }
}