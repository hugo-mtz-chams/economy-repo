import { Component, OnInit } from '@angular/core';
import { UploadValidationErrorEnum } from 'src/app/shared/enums/upload.enum';
import { ErrorMessages } from 'src/app/shared/constants/error.messages';
import { ToastrService } from 'ngx-toastr';
import { ValidationError } from 'ngx-awesome-uploader';
import { HttpClient } from '@angular/common/http';
import { BasicFilePickerAdapter } from 'src/app/shared/components/uploader/basic-file-picker';

@Component({
  selector: 'app-acero',
  templateUrl: './acero.component.html',
  styleUrls: ['./acero.component.scss']
})
export class AceroComponent implements OnInit {

  adapter = new BasicFilePickerAdapter(this.http);
  private fileUploaded = false;
  constructor(private http: HttpClient, private toaster: ToastrService) { }

  ngOnInit() {
  }


  onValidationError(error: ValidationError) {
    if ( error.error === UploadValidationErrorEnum.EXTENSIONS ) {
      this.toaster.error( ErrorMessages.INVALID_EXTENSION, 'Documento inválido',{progressBar: true});
    } else {
      this.toaster.error('Se presentado un error: ', error.error, {progressBar: true});
    }
  }

  uploadSuccess(event: any) {
    this.fileUploaded = true;
  }

  startProcessing() {
    this.toaster.info('Iniciando el procesamiento');
  }
}
