import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { UserModel } from '../user/user.model';
import { UserService } from '../user/user.service';
import { UserRole, UserRolePK, UserRoleModels } from './user-role.model';
import { UserRoleService } from './user-role.service';
import { RoleSelectorDialogService } from '../role/role-selector/role-selector-dialog.service';
import { RoleModel } from '../role/role.model';

@Component({
    selector: 'jhi-user-role-list',
    templateUrl: 'user-role-list.component.html'
})
export class UserRoleListComponent implements OnDestroy {
    routeSubscription?: Subscription;
    user?: UserModel;
    entities: UserRole[] = [];
    constructor(
        private activeRoute: ActivatedRoute,
        private userService: UserService,
        private entityService: UserRoleService,
        private selectorService: RoleSelectorDialogService
    ) {
        this.routeSubscription = this.activeRoute.params.subscribe(params => {
            if ( params.id ) this.loadEntity( params.id );
        });
    }

    ngOnDestroy(): void {
        if ( this.routeSubscription ) this.routeSubscription.unsubscribe();
    }

    loadEntity(id: string): void {
        this.userService.queryOne( id ).subscribe( this.succesLoadEntity.bind( this ) );
    }

    succesLoadEntity(res: HttpResponse<UserModel>): void {
        if ( res.body ) {
            this.user = res.body;
            this.loadRoles();
        }
    }

    loadRoles(): void {
        if ( this.user && this.user.id ) {
            this.entityService.queryByUser( this.user.id ).subscribe( this.successLoadRoles.bind( this ) );
        }
    }

    successLoadRoles(res: HttpResponse<UserRole[]>): void {
        this.entities = res.body || [];
    }

    openSelector(): void {
        this.selectorService.openSelector(this.entities.map(e => e.role!)).then(instance => {
            instance.result.then((array: RoleModel[]) => {
                if ( array && array.length ) {
                    const entites = new UserRoleModels( array.map(r => new UserRole( new UserRolePK( this.user!.id, r.id ), r ) ) );
                    this.entityService.createList( entites ).subscribe( () => this.loadRoles() );
                }
            }).catch(() => {});
        }).catch(() => {});
    }

    delete(id: UserRolePK): void {
        if ( id.roleId && id.userId ) this.entityService.deleteById( id.userId, id.roleId ).subscribe( this.loadRoles.bind( this ) );
    }
}