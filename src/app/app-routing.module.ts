import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './componets/form-builder/form-builder.component';
import { FormPreviewComponent } from './componets/form-preview/form-preview.component';

const routes: Routes = [
  { path: 'form', component: FormBuilderComponent },
  { path: 'preview', component: FormPreviewComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
