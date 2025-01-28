import { Component, OnInit } from '@angular/core';
import { FormField } from 'src/app/interfaces/form-field';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  formName: string = '';
  fields: FormField[] = [];

  ngOnInit(): void {
  }

  // Add a new field
  addField(): void {
    this.fields.push({
      label: '',
      type: 'text',
      options: []
    });
  }

  // Remove a field
  removeField(index: number): void {
    this.fields.splice(index, 1);
  }

  // Add an option to a radio/checkbox field
  addOption(fieldIndex: number): void {
    this.fields[fieldIndex].options?.push('');
  }

  // Remove an option from a radio/checkbox field
  removeOption(fieldIndex: number, optionIndex: number): void {
    this.fields[fieldIndex].options?.splice(optionIndex, 1);
  }

  // Save the form (to localStorage for persistence)
  saveForm(): void {
    const form = {
      name: this.formName,
      fields: this.fields
    };

    // Save form data in the browser's local storage
    localStorage.setItem('formData', JSON.stringify(form));

    alert('Form saved successfully!');

    // Optionally, clear fields after saving
    // this.formName = '';
    // this.fields = [];
  }
}
