import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

// 調整時機為invalid + dirty即顯示錯誤訊息
export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'app-mgt010401',
  templateUrl: './mgt010401.component.html',
  styleUrls: ['./mgt010401.component.css']
})
export class Mgt010401Component implements OnInit {
  public form: FormGroup;

  selected = '';

  constructor() {
    this.form = new FormGroup({
      userId: new FormControl('', Validators.required),
      username: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^(?=.{3,16}$)[a-z]([\._]?[a-z0-9]+)+$')]),
      userGroup: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      device: new FormControl(''),
      token: new FormControl(''),
      deviceOS: new FormControl('')
    });
  }

  ngOnInit() {

  }
}
