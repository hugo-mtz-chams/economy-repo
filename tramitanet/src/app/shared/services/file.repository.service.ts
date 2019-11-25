import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileRepositoryService {
    baseurl = environment.base_api_url;

    constructor( private http: HttpClient ) { }

    listFiles() {
        const api = this.baseurl + '/tramitanet/archivos/listar';
        return this.http.get(api);
    }

    listFolderFiles(folder: string) {
        const api = this.baseurl + '/tramitanet/archivos/listar/' + folder;
        return this.http.get(api);
    }
}
