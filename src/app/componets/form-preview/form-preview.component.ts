import { Component, OnInit } from '@angular/core';
import { FormField } from 'src/app/interfaces/form-field';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss']
})
export class FormPreviewComponent implements OnInit {

  formStructure: FormField[] = [];

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.formStructure = this.formService.getFormStructure();
  }


}
