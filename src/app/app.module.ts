import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './componets/form-builder/form-builder.component';
import { FormPreviewComponent } from './componets/form-preview/form-preview.component';
import { FormResponsesComponent } from './componets/form-responses/form-responses.component';
import { FormComponent } from './services/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormPreviewComponent,
    FormResponsesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
