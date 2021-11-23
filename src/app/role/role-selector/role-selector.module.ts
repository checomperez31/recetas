import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoleSelectorComponent } from './role-selector.component';
import { RoleService } from '../role.service';
import { RoleSelectorDialogService } from './role-selector-dialog.service';

@NgModule({
    imports:[ CommonModule, FormsModule ],
    declarations: [ RoleSelectorComponent ],
    providers: [ RoleService, RoleSelectorDialogService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RoleSelectorModule {}