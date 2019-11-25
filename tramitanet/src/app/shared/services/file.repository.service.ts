import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    downloadSelectedFile(claveCliente: string, nombreArchivo: string) {
        const api = this.baseurl + '/tramitanet/download/' + claveCliente + '/' + nombreArchivo;
        const httpOptions = {
            headers: new HttpHeaders({ 'responseType':  'ResponseContentType.Blob',
            'Content-Type':  'application/pdf'}), responseType: 'arraybuffer' as 'json'
            };
        return this.http.get(api, httpOptions);
    }
}
