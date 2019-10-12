import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';
import { LineChart1, LineChart2, LineChart3, BarChart1 } from "../../../shared/charts/charts";
import * as cloneDeep from 'lodash/cloneDeep';
import * as echarts from 'echarts';


@Component({
	selector: 'app-card-metrics',
	templateUrl: './card-metrics.component.html',
	styleUrls: ['./card-metrics.component.scss']
})
export class CardMetricsComponent implements OnInit {
	chartLineOption1: EChartOption;
	chartLineOption2: EChartOption;
	chartLineOption3: EChartOption;
	chartLineOption4: EChartOption;

	chartOrders: EChartOption;
	chartSales: EChartOption;
	chartCost: EChartOption;
	chartProfit: EChartOption;

	chartLineOptionD1: EChartOption;
	chartLineOptionD2: EChartOption;
	chartLineOptionD3: EChartOption;
	chartLineOptionD4: EChartOption;

	chartLineOptionD5: EChartOption;
	chartLineOptionD6: EChartOption;
	chartLineOptionD7: EChartOption;
	chartLineOptionD8: EChartOption;

	chartStockOption1: EChartOption;
	chartStockOption2: EChartOption;
	chartStockOption3: EChartOption;
	chartStockOption4: EChartOption;

	chartLine1: EChartOption;
	chartLine2: EChartOption;
	chartLine3: EChartOption;
	chartLine4: EChartOption;
	chartPie1: EChartOption;
	chartPie2: EChartOption;
	chartBar1: EChartOption;

	constructor() {
		this.chartLine1 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#4CAF50',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#4CAF50'
					}
				}]
			}
		}
		this.chartLine2 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					data: [6, 4, 7, 4, 6, 4, 1],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#df0029',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#df0029'
					}
				}]
			}
		}
		this.chartLine3 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					data: [2, 2, 7, 4, 6, 4, 8],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#4CAF50',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#4CAF50'
					}
				}]
			}
		}
		this.chartLine4 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					data: [2, 2, 7, 4, 6, 4, 1],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#df0029',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#df0029'
					}
				}]
			}
		}

		this.chartPie1 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartStyles.pieLineStyle,
					data: [{
						name: 'Email Subscription',
						value: 80,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}, {
						name: 'Registration',
						value: 20,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#df0029',
						}
					}]
				}]
			}
		}
		this.chartPie2 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					type: 'pie',
					itemStyle: echartStyles.pieLineStyle,
					data: [{
						name: 'Running',
						value: 40,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#ff9800',
						}
					}, {
						name: 'Completed',
						value: 60,
						...echartStyles.pieLabelOff,
						itemStyle: {
							borderColor: '#4CAF50',
						}
					}]
				}]
			}
		}
		this.chartBar1 = {
			...echartStyles.defaultOptions, ...{
				series: [{
					type: 'bar',
					barWidth: 6,

					itemStyle: {
						color: '#ff9800',
						...echartStyles.lineShadow
					},
					data: [{
						name: 'Bar 1',
						value: 40
					}, {
						name: 'Bar 2',
						value: 60,
						itemStyle: {
							color: '#4CAF50'
						}
					}, {
						name: 'Bar 3',
						value: 80,
					}, {
						name: 'Bar 4',
						value: 70,
					}, {
						name: 'Bar 5',
						value: 60,
					}, {
						name: 'Bar 6',
						value: 70,
					}, {
						name: 'Bar 7',
						value: 80,
					}, {
						name: 'Bar 8',
						value: 40,
					}, {
						name: 'Bar 9',
						value: 70,
						itemStyle: {
							color: '#4CAF50'
						}
					}]
				}]
			}
		}

	}

	ngOnInit() {

		this.chartLineOption1 = cloneDeep(LineChart1);
		this.chartLineOption1.color = ['#ff5721'];
		this.chartLineOption1.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartLineOption1.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
		this.chartLineOption1.series[0].smooth = true;

		this.chartLineOption2 = cloneDeep(LineChart1);
		this.chartLineOption2.color = ['#5f6bc2'];
		this.chartLineOption2.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartLineOption2.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
		this.chartLineOption2.series[0].smooth = true;

		this.chartLineOption3 = cloneDeep(LineChart1);
		this.chartLineOption3.color = ['#00cbcc'];
		this.chartLineOption3.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartLineOption3.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
		this.chartLineOption3.series[0].smooth = true;

		this.chartLineOption4 = cloneDeep(LineChart1);
		this.chartLineOption4.color = ['#f10075'];
		this.chartLineOption4.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartLineOption4.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];
		this.chartLineOption4.series[0].smooth = true;

		this.chartOrders = { ...BarChart1 };
		this.chartOrders.color = ['#5f6bc2'];
		this.chartOrders.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartOrders.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];


		this.chartSales = { ...BarChart1 };
		this.chartSales.color = ['#ff5721'];
		this.chartSales.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartSales.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];

		this.chartCost = { ...BarChart1 };
		this.chartCost.color = ['#4cae4f'];
		this.chartCost.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartCost.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];

		this.chartProfit = { ...BarChart1 };
		this.chartProfit.color = ['#135bba'];
		this.chartProfit.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartProfit.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];

		this.chartLineOptionD1 = cloneDeep(LineChart1);
		this.chartLineOptionD1.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
			'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
			'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
		this.chartLineOptionD1.series[0].lineStyle.color = ['#5f6ac2'];
		this.chartLineOptionD1.series[0].data = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

		this.chartLineOptionD2 = cloneDeep(LineChart1);
		this.chartLineOptionD2.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
			'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
			'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
		this.chartLineOptionD2.series = [...LineChart1.series];
		this.chartLineOptionD2.series[0].lineStyle.color = ['#ff5721'];
		this.chartLineOptionD2.series[0].data = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

		this.chartLineOptionD3 = cloneDeep(LineChart1);
		this.chartLineOptionD3.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
			'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
			'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
		this.chartLineOptionD3.series[0].lineStyle.color = '#4cae4f';
		this.chartLineOptionD3.series[0].data = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

		this.chartLineOptionD4 = cloneDeep(LineChart1);
		this.chartLineOptionD4.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
			'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
			'1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
		this.chartLineOptionD4.series[0].lineStyle.color = '#04a9f4';
		this.chartLineOptionD4.series[0].data = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

		this.chartLineOptionD5 = cloneDeep(LineChart3);
		this.chartLineOptionD5.series[0].lineStyle.normal.color = ['#F44336'];

		this.chartLineOptionD6 = cloneDeep(LineChart3);
		this.chartLineOptionD6.series[0].lineStyle.normal.color = ['#0065c4'];

		this.chartLineOptionD7 = cloneDeep(LineChart3);
		this.chartLineOptionD7.series[0].lineStyle.normal.color = ['#673ab7'];


		this.chartLineOptionD8 = cloneDeep(LineChart3);
		this.chartLineOptionD8.series[0].lineStyle.normal.color = ['#538c28'];

		this.chartStockOption1 = {
			...echartStyles.lineFullWidth, ...{
				tooltip: {
					show: true,
					backgroundColor: 'rgba(0, 0, 0, .8)',
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						animation: true,
						lineStyle: {
							color: 'rgba(0,0,0,0.2)'
						}
					}
				},
				grid: {
					show: false,
					top: 0,
					right: '-8%',
					left: '-8%',
					bottom: 0
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
					splitLine: {
						show: false
					}
				},
				yAxis: {
					type: 'value',
					splitLine: {
						show: false
					}
				},
				series: [{

					data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
					type: 'line',
					smooth: true,
					lineStyle: {
						normal: {
							color: 'rgba(97, 97, 97, 1)',
							width: 1.5,
						}
					},
					itemStyle: {
						normal: {
							opacity: 0
						},
						emphasis: {
							opacity: 1,
							shadowBlur: 50,
							shadowColor: 'rgba(97, 97, 97, 1)'
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(97, 97, 97, 1)'
							}, {
								offset: 1,
								color: 'rgba(97, 97, 97, 0.0)'
							}
							])

						}
					}
				}]
			}
		}

		this.chartStockOption2 = {
			...echartStyles.lineFullWidth, ...{
				tooltip: {
					show: true,
					backgroundColor: 'rgba(0, 0, 0, .8)',
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						animation: true,
						lineStyle: {
							color: 'rgba(0,0,0,0.2)'
						}
					}
				},
				grid: {
					show: false,
					top: 0,
					right: '-8%',
					left: '-8%',
					bottom: 0
				},

				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
					splitLine: {
						show: false
					}
				},
				yAxis: {
					type: 'value',
					splitLine: {
						show: false
					}
				},
				series: [{

					data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
					type: 'line',
					smooth: true,
					lineStyle: {
						normal: {
							color: 'rgba(52, 168, 83, 1)',
							width: 1.5,
						}
					},
					itemStyle: {
						normal: {
							opacity: 0
						},
						emphasis: {
							opacity: 1,
							shadowBlur: 50,
							shadowColor: 'rgba(52, 168, 83, 1)'
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(52, 168, 83, 1)'
							}, {
								offset: 1,
								color: 'rgba(52, 168, 83, 0.0)'
							}
							])

						}
					}
				}]
			}
		}

		this.chartStockOption3 = {
			...echartStyles.lineNoAxis, ...{
				tooltip: {
					show: true,
					backgroundColor: 'rgba(0, 0, 0, .8)',
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						animation: true,
						lineStyle: {
							color: 'rgba(0,0,0,0.2)'
						}
					}
				},
				grid: {
					show: false,
					top: 0,
					right: '-8%',
					left: '-8%',
					bottom: 0
				},

				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
					splitLine: {
						show: false
					}
				},
				yAxis: {
					type: 'value',
					splitLine: {
						show: false
					}
				},
				series: [{

					data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
					type: 'line',
					smooth: true,
					lineStyle: {
						normal: {
							color: 'rgba(61, 89, 155, 1)',
							width: 1.5,
						}
					},
					itemStyle: {
						normal: {
							opacity: 0
						},
						emphasis: {
							opacity: 1,
							shadowBlur: 50,
							shadowColor: 'rgba(61, 89, 155, 1)'
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(61, 89, 155, 1)'
							}, {
								offset: 1,
								color: 'rgba(61, 89, 155, 0.0)'
							}
							])

						}
					}
				}]
			}
		}

		this.chartStockOption4 = {
			...echartStyles.lineNoAxis, ...{
				tooltip: {
					show: true,
					backgroundColor: 'rgba(0, 0, 0, .8)',
					trigger: 'axis',
					axisPointer: {
						type: 'line',
						animation: true,
						lineStyle: {
							color: 'rgba(0,0,0,0.2)'
						}
					}
				},
				grid: {
					show: false,
					top: 0,
					right: '-8%',
					left: '-8%',
					bottom: 0
				},

				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
					splitLine: {
						show: false
					}
				},
				yAxis: {
					type: 'value',
					splitLine: {
						show: false
					}
				},
				series: [{

					data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
					type: 'line',
					smooth: true,
					lineStyle: {
						normal: {
							color: 'rgba(243, 107, 18, 1)',
							width: 1.5,
						}
					},
					itemStyle: {
						normal: {
							opacity: 0
						},
						emphasis: {
							opacity: 1,
							shadowBlur: 50,
							shadowColor: 'rgba(243, 107, 18, 1)'
						}
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(243, 107, 18, 1)'
							}, {
								offset: 1,
								color: 'rgba(243, 107, 18, 0.0)'
							}
							])

						}
					}
				}]
			}
		}

	}

}
