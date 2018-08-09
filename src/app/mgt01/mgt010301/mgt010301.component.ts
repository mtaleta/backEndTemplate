import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatCheckboxChange } from '@angular/material';
import { AddDialog } from './add-dialog.component'
import { SelectFunComponent } from './select-fun/select-fun.component';

// 調整時機為invalid + dirty即顯示錯誤訊息
export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'app-mgt010301',
  templateUrl: './mgt010301.component.html',
  styleUrls: ['./mgt010301.component.css']
})

export class Mgt010301Component implements OnInit {
  public form: FormGroup;

  selected = '';

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.form = new FormGroup({
      userGroup: new FormControl('', Validators.required),
    });
  }
  showAddPostDialog(): void {
    const dialogRef = this.dialog.open(AddDialog, {
      width: '550px',
      hasBackdrop: true,
      backdropClass: 'bg',
    });
  }

  showSelectFunction(): void {
    const dialogRef = this.dialog.open(SelectFunComponent, {
      width: '650px',
      hasBackdrop: true,
      backdropClass: 'bg',
    });
  }

  ngOnInit() {
  }
}
