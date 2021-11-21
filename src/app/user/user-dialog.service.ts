import { Injectable } from "@angular/core";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserForm } from './user-form';
import { UserModel } from './user.model';
import { UserService } from "./user.service";
import { UserDetailsComponent } from './user-details.component';

@Injectable()
export class UserDialogService {
    modal?: NgbModalRef;
    constructor(
        private modalService: NgbModal,
        private entityService: UserService
    ) {}

    openForm(id?: string): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            if ( this.modal ) resolve(this.modal);

            if ( id ) {
                this.entityService.queryOne( id ).subscribe(res => {
                    if ( res.body ) {
                        resolve( this.openFormRef( res.body ) );
                    } else {
                        reject( 'Entity err!' );
                    }
                }, err => reject( err ));
            } else {
                resolve( this.openFormRef( new UserModel() ) );
            }
        });
    }

    openDetails(id: string): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            if ( this.modal ) resolve(this.modal);

            this.entityService.queryOne( id ).subscribe(res => {
                if ( res.body ) {
                    resolve( this.openDetailsRef( res.body ) );
                } else {
                    reject( 'Entity err!' );
                }
            }, err => reject( err ));
        });
    }

    private openFormRef(entity: UserModel): NgbModalRef {
        const modal = this.modalService.open( UserForm, { animation: true, centered: true, size: 'lg' } );
        modal.componentInstance.entity = entity;
        modal.result.then(() => this.modal = undefined).catch(() => this.modal = undefined);
        this.modal = modal;
        return this.modal;
    }
    
    private openDetailsRef(entity: UserModel): NgbModalRef {
        const modal = this.modalService.open( UserDetailsComponent, { animation: true, centered: true, size: 'lg' } );
        modal.componentInstance.entity = entity;
        modal.result.then(() => this.modal = undefined).catch(() => this.modal = undefined);
        this.modal = modal;
        return this.modal;
    }
}