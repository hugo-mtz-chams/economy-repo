import { Component, OnInit } from '@angular/core';
import { FileRepositoryService } from 'src/app/shared/services/file.repository.service';
import { UploaderFilePickerAdapter } from 'src/app/shared/components/uploader/upload-file-picker';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { environment } from 'src/environments/environment';

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
  adapter = new UploaderFilePickerAdapter(this.http, this.toaster, this.blockUI);


    constructor(private fileService: FileRepositoryService, private http: HttpClient, private toaster: ToastrService) {
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

    abrirNuevoDirectorio(data: any) {
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
      this.fileService.listFiles().subscribe(
        (listaArchivos) => {
            this.archivos = listaArchivos;
        }
      );
    }
}
