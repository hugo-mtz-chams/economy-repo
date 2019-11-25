import { Component, OnInit } from '@angular/core';
import { FileRepositoryService } from 'src/app/shared/services/file.repository.service';

@Component({
  selector: 'app-lista-archivos',
  templateUrl: './lista-archivos.component.html',
  styleUrls: ['./lista-archivos.component.scss'],
  providers: [ FileRepositoryService ]

})
export class ListaArchivosComponent implements OnInit {
  adjuntar = true;
  archivos: any;
  folderNuevo: string;
  folderBase: string;
    constructor(private fileService: FileRepositoryService) {
      this.adjuntar = false;
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
      this.folderNuevo = event.folder;
    }
}
