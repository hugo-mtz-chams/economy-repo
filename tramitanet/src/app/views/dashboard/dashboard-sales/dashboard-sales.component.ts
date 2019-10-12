import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';
import { BarChart1, BarChart2, PaiChart1 } from 'src/app/shared/charts/barcharts';
import { HeatMap } from 'src/app/shared/charts/barcharts'
import * as echarts from 'echarts';


@Component({
	selector: 'app-dashboard-sales',
	templateUrl: './dashboard-sales.component.html',
	styleUrls: ['./dashboard-sales.component.scss']
})
export class DashboardSalesComponent implements OnInit {

	chartOrders: EChartOption;
	chartSales: EChartOption;
	chartCost: EChartOption;
	chartProfit: EChartOption;

	chartLineOptionHeatMap: EChartOption;

	chartRevenueYearly: EChartOption;
	chartRevenueCountry: EChartOption;

	chartLineOption1: EChartOption;
	chartLineOption4: EChartOption;
	chartLineOption5: EChartOption;
	chartLineOption6: EChartOption;
	chartLineOption7: EChartOption;
	chartLineOption8: EChartOption;
	chartLineOption9: EChartOption;
	chartLineOption10: EChartOption;
	chartLineOption11: EChartOption;
	chartLineOption12: EChartOption;
	chartPie1: any;
	chartLineOption3: any;
	products$: any;

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {

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

		var week = ['1', '2', '3', '4',
			'5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
			'17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
		var days = ['Jan', 'Feb', 'March',
			'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

		var data = [

			[0, 0, 0], [1, 0, 4], [2, 0, 45], [3, 0, 120], [4, 0, 95], [5, 0, 110], [6, 0, 62], [7, 0, 55], [8, 0, 64], [9, 0, 57],
			[10, 0, 85], [11, 0, 90], [12, 0, 45], [13, 0, 120], [14, 0, 95], [15, 0, 110], [16, 0, 62], [17, 0, 55], [18, 0, 64], [19, 0, 57],
			[20, 0, 50], [21, 0, 74], [22, 0, 45], [23, 0, 120], [24, 0, 95], [25, 0, 110], [26, 0, 62], [27, 0, 55], [28, 0, 64], [29, 0, 57],
			[30, 0, 80],

			[0, 1, 0], [1, 1, 4], [2, 1, 45], [3, 1, 120], [4, 1, 95], [5, 1, 110], [6, 1, 62], [7, 1, 55], [8, 1, 64], [9, 1, 57],
			[10, 1, 85], [11, 1, 90], [12, 1, 45], [13, 1, 120], [14, 1, 95], [15, 1, 110], [16, 1, 62], [17, 1, 55], [18, 1, 64], [19, 1, 57],
			[20, 1, 50], [21, 1, 74], [22, 1, 45], [23, 1, 120], [24, 1, 95], [25, 1, 110], [26, 1, 62], [27, 1, 55], [28, 1, 64], [29, 1, 57],
			[30, 1, 80],

			[0, 2, 0], [1, 2, 4], [2, 2, 45], [3, 2, 121], [4, 2, 95], [5, 2, 110], [6, 2, 62], [7, 2, 55], [8, 2, 64], [9, 2, 57],
			[10, 2, 85], [11, 2, 90], [12, 2, 45], [13, 2, 121], [14, 2, 95], [15, 2, 110], [16, 2, 62], [17, 2, 55], [18, 2, 64], [19, 2, 57],
			[20, 2, 50], [21, 2, 74], [22, 2, 45], [23, 2, 121], [24, 2, 95], [25, 2, 110], [26, 2, 62], [27, 2, 55], [28, 2, 64], [29, 2, 57],
			[30, 2, 80],

		];



		this.chartLineOptionHeatMap = HeatMap;
		this.chartLineOptionHeatMap.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
		this.chartLineOptionHeatMap.visualMap.min = 0;
		this.chartLineOptionHeatMap.visualMap.max = 150;
		this.chartLineOptionHeatMap.xAxis.data = week;
		this.chartLineOptionHeatMap.yAxis.data = days;
		this.chartLineOptionHeatMap.series[0].name = 'Sales';
		this.chartLineOptionHeatMap.series[0].data = data;


		this.chartRevenueYearly = { ...BarChart2 };
		this.chartRevenueYearly.color = ['#f10075', '#eee'];
		this.chartRevenueYearly.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		this.chartRevenueYearly.series[0].name = 'Online';
		this.chartRevenueYearly.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
		this.chartRevenueYearly.series[0].color = '#c4dbf0';
		this.chartRevenueYearly.series[1].name = 'Offline';
		this.chartRevenueYearly.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
		this.chartRevenueYearly.series[1].color = '#2c80bf';


		this.chartRevenueCountry = { ...PaiChart1 };
		this.chartRevenueCountry.color = ['#c13018', '#f36d12', '#ebcb37', '#a0b967', '#0d94bc', '#04a9f4'];
		this.chartRevenueCountry.series[0].name = 'Sales by Country';
		this.chartRevenueCountry.series[0].data = [
			{ value: 335, name: 'USA' },
			{ value: 310, name: 'CANADA' },
			{ value: 234, name: 'MEXICO' },
			{ value: 135, name: 'UK' },
			{ value: 148, name: 'AUSTRALIA' },
			{ value: 548, name: 'INDIA' }
		];


		this.chartLineOption1 = {
			...echartStyles.lineFullWidth, ...{
				grid: {
					left: '0%',
					right: '0%',
					top: '7%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
						min: 0,
						max: 35,
						interval: 6,
						axisTick: {
							alignWithLabel: true
						},
						splitLine: {
							show: false,
							interval: 'auto'
						},
						axisLine: {
							show: false
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						boundaryGap: [0, '100%'],
						axisLabel: {
							formatter: '{value}k'
						},
						min: 0,
						max: 100,
						interval: 25,
						axisLine: {
							show: false
						},
						splitLine: {
							show: true,
							interval: 'auto'
						}
					}

				],
				series: [{
					name: 'Online',
					data: [35, 36, 38, 40, 42, 44, 46, 48, 50, 53, 20, 35, 35, 69, 25, 60, 50, 50, 30, 80, 70, 60, 20, 35, 35, 69, 22, 60, 50, 50, 30, 80, 70, 60, 20, 35, 60, 90],
					label: { show: false, color: '#0168c1' },
					type: 'line',
					smooth: true,
					symbol: 'none',
					color: 'rgba(1, 103, 193, 1)',
					itemStyle: {
						color: 'rgb(255, 70, 131)'
					},
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(1, 103, 193, 0.7)'
						}, {
							offset: 0.7,
							color: 'rgba(1, 103, 193, 0.1)'
						}])
					},
					markArea: {
						label: {
							show: true
						}
					},

					lineStyle: {
						color: 'rgba(1, 103, 193, 1)',
					}
				},
				{
					name: 'Offline',
					data: [45, 82, 35, 93, 71, 89, 49, 91, 80, 86, 35, 40],
					label: { show: false, color: '#0168c1' },
					type: 'line',
					smooth: true,
					symbol: 'none',
					color: '#0168c1',
					itemStyle: {
						color: 'rgb(255, 70, 131)'
					},
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(1, 103, 193, 0.5)'
						}, {
							offset: 0.5,
							color: 'rgba(1, 103, 193, 0.1)'
						}])
					},
					markArea: {
						label: {
							show: true
						}
					},

					lineStyle: {
						color: 'rgba(1, 103, 193, 1)',
					}
				}]
			}
		}

		this.chartPie1 = {
			...echartStyles.defaultOptions, ...{
				legend: {
					show: true,
					bottom: 0,
				},
				series: [{
					type: 'pie',
					...echartStyles.pieRing,

					label: echartStyles.pieLabelCenterHover,
					data: [{
						name: 'Completed',
						value: 80,
						itemStyle: {
							color: '#663399',
						}
					}, {
						name: 'Pending',
						value: 20,
						itemStyle: {
							color: '#ced4da',
						}
					}]
				}]
			}
		}

		this.chartLineOption3 = {
			...echartStyles.lineNoAxis, ...{
				series: [{
					data: [40, 80, 20, 90, 30, 80, 40],
					lineStyle: {
						color: 'rgba(102, 51, 153, .86)',
						width: 3,
						shadowColor: 'rgba(0, 0, 0, .2)',
						shadowOffsetX: -1,
						shadowOffsetY: 8,
						shadowBlur: 10
					},
					label: { show: true, color: '#212121' },
					type: 'line',
					smooth: true,
					itemStyle: {
						borderColor: 'rgba(69, 86, 172, 0.86)'
					}
				}]
			}
		}

		this.chartLineOption3.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

		this.products$ = this.productService.getProducts();


		this.chartLineOption4 = {
			...echartStyles.lineNoAxis, ...{
				color: ['rgba(1, 103, 193, 1.0)'],
				grid: {
					left: '-2%',
					right: '-2%',
					top: '7%',
					bottom: '0%',
					containLabel: false
				},
				xAxis: [
					{
						type: 'category',
						data: ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'],
						axisTick: {
							alignWithLabel: true
						},
						splitLine: {
							show: false
						},
						axisLine: {
							show: false
						}
					}
				],
				yAxis: [
					{
						axisLine: {
							show: false
						},
						splitLine: {
							show: false
						}
					}

				],

				series: [{
					data: [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630],
					label: { show: false, color: 'rgba(1, 103, 193, 1.0)' },
					type: 'line',
					barWidth: '70%',
					smooth: false,
					symbol: 'none',
					areaStyle: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(1, 103, 193, 0.9)'
						}, {
							offset: 0.7,
							color: 'rgba(1, 103, 193, 0.4)'
						}])
					}
				}]
			}
		}

		this.chartLineOption5 = {
			...echartStyles.lineNoAxis, ...{
				color: ['#017bff'],
				xAxis: [
					{
						type: 'category',
						data: ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'],
						axisTick: {
							alignWithLabel: true
						},
						splitLine: {
							show: false
						},
						axisLine: {
							show: false
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						axisLine: {
							show: false
						},
						splitLine: {
							show: false
						}
					}

				],

				series: [{
					name: 'Earnings',
					data: [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630],
					label: { show: false, color: '#0168c1' },
					type: 'bar',
					barWidth: '80%',
					smooth: true
				}]
			}
		}

		this.chartLineOption6 = {
			...echartStyles.lineNoAxis, ...{
				color: ['#eee'],
				xAxis: [
					{
						type: 'category',
						data: ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'],
						axisTick: {
							alignWithLabel: true
						},
						splitLine: {
							show: false
						},
						axisLine: {
							show: false
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						axisLine: {
							show: false
						},
						splitLine: {
							show: false
						}
					}

				],

				series: [{
					name: 'Earnings',
					data: [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630],
					label: { show: false, color: '#0168c1' },
					type: 'bar',
					barWidth: '80%',
					smooth: true
				}]
			}
		}

		this.chartLineOption7 = {
			...echartStyles.lineNoAxis, ...{
				// color: ['#f10075'],

				grid: {
					left: '0%',
					right: '0%',
					bottom: '0%',
					top: '1%',
					containLabel: false
				},
				xAxis: [
					{
						type: 'category',
						data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
						axisTick: {
							alignWithLabel: true
						},
						splitLine: {
							show: false
						},
						axisLine: {
							show: true
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						axisLabel: {
							formatter: '${value}'
						},
						min: 0,
						max: 100000,
						interval: 25000,
						axisLine: {
							show: false
						},
						splitLine: {
							show: true,
							interval: 'auto'
						}
					}

				],

				series: [{
					name: 'Online',
					data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005, 35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
					label: { show: false, color: '#0168c1' },
					type: 'bar',
					barGap: 0,
					barWidth: '40%',
					color: '#3f51b5',
					smooth: true
				},
				{
					name: 'Offline',
					data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050, 45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
					label: { show: false, color: '#0168c1' },
					type: 'bar',
					color: '#04a9f4',
					barWidth: '40%',
					smooth: true
				}

				]
			}
		}

		this.chartLineOption8 = {
			...echartStyles.lineNoAxis, ...{
				// color: ['#f10075'],
				legend: {
					borderRadius: 0,
					orient: 'horizontal',
					x: 'right',
					data: ['Online', 'Offline']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'category',
						data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
						axisTick: {
							alignWithLabel: true
						},
						splitLine: {
							show: false
						},
						axisLine: {
							show: true
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						axisLabel: {
							formatter: '${value}'
						},
						min: 0,
						max: 100000,
						interval: 25000,
						axisLine: {
							show: false
						},
						splitLine: {
							show: true,
							interval: 'auto'
						}
					}

				],

				series: [{
					name: 'Online',
					data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
					label: { show: false, color: '#0168c1' },
					type: 'bar',
					barGap: 0,
					// barWidth: '50%',
					color: '#9ac4e7',
					smooth: true
				},
				{
					name: 'Offline',
					data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
					label: { show: false, color: '#0168c1' },
					type: 'bar',
					color: '#0168c1',
					// barWidth: '50%',
					smooth: true
				}

				]
			}
		}

		this.chartLineOption9 = {
			...echartStyles.lineNoAxis, ...{

				series: [{
					color: ['#2F5DB3', '#00102D', '#001D54', '#0A2E72', '#A4C2F9', '#ddd'],
					name: '',
					type: 'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					hoverAnimation: false,
					hoverOffset: 0,
					label: {
						normal: {
							show: true,
							position: 'left',
							textStyle: {
								fontSize: '15',
								fontWeight: 'regular'
							}
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '15',
								fontWeight: 'regular'
							}
						}
					},
					labelLine: {
						normal: {
							show: true
						}
					},
					data: [
						{ value: 335, name: 'Organic' },
						{ value: 310, name: 'Email' },
						{ value: 234, name: 'Referral' },
						{ value: 135, name: 'Social' },
						{ value: 1548, name: 'Others' }
					]
				}

				]
			}
		}

		this.chartLineOption10 = {
			...echartStyles.lineNoAxis, ...{

				series: [{
					type: 'tree',

					name: 'tree1',

					data: [
						{
							"name": "",
							"children": [
								{
									"name": "Direct",
									"value": 1250,

								},
								{
									"name": "Google",

								},
								{
									"name": "Facebook",


								},
								{
									"name": "Thubler",

								},
								{
									"name": "Others",

								}
							]
						}
					],

					top: '2%',
					left: '0%',
					bottom: '2%',
					right: '30%',

					symbolSize: 7,
					orient: 'LR',

					label: {
						normal: {
							position: 'left',
							verticalAlign: 'middle',
							align: 'right'
						}
					},

					lineStyle: {
						color: '#aaa',
						width: 1.5,
						curveness: 0.5
					},

					leaves: {
						color: '#eee',
						label: {
							fontSize: 15,
							normal: {
								position: 'right',
								verticalAlign: 'middle',
								align: 'left'
							}
						}
					},

					expandAndCollapse: true,

					animationDuration: 550,
					animationDurationUpdate: 750

				}

				]
			}
		}

		this.chartLineOption11 = {
			...echartStyles.lineNoAxis, ...{

				series: [{
					type: 'tree',

					name: 'tree1',

					data: [
						{
							"name": "Earl Gray",
							"children": [
								{
									"name": "Direct",
									"value": "12.50%",

								},
								{
									"name": "Google",

								},
								{
									"name": "Facebook",


								},
								{
									"name": "Thubler",

								},
								{
									"name": "Others",

								}
							]
						}
					],

					top: '2%',
					left: '30%',
					bottom: '2%',
					right: '0%',

					symbolSize: 7,
					orient: 'RL',

					label: {
						position: 'right',
						verticalAlign: 'middle',
						align: 'left'
					},

					lineStyle: {
						color: '#aaa',
						width: 1.5,
						curveness: 0.5
					},

					leaves: {
						color: '#eee',
						label: {
							position: 'left',
							verticalAlign: 'middle',
							align: 'right'
						}
					},

					expandAndCollapse: true,

					animationDuration: 550,
					animationDurationUpdate: 750

				}

				]
			}
		}

		this.chartLineOption12 = {
			...echartStyles.defaultOptions, ...{
				color: ['#2F5DB3', '#00102D', '#001D54', '#0A2E72', '#A4C2F9'],
				legend: {
					data: ['Forest', 'Steppe', 'Desert', 'Wetland']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [
					{
						type: 'category',
						data: ['Direct', 'Google', 'Facebook', 'Youtube', 'Others'],
						axisTick: {
							show: true
						},
						splitLine: {
							show: false
						},
						axisLine: {
							show: false
						},
						axisLabel: {
							show: true
						}
					}
				],
				yAxis: [
					{
						type: 'value',
						axisLine: {
							show: false
						},
						splitLine: {
							show: true
						}
					}

				],

				series: [{
					name: 'Trafic',
					data: [
						{
							name: 'Name',
							value: 200,
							itemStyle: {
								color: '#eee'
							}
						},
						{
							name: 'Name',
							value: 300,
							itemStyle: {
								color: '#fff'
							}
						},
						{
							name: 'Name',
							value: 400,
							itemStyle: {
								color: '#aaa'
							}
						},
						{
							name: 'Name',
							value: 500,
							itemStyle: {
								color: '#bbb'
							}
						},
						{
							name: 'Name',
							value: 600,
							itemStyle: {
								color: '#bbb'
							}
						}
					],
					label: {
						normal: {
							show: true,
							color: '#000',
							position: 'top'
						}
					},
					type: 'bar',
					barWidth: '80%',
					smooth: true
				}]
			}
		}

	}

}
