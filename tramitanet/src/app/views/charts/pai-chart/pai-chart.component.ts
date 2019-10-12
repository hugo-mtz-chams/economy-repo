import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { PaiChart1, PaiChart2, PaiChart3, PaiChart4, PaiChart5, PaiChart6 } from 'src/app/shared/charts/barcharts'
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-pai-chart',
  templateUrl: './pai-chart.component.html',
  styleUrls: ['./pai-chart.component.scss']
})
export class PaiChartComponent implements OnInit {

  chartPaiOption1: EChartOption;
  chartPaiOption2: EChartOption;
  chartPaiOption3: EChartOption;
  chartPaiOption4: EChartOption;
  chartPaiOption5: EChartOption;
  chartPaiOption6: EChartOption;

  constructor() { }

  ngOnInit() {

    this.chartPaiOption1 = cloneDeep(PaiChart1);
    this.chartPaiOption1.color = ['#c13018', '#f36d12', '#ebcb37', '#a0b967', '#0d94bc', '#04a9f4'];
		this.chartPaiOption1.series[0].name = 'Sales by Country';
		this.chartPaiOption1.series[0].data = [
			{ value: 335, name: 'USA' },
			{ value: 310, name: 'CANADA' },
			{ value: 234, name: 'MEXICO' },
			{ value: 135, name: 'UK' },
			{ value: 148, name: 'AUSTRALIA' },
			{ value: 548, name: 'INDIA' }
    ];

    this.chartPaiOption2 = cloneDeep(PaiChart2);
    this.chartPaiOption3 = cloneDeep(PaiChart3);
    this.chartPaiOption4 = cloneDeep(PaiChart4);
    this.chartPaiOption5 = cloneDeep(PaiChart5);
    this.chartPaiOption6 = cloneDeep(PaiChart6);



  }

}
