import { Injectable } from "@angular/core";
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionSelectorComponent } from "./action-selector.component";
import { ActionModel } from '../action.model';

@Injectable()
export class ActionSelectorDialogService {
    
    private modal?: NgbModalRef;

    constructor(
        private modalService: NgbModal
    ) {}

    openSelector(selected?: ActionModel[]): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            if ( this.modal ) {
                resolve( this.modal );
            }
            resolve( this.selectorRef( selected ) );
        });
    }

    private selectorRef(selected?: ActionModel[]): NgbModalRef {
        const modal = this.modalService.open(ActionSelectorComponent, {
            backdrop: 'static', animation: true, centered: true, size: 'lg'
        });
        modal.componentInstance.entitiesSelected = selected;
        modal.result.then(() => this.modal = undefined, () => this.modal = undefined);
        this.modal = modal;
        return modal;
    }
}