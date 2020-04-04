import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { QuestionBase } from './model/question-base';
import { DropdownQuestion } from './model/dropdown-question';
import { TextboxQuestion } from './model/textbox-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getQuestions(): Observable<QuestionBase<string>[]> {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'solid', },
          { key: 'great', value: 'great', },
          { key: 'good', value: 'good', },
          { key: 'unproven', value: 'unproven', },
        ],
        order: 3,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
