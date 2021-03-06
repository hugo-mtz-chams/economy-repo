import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProformaRoutingModule } from './proforma-routing.module';
import { ProformaCreateComponent } from './proforma-create/proforma-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { ProformaAnalistaComponent } from './proforma-analista/proforma-analista.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgbModule,
    ProformaRoutingModule,
    FilePickerModule,
    NgxPaginationModule,
    NgxDatatableModule,
  ],
  declarations: [ProformaCreateComponent, ProformaAnalistaComponent]
})
export class ProformaModule { }
