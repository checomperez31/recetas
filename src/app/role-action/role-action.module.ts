import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoleActionList } from './role-action-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoleService } from '../role/role.service';
import { RoleActionService } from './role-actions.service';
import { ActionSelectorModule } from '../action/selector/action-selector.module';

const roleActionRoutes: Routes = [
    {
        path: ':id',
        component: RoleActionList
    }
];

@NgModule({
    imports: [ 
        CommonModule,
        NgbModule,
        RouterModule.forChild( roleActionRoutes ),
        FormsModule,
        HttpClientModule,
        ActionSelectorModule
    ],
    declarations: [ RoleActionList ],
    entryComponents: [],
    providers: [ RoleService, RoleActionService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class RoleActionModule {}