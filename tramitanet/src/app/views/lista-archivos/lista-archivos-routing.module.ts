import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaArchivosComponent } from './lista-archivos/lista-archivos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaArchivosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaArchivosRoutingModule { }
