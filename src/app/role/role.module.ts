import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { RoleService } from "src/app/role/role.service";
import { RoleForm } from "src/app/role/role-form";
import { RoleDialogService } from "src/app/role/role-dialog-service";
import { RoleList } from "src/app/role/role-list";

const roleRoutes: Routes = [
    {
        path: '',
        component: RoleList
    }
];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild( roleRoutes ), HttpClientModule, FormsModule ],
    declarations: [ RoleList, RoleForm ],
    providers: [ RoleService, RoleDialogService ],
})
export class RoleModule {}