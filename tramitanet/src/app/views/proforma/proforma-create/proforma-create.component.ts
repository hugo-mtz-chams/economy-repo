import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomFilePickerAdapter } from 'src/app/shared/components/uploader/custom-file-picker-adapter';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ValidationError } from 'ngx-awesome-uploader';
import { UploadValidationErrorEnum } from 'src/app/shared/enums/upload.enum';
import { ErrorMessages } from 'src/app/shared/constants/error.messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proforma-create',
  templateUrl: './proforma-create.component.html',
  // styleUrls: ['./proforma-create.component.scss']
  styles: [`
  .my-custom-class .tooltip-inner {
    background-color: rgb(141, 223, 76);
    font-size: 125%;
    color: grey;
  }
  .my-custom-class .tooltip-arrow {
    background-color: rgb(141, 223, 76);
    border-top-color: rgb(141, 223, 76);
  }
  `]
})
export class ProformaCreateComponent implements OnInit {
  adapter = new CustomFilePickerAdapter(this.http, this.toastr);
  manual = false;
  form: FormGroup;

  constructor(private http: HttpClient, private toaster: ToastrService,
              private router: Router,
              public activatedRoute: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.form = new FormGroup({
      numProforma: new FormControl('', Validators.required),
      numReferencia: new FormControl('', Validators.required),
      fechaIngreso: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      numModelo: new FormControl('', Validators.required),

      aduana: new FormControl('', Validators.required),
      fraccion: new FormControl('', Validators.required),
      numFactura: new FormControl('', Validators.required),
      fechaFactura: new FormControl('', Validators.required),
      umc: new FormControl('', Validators.required),
      cantidadUMC: new FormControl('', Validators.required),
      factorConv: new FormControl('', Validators.required),
      cantidadUMT: new FormControl('', Validators.required),


      valorAntDesc: new FormControl('', Validators.required),
      factorDesc: new FormControl('', Validators.required),

      moneda: new FormControl('', Validators.required),
      valorMercancia: new FormControl('', Validators.required),
      precioUnitario: new FormControl('', Validators.required),
      paisExportador: new FormControl('', Validators.required),
      paisOrigen: new FormControl('', Validators.required),
      valorTotal: new FormControl('', Validators.required),
      valorPrecioTotal: new FormControl('', Validators.required),
      nombreExportador: new FormControl('', Validators.required),
      domicilio: new FormControl('', Validators.required),
      observaciones: new FormControl('', Validators.required),


      fraccionMala: new FormControl('', Validators.required),
      precioMinimo: new FormControl('', Validators.required),
      faVetada: new FormControl('', Validators.required),
      precioEstimado: new FormControl('', Validators.required),
      preDictamen: new FormControl('', Validators.required),
      numSolicitud: new FormControl(''),
      permiso: new FormControl('', null),
      inicioVigencia: new FormControl('', null)
    });
  }

  onValidationError(error: ValidationError) {
    if ( error.error === UploadValidationErrorEnum.EXTENSIONS ) {
      this.toaster.error( ErrorMessages.INVALID_EXTENSION, 'Documento inválido', {progressBar: true});
    } else {
      this.toaster.error('Se presentado un error: ', error.error, {progressBar: true});
    }
  }

  changeManual() {
    this.manual = !this.manual;
  }

  regresar() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
