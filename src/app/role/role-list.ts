import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { RoleModel } from "./role.model";
import { RoleService } from "./role.service";

@Component({
    templateUrl: './role-list.html'
})
export class RoleList implements OnInit {
    entities: RoleModel[] = [];

    constructor(
        private entityService: RoleService
    ) {}

    ngOnInit(): void {
        this.load();
    }

    openDialog(): void {}

    openDetails(id?: string): void {}

    load(): void {
        this.entityService.query().subscribe( this.successLoad.bind( this ) );
    }

    successLoad( res: HttpResponse<RoleModel[]> ): void {
        this.entities = res.body || [];
    }
}