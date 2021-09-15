import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoleModel } from './role.model';

@Injectable()
export class RoleService {

    baseUrl = 'http://localhost:3000/api/role';

    constructor(
        private http: HttpClient
    ) {}

    public save( entity: RoleModel ): Observable<HttpResponse<RoleModel>> {
        return this.http.post<RoleModel>(this.baseUrl, entity, {observe: 'response'})
        .pipe( map( this.fromServer.bind( this ) ) );;
    }

    public update( entity: RoleModel ): Observable<HttpResponse<RoleModel>> {
        return this.http.put<RoleModel>(this.baseUrl, entity, {observe: 'response'})
        .pipe( map( this.fromServer.bind( this ) ) );;
    }

    public findOne( id: string ): Observable<HttpResponse<RoleModel>> {
        return this.http.get<RoleModel>( `${this.baseUrl}/${id}`, {observe: 'response'} )
        .pipe( map( this.fromServer.bind( this ) ) );
    }

    public query(): Observable<HttpResponse<RoleModel[]>> {
        return this.http.get<RoleModel[]>( this.baseUrl, { observe: 'response' } )
        .pipe( map( this.arrayFromServer.bind( this ) ) );
    }

    private arrayFromServer(res: HttpResponse<RoleModel[]>): HttpResponse<RoleModel[]> {
        let body: RoleModel[] | null = null;
        if ( res.body ) {
            body = res.body.map( this.entityFromServer.bind( this ) );
        }
        return res.clone( {body} );
    }

    private fromServer( res: HttpResponse<RoleModel> ): HttpResponse<RoleModel> {
        let body: RoleModel | null = null;
        if ( res.body ) {
            body = this.entityFromServer( res.body );
        }
        return res.clone( { body } );
    }

    private entityFromServer(entity: any): RoleModel {
        const newEntity = Object.assign( new RoleModel, entity );
        if ( entity._id ) {
            newEntity.id = entity._id;
        }
        return newEntity;
    }
}