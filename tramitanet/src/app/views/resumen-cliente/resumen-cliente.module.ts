import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumenClienteRoutingModule } from './resumen-cliente-routing.module';
import { ResumenClienteShowComponent } from './resumen-cliente-show/resumen-cliente-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxEchartsModule } from 'ngx-echarts';
//import { ResumenClienteEstadoCuentaShowComponent } from './resumen-cliente-estado-cuenta-show/resumen-cliente-estado-cuenta-show.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgbModule,
    SharedComponentsModule,
    NgxPaginationModule,
    NgxEchartsModule,
    NgxDatatableModule,
    ResumenClienteRoutingModule,
  ],
  declarations: [ResumenClienteShowComponent, 
    //ResumenClienteEstadoCuentaShowComponent
  ]
})
export class ResumenClienteModule { }
