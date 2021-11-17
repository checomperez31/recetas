import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { ActionModel } from '../action/action.model';

export class RoleActionModel {
    constructor(
        public id?: RoleActionPK,
        public action?: ActionModel
    ) {}
}

export class RoleActionPK {
    constructor(
        public roleId?: string,
        public actionId?: string
    ) {}
}

export class RoleActionModels {
    constructor(
        public entities?: RoleActionModel[]
    ) {}
}