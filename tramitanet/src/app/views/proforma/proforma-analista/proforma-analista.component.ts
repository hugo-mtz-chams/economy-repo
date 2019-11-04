import { Component, OnInit } from '@angular/core';
import { ProformaService } from 'src/app/shared/services/proforma.service';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Proforma } from 'src/app/shared/models/proforma';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proforma-analista',
  templateUrl: './proforma-analista.component.html',
  //styleUrls: ['./proforma-analista.component.scss'],
  providers: [ProformaService, DatePipe],
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
export class ProformaAnalistaComponent implements OnInit {

  bienvenida = true;
  fecha: string;
  fechaActual: string;
  listaProformas: Proforma[];
  completeProformas: Proforma[];
  searchControl: FormControl = new FormControl();


  constructor(private proformaService: ProformaService,
              private auth: AuthService, private router: Router,
              public activatedRoute: ActivatedRoute,
              private toastr: ToastrService) {
    this.fechaActual = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.fecha = formatDate(this.fechaActual, 'dd-MM-yyyy', 'en');
    this.cargarProformas(this.fecha, this.auth.getuser().claveAnalista);
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe(value => {
        this.filterData(value);
    });
  }


  mostrarBienvenida() {
    this.bienvenida = !this.bienvenida;
    return this.bienvenida;
  }

  fechaChange() {
    this.fecha = formatDate(this.fechaActual, 'dd-MM-yyyy', 'en');
    this.cargarProformas(this.fecha, this.auth.getuser().claveAnalista);
  }

  cargarProformas(fecha: any, claveAnalista: any) {

    this.proformaService.getFindProformasByFechaAndAnalista( fecha, claveAnalista).subscribe(
      (data: Proforma[]) => {
          this.listaProformas = data;
          this.completeProformas = data;
      });
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

  cargarArchivo() {
    this.router.navigate(['create'], { relativeTo: this.activatedRoute });
  }

  exportarArchivo() {
    this.proformaService.downloadAnalystFile( this.auth.getuser().claveAnalista , this.fecha ).subscribe(
      (data: ArrayBuffer) => {
        const myBlob: Blob = new Blob([ data]);
        this.downloadFile(myBlob);
      }, error => {
        if ( error.status === 400 ) {
          this.toastr.error('No se cuenta con información para exportar en la fecha seleccionada', 
                            'Ups tuvimos un problema', {progressBar: true});
        }
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
     const currentDate = formatDate(Date.now(), 'dd-MM-yyyyHHmmss', 'en');

     const fileName = this.auth.getuser().claveAnalista + '_' + this.fecha + '_' + currentDate + '.xlsx';
     a.download = fileName;
     a.click();
     window.URL.revokeObjectURL(url);
     a.remove(); // remove the element
   }

}
