import { Component, OnInit } from '@angular/core';
import { EChartOption, registerMap } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';
import { BarChart1, BarChart2, BarChart3, BarChart4, BarChart5 } from 'src/app/shared/charts/barcharts'
import * as echarts from 'echarts';
import * as cloneDeep from 'lodash/cloneDeep';
import * as $ from 'jquery';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  chartBarOption1: EChartOption;
  chartBarOption2: EChartOption;
  chartBarOption3: EChartOption;
  chartBarOption4: EChartOption;
  chartBarOption5: EChartOption;

  constructor() { }

  ngOnInit() {

    this.chartBarOption1 = cloneDeep(BarChart1);
		this.chartBarOption1.color = ['#5f6bc2'];
		this.chartBarOption1.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
    this.chartBarOption1.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];

    this.chartBarOption2 = cloneDeep(BarChart2);
		this.chartBarOption2.color = ['#f10075', '#eee'];
		this.chartBarOption2.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		this.chartBarOption2.series[0].name = 'Online';
		this.chartBarOption2.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
		this.chartBarOption2.series[0].color = '#c4dbf0';
		this.chartBarOption2.series[1].name = 'Offline';
		this.chartBarOption2.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
		this.chartBarOption2.series[1].color = '#2c80bf';

    this.chartBarOption3 = cloneDeep(BarChart3);
    this.chartBarOption3.color = ['#6f42c1'];
		this.chartBarOption3.xAxis.data = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
		this.chartBarOption3.series[0].name = 'mettings';
    this.chartBarOption3.series[0].data = [15, 20, 25, 21, 27, 18, 14, 9, 18, 22, 30, 13, 15, 12, 25, 14, 12, 13, 11, 19, 13, 18, 19, 17];

    this.chartBarOption4 = cloneDeep(BarChart4);
    this.chartBarOption5 = cloneDeep(BarChart5);
		// this.chartBarOption2.color = ['#f10075', '#eee'];
		// this.chartBarOption2.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		// this.chartBarOption2.series[0].name = 'Online';
		// this.chartBarOption2.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
		// this.chartBarOption2.series[0].color = '#c4dbf0';
		// this.chartBarOption2.series[1].name = 'Offline';
		// this.chartBarOption2.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
		// this.chartBarOption2.series[1].color = '#2c80bf';

  }

}
