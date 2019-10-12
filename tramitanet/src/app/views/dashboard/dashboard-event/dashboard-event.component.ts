import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';

import { BarChart1, BarChart2, PaiChart1 } from 'src/app/shared/charts/barcharts';

import * as echarts from 'echarts';


@Component({
	selector: 'app-dashboard-event',
	templateUrl: './dashboard-event.component.html',
	styleUrls: ['./dashboard-event.component.scss']
})
export class DashboardEventComponent implements OnInit {

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
	chartCampaignMatrics: EChartOption;
	chartDelivery: EChartOption;
	chartInterestGroup: EChartOption;

	products$;

	constructor(private productService: ProductService) { }

	ngOnInit() {

		this.products$ = this.productService.getProducts();

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
					data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
					axisLabel: {
						formatter: '{value}',
						color: '#666',
						fontSize: 12,
						fontStyle: 'normal',
						fontWeight: 400,

					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					},
					axisTick: {
						show: false,
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
					max: 150,
					interval: 50,
					axisLabel: {
						formatter: '{value}',
						color: '#666',
						fontSize: 12,
						fontStyle: 'normal',
						fontWeight: 400,

					},
					axisLine: {
						show: false,
						lineStyle: {
							color: '#ccc',
							width: 1
						}
					},
					axisTick: {
						show: false,
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
						name: 'This Year',
						type: 'line',
						smooth: true,
						data: [55, 80, 60, 125, 95, 110, 80, 60, 95, 120, 85, 67],
						symbolSize: 8,
						lineStyle: {
							color: 'rgb(255, 112, 14)',
							opacity: 1,
							width: 1,
						},
						itemStyle: {
							color: '#ff5721',
							borderColor: '#ff5721',
							borderWidth: 1.5,
							normal: {
								opacity: 0
							},
							emphasis: {
								opacity: 1,
								shadowColor: 'rgba(255, 112, 14, 1)',
								shadowBlur: 30,
							}
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
										offset: 0, color: 'rgba(255, 112, 14, 1)'
									}, {
										offset: 0.3, color: 'rgba(255, 112, 14, 0.7)'
									}, {
										offset: 1, color: 'rgba(255, 112, 14, 0)'
									}]
								}
							}
						}
					},
					{
						name: 'Last Year',
						type: 'line',
						showSymbol: false,
						smooth: true,
						data: [40, 45, 55, 35, 65, 20, 60, 20, 50, 40, 25, 10],
						symbolSize: 8,
						lineStyle: {
							show: true,
							color: 'rgb(73, 163, 77)',
							width: 1,
							opacity: 1,
						},
						itemStyle: {
							color: '#49a34d',
							borderColor: '#49a34d',
							borderWidth: 1.5,
							emphasis: {
								opacity: 1,
								shadowColor: 'rgba(73, 163, 77, 1)',
								shadowBlur: 20,
							}
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
										offset: 0, color: 'rgba(73, 163, 77, 1)'
									}, {
										offset: 0.5, color: 'rgba(73, 163, 77, 0.7)'
									}, {
										offset: 1, color: 'rgba(73, 163, 77, 0)'
									}]
								}
							}
						}
					}

				]

			}
		}

		this.chartDelivery = {
			color: ['#ff7110', '#7cb242', '#5c6ac0', '#fdb772'],
			tooltip: {
				show: false,
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},

			grid: {
				top: '10%',
				left: '3%',
				right: '4%',
				bottom: '2%',
				containLabel: true
			},
			xAxis: [
				{

					axisLine: {
						show: false
					},
					splitLine: {
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

			series: [
				{
					name: 'Sessions',
					type: 'pie',
					radius: ['55%', '85%'],
					center: ['50%', '50%'],
					avoidLabelOverlap: false,
					hoverOffset: 0,
					label: {
						normal: {
							show: false,
							position: 'center',
							textStyle: {
								fontSize: '13',
								fontWeight: 'bold'
							},
							formatter: "{a}",
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '15',
								fontWeight: 'bold',
								color: '#ff7110'
							},
							formatter: "{c} People\n{b}",
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [
						{ value: 335, name: 'Interested' },
						{ value: 110, name: 'Going' },
						{ value: 510, name: 'May Be' },
						{ value: 410, name: 'Not Going' },
					],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}

			]

		}

		this.chartInterestGroup = {
			...echartStyles.lineNoAxis, ...{
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
						shadowStyle: {
							opacity: 0
						}
					}
				},
				xAxis: {
					data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
					axisLabel: {
						inside: true,
						textStyle: {
							color: '#fff'
						}
					},
					axisTick: {
						show: false
					},
					axisLine: {
						show: false
					},
					z: 10
				},
				yAxis: {
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						textStyle: {
							color: '#999'
						}
					},
					splitLine: {
						show: false
					}
				},
				dataZoom: [
					{
						type: 'inside'
					}
				],
				series: [
					{
						name: 'Interested',
						type: 'bar',
						itemStyle: {
							normal: { color: 'rgba(0,0,0,0.05)' }
						},
						barGap: '-100%',
						barCategoryGap: '40%',
						data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
						animation: false
					},
					{
						name: 'Going',
						type: 'bar',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[
										{ offset: 0, color: '#83bff6' },
										{ offset: 0.5, color: '#188df0' },
										{ offset: 1, color: '#188df0' }
									]
								)
							},
							emphasis: {
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1,
									[
										{ offset: 0, color: '#2378f7' },
										{ offset: 0.7, color: '#2378f7' },
										{ offset: 1, color: '#83bff6' }
									]
								)
							}
						},
						data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220, 220, 182, 191, 234, 290, 330, 310, 123, 442, 212]
					}
				]
			}
		}

		this.chartLineOption1 = {
			...echartStyles.lineFullWidth, ...{
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				series: [{
					data: [1, 1, 1, 50, 40, 1, 90, 1, 40, 20, 1, 1, 1, 90, 0, 40, 0, 50, 0],
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(102, 51, 153, .2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#663399',
					},
					itemStyle: {
						color: '#663399'
					},
					type: 'line'
				}]
			}
		}
		this.chartLineOption2 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 10, 40, 10, 40, 20, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(255, 193, 7, 0.2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#FFC107'
					},
					itemStyle: {
						color: '#FFC107'
					}
				}]
			}
		}

		this.chartLineOption3 = {
			...echartStyles.lineNoAxis, ...{
				series: [{
					data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
					lineStyle: {
						color: 'rgba(102, 51, 153, 0.86)',
						width: 3,
						...echartStyles.lineShadow
					},
					label: { show: true, color: '#212121' },
					type: 'line',
					smooth: true,
					itemStyle: {
						borderColor: 'rgba(102, 51, 153, 1)'
					}
				}]
			}
		}

		this.chartLineOption4 = { ...BarChart1 };
		this.chartLineOption4.color = ['#5f6bc2'];
		this.chartLineOption4.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartLineOption4.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];


		this.chartLineOption5 = { ...BarChart1 };
		this.chartLineOption5.color = ['#ff5721'];
		this.chartLineOption5.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartLineOption5.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];

		this.chartLineOption6 = { ...BarChart1 };
		this.chartLineOption6.color = ['#4cae4f'];
		this.chartLineOption6.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartLineOption6.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];

		this.chartLineOption7 = { ...BarChart1 };
		this.chartLineOption7.color = ['#135bba'];
		this.chartLineOption7.xAxis.data = ['1/11/2018', '2/11/2018', '3/11/2018', '4/11/2018', '5/11/2018', '6/11/2018', '7/11/2018', '8/11/2018', '9/11/2018', '10/11/2018', '11/11/2018', '12/11/2018', '13/11/2018', '14/11/2018', '15/11/2018', '16/11/2018', '17/11/2018', '18/11/2018', '19/11/2018', '20/11/2018', '21/11/2018', '22/11/2018', '23/11/2018', '24/11/2018', '25/11/2018', '26/11/2018', '27/11/2018', '28/11/2018', '29/11/2018', '30/11/2018'];
		this.chartLineOption7.series[0].data = [400, 800, 325, 900, 700, 800, 400, 900, 800, 800, 300, 405, 500, 1100, 900, 1450, 1200, 1350, 1200, 1400, 1000, 800, 950, 705, 690, 921, 1020, 903, 852, 630];

		this.chartLineOption8 = { ...BarChart2 };
		this.chartLineOption8.color = ['#f10075', '#eee'];
		this.chartLineOption8.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		this.chartLineOption8.series[0].name = 'Online';
		this.chartLineOption8.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
		this.chartLineOption8.series[0].color = '#c4dbf0';
		this.chartLineOption8.series[1].name = 'Offline';
		this.chartLineOption8.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
		this.chartLineOption8.series[1].color = '#2c80bf';


		this.chartLineOption9 = { ...PaiChart1 };
		this.chartLineOption9.color = ['#c13018', '#f36d12', '#ebcb37', '#a0b967', '#0d94bc', '#04a9f4'];
		this.chartLineOption9.series[0].name = 'Sales by Country';
		this.chartLineOption9.series[0].data = [
			{ value: 335, name: 'USA' },
			{ value: 310, name: 'CANADA' },
			{ value: 234, name: 'MEXICO' },
			{ value: 135, name: 'UK' },
			{ value: 148, name: 'AUSTRALIA' },
			{ value: 548, name: 'INDIA' }
		];

		this.chartLineOption10 = {
			...echartStyles.lineNoAxis, ...{
				color: ['#003765', '#0167c1', '#4a92ea', '#88c2f9', '#5a99d5', '#017bff'],

				title: {
					text: 'World Population (2010)',
					subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
					sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
					left: 'center',
					top: 'top'
				},
				tooltip: {
					trigger: 'item',
					formatter: function (params) {
						let value: any = (params.value + '').split('.');
						value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
							+ '.' + value[1];
						return params.seriesName + '<br/>' + params.name + ' : ' + value;
					}
				},
				toolbox: {
					show: true,
					orient: 'vertical',
					left: 'right',
					top: 'center',
					feature: {
						dataView: { readOnly: false },
						restore: {},
						saveAsImage: {}
					}
				},
				visualMap: {
					min: 0,
					max: 1000000,
					text: ['High', 'Low'],
					realtime: false,
					calculable: true,
					inRange: {
						color: ['lightskyblue', 'yellow', 'orangered']
					}
				},
				series: [
					{
						name: 'World Population (2010)',
						type: 'map',
						mapType: 'world',
						roam: true,
						itemStyle: {
							emphasis: { label: { show: true } }
						},
						data: [
							{ name: 'Afghanistan', value: 28397.812 },
							{ name: 'Angola', value: 19549.124 },
							{ name: 'Albania', value: 3150.143 },
							{ name: 'United Arab Emirates', value: 8441.537 },
							{ name: 'Argentina', value: 40374.224 },
							{ name: 'Armenia', value: 2963.496 },
							{ name: 'French Southern and Antarctic Lands', value: 268.065 },
							{ name: 'Australia', value: 22404.488 },
							{ name: 'Austria', value: 8401.924 },
							{ name: 'Azerbaijan', value: 9094.718 },
							{ name: 'Burundi', value: 9232.753 },
							{ name: 'Belgium', value: 10941.288 },
							{ name: 'Benin', value: 9509.798 },
							{ name: 'Burkina Faso', value: 15540.284 },
							{ name: 'Bangladesh', value: 151125.475 },
							{ name: 'Bulgaria', value: 7389.175 },
							{ name: 'The Bahamas', value: 66402.316 },
							{ name: 'Bosnia and Herzegovina', value: 3845.929 },
							{ name: 'Belarus', value: 9491.07 },
							{ name: 'Belize', value: 308.595 },
							{ name: 'Bermuda', value: 64.951 },
							{ name: 'Bolivia', value: 716.939 },
							{ name: 'Brazil', value: 195210.154 },
							{ name: 'Brunei', value: 27.223 },
							{ name: 'Bhutan', value: 716.939 },
							{ name: 'Botswana', value: 1969.341 },
							{ name: 'Central African Republic', value: 4349.921 },
							{ name: 'Canada', value: 34126.24 },
							{ name: 'Switzerland', value: 7830.534 },
							{ name: 'Chile', value: 17150.76 },
							{ name: 'China', value: 1359821.465 },
							{ name: 'Ivory Coast', value: 60508.978 },
							{ name: 'Cameroon', value: 20624.343 },
							{ name: 'Democratic Republic of the Congo', value: 62191.161 },
							{ name: 'Republic of the Congo', value: 3573.024 },
							{ name: 'Colombia', value: 46444.798 },
							{ name: 'Costa Rica', value: 4669.685 },
							{ name: 'Cuba', value: 11281.768 },
							{ name: 'Northern Cyprus', value: 1.468 },
							{ name: 'Cyprus', value: 1103.685 },
							{ name: 'Czech Republic', value: 10553.701 },
							{ name: 'Germany', value: 83017.404 },
							{ name: 'Djibouti', value: 834.036 },
							{ name: 'Denmark', value: 5550.959 },
							{ name: 'Dominican Republic', value: 10016.797 },
							{ name: 'Algeria', value: 37062.82 },
							{ name: 'Ecuador', value: 15001.072 },
							{ name: 'Egypt', value: 78075.705 },
							{ name: 'Eritrea', value: 5741.159 },
							{ name: 'Spain', value: 46182.038 },
							{ name: 'Estonia', value: 1298.533 },
							{ name: 'Ethiopia', value: 87095.281 },
							{ name: 'Finland', value: 5367.693 },
							{ name: 'Fiji', value: 860.559 },
							{ name: 'Falkland Islands', value: 49.581 },
							{ name: 'France', value: 63230.866 },
							{ name: 'Gabon', value: 1556.222 },
							{ name: 'United Kingdom', value: 62066.35 },
							{ name: 'Georgia', value: 4388.674 },
							{ name: 'Ghana', value: 24262.901 },
							{ name: 'Guinea', value: 10876.033 },
							{ name: 'Gambia', value: 1680.64 },
							{ name: 'Guinea Bissau', value: 10876.033 },
							{ name: 'Equatorial Guinea', value: 696.167 },
							{ name: 'Greece', value: 11109.999 },
							{ name: 'Greenland', value: 56.546 },
							{ name: 'Guatemala', value: 14341.576 },
							{ name: 'French Guiana', value: 231.169 },
							{ name: 'Guyana', value: 786.126 },
							{ name: 'Honduras', value: 7621.204 },
							{ name: 'Croatia', value: 4338.027 },
							{ name: 'Haiti', value: 9896.4 },
							{ name: 'Hungary', value: 10014.633 },
							{ name: 'Indonesia', value: 240676.485 },
							{ name: 'India', value: 1205624.648 },
							{ name: 'Ireland', value: 4467.561 },
							{ name: 'Iran', value: 240676.485 },
							{ name: 'Iraq', value: 30962.38 },
							{ name: 'Iceland', value: 318.042 },
							{ name: 'Israel', value: 7420.368 },
							{ name: 'Italy', value: 60508.978 },
							{ name: 'Jamaica', value: 2741.485 },
							{ name: 'Jordan', value: 6454.554 },
							{ name: 'Japan', value: 127352.833 },
							{ name: 'Kazakhstan', value: 15921.127 },
							{ name: 'Kenya', value: 40909.194 },
							{ name: 'Kyrgyzstan', value: 5334.223 },
							{ name: 'Cambodia', value: 14364.931 },
							{ name: 'South Korea', value: 51452.352 },
							{ name: 'Kosovo', value: 97.743 },
							{ name: 'Kuwait', value: 2991.58 },
							{ name: 'Laos', value: 6395.713 },
							{ name: 'Lebanon', value: 4341.092 },
							{ name: 'Liberia', value: 3957.99 },
							{ name: 'Libya', value: 6040.612 },
							{ name: 'Sri Lanka', value: 20758.779 },
							{ name: 'Lesotho', value: 2008.921 },
							{ name: 'Lithuania', value: 3068.457 },
							{ name: 'Luxembourg', value: 507.885 },
							{ name: 'Latvia', value: 2090.519 },
							{ name: 'Morocco', value: 31642.36 },
							{ name: 'Moldova', value: 103.619 },
							{ name: 'Madagascar', value: 21079.532 },
							{ name: 'Mexico', value: 117886.404 },
							{ name: 'Macedonia', value: 507.885 },
							{ name: 'Mali', value: 13985.961 },
							{ name: 'Myanmar', value: 51931.231 },
							{ name: 'Montenegro', value: 620.078 },
							{ name: 'Mongolia', value: 2712.738 },
							{ name: 'Mozambique', value: 23967.265 },
							{ name: 'Mauritania', value: 3609.42 },
							{ name: 'Malawi', value: 15013.694 },
							{ name: 'Malaysia', value: 28275.835 },
							{ name: 'Namibia', value: 2178.967 },
							{ name: 'New Caledonia', value: 246.379 },
							{ name: 'Niger', value: 15893.746 },
							{ name: 'Nigeria', value: 159707.78 },
							{ name: 'Nicaragua', value: 5822.209 },
							{ name: 'Netherlands', value: 16615.243 },
							{ name: 'Norway', value: 4891.251 },
							{ name: 'Nepal', value: 26846.016 },
							{ name: 'New Zealand', value: 4368.136 },
							{ name: 'Oman', value: 2802.768 },
							{ name: 'Pakistan', value: 173149.306 },
							{ name: 'Panama', value: 3678.128 },
							{ name: 'Peru', value: 29262.83 },
							{ name: 'Philippines', value: 93444.322 },
							{ name: 'Papua New Guinea', value: 6858.945 },
							{ name: 'Poland', value: 38198.754 },
							{ name: 'Puerto Rico', value: 3709.671 },
							{ name: 'North Korea', value: 1.468 },
							{ name: 'Portugal', value: 10589.792 },
							{ name: 'Paraguay', value: 6459.721 },
							{ name: 'Qatar', value: 1749.713 },
							{ name: 'Romania', value: 21861.476 },
							{ name: 'Russia', value: 21861.476 },
							{ name: 'Rwanda', value: 10836.732 },
							{ name: 'Western Sahara', value: 514.648 },
							{ name: 'Saudi Arabia', value: 27258.387 },
							{ name: 'Sudan', value: 35652.002 },
							{ name: 'South Sudan', value: 9940.929 },
							{ name: 'Senegal', value: 12950.564 },
							{ name: 'Solomon Islands', value: 526.447 },
							{ name: 'Sierra Leone', value: 5751.976 },
							{ name: 'El Salvador', value: 6218.195 },
							{ name: 'Somaliland', value: 9636.173 },
							{ name: 'Somalia', value: 9636.173 },
							{ name: 'Republic of Serbia', value: 3573.024 },
							{ name: 'Suriname', value: 524.96 },
							{ name: 'Slovakia', value: 5433.437 },
							{ name: 'Slovenia', value: 2054.232 },
							{ name: 'Sweden', value: 9382.297 },
							{ name: 'Swaziland', value: 1193.148 },
							{ name: 'Syria', value: 7830.534 },
							{ name: 'Chad', value: 11720.781 },
							{ name: 'Togo', value: 6306.014 },
							{ name: 'Thailand', value: 66402.316 },
							{ name: 'Tajikistan', value: 7627.326 },
							{ name: 'Turkmenistan', value: 5041.995 },
							{ name: 'East Timor', value: 10016.797 },
							{ name: 'Trinidad and Tobago', value: 1328.095 },
							{ name: 'Tunisia', value: 10631.83 },
							{ name: 'Turkey', value: 72137.546 },
							{ name: 'United Republic of Tanzania', value: 44973.33 },
							{ name: 'Uganda', value: 33987.213 },
							{ name: 'Ukraine', value: 46050.22 },
							{ name: 'Uruguay', value: 3371.982 },
							{ name: 'United States of America', value: 312247.116 },
							{ name: 'Uzbekistan', value: 27769.27 },
							{ name: 'Venezuela', value: 236.299 },
							{ name: 'Vietnam', value: 89047.397 },
							{ name: 'Vanuatu', value: 236.299 },
							{ name: 'West Bank', value: 13.565 },
							{ name: 'Yemen', value: 22763.008 },
							{ name: 'South Africa', value: 51452.352 },
							{ name: 'Zambia', value: 13216.985 },
							{ name: 'Zimbabwe', value: 13076.978 }
						]
					}
				]

			}
		}

	}

}
