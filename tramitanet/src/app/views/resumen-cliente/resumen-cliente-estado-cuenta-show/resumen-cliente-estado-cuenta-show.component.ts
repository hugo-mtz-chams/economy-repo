import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EChartOption } from 'echarts';
import * as cloneDeep from 'lodash/cloneDeep';
import { LineChart1  } from 'src/app/shared/charts/barcharts'
import { FileRepositoryService } from 'src/app/shared/services/file.repository.service';
import { AuthService } from 'src/app/shared/services/auth.service';

import { ToastrService } from 'ngx-toastr';


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
    selectedFilename: string;
    selectedFolder: string;


  constructor(
    private fileService: FileRepositoryService,
    private authService: AuthService,
    private toaster: ToastrService,
    private toastr: ToastrService
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

  download(row: any) {
    this.selectedFilename = this.authService.getuser().claveCliente;
    this.fileService.downloadSelectedFile(this.selectedFilename, row.nombreArchivo).subscribe(
      (data: ArrayBuffer) => {
        const myBlob: Blob = new Blob([ data]);
        this.downloadFile(myBlob, this.selectedFilename);
      }, error => {
        if ( error.status === 400 ) {
          this.toastr.error('No se cuenta con información para exportar en la fecha seleccionada',
                            'Ups tuvimos un problema', {progressBar: true});
        }
        console.log('Error downloading the file.', error);
      }, () => { console.log('Error.');
    });
  }

  downloadFile(data: Blob, name: string) {
    const url = window.URL.createObjectURL(new Blob([data]));
     // Debe haber una manera mejor de hacer esto...
     const a = document.createElement('a');
     document.body.appendChild(a);
     a.setAttribute('style', 'display: none');
     a.href = url;

     const fileName = name;
     a.download = fileName;
     a.click();
     window.URL.revokeObjectURL(url);
     a.remove(); // remove the element
   }

}
