import { Component, OnInit } from '@angular/core';
import { FileRepositoryService } from 'src/app/shared/services/file.repository.service';

@Component({
  selector: 'app-lista-archivos',
  templateUrl: './lista-archivos.component.html',
  styleUrls: ['./lista-archivos.component.scss'],
  providers: [ FileRepositoryService ]

})
export class ListaArchivosComponent implements OnInit {

  archivos: any;
    constructor(private fileService: FileRepositoryService) {
    }

    ngOnInit(): void {
        this.fileService.listFiles().subscribe(
            (listaArchivos) => {
                this.archivos = listaArchivos;
            }
        );
    }

}
