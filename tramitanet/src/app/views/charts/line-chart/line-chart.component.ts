import { Component, OnInit } from '@angular/core';
import { LineChart1, LineChart2, LineChart3, LineChart4, LineChart5 } from 'src/app/shared/charts/barcharts';
import { EChartOption, registerMap, graphic, echart } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  LineChart1: EChartOption;
  LineChart2: EChartOption;
  LineChart3: EChartOption;
  LineChart4: EChartOption;


  LineChart13: EChartOption;
  LineChart14: EChartOption;

  chartOrders: EChartOption;

  chartSales: EChartOption;
  chartCost: EChartOption;
  chartProfit: EChartOption;

  constructor() { }

  ngOnInit() {

    this.LineChart1 = cloneDeep(LineChart1);
    this.LineChart1.color = ['#ff5721'];
    this.LineChart1.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
    this.LineChart1.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
    this.LineChart1.series[0].smooth = true;

    this.LineChart2 = cloneDeep(LineChart2);
    this.LineChart2.color = ['#5f6bc2'];
    this.LineChart2.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
    this.LineChart2.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
    this.LineChart2.series[0].smooth = true;

    this.LineChart3 = cloneDeep(LineChart1);
    this.LineChart3.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
    this.LineChart3.series[0].lineStyle.color = ['#4cae4f'];
    this.LineChart3.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.LineChart4 = cloneDeep(LineChart2);
    this.LineChart4.xAxis.data = ['1st Dec', '2nd Dec', '3rd Dec', '4th Dec', '5th Dec', '6th Dec', '7th Dec', '8th Dec', '9th Dec', '10th Dec', '11th Dec', '12th  Dec'];
    this.LineChart4.series[0].lineStyle.color = ['#04a9f4'];
    this.LineChart4.series[0].data = [820, 982, 701, 1034, 790, 1430, 1120, 1300, 790, 1430, 1120, 1300];
    this.LineChart4.series[1].lineStyle.color = ['#4cae4f'];
    this.LineChart4.series[1].data = [620, 882, 901, 934, 500, 830, 1220, 1100, 860, 1130, 1020, 1400];


    this.LineChart13 = cloneDeep(LineChart4);
    this.LineChart13.color = ['#5f6bc2'];
    this.LineChart13.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.LineChart13.series[0].data = [70, 65, 85, 75, 95, 86, 93];
    this.LineChart13.series[1].data = [80, 90, 75, 104, 75, 80, 70];
    this.LineChart13.series[2].data = [110, 95, 102, 90, 105, 95, 108];

    this.LineChart14 = cloneDeep(LineChart5);
    this.LineChart14.color = ['#5f6bc2'];
    this.LineChart14.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.LineChart14.series[0].data = [70, 65, 85, 75, 95, 86, 93];
    this.LineChart14.series[1].data = [80, 90, 75, 104, 75, 80, 70];
    this.LineChart14.series[2].data = [110, 95, 102, 90, 105, 95, 108];

  }

}
