import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-resumen-tramite-create',
  templateUrl: './resumen-tramite-create.component.html',
  styleUrls: ['./resumen-tramite-create.component.scss']
})
export class ResumenTramiteCreateComponent implements OnInit {

  formBasic: FormGroup;
  loading: boolean;
  constructor(
      private fb: FormBuilder,
      private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.buildFormBasic();
  }

  buildFormBasic() {
    this.formBasic = this.fb.group({
      experience: []
    })
  }

  submit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.toastr.success('Registro Exitoso!', 'Procesando datos.', {progressBar: true});
    }, 3000)
  }

}
