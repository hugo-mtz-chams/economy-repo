import { FilePickerAdapter, FilePreviewModel } from 'ngx-awesome-uploader';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpEventType, HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class BasicFilePickerAdapter extends FilePickerAdapter {

    constructor(private http: HttpClient) {
        super();
    }

    uploadFile(fileItem: FilePreviewModel): Observable<any> {
        const form = new FormData();
    form.append('file', fileItem.file);
    const api = 'https://demo-file-uploader.free.beeceptor.com';
    const req = new HttpRequest('POST', api, form, {reportProgress: true});
    return this.http.request(req)
    .pipe(
      map( (res: HttpEvent<any>) => {
          if (res.type === HttpEventType.Response) {
          return res.body.id.toString();
        } else if (res.type ===  HttpEventType.UploadProgress) {
            // Compute and show the % done:
            const UploadProgress = +Math.round((100 * res.loaded) / res.total);
            return UploadProgress;
        }
      })
      );
    }

    removeFile(fileItem: FilePreviewModel): Observable<any> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(100);
            }, 1000);
        });
    }

}