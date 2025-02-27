
export type FieldType = 'text' | 'number' | 'email' | 'tel' | 'date' | 'select' | 'textarea';

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
}

export interface FormSection {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
}
