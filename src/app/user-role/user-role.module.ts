import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserRoleListComponent } from './user-role-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoleService } from './user-role.service';
import { UserService } from "../user/user.service";
import { RoleSelectorModule } from '../role/role-selector/role-selector.module';

const userRoleRoutes: Routes = [
    {
        path: ':id',
        component: UserRoleListComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild( userRoleRoutes ),
        NgbModule,
        HttpClientModule,
        RoleSelectorModule
    ],
    declarations: [ UserRoleListComponent ],
    providers: [ UserService, UserRoleService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserRoleModule {}