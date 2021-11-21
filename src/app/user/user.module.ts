import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserDialogService } from "./user-dialog.service";
import { UserForm } from "./user-form";
import { UserList } from "./user-list";
import { UserService } from "./user.service";
import { UserDetailsComponent } from './user-details.component';

const routes: Routes = [
    {
        path: '',
        component: UserList
    }
];

@NgModule({
    imports: [ CommonModule, FormsModule, NgbModule, RouterModule.forChild( routes ), HttpClientModule ],
    declarations: [ UserList, UserForm, UserDetailsComponent ],
    providers: [ UserDialogService, UserService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserModule {}