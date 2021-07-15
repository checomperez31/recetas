import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Component({
    templateUrl: 'user-form.html'
})
export class UserForm {
    entity = new UserModel();

    constructor(
        private entityService: UserService,
        private activeModal: NgbActiveModal
    ) {}

    save(): void {
        this.entityService.post( this.entity ).subscribe(res => {
            this.activeModal.close();
        }, error => {
            console.error( error );
        });
    }

    close(): void {
        this.activeModal.dismiss();
    }
}