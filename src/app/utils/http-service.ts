import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { server_url } from '../app.constants';
export class HttpService<X> {

    baseUrl = server_url + '/api/';

    constructor(
        protected client: HttpClient,
        protected url: string
    ) {
        this.baseUrl = this.baseUrl + url;
    }

    public post(entity: X): Observable<HttpResponse<X>> {
        return this.client.post<X>(this.baseUrl, entity, { observe: 'response' })
        .pipe( map( this.entityFromServer.bind( this ) ) );
    }

    public queryOne(id: string): Observable<HttpResponse<X>> {
        return this.client.get< X >(`${this.baseUrl}/${id}`, { observe: 'response' })
        .pipe( map( this.entityFromServer.bind( this ) ) );
    }

    public query(): Observable< HttpResponse< X[] > > {
        return this.client.get< X[] >(this.baseUrl, {observe: 'response'})
        .pipe( map( this.arrayFromServer.bind(this) ) );
    }

    public delete(id: string): Observable<HttpResponse<any>> {
        return this.client.delete<any>(`${this.baseUrl}/${id}`, {observe: 'response'});
    }

    protected arrayFromServer(res: HttpResponse<X[]>): HttpResponse<X[]> {
        let body: X[] | null = null;
        if ( res.body ) body = res.body.map( this.cloneEntityFromServer.bind( this ) );
        return res.clone( {body} );
    }

    protected entityFromServer(res: HttpResponse<X>): HttpResponse<X> {
        let body: X | null = null;
        if (res.body) body = this.cloneEntityFromServer( res.body );
        return res.clone( {body} );
    }

    public cloneEntityFromServer(entity: any): X {
        return Object.assign( {}, entity );
    }
}