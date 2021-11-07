import { Injectable } from "@angular/core";
import { HttpService } from "../utils/http-service";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RoleActionModel } from "./role-action.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class RoleActionService extends HttpService<RoleActionModel> {
    constructor(
        protected client: HttpClient
    ) {
        super( client, 'role-actions' );
    }

    public queryByRole(roleId: string): Observable< HttpResponse< RoleActionModel[] > > {
        return this.client.get< RoleActionModel[] >(`${this.baseUrl}/${roleId}`, {observe: 'response'})
        .pipe( map( this.arrayFromServer.bind(this) ) );
    }
}