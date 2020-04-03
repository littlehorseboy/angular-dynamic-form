import { QuestionBase, Option } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(option: Option<string> = {}) {
    super(option);
    this.type = option.type || '';
  }
}
