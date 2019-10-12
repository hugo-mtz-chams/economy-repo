import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProformaCreateComponent } from './proforma-create/proforma-create.component';

const routes: Routes = [
  {
    path: '',
    component: ProformaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProformaRoutingModule { }
