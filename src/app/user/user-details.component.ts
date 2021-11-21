import { Component } from "@angular/core";
import { UserModel } from './user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-user-details',
    templateUrl: 'user-details.component.html'
})
export class UserDetailsComponent {
    entity?: UserModel;

    constructor(
        private activeModal: NgbActiveModal
    ) {}

    close(): void {
        this.activeModal.dismiss();
    }
}