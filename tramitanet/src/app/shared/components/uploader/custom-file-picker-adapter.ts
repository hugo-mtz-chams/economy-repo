import { FilePickerAdapter, FilePreviewModel } from 'ngx-awesome-uploader';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

export class CustomFilePickerAdapter extends FilePickerAdapter {

    constructor(private http: HttpClient, private toast: ToastrService) {
        super();
    }
    public uploadFile(fileItem: FilePreviewModel) {
        const form = new FormData();
        form.append('file', fileItem.file);
        const api = environment.base_api_url + '/tramitanet/proformas/procesaArchivo';
        const req = new HttpRequest('POST', api, form, {reportProgress: true});
        return this.http.request(req)
        .pipe(
        map( (res: HttpEvent<any>) => {
            if (res.type === HttpEventType.Response) {
                this.toast.success('Su archivo se ha cargado correctamente.');
                return '200';
            } else if (res.type ===  HttpEventType.UploadProgress) {
                // Compute and show the % done:
                const UploadProgress = +Math.round((100 * res.loaded) / res.total);
                if ( UploadProgress === 100 ) {
                    //
                }
                return UploadProgress;
            }
        }, (error) => {
            this.toast.error('Error al procesar el archivo');
            }
        ), catchError((err, caught) => {
            this.toast.error('Error al procesar el archivo: ' + err.error);
            return '400';
          })
        );
    }
    public removeFile(fileItem): Observable<any> {
        const removeApi = 'https://file-remove-demo.free.beeceptor.com';
        return new Observable();
    }

}
