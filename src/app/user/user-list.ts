import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserDialogService } from "./user-dialog.service";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";
import { Subscription } from 'rxjs';
import { MessageService } from '../utils/message.service';

@Component({
    templateUrl: './user-list.html'
})
export class UserList implements OnInit, OnDestroy {

    entities: UserModel[] = [];
    entityChangeSubscription?: Subscription;

    constructor(
        private entityDialogService: UserDialogService,
        private entityService: UserService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.loadData();
        this.subscribeToEntityUpdates();
    }

    ngOnDestroy(): void {
        if ( this.entityChangeSubscription ) this.entityChangeSubscription.unsubscribe();
    }

    loadData(): void {
        this.entityService.query().subscribe( res => {
            this.entities = res.body || [];
        } );
    }

    openDialog(id?: string): void {
        this.entityDialogService.openForm(id);
    }
    
    openDetails(id: string): void {
        if ( id ) this.entityDialogService.openDetails(id);
    }

    subscribeToEntityUpdates(): void {
        this.entityChangeSubscription = this.messageService.subscribe('userUpdate', this.loadData.bind( this ));
    }
}