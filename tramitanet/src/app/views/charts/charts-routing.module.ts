import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PaiChartComponent } from './pai-chart/pai-chart.component';
import { TimeriverChartComponent } from './timeriver-chart/timeriver-chart.component';
import { CandlestickComponent } from './candlestick/candlestick.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { TreemapComponent } from './treemap/treemap.component';
import { AreaChartComponent } from './area-chart/area-chart.component';

const routes: Routes = [
    {
        path: 'line',
        component: LineChartComponent
    },
    {
        path: 'area',
        component: AreaChartComponent
    },
    {
        path: 'bar',
        component: BarChartComponent
    },
    {
        path: 'pai',
        component: PaiChartComponent
    },
    {
        path: 'timeriver',
        component: TimeriverChartComponent
    },
    {
        path: 'candlestick',
        component: CandlestickComponent
    },
    {
        path: 'heatmap',
        component: HeatmapComponent
    },
    {
        path: 'treemap',
        component: TreemapComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule { }
