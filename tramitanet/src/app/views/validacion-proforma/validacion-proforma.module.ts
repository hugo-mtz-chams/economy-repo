import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceroComponent } from './acero/acero.component';
import { ValidacionProformaRoutingModule } from './validacion-proforma-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilePickerModule } from 'ngx-awesome-uploader';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NgbModule,
    FilePickerModule,
    NgxPaginationModule,
    NgxDatatableModule,
    ValidacionProformaRoutingModule
  ],
  declarations: [AceroComponent]
})
export class ValidacionProformaModule { }
