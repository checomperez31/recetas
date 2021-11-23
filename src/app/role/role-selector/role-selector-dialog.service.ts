import { Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { RoleModel } from '../role.model';
import { RoleSelectorComponent } from './role-selector.component';

@Injectable()
export class RoleSelectorDialogService {
    private modal?: NgbModalRef;

    constructor(
        private modalService: NgbModal
    ) {}

    openSelector(selected?: RoleModel[]): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            if ( this.modal ) {
                resolve( this.modal );
            }
            resolve( this.selectorRef( selected ) );
        });
    }

    private selectorRef(selected?: RoleModel[]): NgbModalRef {
        const modal = this.modalService.open(RoleSelectorComponent, {
            backdrop: 'static', animation: true, centered: true, size: 'lg'
        });
        modal.componentInstance.entitiesSelected = selected;
        modal.result.then(() => this.modal = undefined, () => this.modal = undefined);
        this.modal = modal;
        return modal;
    }
}