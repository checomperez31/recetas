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