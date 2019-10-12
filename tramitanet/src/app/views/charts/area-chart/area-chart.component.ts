import { Component, OnInit } from '@angular/core';
import { EChartOption, registerMap } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';
import { AreaChart1, AreaChart2, AreaChart3, AreaChart4, AreaChart5 } from 'src/app/shared/charts/barcharts'
import * as echarts from 'echarts';
import * as cloneDeep from 'lodash/cloneDeep';
import * as $ from 'jquery';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  chartAreaOption1: EChartOption;
  chartAreaOption2: EChartOption;
  chartAreaOption3: EChartOption;
  chartAreaOption4: EChartOption;
  chartAreaOption5: EChartOption;

  constructor() { }

  ngOnInit() {

    this.chartAreaOption1 = cloneDeep(AreaChart1);
		// this.chartAreaOption1.xAxis.data = ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec', '10 Dec', '11 Dec', '12 Dec', '13 Dec', '14 Dec', '15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec'];
		// this.chartAreaOption1.series[0].lineStyle.color = ['#009588'];
		// this.chartAreaOption1.series[0].itemStyle.color = ['#009588'];
		// this.chartAreaOption1.series[0].areaStyle.color = ['#009588'];
    // this.chartAreaOption1.series[0].data = [3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 2, 1, 2, 3, 1, 2, 3, 2, 1, 2, 3, 1, 2, 4];

    this.chartAreaOption2 = cloneDeep(AreaChart2);
    this.chartAreaOption3 = cloneDeep(AreaChart3);
    this.chartAreaOption4 = cloneDeep(AreaChart4);

    this.chartAreaOption5 = cloneDeep(AreaChart5);
		this.chartAreaOption5.xAxis.data = ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec', '10 Dec', '11 Dec', '12 Dec', '13 Dec', '14 Dec', '15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec'];
		this.chartAreaOption5.series[0].lineStyle.color = ['#009588'];
		this.chartAreaOption5.series[0].itemStyle.color = ['#009588'];
		this.chartAreaOption5.series[0].areaStyle.color = ['#009588'];
		this.chartAreaOption5.series[0].data = [3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 2, 1, 2, 3, 1, 2, 3, 2, 1, 2, 3, 1, 2, 4];

  }

}
