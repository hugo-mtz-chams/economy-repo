import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import {ResumenTramiteCreateComponent} from './resumen-tramite-create/resumen-tramite-create.component';
import {ResumenTramiteRoutingModule} from './resumen-tramite-routing.module';
import {SharedComponentsModule} from '../../shared/components/shared-components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        NgbModule,
        ResumenTramiteRoutingModule,
        SharedComponentsModule,
        NgxPaginationModule,
        NgxDatatableModule
    ],
    declarations: [ResumenTramiteCreateComponent]
})
export class ResumenTramiteModule { }
