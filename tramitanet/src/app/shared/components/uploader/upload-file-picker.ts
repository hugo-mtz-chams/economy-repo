import { FilePickerAdapter, FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { NgBlockUI } from 'ng-block-ui';

export class UploaderFilePickerAdapter extends FilePickerAdapter {
    public destinationFolder: string;

    constructor(private http: HttpClient, private toast: ToastrService, private blockUI: NgBlockUI) {
        super();
    }
    public uploadFile(fileItem: FilePreviewModel) {
        const form = new FormData();
        form.append('file', fileItem.file);
        form.append('destinationFolder', this.destinationFolder);
        form.append('fileName', fileItem.fileName);
        const api = environment.base_api_url + '/tramitanet/archivos/adjuntar';
        const req = new HttpRequest('POST', api, form, {reportProgress: true});
        return this.http.request(req)
        .pipe(
        map( (res: HttpEvent<any>) => {
            if (res.type === HttpEventType.Response) {
                this.blockUI.stop();
                this.toast.success('Su archivo se ha procesado correctamente.');
                return '200';
            } else if (res.type ===  HttpEventType.UploadProgress) {
                // Compute and show the % done:
                this.blockUI.start('Estoy procesando el archivo, por favor espera unos momentos');
                const UploadProgress = +Math.round((100 * res.loaded) / res.total);

                return UploadProgress;
            }
        }, error => {
            this.blockUI.stop();
            this.toast.error('Error al procesar el archivo');
            }
        )
        );
    }
    public removeFile(fileItem): Observable<any> {
        const removeApi = 'https://file-remove-demo.free.beeceptor.com';
        return this.http.post(removeApi, {});
    }

}
