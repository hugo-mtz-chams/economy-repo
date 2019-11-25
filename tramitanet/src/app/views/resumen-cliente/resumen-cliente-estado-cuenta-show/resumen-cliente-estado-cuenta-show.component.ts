import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EChartOption } from 'echarts';
import * as cloneDeep from 'lodash/cloneDeep';
import { LineChart1  } from 'src/app/shared/charts/barcharts'
import { FileRepositoryService } from 'src/app/shared/services/file.repository.service';
import { AuthService } from 'src/app/shared/services/auth.service';






@Component({
  selector: 'app-resumen-cliente-estado-cuenta-show',
  templateUrl: './resumen-cliente-estado-cuenta-show.component.html',
  styleUrls: ['./resumen-cliente-estado-cuenta-show.component.scss'],
  providers: [ FileRepositoryService ],
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
  archivos: any;

  constructor(
    private fileService: FileRepositoryService,
    private authService: AuthService
    ) {
    this.cargarDocumentos();
   }

  ngOnInit() {}

  mostrarBienvenida() {
    this.bienvenida = !this.bienvenida;
  }

  cargarDocumentos() {
    this.fileService.listFolderFiles(this.authService.getuser().claveCliente).subscribe(
      (listaArchivos) => {
          this.archivos = listaArchivos;
      }
    );
  }

}
