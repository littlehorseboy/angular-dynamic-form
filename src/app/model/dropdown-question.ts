import { QuestionBase, Option } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: { key: string, value: string }[] = [];

  constructor(option: Option<string> = {}) {
    super(option);
    this.options = option.options || [];
  }
}
