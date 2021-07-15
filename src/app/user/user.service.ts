import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, observeOn } from 'rxjs/operators';
import { UserModel } from './user.model';

@Injectable()
export class UserService {

    baseUrl = 'http://localhost:3000/api/user';

    constructor(
        private httpClient: HttpClient
    ) {}

    public post(entity: UserModel): Observable< HttpResponse< UserModel > > {
        return this.httpClient.post<UserModel>(this.baseUrl, entity, { observe: 'response' })
        .pipe( map( this.fromServer.bind( this ) ) );
    }

    public queryOne(id: string): Observable<HttpResponse<UserModel>> {
        return this.httpClient.get< UserModel >(`${this.baseUrl}/${id}`, { observe: 'response' })
        .pipe( map( this.fromServer.bind( this ) ) );
    }

    public query(): Observable< HttpResponse< UserModel[] > > {
        return this.httpClient.get< UserModel[] >(this.baseUrl, {observe: 'response'})
        .pipe( map( this.arrayFromServer.bind(this) ) );
    }

    arrayFromServer(res: HttpResponse<UserModel[]>): HttpResponse<UserModel[]> {
        let body: UserModel[] | null = null;
        if ( res.body ) {
            body = res.body.map( this.entityFromServer.bind( this ) );
        }
        return res.clone( {body} );
    }

    fromServer(res: HttpResponse<UserModel>): HttpResponse<UserModel> {
        let body: UserModel | null = null;
        if (res.body) {
            body = this.entityFromServer( res.body );
        }
        return res.clone( {body} );
    }

    entityFromServer(entity: any): UserModel {
        console.log( entity );
        const newEntity = Object.assign( new UserModel(), entity );
        if (entity._id) {
            newEntity.id = entity._id;
        }
        return newEntity;
    }
}