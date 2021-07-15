import { Component, OnInit } from "@angular/core";
import { UserDialogService } from "./user-dialog.service";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Component({
    templateUrl: './user-list.html'
})
export class UserList implements OnInit {

    entities: UserModel[] = [];

    constructor(
        private entityDialogService: UserDialogService,
        private entityService: UserService
    ) {}

    ngOnInit(): void {
        this.loadData();
    }

    loadData(): void {
        this.entityService.query().subscribe( res => {
            this.entities = res.body || [];
        } );
    }

    openDialog(): void {
        this.entityDialogService.open();
    }

    abrirUsuario(id?: string): void {
        if ( id ) this.entityService.queryOne(id).subscribe();
    }
}