import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaArchivosRoutingModule } from './lista-archivos-routing.module';
import { ListaArchivosComponent } from './lista-archivos/lista-archivos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilePickerModule } from 'ngx-awesome-uploader';

@NgModule({
  imports: [
    CommonModule,
    ListaArchivosRoutingModule,
    NgxPaginationModule,
    NgxDatatableModule,
    FilePickerModule,

  ],
  declarations: [
    ListaArchivosComponent
  ]
})
export class ListaArchivosModule { }
