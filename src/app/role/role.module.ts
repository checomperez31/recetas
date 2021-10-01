import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { RoleService } from "src/app/role/role.service";
import { RoleForm } from "src/app/role/role-form.component";
import { RoleDialogService } from "src/app/role/role-dialog.service";
import { RoleList } from "src/app/role/role-list.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RoleDetails } from "./role-details.component";

const roleRoutes: Routes = [
    {
        path: '',
        component: RoleList
    }
];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild( roleRoutes ), HttpClientModule, FormsModule, NgbModule ],
    declarations: [ RoleList, RoleForm, RoleDetails ],
    entryComponents: [ RoleForm, RoleDetails ],
    providers: [ RoleService, RoleDialogService ],
})
export class RoleModule {}