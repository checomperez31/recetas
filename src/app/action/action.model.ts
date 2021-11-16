export class ActionModel {
    constructor(
        public id?: string,
        public description?: string,
        public insertDate?: any,
        public status?: string,
        public selected = false,
    ) {}
}