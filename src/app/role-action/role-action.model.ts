export class RoleActionModel {
    constructor(
        public id: RoleActionPK
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