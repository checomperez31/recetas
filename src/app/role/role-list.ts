import { Component } from "@angular/core";
import { RoleModel } from "./role.model";

@Component({
    templateUrl: './role-list.html'
})
export class RoleList {
    entities: RoleModel[] = [];

    constructor() {}

    openDialog(): void {}

    openDetails(id?: string): void {}
}