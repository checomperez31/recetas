import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { MessageService } from "../utils/message.service";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Component({
    templateUrl: 'user-form.html'
})
export class UserForm {
    entity = new UserModel();

    constructor(
        private entityService: UserService,
        private activeModal: NgbActiveModal,
        private messageService: MessageService
    ) {}

    save(): void {
        this.entityService.create( this.entity ).subscribe(res => {
            this.messageService.emit('userUpdate');
            this.activeModal.close();
        }, error => {
            console.error( error );
        });
    }

    close(): void {
        this.activeModal.dismiss();
    }
}