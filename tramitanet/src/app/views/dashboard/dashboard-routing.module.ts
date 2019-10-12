import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAnalyticsComponent } from './dashboard-analytics/dashboard-analytics.component';
import { DashboardSalesComponent } from './dashboard-sales/dashboard-sales.component';
import { DashboardCampaignComponent } from './dashboard-campaign/dashboard-campaign.component';
import { DashboardFinanceComponent } from './dashboard-finance/dashboard-finance.component';
import { DashboardStockComponent } from './dashboard-stock/dashboard-stock.component';
import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
import { DashboardEventComponent } from './dashboard-event/dashboard-event.component';
import { DashboardBonusComponent } from './dashboard-bonus/dashboard-bonus.component';

const routes: Routes = [
  {
    path: 'v1',
    component: DashboardAnalyticsComponent
  },
  {
    path: 'v2',
    component: DashboardSalesComponent
  },
  {
    path: 'v3',
    component: DashboardCampaignComponent
  },
  {
    path: 'v4',
    component: DashboardFinanceComponent
  },
  {
    path: 'v5',
    component: DashboardStockComponent
  },
  {
    path: 'v6',
    component: DashboardProductsComponent
  },
  {
    path: 'v7',
    component: DashboardEventComponent
  },
  {
    path: 'v8',
    component: DashboardBonusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
