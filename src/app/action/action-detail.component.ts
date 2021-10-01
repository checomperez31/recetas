import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ActionModel } from "./action.model";

@Component({
    selector: 'app-action-detail',
    templateUrl: 'action-detail.component.html'
})
export class ActionDetail {

    entity?: ActionModel;

    constructor(
        private activeModal: NgbActiveModal
    ) {}

    close(): void {
        this.activeModal.dismiss();
    }
}