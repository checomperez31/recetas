export class UserModel {
    constructor(
        public id?: string,
        public username?: string,
        public password?: string,
        public name?: string,
        public lastName?: string,
        public status?: string,
    ) {}
}