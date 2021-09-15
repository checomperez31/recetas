import { Component, Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { RoleService } from "./role.service";
import { RoleForm } from "./role-form";
import { RoleModel } from "./role.model";

@Injectable()
export class RoleDialogService {

    constructor(
        private modalService: NgbModal,
        private entityService: RoleService
    ) {}

    openForm(id?: string): Promise<NgbModalRef> {
        return new Promise( (resolve, reject) => {
            if ( id ) {
                this.entityService.findOne( id ).subscribe(res => {
                    resolve( this.openFormDialog( res.body || new RoleModel() ) );
                });
            } else {
                resolve( this.openFormDialog( new RoleModel() ) );
            }
        } );
    }

    openFormDialog(role: RoleModel): NgbModalRef {
        const modal = this.modalService.open( RoleForm, { animation: true, centered: true, size: 'lg' } );
        modal.componentInstance.entity = role;
        return modal;
    }

}