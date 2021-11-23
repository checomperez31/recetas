import { RoleModel } from '../role/role.model';

export class UserRole {
    constructor(
        public id?: UserRolePK,
        public role?: RoleModel
    ) {}
}

export class UserRolePK {
    constructor(
        public userId?: string,
        public roleId?: string,
    ) {}
}

export class UserRoleModels {
    constructor(
        public entities?: UserRole[]
    ) {}
}