import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['test@example.com', Validators.required],
      password: ['1234', Validators.required]
    })
  }

  signin() {
    this.loading = true;

    setTimeout(() => {
      this.auth.signin();
      this.router.navigateByUrl('/dashboard/v1');
      this.loading = false;
    }, 1500);

  }

}
