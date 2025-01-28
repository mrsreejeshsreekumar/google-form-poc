export interface FormField {
  type: 'text' | 'radio' | 'checkbox';
  label: string;
  options: string[];
}
