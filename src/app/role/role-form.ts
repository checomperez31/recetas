import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleModel } from "./role.model";
import { RoleService } from "./role.service";

@Component({
    templateUrl: './role-form-template.html'
})
export class RoleForm {
    entity?: RoleModel;
    saving = false;

    constructor(
        public entityService: RoleService,
        private activeModal: NgbActiveModal
    ) {}

    close(): void {
        this.activeModal.dismiss();
    }

    save(): void {
        if (this.entity) {
            this.saving = true;
            // this.entityService.save( this.entity ).subscribe( this.successSave.bind( this ), () => this.saving = false );
        }
    }

    successSave(): void {
        this.close();
    }
}