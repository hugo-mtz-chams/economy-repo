import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { CustomFormsModule } from 'ng2-validation';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';


import { BasicFormComponent } from './basic-form/basic-form.component';
import { TagInputsComponent } from './tag-inputs/tag-inputs.component';
import { AppImgCropperComponent } from './img-cropper/img-cropper.component';
import { ImageCropperModule } from "ngx-img-cropper";
import { WizardComponent } from './wizard/wizard.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { FormWizardModule } from 'src/app/shared/components/form-wizard/form-wizard.module';
import { InputGridsComponent } from './input-grids/input-grids.component';
import { FormActionsComponent } from './form-actions/form-actions.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { InputGroupComponent } from './input-group/input-group.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    SharedComponentsModule,
    NgbModule,
    TagInputModule,
    ImageCropperModule,
    FormWizardModule,
    FormsRoutingModule
  ],
  declarations: [BasicFormComponent, TagInputsComponent, AppImgCropperComponent, WizardComponent, InputGridsComponent, FormActionsComponent, FormValidationComponent, FormLayoutsComponent, InputGroupComponent]
})
export class AppFormsModule { }
