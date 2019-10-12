import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { Timeriver } from 'src/app/shared/charts/charts'
import * as cloneDeep from 'lodash/cloneDeep';


@Component({
  selector: 'app-timeriver-chart',
  templateUrl: './timeriver-chart.component.html',
  styleUrls: ['./timeriver-chart.component.scss']
})
export class TimeriverChartComponent implements OnInit {

  timeriverOption: EChartOption;

  constructor() { }

  ngOnInit() {


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
  }

}
