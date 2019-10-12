import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import { LineChart1, Timeriver, LineChart5, AreaChart5, PaiChart3 } from "../../../shared/charts/charts";
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss']
})
export class DashboardAnalyticsComponent implements OnInit {

  chartLineOption1: EChartOption;
  chartLineOption2: EChartOption;
  chartLineOption3: EChartOption;
  chartLineOption4: EChartOption;
  timeriverOption: EChartOption;
  chartLineOptionD1: EChartOption;
  chartLineOptionD2: EChartOption;
  chartPaiOption3: EChartOption;
  chartLineOption12: EChartOption;

  constructor() { }

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

    this.timeriverOption = cloneDeep(Timeriver);
    this.timeriverOption.color = ['#e0f5fe', '#b3e5fc', '#80d4fa', '#4ec3f7', '#28b6f6', '#04a9f4'];
    this.timeriverOption.series[0].data = [
      ['2015/11/08', 10, 'Facebook'], ['2015/11/09', 15, 'Facebook'], ['2015/11/10', 35, 'Facebook'],
      ['2015/11/11', 38, 'Facebook'], ['2015/11/12', 22, 'Facebook'], ['2015/11/13', 16, 'Facebook'],
      ['2015/11/14', 7, 'Facebook'], ['2015/11/15', 2, 'Facebook'], ['2015/11/16', 17, 'Facebook'],
      ['2015/11/17', 33, 'Facebook'], ['2015/11/18', 40, 'Facebook'], ['2015/11/19', 32, 'Facebook'],
      ['2015/11/20', 26, 'Facebook'], ['2015/11/21', 35, 'Facebook'], ['2015/11/22', 40, 'Facebook'],
      ['2015/11/23', 32, 'Facebook'], ['2015/11/24', 26, 'Facebook'], ['2015/11/25', 22, 'Facebook'],
      ['2015/11/26', 16, 'Facebook'], ['2015/11/27', 22, 'Facebook'], ['2015/11/28', 10, 'Facebook'],
      ['2015/11/08', 35, 'Twitter'], ['2015/11/09', 36, 'Twitter'], ['2015/11/10', 37, 'Twitter'],
      ['2015/11/11', 22, 'Twitter'], ['2015/11/12', 24, 'Twitter'], ['2015/11/13', 26, 'Twitter'],
      ['2015/11/14', 34, 'Twitter'], ['2015/11/15', 21, 'Twitter'], ['2015/11/16', 18, 'Twitter'],
      ['2015/11/17', 45, 'Twitter'], ['2015/11/18', 32, 'Twitter'], ['2015/11/19', 35, 'Twitter'],
      ['2015/11/20', 30, 'Twitter'], ['2015/11/21', 28, 'Twitter'], ['2015/11/22', 27, 'Twitter'],
      ['2015/11/23', 26, 'Twitter'], ['2015/11/24', 15, 'Twitter'], ['2015/11/25', 30, 'Twitter'],
      ['2015/11/26', 35, 'Twitter'], ['2015/11/27', 42, 'Twitter'], ['2015/11/28', 42, 'Twitter'],
      ['2015/11/08', 21, 'Google Search'], ['2015/11/09', 25, 'Google Search'], ['2015/11/10', 27, 'Google Search'],
      ['2015/11/11', 23, 'Google Search'], ['2015/11/12', 24, 'Google Search'], ['2015/11/13', 21, 'Google Search'],
      ['2015/11/14', 35, 'Google Search'], ['2015/11/15', 39, 'Google Search'], ['2015/11/16', 40, 'Google Search'],
      ['2015/11/17', 36, 'Google Search'], ['2015/11/18', 33, 'Google Search'], ['2015/11/19', 43, 'Google Search'],
      ['2015/11/20', 40, 'Google Search'], ['2015/11/21', 34, 'Google Search'], ['2015/11/22', 28, 'Google Search'],
      ['2015/11/23', 26, 'Google Search'], ['2015/11/24', 37, 'Google Search'], ['2015/11/25', 41, 'Google Search'],
      ['2015/11/26', 46, 'Google Search'], ['2015/11/27', 47, 'Google Search'], ['2015/11/28', 41, 'Google Search'],
      ['2015/11/08', 10, 'Youtube'], ['2015/11/09', 15, 'Youtube'], ['2015/11/10', 35, 'Youtube'],
      ['2015/11/11', 38, 'Youtube'], ['2015/11/12', 22, 'Youtube'], ['2015/11/13', 16, 'Youtube'],
      ['2015/11/14', 7, 'Youtube'], ['2015/11/15', 2, 'Youtube'], ['2015/11/16', 17, 'Youtube'],
      ['2015/11/17', 33, 'Youtube'], ['2015/11/18', 40, 'Youtube'], ['2015/11/19', 32, 'Youtube'],
      ['2015/11/20', 26, 'Youtube'], ['2015/11/21', 35, 'Youtube'], ['2015/11/22', 40, 'Youtube'],
      ['2015/11/23', 32, 'Youtube'], ['2015/11/24', 26, 'Youtube'], ['2015/11/25', 22, 'Youtube'],
      ['2015/11/26', 16, 'Youtube'], ['2015/11/27', 22, 'Youtube'], ['2015/11/28', 10, 'Youtube'],
      ['2015/11/08', 10, 'Dribbble'], ['2015/11/09', 15, 'Dribbble'], ['2015/11/10', 35, 'Dribbble'],
      ['2015/11/11', 38, 'Dribbble'], ['2015/11/12', 22, 'Dribbble'], ['2015/11/13', 16, 'Dribbble'],
      ['2015/11/14', 7, 'Dribbble'], ['2015/11/15', 2, 'Dribbble'], ['2015/11/16', 17, 'Dribbble'],
      ['2015/11/17', 33, 'Dribbble'], ['2015/11/18', 40, 'Dribbble'], ['2015/11/19', 32, 'Dribbble'],
      ['2015/11/20', 26, 'Dribbble'], ['2015/11/21', 35, 'Dribbble'], ['2015/11/22', 4, 'Dribbble'],
      ['2015/11/23', 32, 'Dribbble'], ['2015/11/24', 26, 'Dribbble'], ['2015/11/25', 22, 'Dribbble'],
      ['2015/11/26', 16, 'Dribbble'], ['2015/11/27', 22, 'Dribbble'], ['2015/11/28', 10, 'Dribbble'],
      ['2015/11/08', 10, 'Others'], ['2015/11/09', 15, 'Others'], ['2015/11/10', 35, 'Others'],
      ['2015/11/11', 38, 'Others'], ['2015/11/12', 22, 'Others'], ['2015/11/13', 16, 'Others'],
      ['2015/11/14', 7, 'Others'], ['2015/11/15', 2, 'Others'], ['2015/11/16', 17, 'Others'],
      ['2015/11/17', 33, 'Others'], ['2015/11/18', 4, 'Others'], ['2015/11/19', 32, 'Others'],
      ['2015/11/20', 26, 'Others'], ['2015/11/21', 35, 'Others'], ['2015/11/22', 40, 'Others'],
      ['2015/11/23', 32, 'Others'], ['2015/11/24', 26, 'Others'], ['2015/11/25', 22, 'Others'],
      ['2015/11/26', 16, 'Others'], ['2015/11/27', 22, 'Others'], ['2015/11/28', 10, 'Others']
    ];

    this.chartLineOptionD2 = cloneDeep(LineChart5);
    this.chartLineOptionD2.color = ['#5f6bc2'];
    this.chartLineOptionD2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.chartLineOptionD2.series[0].data = [70, 65, 85, 75, 95, 86, 93];
    this.chartLineOptionD2.series[1].data = [80, 90, 75, 104, 75, 80, 70];
    this.chartLineOptionD2.series[2].data = [110, 95, 102, 90, 105, 95, 108];

    this.chartLineOptionD1 = cloneDeep(AreaChart5);
    this.chartLineOptionD1.xAxis.data = ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec', '10 Dec', '11 Dec', '12 Dec', '13 Dec', '14 Dec', '15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec', '23 Dec', '24 Dec', '25 Dec', '26 Dec', '27 Dec', '28 Dec', '29 Dec', '30 Dec', '31 Dec'];
    this.chartLineOptionD1.series[0].lineStyle.color = ['#f36d12'];
    this.chartLineOptionD1.series[0].itemStyle.color = ['#f36d12'];
    this.chartLineOptionD1.series[0].areaStyle.color = ['#f36d12'];
    this.chartLineOptionD1.series[0].data = [3, 2, 3, 2, 3, 2, 3, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 2, 1, 2, 3, 1, 2, 3, 2, 1, 2, 3, 1, 2, 4];

    this.chartPaiOption3 = cloneDeep(PaiChart3);
    this.chartPaiOption3.color = ['#c13018', '#f36e12', '#ebcb37', '#a1b968', '#0d94bc', '#135bba'];
    this.chartPaiOption3.series[0].name = 'Session';
    this.chartPaiOption3.series[0].data = [
      { value: 335, name: 'Organic' },
      { value: 310, name: 'Search Eng.' },
      { value: 234, name: 'Email' },
      { value: 135, name: 'Referal' },
      { value: 148, name: 'Social' },
      { value: 548, name: 'Others' }
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
