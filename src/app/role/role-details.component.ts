import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RoleModel } from "./role.model";

@Component({
    selector: 'app-role-details',
    templateUrl: 'role-details.component.html'
})
export class RoleDetails {
    entity?: RoleModel;

    constructor(
        private activeModal: NgbActiveModal
    ) {}

    close(): void {
        this.activeModal.close();
    }
}