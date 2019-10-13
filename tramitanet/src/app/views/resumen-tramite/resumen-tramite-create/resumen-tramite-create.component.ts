import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { ProformaService } from 'src/app/shared/services/proforma.service';
import { Proforma } from 'src/app/shared/models/proforma';

@Component({
  selector: 'app-resumen-tramite-create',
  templateUrl: './resumen-tramite-create.component.html',
  styleUrls: ['./resumen-tramite-create.component.scss'],
  providers: [ProformaService]
})
export class ResumenTramiteCreateComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;
  listaProformas: Proforma[];
  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private proformaService: ProformaService
  ) { }

  ngOnInit() {
    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    });

    this.proformaService.getProformas().subscribe(
      (data: Proforma[]) => {
        this.listaProformas = data;
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

}
