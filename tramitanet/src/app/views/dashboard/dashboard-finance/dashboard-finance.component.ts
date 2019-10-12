import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { EChartOption } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';
import { LineChart3 } from 'src/app/shared/charts/barcharts'
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-dashboard-finance',
  templateUrl: './dashboard-finance.component.html',
  styleUrls: ['./dashboard-finance.component.scss']
})
export class DashboardFinanceComponent implements OnInit {

  chartLineOptionD1: EChartOption;
	chartLineOptionD2: EChartOption;
	chartLineOptionD3: EChartOption;
	chartLineOptionD4: EChartOption;
	chartLineOptionD5: EChartOption;

	chartCampaignMatrics: EChartOption;

	lineChart1;
	chartLineSmall1: any;
	products$: any;

	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {

		this.chartLineOptionD1 = cloneDeep(LineChart3);
		this.chartLineOptionD1.series[0].lineStyle.normal.color = ['#F44336'];

		this.chartLineOptionD2 = cloneDeep(LineChart3);
		this.chartLineOptionD2.series[0].lineStyle.normal.color = ['#0065c4'];

		this.chartLineOptionD3 = cloneDeep(LineChart3);
		this.chartLineOptionD3.series[0].lineStyle.normal.color = ['#673ab7'];


		this.chartLineOptionD4 = cloneDeep(LineChart3);
		this.chartLineOptionD4.series[0].lineStyle.normal.color = ['#538c28'];

		this.chartCampaignMatrics = {
			...echartStyles.lineFullWidth, ...{
				tooltip: {
					trigger: 'axis',

					axisPointer: {
						animation: true
					}
				},
				grid: {
					left: '4%',
					top: '4%',
					right: '3%',
					bottom: '10%'
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct',
						'Nov', 'Dec'
					],
					axisLabel: {
						formatter: '{value}',
						color: '#666',
						fontSize: 12,
						fontStyle: 'normal',
						fontWeight: 400,

					},
					axisLine: {
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					},
					axisTick: {
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					},
					splitLine: {
						show: false,
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					}
				},
				yAxis: {
					type: 'value',
					min: 0,
					max: 200,
					interval: 50,
					axisLabel: {
						formatter: '{value}k',
						color: '#666',
						fontSize: 12,
						fontStyle: 'normal',
						fontWeight: 400,

					},
					axisLine: {
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					},
					axisTick: {
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					},
					splitLine: {
						lineStyle: {
							color: '#ddd',
							width: 1,
							opacity: 0.5
						}
					}
				},
				series: [
					{
						name: 'Visit',
						type: 'line',
						smooth: true,
						data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
							140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
							135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95],
						symbolSize: 8,
						showSymbol: false,
						lineStyle: {
							color: 'rgb(255, 87, 33)',
							opacity: 1,
							width: 1.5,
						},
						itemStyle: {
							show: false,
							color: '#ff5721',
							borderColor: '#ff5721',
							borderWidth: 1.5
						},
						areaStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0, color: 'rgba(255, 87, 33, 1)'
									}, {
										offset: 0.3, color: 'rgba(255, 87, 33, 0.7)'
									}, {
										offset: 1, color: 'rgba(255, 87, 33, 0)'
									}]
								}
							}
						}
					},
					{
						name: 'Sales',
						type: 'line',
						smooth: true,
						data: [50, 70, 65, 84, 75, 80, 70, 50, 70, 65,
							104, 75, 80, 70, 50, 70, 65, 94, 75, 80, 70, 50,
							70, 65, 86, 75, 80, 70, 50, 70],
						symbolSize: 8,
						showSymbol: false,
						lineStyle: {
							color: 'rgb(95, 107, 194)',
							opacity: 1,
							width: 1.5,
						},
						itemStyle: {
							color: '#5f6cc1',
							borderColor: '#5f6cc1',
							borderWidth: 1.5
						},
						areaStyle: {
							normal: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0, color: 'rgba(95, 107, 194, 1)'
									}, {
										offset: 0.5, color: 'rgba(95, 107, 194, 0.7)'
									}, {
										offset: 1, color: 'rgba(95, 107, 194, 0)'
									}]
								}
							}
						}
					},
				]

			}
		}

		this.chartLineSmall1 = {
			...echartStyles.defaultOptions, ...{
				grid: echartStyles.gridAlignLeft,
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90, 40],
					...echartStyles.smoothLine,
					lineStyle: {
						color: '#fff',
						...echartStyles.lineShadow
					},
					itemStyle: {
						color: '#fff'
					}
				}]
			}
		}
		this.lineChart1 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(102, 51, 153, .15)',
						origin: 'start'
					},
					lineStyle: {
						// width: 1,
						color: 'rgba(102, 51, 153, 0.68)',
					},
					itemStyle: {
						color: '#663399'
					}
				}, {
					data: [20, 80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(255, 152, 0, 0.15)',
						origin: 'start'
					},
					lineStyle: {
						// width: 1,
						color: 'rgba(255, 152, 0, .6)',
					},
					itemStyle: {
						color: 'rgba(255, 152, 0, 1)'
					}
				}]
			}
		}
		this.products$ = this.productService.getProducts();


	}

}
