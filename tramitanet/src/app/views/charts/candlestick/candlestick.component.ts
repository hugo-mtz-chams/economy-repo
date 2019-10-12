import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { CandleStick } from 'src/app/shared/charts/barcharts'
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-candlestick',
  templateUrl: './candlestick.component.html',
  styleUrls: ['./candlestick.component.scss']
})
export class CandlestickComponent implements OnInit {

  candlestickChartOption: EChartOption;

  constructor() { }

  ngOnInit() {
    this.candlestickChartOption = cloneDeep(CandleStick);
  }

}
