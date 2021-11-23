import { Component, OnInit } from '@angular/core';
import { RoleModel } from '../role.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from '../role.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-role-selector',
    templateUrl: 'role-selector.component.html'
})
export class RoleSelectorComponent implements OnInit {
    entities: RoleModel[] = [];
    entitiesSelected?: RoleModel[];
    canSave = false;

    constructor(
        private activeModal: NgbActiveModal,
        private entityService: RoleService
    ) {}

    ngOnInit(): void {
        this.loadEntities();
    }

    clear(): void {
        this.activeModal.dismiss();
    }

    loadEntities(): void {
        this.entityService.query().subscribe( this.successLoadEntity.bind( this ) );
    }

    successLoadEntity(res: HttpResponse<RoleModel[]>): void {
        this.entities = res.body || [];
        if ( this.entitiesSelected ) {
            this.entities = this.entities
                .filter( a => this.entitiesSelected!.findIndex( es => es.id === a.id) < 0 );
        }
    }

    valueChange(): void {
        this.canSave = this.entities.filter(e => e.selected).length > 0;
    }

    save(): void {
        this.activeModal.close( this.entities.filter(e => e.selected) );
    }
}