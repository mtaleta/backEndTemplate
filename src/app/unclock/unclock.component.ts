import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unclock',
  templateUrl: './unclock.component.html',
  styleUrls: ['./unclock.component.css']
})
export class UnclockComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.pattern('^[a-zA-Z0-9-_]{5,20}')],
      userId: ['', Validators.pattern('^[a-zA-Z]{1}[1-2]{1}[0-9]{8}$')],
      // day: ['', Validators.pattern('^(0|1)\d{1}[1-9]{1}(0[1-9]|1[0-2])(0[1-9]|1\d|2\d|3[0-1])$')]
    })
  }
  get username() { return this.form.get('username'); }
  get userId() { return this.form.get('userId'); }
  // get day() { return this.form.get('day'); }

  login() {
  }
}
