import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumenTramiteCreateComponent} from './resumen-tramite-create/resumen-tramite-create.component';

const routes: Routes = [
    {
        path: '',
        component: ResumenTramiteCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResumenTramiteRoutingModule { }
