import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGaurd } from './shared/services/auth.gaurd';
import { RoleGuard } from './shared/services/auth.role';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { RoleEnum } from './shared/enums/role.enum';
const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGaurd],
    redirectTo: 'dashboard/v1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: './views/sessions/sessions.module#SessionsModule'
      }
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'others',
        loadChildren: './views/others/others.module#OthersModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGaurd],
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'uikits',
        loadChildren: './views/ui-kits/ui-kits.module#UiKitsModule',
      },
      {
        path: 'ecommerce',
        loadChildren: './views/ecommerce/ecommerce.module#EcommerceModule',
      },
      {
        path: 'forms',
        loadChildren: './views/forms/forms.module#AppFormsModule',
      },
      {
        path: 'charts',
        loadChildren: './views/charts/charts.module#ChartsModule',
      },
      {
        path: 'inbox',
        loadChildren: './views/inbox/inbox.module#InboxModule',
      },
      {
        path: 'calendar',
        loadChildren: './views/calendar/calendar.module#CalendarAppModule',
      },
      {
        path: 'chat',
        loadChildren: './views/chat/chat.module#ChatModule',
      },
      {
        path: 'tables',
        loadChildren: './views/data-tables/data-tables.module#DataTablesModule',
      },
      {
        path: 'proforma',
        loadChildren: './views/proforma/proforma.module#ProformaModule',
      },
      {
        path: 'resumen-tramite',
        loadChildren: './views/resumen-tramite/resumen-tramite.module#ResumenTramiteModule',
      },
      {
        path: 'resumen-cliente',
        loadChildren: './views/resumen-cliente/resumen-cliente.module#ResumenClienteModule'
      },
      {
        path: 'validacion',
        loadChildren: './views/validacion-proforma/validacion-proforma.module#ValidacionProformaModule',
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'others/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
