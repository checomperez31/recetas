import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ActionDetail } from "./action-detail.component";
import { ActionDialogService } from "./action-dialog.service";
import { ActionForm } from "./action-form.component";
import { ActionList } from "./action-list.component";
import { ActionService } from "./action.service";

const actionRoutes: Routes = [
    {
        path: '',
        component: ActionList
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(actionRoutes), HttpClientModule, NgbModule, FormsModule],
    declarations: [ ActionList, ActionForm, ActionDetail ],
    providers: [ ActionService, ActionDialogService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ActionModule {}