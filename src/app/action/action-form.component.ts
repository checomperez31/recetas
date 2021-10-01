import { HttpResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { MessageService } from "../utils/message.service";
import { ActionModel } from "./action.model";
import { ActionService } from "./action.service";

@Component({
    templateUrl: './action-form.component.html'
})
export class ActionForm {

    entity?: ActionModel;
    saving = false;

    constructor(
        private activeModal: NgbActiveModal,
        private entityService: ActionService,
        private messageService: MessageService
    ) {}

    close(): void {
        this.activeModal.dismiss();
    }

    save(): void {
        if ( this.entity ) {
            this.saving = true;
            if ( this.entity.id ) {
                this.entityService.save( this.entity ).subscribe( this.successSave.bind( this ), () => this.saving = false );
            } else {
                this.entityService.update( this.entity ).subscribe( this.successSave.bind( this ), () => this.saving = false );
            }
        }
    }

    successSave(res: HttpResponse<ActionModel>): void {
        this.saving = false;
        this.messageService.emit('actionUpdate');
        this.activeModal.close();
    }
}