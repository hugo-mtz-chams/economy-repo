import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
      email: ['gm_motors@gmail.com', Validators.required],
      password: ['cl13nt3', Validators.required]
    });
  }

  signin() {
    this.loading = true;

    setTimeout(() => {
      if ( this.auth.signin(this.signinForm) ) {
        this.toastr.success('Acceso correcto', 'Bienvenido', {progressBar: true});
        this.router.navigateByUrl('/dashboard/v1');
      } else {
        this.toastr.error('Por favor verifica tu usuario y contraseña', 'Acceso denegado!', {progressBar: true});
      }

      this.loading = false;

    }, 1500);

  }

}
