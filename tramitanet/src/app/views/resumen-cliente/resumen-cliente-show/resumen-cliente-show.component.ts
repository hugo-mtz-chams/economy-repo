import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EChartOption } from 'echarts';
import { ResumenClienteService } from 'src/app/shared/services/resumen-cliente.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ResumenCliente } from 'src/app/shared/models/resumen-cliente.model';
import { EstatusProformaEnum } from 'src/app/shared/enums/estatus.proforma.enum';
import { formatDate } from '@angular/common';
import { Proforma } from 'src/app/shared/models/proforma';
import { ProformaService } from 'src/app/shared/services/proforma.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-resumen-cliente-show',
  templateUrl: './resumen-cliente-show.component.html',
  // styleUrls: ['./resumen-cliente-show.component.scss'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
  .my-custom-class .tooltip-inner {
    background-color: rgb(4, 165, 165);
    font-size: 125%;
  }
  .my-custom-class .arrow::before {
    border-top-color: rgb(4, 165, 165);
  }
  `]

})
export class ResumenClienteShowComponent implements OnInit {

  searchControl: FormControl = new FormControl();

  products;


  startDate = new Date(2019, 0, 1);
  chartDelivery: EChartOption;

  listaResumenCliente: ResumenCliente;
  user: any;
  aceptadas: number;
  rechazadas: number;
  proceso: number;
  espera: number;
  referencias: number;
  tramitesTotales: number;

  columns: any[];

  listaTotalReferencias: any[];
  listaReferencias: any[];

  listaProformas: Proforma[];
  completeProformas: Proforma[];

  mostrarTablaReferencias = false;
  mostrarTablaDetalleReferencia = false;

  fechaActual: string;
  fecha: string;
  fechaCorrecta: string;

  constructor(
    private auth: AuthService,
    private resumenClienteService: ResumenClienteService,
    private proformaService: ProformaService
  ) {
    this.user = this.auth.decode();
    this.fechaActual = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }

  ngOnInit() {
    
    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.filterData(value);
    });


    this.resetValores();
    this.fecha = formatDate(this.fechaActual, 'dd-MM-yyyy', 'en');
    this.resumenClienteService.getResumenCliente(this.user.claveCliente, this.fecha).subscribe(
      (data: any[]) => {

        const dataSeries: any[] = [];
        //let total: number = 0;
        for (const element of data) {
          switch (element.estatus) {
            case EstatusProformaEnum.APROBADO:
              this.aceptadas = element.numeroTramites;
              dataSeries.push({value: element.numeroTramites, name: element.estatus});
              break;
            case EstatusProformaEnum.EN_ESPERA:
              this.espera = element.numeroTramites;
              dataSeries.push({value: element.numeroTramites, name: element.estatus});
              break;
            case EstatusProformaEnum.RECHAZADO:
              this.rechazadas = element.numeroTramites;
              dataSeries.push({value: element.numeroTramites, name: element.estatus});
              break;
            case EstatusProformaEnum.EN_PROCESO:
              this.proceso = element.numeroTramites;
              dataSeries.push({value: element.numeroTramites, name: element.estatus});
              break;
            case EstatusProformaEnum.TRAMITE:
              this.tramitesTotales = element.numeroTramites;
              break;
            case EstatusProformaEnum.REFERENCIA:
              this.referencias = element.numeroTramites;
              break;
          }
          // dataSeries.push({value: element.numeroTramites, name: element.estatus});
        }
        this.InitGraf(dataSeries);
      }
    );

    /*this.proformaService.getProformas().subscribe(data => {
      this.listaProformas = data;
      this.completeProformas = data;
    });*/
  }


  fechaChange() {
    this.mostrarTablaReferencias = false;
      this.resetValores();
    this.fecha = formatDate(this.fechaActual, 'dd-MM-yyyy', 'en');
    this.fechaCorrecta = formatDate(this.fechaActual, 'yyyy-MM-dd', 'en');
    this.resumenClienteService.getResumenCliente(this.user.claveCliente, this.fecha).subscribe(
      (data: any[]) => {
        const dataSeries: any[] = [];
        for (const element of data) {
          switch (element.estatus) {
            case EstatusProformaEnum.APROBADO:
              this.aceptadas = element.numeroTramites;
              dataSeries.push({value: element.numeroTramites, name: element.estatus});
              break;
            case EstatusProformaEnum.EN_ESPERA:
              this.espera = element.numeroTramites;
              dataSeries.push({value: element.numeroTramites, name: element.estatus});
              break;
            case EstatusProformaEnum.RECHAZADO:
              this.rechazadas = element.numeroTramites;
              dataSeries.push({value: element.numeroTramites, name: element.estatus});
              break;
            case EstatusProformaEnum.EN_PROCESO:
              this.proceso = element.numeroTramites;
              dataSeries.push({value: element.numeroTramites, name: element.estatus});
              break;
            case EstatusProformaEnum.TRAMITE:
              this.tramitesTotales = element.numeroTramites;
              break;
            case EstatusProformaEnum.REFERENCIA:
              this.referencias = element.numeroTramites;
              break;
            }
        }
        this.InitGraf(dataSeries);

      });
  }

  mostrarReferencias() {
    this.mostrarTablaReferencias = true;
    this.resumenClienteService.getResumenClienteFechaBusqueda(this.user.claveCliente, this.fecha).subscribe(
      (data: any[]) => {
         console.log(data);
         this.listaTotalReferencias = data;
         this.listaReferencias = data;
      });
  }

  atras(){
    this.mostrarTablaReferencias = true;
    this.mostrarTablaDetalleReferencia = false;
  }

  verReferencia(event) {
    if (event.type == 'click') {
      console.log(event.row);
      this.mostrarTablaDetalleReferencia = true;
      this.resumenClienteService.getFindTramitesByReferenciaAndFechaIngreso(
        this.fecha, this.user.claveCliente, event.row.numReferencia).subscribe(
          (response: any[]) => {
            this.listaProformas = response;
            this.completeProformas = response;
          });
      this.mostrarTablaReferencias = false;
    }
  }

  resetValores() {
    this.aceptadas = 0;
    this.rechazadas = 0;
    this.proceso = 0;
    this.espera = 0;
    this.referencias = 0;
    this.tramitesTotales = 0;
  }

  // datos de la grafica
  InitGraf(myDataSeries: any[]) {
    this.chartDelivery = {
      color: ['#ff7110', '#fdb772', '#fcddbd'],
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['En proceso', 'En espera', 'Aprobado', 'Rechazado']
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

  // buildColumns() {
  //   this.columns = [
  //     { name: 'No. Referencia', prop: 'numReferencia' },
  //     { name: 'Fecha Ingreso', prop: 'fechaIngreso', pipe: 'date' },
  //     { name: 'Aceptadas', prop: 'aceptadas' },
  //     { name: 'Rechazadas', prop: 'rechazadas' },
  //     { name: 'Proceso', prop: 'proceso' },
  //     { name: 'Espera', prop: 'espera' }
  //   ];
  // }

  filterData(val) {

    if(this.mostrarTablaReferencias){
      if (val) {
        val = val.toLowerCase();
      } else {
        return this.listaTotalReferencias = [...this.listaReferencias];
      }
  
      const columns = Object.keys(this.listaReferencias[0]);
  
      if (!columns.length) {
        return;
      }
  
      const rows = this.listaReferencias.filter(function (d) {
        for (let i = 0; i <= columns.length; i++) {
          const column = columns[i];
          // console.log(d[column]);
          if (d[column] && d[column].toString().toLowerCase().search(val) > -1) {
            return true;
          }
        }
      });
      this.listaTotalReferencias = rows;
    }



    if(this.mostrarTablaDetalleReferencia){
      if (val) {
        val = val.toLowerCase();
      } else {
        return this.listaProformas = [...this.completeProformas];
      }
  
      const columns = Object.keys(this.completeProformas[0]);
  
      if (!columns.length) {
        return;
      }
  
      const rows = this.completeProformas.filter(function (d) {
        for (let i = 0; i <= columns.length; i++) {
          const column = columns[i];
          // console.log(d[column]);
          if (d[column] && d[column].toString().toLowerCase().search(val) > -1) {
            return true;
          }
        }
      });
      this.listaProformas = rows;
    }
  

    }


}