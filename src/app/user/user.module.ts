import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserDialogService } from "./user-dialog.service";
import { UserForm } from "./user-form";
import { UserList } from "./user-list";
import { UserService } from "./user.service";

const routes: Routes = [
    {
        path: '',
        component: UserList
    }
];

@NgModule({
    imports: [ CommonModule, NgbModule, RouterModule.forChild( routes ), FormsModule, HttpClientModule ],
    declarations: [ UserList, UserForm ],
    providers: [ UserDialogService, UserService ]
})
export class UserModule {}