import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProformaCreateComponent } from './proforma-create/proforma-create.component';
import { ProformaAnalistaComponent } from './proforma-analista/proforma-analista.component';

const routes: Routes = [
  {
    path: '',
    component: ProformaAnalistaComponent
  },
  {
    path: 'create',
    component: ProformaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProformaRoutingModule { }
