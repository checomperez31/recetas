import { Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ActionDetail } from "./action-detail.component";
import { ActionForm } from "./action-form.component";
import { ActionModel } from "./action.model";
import { ActionService } from "./action.service";

@Injectable()
export class ActionDialogService {

    modal?: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private entityService: ActionService
    ) {}

    openForm(id?: string): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            if ( !this.modal ) {
                if ( id ) {
                    this.entityService.queryOne( id ).subscribe(res => {
                        this.modal = this.openFormRef( res.body || new ActionModel() );
                        resolve( this.modal );
                    }, err => {
                        return reject(err);
                    });
                } else {
                    this.modal = this.openFormRef( new ActionModel() );
                    resolve( this.modal );
                }
            }
        });
    }

    openDetails(id: string): Promise<NgbModalRef> {
        return new Promise((resolve, reject) => {
            if ( !this.modal ) {
                if ( id ) {
                    this.entityService.queryOne( id ).subscribe(res => {
                        this.modal = this.openDetailRef( res.body || new ActionModel() );
                        resolve( this.modal );
                    }, err => {
                        return reject(err);
                    });
                } else {
                    this.modal = this.openDetailRef( new ActionModel() );
                    resolve( this.modal );
                }
            }
        });
    }

    private openFormRef(entity: ActionModel): NgbModalRef {
        const modal = this.modalService.open(ActionForm, {
            size : 'lg', backdrop: 'static'
        });
        modal.componentInstance.entity = entity;
        modal.result.then(
            () => this.modal = undefined,
            () => this.modal = undefined
        );
        return modal;
    }

    private openDetailRef(entity: ActionModel): NgbModalRef {
        const modal = this.modalService.open(ActionDetail, {
            size: 'lg', backdrop: 'static'
        });
        modal.componentInstance.entity = entity;
        modal.result.then(() => this.modal = undefined, () => this.modal = undefined);
        return modal;
    }
}