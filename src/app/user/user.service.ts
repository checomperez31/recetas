import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../utils/http-service';
import { UserModel } from './user.model';

@Injectable()
export class UserService extends HttpService<UserModel> {

    constructor(
        protected httpClient: HttpClient
    ) {
        super( httpClient, 'user' );
    }

    public cloneEntityFromServer(entity: any): UserModel {
        return Object.assign( new UserModel(), entity );
    }
}