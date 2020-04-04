import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { Observable } from 'rxjs';
import { QuestionBase } from './model/question-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService],
})
export class AppComponent {
  questions$: Observable<QuestionBase<string>[]>;

  constructor(
    questionService: QuestionService,
  ) {
    this.questions$ = questionService.getQuestions();
  }
}
