import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AceroComponent } from './acero/acero.component';

const routes: Routes = [
    {
        path: '',
        component: AceroComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ValidacionProformaRoutingModule { }
