import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomFilePickerAdapter } from 'src/app/shared/components/uploader/custom-file-picker-adapter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proforma-create',
  templateUrl: './proforma-create.component.html',
  styleUrls: ['./proforma-create.component.scss']
})
export class ProformaCreateComponent implements OnInit {
  adapter = new CustomFilePickerAdapter(this.http);
  manual = false;
  form: FormGroup;

  constructor(private http: HttpClient) { }

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


  changeManual() {
    this.manual = !this.manual;
  }

}
