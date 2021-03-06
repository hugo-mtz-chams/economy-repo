import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleEnum } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
  loading: boolean;
  signinForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['admin@company.com', Validators.required],
      password: ['admin', Validators.required]
    });
  }

  signin() {
    this.loading = true;

    setTimeout(() => {
      if ( this.auth.signin(this.signinForm) ) {
        this.toastr.success('Acceso correcto', 'Bienvenido', {progressBar: true});
        const user = this.auth.getuser();
        switch ( user.role ) {
          case RoleEnum.Analista:
              console.log(RoleEnum.Analista);
              this.router.navigateByUrl('/proforma');
            break;
          case RoleEnum.Capturista:
              console.log(RoleEnum.Capturista);
              this.router.navigateByUrl('/resumen-tramite');
              break;
          case RoleEnum.Cliente:
              console.log(RoleEnum.Cliente);
              this.router.navigateByUrl('/resumen-cliente');
              break;
          default:
              this.router.navigateByUrl('/dashboard/v1');
        }
      } else {
        this.toastr.error('Por favor verifica tu usuario y contraseña', 'Acceso denegado!', {progressBar: true});
      }

      this.loading = false;

    }, 1500);

  }

}
