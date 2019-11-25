import { Component, OnInit } from '@angular/core';
import { UploadValidationErrorEnum } from 'src/app/shared/enums/upload.enum';
import { ErrorMessages } from 'src/app/shared/constants/error.messages';
import { ToastrService } from 'ngx-toastr';
import { ValidationError } from 'ngx-awesome-uploader';
import { HttpClient } from '@angular/common/http';
import { ValidationFilePickerAdapter } from 'src/app/shared/components/uploader/validation-file-picker';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { ProformaService } from 'src/app/shared/services/proforma.service';

@Component({
  selector: 'app-acero',
  templateUrl: './acero.component.html',
  styleUrls: ['./acero.component.scss'],
  providers: [ProformaService]
})
export class AceroComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  adapter = new ValidationFilePickerAdapter(this.http, this.toaster, this.blockUI);
  private fileUploaded = false;
  constructor(private http: HttpClient, private toaster: ToastrService, private proformaService: ProformaService) { }
  listaErrores: any;

  ngOnInit() {
    this.adapter.concluyeValidacion.subscribe(
      (idArchivoValidado) => {
        if ( idArchivoValidado ) {
          this.proformaService.listErrorsByFile(idArchivoValidado).subscribe(
            (data) => {
              this.listaErrores = data;
            }
          );
        }
      }
    );
  }


  onValidationError(error: ValidationError) {
    if ( error.error === UploadValidationErrorEnum.EXTENSIONS ) {
      this.toaster.error( ErrorMessages.INVALID_EXTENSION, 'Documento inválido', {progressBar: true});
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
