import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';
import { BarChart1, BarChart2, PaiChart1 } from 'src/app/shared/charts/barcharts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-card-widgets',
  templateUrl: './card-widgets.component.html',
  styleUrls: ['./card-widgets.component.scss']
})
export class CardWidgetsComponent implements OnInit {
  chartOption1: EChartOption;
  chartOption2: EChartOption;
  chartDelivery: EChartOption;
  chartRevenueYearly: EChartOption;
  chartRevenueCountry: EChartOption;

  chartLineOption12: EChartOption;


  constructor() { }

  ngOnInit() {

    this.chartOption1 = {...echartStyles.lineFullWidth, ...{

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        left: '0%',
        top: '0%',
        right: '-1%',
        bottom: '0%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      },

      series: [
        {
          name: 'This Week',
          type: 'line',
          smooth: true,
          data: [30, 40, 20, 50, 40, 80, 90],
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

      ]

    }}

    this.chartOption2 = {...echartStyles.lineFullWidth, ...{
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        left: '0%',
        top: '0%',
        right: '-1%',
        bottom: '0%'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10'],
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      },

      series: [
        {
          name: 'Last Month',
          type: 'line',
          smooth: true,
          data: [30, 40, 20, 50, 40, 80, 90, 100, 80, 120],
          symbolSize: 8,
          lineStyle: {
            color: 'rgb(73, 163, 77)',
            opacity: 1,
            width: 1,
          },
          itemStyle: {
            color: '#49a34d',
            borderColor: '#49a34d',
            borderWidth: 1.5,
            normal: {
              opacity: 0
            },
            emphasis: {
              opacity: 1,
              shadowColor: 'rgba(73, 163, 77, 1)',
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
                  offset: 0, color: 'rgba(73, 163, 77, 1)'
                }, {
                  offset: 0.5, color: 'rgba(73, 163, 77, 0.7)'
                }, {
                  offset: 1, color: 'rgba(73, 163, 77, 0)'
                }]
              }
            }
          }
        },

      ]
    }}

    this.chartDelivery = {
			color: ['#ff7110', '#fdb772', '#fcddbd'],
				tooltip: {
					show: false,
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},

				grid: {
					top: '3%',
					left: '3%',
					right: '3%',
					bottom: '3%',
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
						radius: ['50%', '85%'],
						center: ['50%', '50%'],
						avoidLabelOverlap: false,
						hoverOffset: 5,
						label: {
							normal: {
								show: false,
								position: 'center',
								textStyle: {
									fontSize: '13',
									fontWeight: 'normal'
								},
								formatter: "{a}",
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '13',
                  fontWeight: 'bold',
                  color: '#ff7110'
								},
								formatter: "{b} \n{c} ({d}%)",
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data: [
							{ value: 335, name: 'Delivered' },
							{ value: 310, name: 'Packed' },
							{ value: 234, name: 'Remaining' },
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

    this.chartRevenueYearly = {...BarChart2};
		this.chartRevenueYearly.color = ['#f10075', '#eee'];
		this.chartRevenueYearly.xAxis[0].data = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
		this.chartRevenueYearly.series[0].name = 'Online';
		this.chartRevenueYearly.series[0].data = [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005];
		this.chartRevenueYearly.series[0].color = '#c4dbf0';
		this.chartRevenueYearly.series[1].name = 'Offline';
		this.chartRevenueYearly.series[1].data = [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050];
    this.chartRevenueYearly.series[1].color = '#2c80bf';

    this.chartRevenueCountry = {... PaiChart1};
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

    this.chartLineOption12 = {
			...echartStyles.lineNoAxis, ...{

				tooltip: {
					trigger: 'item',
					triggerOn: 'mousemove',
					formatter: "{a} <br />{b} - {c}%"
				},
				xAxis: {
					show: false,

					axisTick: {
						show: false
					}
				},

				grid: {
					top: '2%',
					left: '10%',
					bottom: '2%',
					right: '30%',
				},
				series: [
					{
						type: 'tree',
						name: 'Traffic In',
						left: '20%',
						right: '50%',

						data: [
							{
								"children": [
									{
										name: "Direct",
										value: "36.52",
										symbolSize: 10,

										itemStyle: {
											borderColor: '#d94e20'
										},
										label: {
											color: '#d94e20',
											position: 'left',
											verticalAlign: 'middle',
											align: 'right',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#d94e20',
											width: 2,
											curveness: 0.5
										},

									},
									{
										name: "Google",
										value: "35.20",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#ef8b2c'
										},
										label: {
											color: '#ef8b2c',
											position: 'left',
											verticalAlign: 'middle',
											align: 'right',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#ef8b2c',
											width: 2,
											curveness: 0.5
										}

									},
									{
										name: "Facebook",
										value: "35.20",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#3f51b5'
										},
										label: {
											color: '#3f51b5',
											position: 'left',
											verticalAlign: 'middle',
											align: 'right',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#3f51b5',
											width: 2,
											curveness: 0.5
										}


									},
									{
										name: "Youtube",
										value: "35.20",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#c02f1d'
										},
										label: {
											color: '#c02f1d',
											position: 'left',
											verticalAlign: 'middle',
											align: 'right',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#c02f1d',
											width: 2,
											curveness: 0.5
										}

									},
									{
										name: "Twitter",
										value: "35.20",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#1294ba'
										},
										label: {
											color: '#1294ba',
											position: 'left',
											verticalAlign: 'middle',
											align: 'right',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#1294ba',
											width: 2,
											curveness: 0.5
										}


									},
									{
										name: "Others",
										value: "35.20",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#0f5a78'
										},
										label: {
											color: '#0f5a78',
											position: 'left',
											verticalAlign: 'middle',
											align: 'right',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#0f5a78',
											width: 2,
											curveness: 0.5
										}


									}
								]

							}
						],


						symbolSize: 10,
						orient: 'RL',

						label: {
							normal: {
								position: 'right',
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

						expandAndCollapse: false,

						animationDuration: 550,
						animationDurationUpdate: 750

					},
					{
						type: 'tree',
						name: 'Trafic Out',
						left: '50%',
						right: '20%',

						data: [
							{
								"children": [
									{
										name: "github.com",
										value: "15.50",
										symbolSize: 10,

										itemStyle: {
											borderColor: '#d94e20'
										},
										label: {
											color: '#d94e20',
											position: 'right',
											verticalAlign: 'middle',
											align: 'left',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#d94e20',
											width: 2,
											curveness: 0.5
										},

									},
									{
										name: "paypal",
										value: "15.50",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#ef8b2c'
										},
										label: {
											color: '#ef8b2c',
											position: 'right',
											verticalAlign: 'middle',
											align: 'left',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#ef8b2c',
											width: 2,
											curveness: 0.5
										}

									},
									{
										name: "Facebook",
										value: "15.50",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#3f51b5'
										},
										label: {
											color: '#3f51b5',
											position: 'right',
											verticalAlign: 'middle',
											align: 'left',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#3f51b5',
											width: 2,
											curveness: 0.5
										}
									},
									{
										name: "Youtube",
										value: "15.50",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#c02f1d'
										},
										label: {
											color: '#c02f1d',
											position: 'right',
											verticalAlign: 'middle',
											align: 'left',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#c02f1d',
											width: 2,
											curveness: 0.5
										}
									},
									{
										name: "Twitter",
										value: "15.50",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#1294ba'
										},
										label: {
											color: '#1294ba',
											position: 'right',
											verticalAlign: 'middle',
											align: 'left',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#1294ba',
											width: 2,
											curveness: 0.5
										}
									},
									{
										name: "Others",
										value: "15.50",
										symbolSize: 10,
										itemStyle: {
											borderColor: '#0f5a78'
										},
										label: {
											color: '#0f5a78',
											position: 'right',
											verticalAlign: 'middle',
											align: 'left',
											fontSize: 15,
											fontWeight: 'Normal',
											fontFamily: 'Roboto'
										},
										lineStyle: {
											color: '#0f5a78',
											width: 2,
											curveness: 0.5
										}
									}
								]
							}
						],

						symbolSize: 10,
						orient: 'LR',

						label: {
							normal: {
								position: 'right',
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

						expandAndCollapse: false,
						animationDuration: 550,
						animationDurationUpdate: 750

					}

				]

			}
		}

  }

}
