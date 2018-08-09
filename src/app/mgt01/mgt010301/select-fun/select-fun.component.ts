import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_CHECKBOX_CLICK_ACTION, MatCheckboxChange } from '@angular/material';
import { Observable } from '../../../../../node_modules/rxjs';
import { FormGroup, FormControl } from '@angular/forms';

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


  constructor() {
    this.selectFunForm = new FormGroup({
      payForAll: new FormControl(false),
      payForBook: new FormControl(false),
      payForMusic: new FormControl(false),
      payForMovie: new FormControl(false)
    })
  }

  ngOnInit() {}


  data = [
    {
      "title": "Access Control",
      "name": [
        "Group management",
        "Group function management - Function name editor",
        "Group function management",
        "Personal setting"
      ]
    },
    {
      "title": "Push platform",
      "name": [
        "APP Set up",
        "Channel Set up",
        "API Set up"
      ]
    },
    {
      "title": "Notificatin",
      "name": [
        "Notificatin Set Up"
      ]
    },
    {
      "title": "Marketing Message",
      "name": [
        "Import Marketing Customer List",
        "Marketing Message Establishment",
        "Marketing Message Inquiry",
        "Marketing Message Approval",
        "Marketing Message History Records Inquiry"
      ]
    }
  ];
}
