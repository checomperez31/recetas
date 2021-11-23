import { HttpService } from '../utils/http-service';
import { UserRole, UserRoleModels } from './user-role.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRoleService extends HttpService<UserRole> {
    constructor(
        protected client: HttpClient
    ) {
        super( client, 'user-roles' );
    }

    public createList(entities: UserRoleModels): Observable<HttpResponse<UserRole>> {
        return this.client.post(`${this.baseUrl}/list`, entities, {observe: 'response'});
    }

    public queryByUser(userId: string): Observable<HttpResponse<UserRole[]>> {
        return this.client.get<UserRole[]>(`${this.baseUrl}/${userId}`, {observe: 'response'})
            .pipe( map( this.arrayFromServer.bind( this ) ) );
    }

    public deleteById(userId: string, roleId: string): Observable<HttpResponse<any>> {
        return this.client.delete<any>(`${this.baseUrl}/${userId}/${roleId}`);
    }
}