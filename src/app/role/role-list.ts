import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { RoleDialogService } from "./role-dialog-service";
import { RoleModel } from "./role.model";
import { RoleService } from "./role.service";

@Component({
    templateUrl: './role-list.html'
})
export class RoleList implements OnInit {
    entities: RoleModel[] = [];

    constructor(
        private entityService: RoleService,
        private entityDialogService: RoleDialogService
    ) {}

    ngOnInit(): void {
        this.load();
    }

    openDialog(id?: string): void {
        if ( id ) this.entityDialogService.openForm2(id);
    }

    load(): void {
        this.entityService.query().subscribe( this.successLoad.bind( this ) );
    }

    successLoad( res: HttpResponse<RoleModel[]> ): void {
        this.entities = res.body || [];
    }
}