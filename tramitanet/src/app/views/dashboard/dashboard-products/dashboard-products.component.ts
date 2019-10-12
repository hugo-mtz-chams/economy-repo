import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from 'src/app/shared/echart-styles';
import { BarChart3, LineChart1, LineChart2, DonutChart1 } from 'src/app/shared/charts/barcharts'
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {

  chartLineOptionD1: EChartOption;
  chartLineOptionD2: EChartOption;
  chartLineOptionD3: EChartOption;
  chartLineOptionD4: EChartOption;
  chartLineOptionD5: EChartOption;

  chartDonut1: EChartOption;
  chartDonut2: EChartOption;
  chartDonut3: EChartOption;

  chartHours: EChartOption;
  chartProductivity: EChartOption;

  chartCampaignMatrics: EChartOption;
  chartAudienceMatrics: EChartOption;
  chartTraficSources: EChartOption;
  chartDelivery: EChartOption;

  chartPie1: any;
  chartPie2: any;
  chartBar1: any;

  constructor() { }

  ngOnInit() {


    this.chartLineOptionD1 = cloneDeep(LineChart1);
    this.chartLineOptionD1.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
    this.chartLineOptionD1.series[0].lineStyle.color = ['#5f6ac2'];
    this.chartLineOptionD1.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    this.chartLineOptionD2 = cloneDeep(LineChart1);
    this.chartLineOptionD2.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
    this.chartLineOptionD2.series = [...LineChart1.series];
    this.chartLineOptionD2.series[0].lineStyle.color = ['#ff5721'];
    this.chartLineOptionD2.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    this.chartLineOptionD3 = cloneDeep(LineChart1);
    this.chartLineOptionD3.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
    this.chartLineOptionD3.series[0].lineStyle.color = '#4cae4f';
    this.chartLineOptionD3.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.chartLineOptionD4 = cloneDeep(LineChart1);
    this.chartLineOptionD4.xAxis.data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',
      '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
    this.chartLineOptionD4.series[0].lineStyle.color = '#04a9f4';
    this.chartLineOptionD4.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 7, 0, 0, 0, 5, 0, 5, 0, 0, 0, 0, 1, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.chartLineOptionD5 = cloneDeep(LineChart2);
    this.chartLineOptionD5.xAxis.data = ['1st Dec', '2nd Dec', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7'];
    this.chartLineOptionD5.series[0].lineStyle.color = ['#04a9f4'];
    this.chartLineOptionD5.series[0].data = [820, 982, 701, 1034, 790, 1430, 1120, 1300, 790, 1430, 1120, 1300];
    this.chartLineOptionD5.series[1].lineStyle.color = ['#4cae4f'];
    this.chartLineOptionD5.series[1].data = [620, 882, 901, 934, 500, 830, 1220, 1100, 860, 1130, 1020, 1400];


    this.chartDonut1 = cloneDeep(DonutChart1);
    this.chartDonut1.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
    this.chartDonut1.series[0].data = [
      { value: 335, name: 'Social Media' },
      { value: 310, name: 'Youtube' },
      { value: 234, name: 'Google AdWord' }

    ];

    this.chartDonut2 = cloneDeep(DonutChart1);
    this.chartDonut2.color = ['#28b6f6', '#ef534f', '#81c784', '#7986cb', '#4db5ab', '#4ec3f7'];
    this.chartDonut2.series[0].data = [
      { value: 235, name: 'Pending' },
      { value: 310, name: 'Active' },
      { value: 110, name: 'On Hold' },
      { value: 234, name: 'Canceled' }

    ];

    this.chartDonut3 = cloneDeep(DonutChart1);
    this.chartDonut3.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
    this.chartDonut3.series[0].data = [
      { value: 335, name: 'Social Media' },
      { value: 310, name: 'Youtube' },
      { value: 234, name: 'Google AdWord' }

    ];


    this.chartHours = cloneDeep(BarChart3);
    this.chartHours.color = ['#6f42c1'];
    this.chartHours.xAxis.data = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    this.chartHours.series[0].name = 'mettings';
    this.chartHours.series[0].data = [15, 20, 25, 21, 27, 18, 14, 9, 18, 22, 30, 13, 15, 12, 25, 14, 12, 13, 11, 19, 13, 18, 19, 17];

    this.chartProductivity = cloneDeep(BarChart3);
    this.chartProductivity.color = ['#5c6ac0'];
    this.chartProductivity.xAxis.data = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    this.chartProductivity.series[0].name = 'statements';
    this.chartProductivity.series[0].data = [15, 20, 25, 21, 27, 18, 14, 9, 18, 22, 30, 13, 15, 12, 25, 14, 12, 13, 11, 19, 13, 18, 19, 17];

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
          max: 200,
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
            name: 'Last Year',
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: [80, 95, 75, 125, 95, 110, 80, 60, 90, 100, 125, 100],
            symbolSize: 8,
            lineStyle: {
              show: false,
              color: 'rgb(95, 107, 194)',
              opacity: 0,
              width: 1,
              type: 'line'
            },
            itemStyle: {
              color: '#5f6cc1',
              borderColor: '#5f6cc1',
              borderWidth: 1.5,
              emphasis: {
                opacity: 0,
                shadowColor: 'rgba(253, 183, 113, 1)',
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
                    offset: 0, color: 'rgba(253, 183, 113, 1)'
                  }, {
                    offset: 0.5, color: 'rgba(253, 183, 113, 0.7)'
                  }, {
                    offset: 1, color: 'rgba(253, 183, 113, 0)'
                  }]
                }
              }
            }
          },
          {
            name: 'This Year',
            type: 'line',
            smooth: true,
            data: [35, 80, 60, 125, 95, 110, 80, 60],
            symbolSize: 8,
            lineStyle: {
              color: 'rgb(255, 112, 14)',
              opacity: 1,
              width: 1.5,
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
          }

        ]

      }
    }

    this.chartAudienceMatrics = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      grid: {
        left: '5%',
        top: '5%',
        right: '5%',
        bottom: '5%'
      },
      series: [
        {
          name: 'DEMOGRAPHY',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],

          label: {
            normal: {
              position: 'inner',
              formatter: '{b} \n {c} ',
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 635, name: 'Male', selected: true },
            { value: 679, name: 'Female' },
            { value: 248, name: 'Others' }
          ]
        },
        {
          name: 'COUNTRY',
          type: 'pie',
          radius: ['40%', '55%'],
          label: {
            normal: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#eee',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,

              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                abg: {
                  backgroundColor: '#333',
                  width: '100%',
                  align: 'right',
                  height: 22,
                  borderRadius: [4, 4, 0, 0]
                },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: '#eee',
                  backgroundColor: '#334455',
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          data: [
            { value: 335, name: 'USA' },
            { value: 310, name: 'CAN' },
            { value: 234, name: 'MEX' },
            { value: 135, name: 'UK' },
            { value: 1048, name: 'GER' },
            { value: 251, name: 'AUS' },
            { value: 147, name: 'IND' },
            { value: 102, name: 'CHI' },
            { value: 122, name: 'OTHERS' }
          ]
        }
      ]
    }

    this.chartTraficSources = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        top: '8%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 500,
        interval: 100,
        axisLabel: {
          formatter: '{value}k',
          color: '#333',
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: 400
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
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [
          'Dec, 1', 'Dec, 2', 'Dec, 3', 'Dec, 4', 'Dec, 5', 'Dec, 6', 'Dec, 7'
        ],
        axisLabel: {
          formatter: '{value}',
          color: '#333',
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
      series: [
        {
          color: '#3182bd',
          name: 'Campaign',
          type: 'bar',
          barGap: 0,
          label: {
            normal: {
              show: false,
              position: 'insideBottom',
              distance: 5,
              align: 'left',
              verticalAlign: 'middle',
              rotate: 90,
              formatter: '{c}  {name|{a}}',
              fontSize: 14,
              fontWeight: 'bold',
              rich: {
                name: {
                  color: '#fff',

                }
              }
            }
          },
          data: [320, 332, 301, 334, 390, 350, 215]
        },
        {
          color: '#74c475',
          name: 'Steppe',
          type: 'bar',
          label: {
            normal: {
              show: false,
              position: 'insideBottom',
              distance: 5,
              align: 'left',
              verticalAlign: 'middle',
              rotate: 90,
              formatter: '{c}  {name|{a}}',
              fontSize: 14,
              fontWeight: 'bold',
              rich: {
                name: {
                  color: '#fff',

                }
              }
            }
          },
          data: [220, 182, 191, 234, 290, 190, 210]
        },
        {
          color: '#e6550d',
          name: 'Desert',
          type: 'bar',
          label: {
            normal: {
              show: false,
              position: 'insideBottom',
              distance: 5,
              align: 'left',
              verticalAlign: 'middle',
              rotate: 90,
              formatter: '{c}  {name|{a}}',
              fontSize: 14,
              fontWeight: 'bold',
              rich: {
                name: {
                  color: '#fff',

                }
              }
            }
          },
          data: [150, 232, 201, 154, 190, 150, 130]
        },
        {
          color: '#756bb1',
          name: 'Wetland',
          type: 'bar',
          label: {
            normal: {
              show: false,
              position: 'insideBottom',
              distance: 5,
              align: 'left',
              verticalAlign: 'middle',
              rotate: 90,
              formatter: '{c}  {name|{a}}',
              fontSize: 14,
              fontWeight: 'bold',
              rich: {
                name: {
                  color: '#fff',

                }
              }
            }
          },
          data: [98, 77, 101, 99, 40, 30, 50]
        }

      ]
    }

    this.chartDelivery = {
      color: ['#ff7110', '#fdb772', '#fcddbd'],
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
                fontSize: '15',
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

}
