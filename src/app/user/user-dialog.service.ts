import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UserForm } from "./user-form";

@Injectable()
export class UserDialogService {
    constructor(
        private modal: NgbModal
    ) {}

    open(): void {
        const modal = this.modal.open( UserForm, { animation: true, centered: true, size: 'lg' } );
    }
}