import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumenClienteShowComponent } from './resumen-cliente-show/resumen-cliente-show.component';

const routes: Routes = [
  {
      path: '',
      component: ResumenClienteShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumenClienteRoutingModule { }
