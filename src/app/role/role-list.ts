import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MessageService } from "../utils/message.service";
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
        private entityDialogService: RoleDialogService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.load();
        this.subscribeToChanges();
    }

    openDialog(id?: string): void {
        this.entityDialogService.openForm(id);
    }

    load(): void {
        this.entityService.query().subscribe( this.successLoad.bind( this ) );
    }

    successLoad( res: HttpResponse<RoleModel[]> ): void {
        this.entities = res.body || [];
    }

    subscribeToChanges(): void {
        this.messageService.subscribe('roleListChange', this.load.bind( this ) );
    }
}