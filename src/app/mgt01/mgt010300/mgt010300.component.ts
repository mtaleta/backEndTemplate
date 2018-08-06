import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  cr: string;
  system: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Access Control	', cr:'v', system: '' },
  { name: 'Group management	', cr: 'v', system: ''},
  { name: 'Group function management - Function name editor	', cr: 'v', system: '' },
  { name: 'Group function management	', cr: '', system: '' },
  { name: 'Personal setting	', cr:'v', system: 'v' },
  { name: 'Push platform	', cr:'', system: '' },
  { name: 'APP Set up	', cr:'v', system: 'v' },
  { name: 'Channel Set Up	', cr:'v', system: '' },
  { name: 'API Set Up	', cr:'v', system: '' },
];

@Component({
  selector: 'app-mgt010300',
  templateUrl: './mgt010300.component.html',
  styleUrls: ['./mgt010300.component.css']
})
export class Mgt010300Component implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
