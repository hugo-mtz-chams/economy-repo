import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { ResumenClienteModule } from '../resumen-cliente.module';
import { ResumenClienteService } from 'src/app/shared/services/resumen-cliente.service';

@Component({
  selector: 'app-resumen-cliente-show',
  templateUrl: './resumen-cliente-show.component.html'
})
export class ResumenClienteShowComponent implements OnInit {
  
  chartDelivery: EChartOption;

  listaResumenCliente: ResumenClienteModule;

  constructor(
    private resumenClienteService: ResumenClienteService
  ) { }

  ngOnInit() {
  
    this.chartDelivery ={
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

  }
}