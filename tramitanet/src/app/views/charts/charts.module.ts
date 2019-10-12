import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsRoutingModule } from './charts-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PaiChartComponent } from './pai-chart/pai-chart.component';
import { TimeriverChartComponent } from './timeriver-chart/timeriver-chart.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { TreemapComponent } from './treemap/treemap.component';
import { CandlestickComponent } from './candlestick/candlestick.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { AreaChartComponent } from './area-chart/area-chart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    NgbModule,
    NgxEchartsModule,
    ChartsRoutingModule
  ],
  declarations: [LineChartComponent, BarChartComponent, PaiChartComponent, TimeriverChartComponent, HeatmapComponent, TreemapComponent, CandlestickComponent, AreaChartComponent],
  exports: [LineChartComponent]
})
export class ChartsModule { }
