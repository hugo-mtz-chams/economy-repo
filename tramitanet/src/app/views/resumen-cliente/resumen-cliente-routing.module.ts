import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumenClienteShowComponent } from './resumen-cliente-show/resumen-cliente-show.component';
import {ResumenClienteEstadoCuentaShowComponent} from './resumen-cliente-estado-cuenta-show/resumen-cliente-estado-cuenta-show.component'

const routes: Routes = [
  {
      path: '', component: ResumenClienteShowComponent,
  },
  {
      path: 'mi-estado-cuenta', component: ResumenClienteEstadoCuentaShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumenClienteRoutingModule { }
