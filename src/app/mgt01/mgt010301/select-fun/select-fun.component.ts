import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_CHECKBOX_CLICK_ACTION, MatCheckboxChange } from '@angular/material';
import { Observable } from '../../../../../node_modules/rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-select-fun',
  templateUrl: './select-fun.component.html',
  styleUrls: ['./select-fun.component.css'],
  // providers: [
  //   { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' }
  // ]
})
export class SelectFunComponent implements OnInit {
  data$: Observable<any>;

  selectFunForm: FormGroup;

  constructor(public datasvc: DataService) {
    this.selectFunForm = new FormGroup({
      payForAll: new FormControl(false),
      payForBook: new FormControl(false),
      payForMusic: new FormControl(false),
      payForMovie: new FormControl(false)
    })
  }

  ngOnInit() {
    this.data$ = this.datasvc.getData()
  }
}
