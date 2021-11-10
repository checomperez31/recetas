import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionService } from '../action.service';
import { ActionSelectorComponent } from './action-selector.component';
import { ActionSelectorDialogService } from './action-selector-dialog.service';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ActionSelectorComponent ],
    entryComponents: [ ActionSelectorComponent ],
    providers: [ ActionService, ActionSelectorDialogService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ActionSelectorModule {}