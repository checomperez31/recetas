import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ActionModel } from "./action.model";

@Injectable()
export class ActionService {

    baseUrl = 'http://localhost:3000/api/action';

    constructor(
        private http: HttpClient
    ) {}

    public save( entity: ActionModel ): Observable<HttpResponse<ActionModel>> {
        return this.http.post<ActionModel>(this.baseUrl, entity, {observe: 'response'})
        .pipe( map( this.convertEntityFromServer.bind( this ) ) );
    }
    
    public update( entity: ActionModel ): Observable<HttpResponse<ActionModel>> {
        return this.http.put<ActionModel>(this.baseUrl, entity, {observe: 'response'})
        .pipe( map( this.convertEntityFromServer.bind( this ) ) );
    }

    public findOne(id: string): Observable<HttpResponse<ActionModel>> {
        return this.http.get<ActionModel>(`${this.baseUrl}/${id}`, {observe: 'response'})
        .pipe( map( this.convertEntityFromServer.bind(this) ) );
    }

    public query(): Observable<HttpResponse<ActionModel[]>> {
        return this.http.get<ActionModel[]>(this.baseUrl, {observe: 'response'})
        .pipe( map( this.convertArrayFromServer.bind(this) ) );
    }

    convertArrayFromServer(res: HttpResponse<ActionModel[]>): HttpResponse<ActionModel[]> {
        let body: ActionModel[] | null = null;
        if (res.body) body = res.body.map( this.cloneEntityFromServer.bind(this) );
        return res.clone( { body } );
    }

    convertEntityFromServer(res: HttpResponse<ActionModel>): HttpResponse<ActionModel> {
        let body: ActionModel | null = null;
        if (res.body) body = this.cloneEntityFromServer( res.body );
        return res.clone( { body } );
    }

    cloneEntityFromServer(entity: any): ActionModel {
        const copy: ActionModel = Object.assign( new ActionModel(), entity );
        if (entity._id) {
            copy.id = entity._id;
        }
        return copy;
    }
}