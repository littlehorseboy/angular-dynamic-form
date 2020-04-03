import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { QuestionBase } from './model/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[]) {
    const group: { [key: string]: FormControl } = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });

    return new FormGroup(group);
  }
}
