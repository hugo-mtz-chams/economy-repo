import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { TreeMap } from 'src/app/shared/charts/charts';
import * as cloneDeep from 'lodash/cloneDeep';


@Component({
  selector: 'app-treemap',
  templateUrl: './treemap.component.html',
  styleUrls: ['./treemap.component.scss']
})
export class TreemapComponent implements OnInit {

  treeMapOption: EChartOption;

  constructor() { }

  ngOnInit() {

    this.treeMapOption = cloneDeep(TreeMap);

  }

}
