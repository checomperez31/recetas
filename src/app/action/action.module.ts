import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ActionList } from "./action-list";
import { ActionService } from "./action.service";

const actionRoutes: Routes = [
    {
        path: '',
        component: ActionList
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(actionRoutes), HttpClientModule, NgbModule],
    declarations: [ ActionList ],
    providers: [ ActionService ],
})
export class ActionModule {}