import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoleList } from "./role-list";

const roleRoutes: Routes = [
    {
        path: '',
        component: RoleList
    }
];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild( roleRoutes ) ],
    declarations: [ RoleList ],
    providers: [],
})
export class RoleModule {}