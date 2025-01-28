import { Injectable } from '@angular/core';
import { FormField } from '../interfaces/form-field';
import { FormResponse } from '../interfaces/form-response';

@Injectable({
  providedIn: 'root'
})
export class FormService {
 /**
   * Saves the form structure to localStorage.
   * @param form The form structure to save.
   */
 saveFormStructure(form: FormField[]): void {
  localStorage.setItem('formStructure', JSON.stringify(form));
}

/**
 * Retrieves the form structure from localStorage.
 * @returns The form structure.
 */
getFormStructure(): FormField[] {
  const form = localStorage.getItem('formStructure');
  return form ? JSON.parse(form) : [];
}

/**
 * Saves form responses to localStorage.
 * @param responses The responses to save.
 */
saveResponses(responses: FormResponse[]): void {
  localStorage.setItem('formResponses', JSON.stringify(responses));
}

/**
 * Retrieves form responses from localStorage.
 * @returns The saved responses.
 */
getResponses(): FormResponse[] {
  const responses = localStorage.getItem('formResponses');
  return responses ? JSON.parse(responses) : [];
}
}
