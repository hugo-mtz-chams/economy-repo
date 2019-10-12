import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import { ProductService } from 'src/app/shared/services/product.service';

import { BarChart1, BarChart2, PaiChart1 } from 'src/app/shared/charts/barcharts';
import { LineChart3 } from 'src/app/shared/charts/barcharts'

import * as echarts from 'echarts';
import * as cloneDeep from 'lodash/cloneDeep';


@Component({
	selector: 'app-dashboard-stock',
	templateUrl: './dashboard-stock.component.html',
	styleUrls: ['./dashboard-stock.component.scss']
})
export class DashboardStockComponent implements OnInit {

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

		this.chartLineOptionD1 = cloneDeep(LineChart3);
		this.chartLineOptionD1.series[0].lineStyle.normal.color = ['#F44336'];

		this.chartLineOption1 = {
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

		this.chartLineOption2 = {
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

		this.chartLineOption3 = {
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

		this.chartLineOption4 = {
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

		var upColor = '#f36c12';
		var upBorderColor = '#f36c12';
		var downColor = '#00da3c';
		var downBorderColor = '#008F28';

		function splitData(rawData) {
			var categoryData = [];
			var values = []
			for (var i = 0; i < rawData.length; i++) {
				categoryData.push(rawData[i].splice(0, 1)[0]);
				values.push(rawData[i])
			}
			return {
				categoryData: categoryData,
				values: values
			};
		}

		function calculateMA(dayCount) {
			var result = [];
			for (var i = 0, len = data0.values.length; i < len; i++) {
				if (i < dayCount) {
					result.push('-');
					continue;
				}
				var sum = 0;
				for (var j = 0; j < dayCount; j++) {
					sum += data0.values[i - j][1];
				}
				result.push(sum / dayCount);
			}
			return result;
		}


		var data0 = splitData([
			['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
			['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
			['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
			['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
			['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
			['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
			['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
			['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
			['2013/2/5', 2411, 2433.13, 2403.3, 2437.42],
			['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
			['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
			['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
			['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
			['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
			['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
			['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
			['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
			['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
			['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
			['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
			['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
			['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
			['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
			['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
			['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
			['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
			['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
			['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
			['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
			['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
			['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
			['2013/3/15', 2269.31, 2278.4, 2250, 2312.08],
			['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
			['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
			['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
			['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
			['2013/3/22', 2321.4, 2328.28, 2314.97, 2332],
			['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
			['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
			['2013/3/27', 2299.38, 2301.26, 2289, 2323.48],
			['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
			['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
			['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
			['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
			['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
			['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
			['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73],
			['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
			['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
			['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26],
			['2013/4/15', 2199.91, 2181.94, 2177.39, 2204.99],
			['2013/4/16', 2169.63, 2194.85, 2165.78, 2196.43],
			['2013/4/17', 2195.03, 2193.8, 2178.47, 2197.51],
			['2013/4/18', 2181.82, 2197.6, 2175.44, 2206.03],
			['2013/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
			['2013/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
			['2013/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
			['2013/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
			['2013/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
			['2013/4/26', 2203.89, 2177.91, 2173.86, 2210.58],
			['2013/5/2', 2170.78, 2174.12, 2161.14, 2179.65],
			['2013/5/3', 2179.05, 2205.5, 2179.05, 2222.81],
			['2013/5/6', 2212.5, 2231.17, 2212.5, 2236.07],
			['2013/5/7', 2227.86, 2235.57, 2219.44, 2240.26],
			['2013/5/8', 2242.39, 2246.3, 2235.42, 2255.21],
			['2013/5/9', 2246.96, 2232.97, 2221.38, 2247.86],
			['2013/5/10', 2228.82, 2246.83, 2225.81, 2247.67],
			['2013/5/13', 2247.68, 2241.92, 2231.36, 2250.85],
			['2013/5/14', 2238.9, 2217.01, 2205.87, 2239.93],
			['2013/5/15', 2217.09, 2224.8, 2213.58, 2225.19],
			['2013/5/16', 2221.34, 2251.81, 2210.77, 2252.87],
			['2013/5/17', 2249.81, 2282.87, 2248.41, 2288.09],
			['2013/5/20', 2286.33, 2299.99, 2281.9, 2309.39],
			['2013/5/21', 2297.11, 2305.11, 2290.12, 2305.3],
			['2013/5/22', 2303.75, 2302.4, 2292.43, 2314.18],
			['2013/5/23', 2293.81, 2275.67, 2274.1, 2304.95],
			['2013/5/24', 2281.45, 2288.53, 2270.25, 2292.59],
			['2013/5/27', 2286.66, 2293.08, 2283.94, 2301.7],
			['2013/5/28', 2293.4, 2321.32, 2281.47, 2322.1],
			['2013/5/29', 2323.54, 2324.02, 2321.17, 2334.33],
			['2013/5/30', 2316.25, 2317.75, 2310.49, 2325.72],
			['2013/5/31', 2320.74, 2300.59, 2299.37, 2325.53],
			['2013/6/3', 2300.21, 2299.25, 2294.11, 2313.43],
			['2013/6/4', 2297.1, 2272.42, 2264.76, 2297.1],
			['2013/6/5', 2270.71, 2270.93, 2260.87, 2276.86],
			['2013/6/6', 2264.43, 2242.11, 2240.07, 2266.69],
			['2013/6/7', 2242.26, 2210.9, 2205.07, 2250.63],
			['2013/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
		]);

		this.StockIndexChart = {
			...echartStyles.lineNoAxis, ...{
				color: ['#003765', '#0167c1', '#4a92ea', '#88c2f9', '#5a99d5', '#017bff'],

				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					}
				},
				legend: {
					data: ['Dow Jones Index', 'MA5', 'MA10', 'MA20', 'MA30']
				},
				grid: {
					left: '10%',
					right: '10%',
					bottom: '15%'
				},
				xAxis: {
					type: 'category',
					data: data0.categoryData,
					scale: true,
					boundaryGap: false,
					axisLine: {
						onZero: false,
						show: false,
						lineStyle: {
							color: '#000'
						}
					},
					axisLabel: {
						color: '#333'
					},
					splitLine: { show: false },
					splitArea: { show: false },
					splitNumber: 20,
					min: 'dataMin',
					max: 'dataMax'
				},
				yAxis: {
					scale: true,
					splitArea: {
						show: false
					},
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					}
				},
				dataZoom: [
					{
						type: 'inside',
						start: 50,
						end: 100
					},
					{
						show: true,
						type: 'slider',
						y: '90%',
						start: 50,
						end: 100
					}
				],
				series: [
					{
						name: 'Dow Jones Index',
						type: 'candlestick',
						data: data0.values,
						itemStyle: {
							normal: {
								color: upColor,
								color0: downColor,
								borderColor: upBorderColor,
								borderColor0: downBorderColor
							}
						},
						markPoint: {
							label: {
								normal: {
									formatter: function (param) {
										return param != null ? Math.round(param.value) : '';
									}
								}
							},
							data: [
								{
									name: 'XX标点',
									coord: ['2013/5/31', 2300],
									value: 2300,
									itemStyle: {
										normal: { color: 'rgb(41,60,85)' }
									}
								},
								{
									name: 'highest value',
									type: 'max',
									valueDim: 'highest'
								},
								{
									name: 'lowest value',
									type: 'min',
									valueDim: 'lowest'
								},
								{
									name: 'average value on close',
									type: 'average',
									valueDim: 'close'
								}
							],
							tooltip: {
								formatter: function (param) {
									return param.name + '<br>' + (param.data.coord || '');
								}
							}
						},
						markLine: {
							symbol: ['none', 'none'],
							data: [
								[
									{
										name: 'from lowest to highest',
										type: 'min',
										valueDim: 'lowest',
										symbol: 'circle',
										symbolSize: 10,
										label: {
											normal: { show: false },
											emphasis: { show: false }
										}
									},
									{
										type: 'max',
										valueDim: 'highest',
										symbol: 'circle',
										symbolSize: 10,
										label: {
											normal: { show: false },
											emphasis: { show: false }
										}
									}
								],
								{
									name: 'min line on close',
									type: 'min',
									valueDim: 'close'
								},
								{
									name: 'max line on close',
									type: 'max',
									valueDim: 'close'
								}
							]
						}
					},
					{
						name: 'MA5',
						type: 'line',
						data: calculateMA(5),
						smooth: true,
						lineStyle: {
							normal: { opacity: 0.5 }
						}
					},
					{
						name: 'MA10',
						type: 'line',
						data: calculateMA(10),
						smooth: true,
						lineStyle: {
							normal: { opacity: 0.5 }
						}
					},
					{
						name: 'MA20',
						type: 'line',
						data: calculateMA(20),
						smooth: true,
						lineStyle: {
							normal: { opacity: 0.5 }
						}
					},
					{
						name: 'MA30',
						type: 'line',
						data: calculateMA(30),
						smooth: true,
						lineStyle: {
							normal: { opacity: 0.5 }
						}
					},

				]
			}
		}

	}

}
