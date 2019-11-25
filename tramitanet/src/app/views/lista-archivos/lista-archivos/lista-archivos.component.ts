import { Component, OnInit } from '@angular/core';
import { FileRepositoryService } from 'src/app/shared/services/file.repository.service';
import { UploaderFilePickerAdapter } from 'src/app/shared/components/uploader/upload-file-picker';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';
import { ValidationError } from 'ngx-awesome-uploader';
import { UploadValidationErrorEnum } from 'src/app/shared/enums/upload.enum';
import { ErrorMessages } from 'src/app/shared/constants/error.messages';

@Component({
  selector: 'app-lista-archivos',
  templateUrl: './lista-archivos.component.html',
  styleUrls: ['./lista-archivos.component.scss'],
  providers: [ FileRepositoryService ]

})
export class ListaArchivosComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  adjuntar = true;
  archivos: any;
  folderNuevo: string;
  folderBase: string;
  baseRelativePath = 'ROOT';
  relativePath = 'ROOT';
  currentFolder: string;
  selectedFolder: string;
  selectedFilename: string;
  adapter = new UploaderFilePickerAdapter(this.http, this.toaster, this.blockUI);


    constructor(private fileService: FileRepositoryService, private http: HttpClient,
      private toaster: ToastrService, private toastr: ToastrService) {
      this.adjuntar = false;
      this.folderBase = environment.baseFolder;
      this.currentFolder = this.folderBase;
    }

    ngOnInit(): void {
        this.fileService.listFiles().subscribe(
            (listaArchivos) => {
                this.archivos = listaArchivos;
            }
        );
    }

    adjuntarArchivos(event: any) {
      this.adjuntar = true;
      this.folderNuevo = event ? event.folder : this.folderNuevo;
    }

    ocultarAdjuntar() {
      this.adjuntar = false;
    }

    abrirNuevoDirectorio(data: any) {
      this.selectedFolder = data.nombreArchivo;
      this.currentFolder = this.currentFolder + '/' + data.nombreArchivo;
      this.relativePath = this.relativePath + '/' + data.nombreArchivo;
      this.adapter.destinationFolder = this.relativePath;
      this.fileService.listFolderFiles(data.nombreArchivo).subscribe(
        (listaArchivos) => {
            this.archivos = listaArchivos;
        }
      );
    }

    back() {
      this.relativePath = this.baseRelativePath;
      this.selectedFolder = '';
      this.fileService.listFiles().subscribe(
        (listaArchivos) => {
            this.archivos = listaArchivos;
            if ( this.adjuntar ) {
              this.adjuntar = false;
            }
        }
      );
    }

    download(row: any) {
      this.selectedFilename = row.nombreArchivo;
      this.fileService.downloadSelectedFile(this.selectedFolder, row.nombreArchivo).subscribe(
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

     onValidationError(error: ValidationError) {
      if ( error.error === UploadValidationErrorEnum.EXTENSIONS ) {
        this.toaster.error( ErrorMessages.INVALID_UPLOAD_PDF_EXTENSION, 'Documento inválido', {progressBar: true});
      } else {
        this.toaster.error('Se presentado un error: ', error.error, {progressBar: true});
      }
    }

    uploadSuccess(event: any) {

    }
}
