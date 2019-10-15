import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { ResumenClienteService } from 'src/app/shared/services/resumen-cliente.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ResumenCliente } from 'src/app/shared/models/resumen-cliente.model';
import { EstatusProformaEnum } from 'src/app/shared/enums/estatus.proforma.enum';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-resumen-cliente-show',
  templateUrl: './resumen-cliente-show.component.html'
})
export class ResumenClienteShowComponent implements OnInit {

  startDate = new Date(2019, 0, 1);
  chartDelivery: EChartOption;

  listaResumenCliente: ResumenCliente;
  user: any;
  aceptadas: number;
  rechazadas: number;
  proceso: number;
  espera: number;
  tramitesTotales: number;

  fechaActual = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  constructor(
    private auth: AuthService,
    private resumenClienteService: ResumenClienteService,
  ) {
   this.user = this.auth.decode();
   console.log(this.fechaActual);
   }

  ngOnInit() {
    console.log(this.user);
    this.resumenClienteService.getResumenCliente(this.user.claveCliente).subscribe(
      (data: any[]) => {
        const dataSeries: any[] = [];
        let total: number = 0;
        for ( const element of data ) {
          total += element.numeroTramites;
          switch ( element.estatus ) {
            case EstatusProformaEnum.APROBADO:
              this.aceptadas = element.numeroTramites;
              break;
            case EstatusProformaEnum.EN_ESPERA:
                this.espera = element.numeroTramites;
                break;
            case EstatusProformaEnum.RECHAZADO:
                this.rechazadas = element.numeroTramites;
                break;
            case EstatusProformaEnum.EN_PROCESO:
                this.proceso = element.numeroTramites;
                break;
          }

          dataSeries.push({value: element.numeroTramites, name: element.estatus});
        }
        this.tramitesTotales = total;
        this.InitGraf(dataSeries);

      }
    );
  }


  fechaChange(){
    this.resumenClienteService.getResumenClienteFechaBusqueda(this.fechaActual).subscribe(data  =>{

    });
  }

  InitGraf(myDataSeries: any[]) {
    this.chartDelivery ={
      color: ['#ff7110', '#fdb772', '#fcddbd'],
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data:['En proceso','En espera','Aprobado','Rechazado']
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
          data: myDataSeries,
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
  }// fin metodo

}