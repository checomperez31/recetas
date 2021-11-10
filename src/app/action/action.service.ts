import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "../utils/http-service";
import { ActionModel } from "./action.model";

@Injectable()
export class ActionService extends HttpService<ActionModel> {

    constructor(
        protected client: HttpClient
    ) {
        super( client, 'action' );
    }

    public cloneEntityFromServer(entity: any): ActionModel {
        return Object.assign( new ActionModel(), entity );
    }
}