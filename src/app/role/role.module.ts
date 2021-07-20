import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoleList } from "./role-list";
import { RoleService } from "./role.service";

const roleRoutes: Routes = [
    {
        path: '',
        component: RoleList
    }
];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild( roleRoutes ), HttpClientModule ],
    declarations: [ RoleList ],
    providers: [ RoleService ],
})
export class RoleModule {}