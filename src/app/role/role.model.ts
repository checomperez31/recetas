export class RoleModel {
    constructor(
        public id?: string,
        public description?: string,
        public insertDate?: any,
        public status?: string,
        public updateDate?: any,
        public selected = false,
    ) {}
}