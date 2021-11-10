import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { ActionModel } from '../action/action.model';
import { RoleService } from '../role/role.service';
import { HttpResponse } from '@angular/common/http';
import { RoleModel } from '../role/role.model';
import { RoleActionService } from './role-actions.service';
import { ActionSelectorDialogService } from '../action/selector/action-selector-dialog.service';

@Component({
    selector: 'app-role-action-list',
    templateUrl: 'role-action-list.component.html'
})
export class RoleActionList implements OnDestroy {

    routeSubscription?: Subscription;
    role?: RoleModel;
    entities: ActionModel[] = [];

    constructor(
        private activeRoute: ActivatedRoute,
        private roleService: RoleService,
        private roleActionsService: RoleActionService,
        private selectorService: ActionSelectorDialogService
    ) {
        this.routeSubscription = this.activeRoute.params.subscribe(params => {
            if ( params.id ) this.loadEntity( params.id );
        });
    }

    ngOnDestroy(): void {
        if ( this.routeSubscription ) this.routeSubscription.unsubscribe();
    }

    loadEntity(id: string): void {
        this.roleService.findOne( id ).subscribe( this.succesLoadEntity.bind( this ) );
    }

    succesLoadEntity(res: HttpResponse<RoleModel>): void {
        if ( res.body ) {
            this.role = res.body;
            this.loadActions();
        }
    }

    loadActions() {
        if ( this.role && this.role.id ) {
            this.roleActionsService.queryByRole( this.role.id ).subscribe();
        }
    }

    openSelector(): void {
        this.selectorService.openSelector();
    }
}