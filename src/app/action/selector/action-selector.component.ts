import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionModel } from '../action.model';
import { ActionService } from '../action.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-action-selector',
    templateUrl: 'action-selector.component.html'
})
export class ActionSelectorComponent implements OnInit {
    entities: ActionModel[] = [];
    entitiesSelected?: ActionModel[];
    canSave = false;
    constructor(
        private activeModal: NgbActiveModal,
        private entityService: ActionService
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

    successLoadEntity(res: HttpResponse<ActionModel[]>): void {
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