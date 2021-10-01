import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { MessageService } from "../utils/message.service";
import { RoleModel } from "./role.model";
import { RoleService } from "./role.service";

@Component({
    selector: 'jhi-role-form-dialog',
    templateUrl: './role-form.component.html'
})
export class RoleForm {
    entity?: RoleModel;
    saving = false;

    constructor(
        public entityService: RoleService,
        private activeModal: NgbActiveModal,
        private messageService: MessageService
    ) {}

    close(): void {
        this.activeModal.dismiss();
    }

    save(): void {
        if (this.entity) {
            this.saving = true;
            if ( this.entity.id ) {
                this.entityService.update( this.entity ).subscribe( this.successSave.bind( this ), () => this.saving = false );
            } else {
                this.entityService.save( this.entity ).subscribe( this.successSave.bind( this ), () => this.saving = false );
            }
        }
    }

    successSave(): void {
        this.messageService.emit('roleListChange');
        this.close();
    }
}