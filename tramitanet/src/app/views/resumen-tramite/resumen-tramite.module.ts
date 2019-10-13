import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import {ResumenTramiteCreateComponent} from './resumen-tramite-create/resumen-tramite-create.component';
import {ResumenTramiteRoutingModule} from './resumen-tramite-routing.module';
import {SharedComponentsModule} from '../../shared/components/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        NgbModule,
        ResumenTramiteRoutingModule,
        SharedComponentsModule
    ],
    declarations: [ResumenTramiteCreateComponent]
})
export class ResumenTramiteModule { }
