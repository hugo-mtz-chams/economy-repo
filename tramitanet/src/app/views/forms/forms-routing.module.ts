import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { TagInputsComponent } from './tag-inputs/tag-inputs.component';
import { AppImgCropperComponent } from './img-cropper/img-cropper.component';
import { WizardComponent } from './wizard/wizard.component';
import { InputGridsComponent } from './input-grids/input-grids.component';
import { FormActionsComponent } from './form-actions/form-actions.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { InputGroupComponent } from './input-group/input-group.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicFormComponent
  },
  {
    path: 'input-group',
    component: InputGroupComponent
  },
  {
    path: 'tag-input',
    component: TagInputsComponent
  },
  {
    path: 'input-grids',
    component: InputGridsComponent
  },
  {
    path: 'actions',
    component: FormActionsComponent
  },
  {
    path: 'wizard',
    component: WizardComponent
  },
  {
    path: 'validation',
    component: FormValidationComponent
  },
  {
    path: 'layouts',
    component: FormLayoutsComponent
  },
  {
    path: 'img-cropper',
    component: AppImgCropperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
