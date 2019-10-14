import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { ProformaService } from 'src/app/shared/services/proforma.service';
import { Proforma } from 'src/app/shared/models/proforma';
import { DatePipe } from '@angular/common';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-resumen-tramite-create',
  templateUrl: './resumen-tramite-create.component.html',
  styleUrls: ['./resumen-tramite-create.component.scss'],
  providers: [ProformaService, DatePipe]
})
export class ResumenTramiteCreateComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;
  listaProformas: Proforma[];
  completeProformas: Proforma[];
  columns: any[];
  searchControl: FormControl = new FormControl();

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private proformaService: ProformaService,
      private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.buildColumns();
    this.buildFormBasic();
    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.filterData(value);
    });
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });

    this.proformaService.getProformas().subscribe(
      (data: Proforma[]) => {
        this.listaProformas = data;
        this.completeProformas = data;
      }
    );
  }

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.toastr.success('Registro Exitoso!', 'Procesando datos.', {progressBar: true});
    }, 3000);
  }

buildColumns() {
  this.columns = [
    { name: 'No. ProForma', prop: 'numProforma' },
    { name: 'No. Referencia', prop: 'numReferencia' },
    { name: 'Fecha Ingreso', prop: 'fechaIngreso', pipe: 'date' },
    { name: 'Descripcion', prop: 'descripcion'},
    { name: 'No. Modelo', prop: 'numModelo'}
  ];
}

filterData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return this.listaProformas = [...this.completeProformas];
    }

    const columns = Object.keys(this.completeProformas[0]);

    if (!columns.length) {
      return;
    }

    const rows = this.completeProformas.filter(function (d) {
      for (let i = 0; i <= columns.length; i++) {
        let column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().search(val) > -1) {
            return true;
        }
      }
    });
    this.listaProformas = rows;
  }
}
