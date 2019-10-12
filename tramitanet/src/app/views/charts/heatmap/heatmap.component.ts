import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { HeatMap } from 'src/app/shared/charts/barcharts';

import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnInit {

  heatMapOption: EChartOption;

  constructor() { }

  ngOnInit() {


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
			[20, 1, 50], [21, 1, 74], [22, 1, 45] , [23, 1, 120], [24, 1, 95], [25, 1, 110], [26, 1, 62], [27, 1, 55], [28, 1, 64], [29, 1, 57],
			[30, 1, 80],

			[0, 2, 0], [1, 2, 4], [2, 2, 45], [3, 2, 121], [4, 2, 95], [5, 2, 110], [6, 2, 62], [7, 2, 55], [8, 2, 64], [9, 2, 57],
			[10, 2, 85], [11, 2, 90], [12, 2, 45], [13, 2, 121], [14, 2, 95], [15, 2, 110], [16, 2, 62], [17, 2, 55], [18, 2, 64], [19, 2, 57],
			[20, 2, 50], [21, 2, 74], [22, 2, 45], [23, 2, 121], [24, 2, 95], [25, 2, 110], [26, 2, 62], [27, 2, 55], [28, 2, 64], [29, 2, 57],
			[30, 2, 80],

		];



		this.heatMapOption = cloneDeep(HeatMap);
		this.heatMapOption.color = ['#ff7043', '#66bb69', '#9575cc', '#88c2f9', '#5a99d5', '#017bff'];
		this.heatMapOption.visualMap.min = 0;
		this.heatMapOption.visualMap.max = 150;
		this.heatMapOption.xAxis.data = week;
		this.heatMapOption.yAxis.data = days;
		this.heatMapOption.series[0].name = 'Sales';
		this.heatMapOption.series[0].data = data;

  }

}
