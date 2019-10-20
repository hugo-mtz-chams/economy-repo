import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { ProformaService } from 'src/app/shared/services/proforma.service';
import { Proforma } from 'src/app/shared/models/proforma';
import { DatePipe } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { CustomFilePickerAdapter } from 'src/app/shared/components/uploader/custom-file-picker-adapter';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';




@Component({
  selector: 'app-resumen-tramite-create',
  templateUrl: './resumen-tramite-create.component.html',
  styleUrls: ['./resumen-tramite-create.component.scss'],
  providers: [ProformaService, DatePipe],
  encapsulation: ViewEncapsulation.None,
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
export class ResumenTramiteCreateComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;
  listaProformas: Proforma[];
  completeProformas: Proforma[];
  columns: any[];
  searchControl: FormControl = new FormControl();

  importar: boolean = false;
  adapter = new CustomFilePickerAdapter(this.http);

  fechaActual: string;
  fecha: string;
  // fechaCorrecta: string;
  user; any;

  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private proformaService: ProformaService,
      private datePipe: DatePipe,
      private http: HttpClient,
    private auth: AuthService
      
  ) { 
    this.fechaActual = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.user = this.auth.getuser();
    this.fecha = formatDate(this.fechaActual, 'dd-MM-yyyy', 'en');
    // this.fechaCorrecta = formatDate(this.fechaActual, 'yyyy-MM-dd', 'en');
    this.cargarProformas(this.fecha,this.user.claveCapturista);
  }

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

  fechaChange() {
    this.fecha = formatDate(this.fechaActual, 'dd-MM-yyyy', 'en');
    // this.fechaCorrecta = formatDate(this.fechaActual, 'yyyy-MM-dd', 'en');
    this.cargarProformas(this.fecha, this.user.claveCapturista);
  }

  cargarProformas(fecha: any, claveCapturista: any) {

    this.proformaService.getFindProformasByFechaAndCapturista( fecha, claveCapturista).subscribe(
      (data: Proforma[]) => {
          this.listaProformas = data;
          this.completeProformas = data;
      });
}


  // funcionalidad para importar archivo

  cargarArchivo() {
    this.importar = !this.importar;
  }

  exportarArchivo() {
    this.proformaService.downloadCapturistFile( this.user.claveCapturista , this.fecha ).subscribe(
      (data) => {
        const myBlob: Blob = new Blob([(<any>data)._body]);
        this.downloadFile(myBlob);
      }, error => {
        console.log('Error downloading the file.', error);
      }, () => { console.log('Error.'); }
    );
  }



  downloadFile(data: Blob) {
    var url = window.URL.createObjectURL(new Blob([data]));
     // Debe haber una manera mejor de hacer esto...
     var a = document.createElement('a');
     document.body.appendChild(a);
     a.setAttribute('style', 'display: none');
     a.href = url;
     a.download = 'Articulos.xlsx';
     a.click();
     window.URL.revokeObjectURL(url);
     a.remove(); // remove the element
   }

   // Error handling
   errorHandler ( error ) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
        // Get client-side error
        errorMessage = error.error.message;
    } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return errorMessage;
}

}
