import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: string;
  name: string;
  authorization: string;
  date: string;
  creator: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: '01', name: '客服主管', authorization: 'Biz Checker', date: '2017/09/30 14:00:00', creator: 'Alex' },
  { id: '02', name: '客服專員', authorization: 'Biz Maker', date: '2017/09/30 14:00:00', creator: 'Alex' },
  { id: '03', name: '系統審核主管', authorization: 'Digital Checker', date: '2017/09/30 14:00:00', creator: 'Alex' },
  { id: '04', name: '系統管理員', authorization: 'Digital Maker', date: '2017/09/30 14:00:00', creator: 'Alex' },
];

@Component({
  selector: 'app-mgt010100',
  templateUrl: './mgt010100.component.html',
  styleUrls: ['./mgt010100.component.css']
})

export class Mgt010100Component implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
