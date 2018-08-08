import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']

})
export class AddDialog {
  constructor(public dialogRef: MatDialogRef<AddDialog>){}

}

