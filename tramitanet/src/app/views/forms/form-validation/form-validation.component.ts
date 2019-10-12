import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  form: FormGroup;
  BasicForm1: FormGroup;


  BasicForm1Submited: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = new FormGroup({
      field: new FormControl('', CustomValidators.range([5, 9]))
    });

    let inputBasic = new FormControl('', [Validators.required]);
    let inputIcon = new FormControl('', [Validators.required]);
    let inputGroup = new FormControl('', [Validators.required]);
    let inputPassword = new FormControl('', [Validators.required, Validators.minLength(5)]);
    let inputPasswordConfirm = new FormControl('', CustomValidators.equalTo(inputPassword));
    let inputEmail = new FormControl('', [Validators.required, CustomValidators.email]);
    let inputEmailConfirm = new FormControl('', [Validators.required, CustomValidators.email, CustomValidators.equalTo(inputEmail)]);
    let inputMinChar = new FormControl('', [Validators.required, Validators.minLength(5)]);
    let inputMaxChar = new FormControl('', [Validators.required, Validators.maxLength(15)]);
    let inputMinNumber = new FormControl('', [Validators.required, CustomValidators.min(5)]);
    let inputMaxNumber = new FormControl('', [Validators.required, CustomValidators.max(255)]);
    let textareaBasic = new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(200)]);

    let password = new FormControl('', [Validators.required, Validators.minLength(5), CustomValidators.email]);
    let certainPassword = new FormControl('', CustomValidators.equalTo(password));

    this.form = new FormGroup({
      inputBasic: inputBasic,
      inputIcon: inputIcon,
      inputGroup: inputGroup,
      inputPassword: inputPassword,
      inputPasswordConfirm: inputPasswordConfirm,
      inputEmail: inputEmail,
      inputEmailConfirm: inputEmailConfirm,
      inputMinChar: inputMinChar,
      inputMaxChar: inputMaxChar,
      inputMinNumber: inputMinNumber,
      inputMaxNumber: inputMaxNumber,
      textareaBasic: textareaBasic,
      password: password,

    });

  }

  ngOnInit() {

    this.BasicForm1 = this.formBuilder.group({
      basic1: ['', Validators.required],
      basic2: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get basic1() { return this.BasicForm1.get('basic1'); }
  get basic2() { return this.BasicForm1.get('basic2'); }

  private onSubmitForm1() {
    this.BasicForm1Submited = true;
  }

}
