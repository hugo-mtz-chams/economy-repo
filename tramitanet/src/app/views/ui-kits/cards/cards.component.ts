import { Component, OnInit } from '@angular/core';
import { EChartOption, registerMap } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';

import { OptionHeatMap } from 'src/app/shared/charts/heatmap';
import { BarChart1, BarChart2, PaiChart1 } from 'src/app/shared/charts/barcharts';
import { BarChart3, LineChart1, LineChart3, DonutChart1 } from 'src/app/shared/charts/barcharts'

import * as echarts from 'echarts';
import * as cloneDeep from 'lodash/cloneDeep';
import * as $ from 'jquery';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  chartLineOptionD1: EChartOption;
	chartLineOption1: EChartOption;
	chartLineOption2: EChartOption;
	chartLineOption3: EChartOption;
	chartLineOption4: EChartOption;
	chartLineOption5: EChartOption;
	chartLineOption6: EChartOption;
	chartLineOption7: EChartOption;
	chartLineOption8: EChartOption;
	chartLineOption9: EChartOption;
	chartLineOption10: EChartOption;
	chartLineOptionHeatMap: EChartOption;
	StockIndexChart: EChartOption;

	products$;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();

  }

}
