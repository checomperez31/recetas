import { Component, Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { RoleService } from "./role.service";
import { RoleForm } from "./role-form.component";
import { RoleModel } from "./role.model";
import { RoleDetails } from "./role-details.component";

@Injectable()
export class RoleDialogService {

    modal?: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private entityService: RoleService
    ) {}

    openForm(id?: string): Promise<NgbModalRef> {
        return new Promise( (resolve, reject) => {
            if ( id ) {
                this.entityService.findOne( id ).subscribe(res => {
                    this.modal = this.openFormDialog( res.body || new RoleModel() );
                    resolve( this.modal );
                });
            } else {
                this.modal = this.openFormDialog( new RoleModel() );
                resolve( this.modal );
            }
        } );
    }
    
    openDetails(id: string): Promise<NgbModalRef> {
        return new Promise( (resolve, reject) => {
            this.entityService.findOne( id ).subscribe(res => {
                if ( res.body ) {
                    this.modal = this.openDetailsDialog( res.body );
                    resolve( this.modal );
                } else {
                    reject('Error en la entidad');
                }
            }, err => reject(err));
        } );
    }

    private openFormDialog(role: RoleModel): NgbModalRef {
        const modal = this.modalService.open( RoleForm, { animation: true, centered: true, size: 'lg' } );
        modal.componentInstance.entity = role;
        modal.result.then(
            () => this.modal = undefined,
            () => this.modal = undefined
        );
        return modal;
    }

    private openDetailsDialog(role: RoleModel): NgbModalRef {
        const modal = this.modalService.open( RoleDetails, { animation: true, centered: true, size: 'lg' } );
        modal.componentInstance.entity = role;
        modal.result.then(
            () => this.modal = undefined,
            () => this.modal = undefined
        );
        return modal;
    }

}