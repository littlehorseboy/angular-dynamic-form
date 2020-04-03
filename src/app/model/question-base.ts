export interface Option<T> {
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  options?: { key: string, value: string }[];
}

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: { key: string, value: string }[];

  constructor(option: Option<T> = {}) {
    this.value = option.value;
    this.key = option.key || '';
    this.label = option.label || '';
    this.required = !!option.required;
    this.order = option.order ? 1 : option.order;
    this.controlType = option.controlType || '';
    this.type = option.type || '';
  }
}
