import { Injectable } from "@angular/core";
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionSelectorComponent } from "./action-selector.component";

@Injectable()
export class ActionSelectorDialogService {
    
    private modal?: NgbModalRef;

    constructor(
        private modalService: NgbModal
    ) {}

    openSelector(): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            if ( this.modal ) {
                resolve( this.modal );
            }
            resolve( this.selectorRef() );
        });
    }

    private selectorRef(): NgbModalRef {
        const modal = this.modalService.open(ActionSelectorComponent, {
            backdrop: 'static', animation: true, centered: true, size: 'lg'
        });
        modal.result.then(() => this.modal = undefined, () => this.modal = undefined);
        this.modal = modal;
        return modal;
    }
}