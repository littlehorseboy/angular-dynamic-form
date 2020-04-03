import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionControlService } from '../question-control.service';
import { QuestionBase } from '../model/question-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payload = '';

  constructor(
    private questionControlService: QuestionControlService,
  ) { }

  ngOnInit(): void {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.form.getRawValue());
  }
}
