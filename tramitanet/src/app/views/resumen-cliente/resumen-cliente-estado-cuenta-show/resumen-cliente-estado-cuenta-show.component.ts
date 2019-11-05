import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EChartOption } from 'echarts';
import * as cloneDeep from 'lodash/cloneDeep';
import { LineChart1  } from 'src/app/shared/charts/barcharts'




@Component({
  selector: 'app-resumen-cliente-estado-cuenta-show',
  templateUrl: './resumen-cliente-estado-cuenta-show.component.html',
  styleUrls: ['./resumen-cliente-estado-cuenta-show.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .my-custom-class .tooltip-inner {
    background-color: rgb(141, 223, 76);
    font-size: 125%;
    color: grey;
  }
  .my-custom-class .arrow::before {
    border-top-color: rgb(141, 223, 76);
  }
  `]
})
export class ResumenClienteEstadoCuentaShowComponent implements OnInit {

  public bienvenida: boolean = true;

  chartLineOptionD1: EChartOption; 
  chartLineOptionD2: EChartOption;
  chartLineOptionD3: EChartOption;
  chartLineOptionD4: EChartOption;
  chartLineOptionD5: EChartOption;

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
  }

  mostrarBienvenida() {
    this.bienvenida = !this.bienvenida;
  }
  

}
