import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: string;
  group: string;
  status: string;
  date: string;
  update: string;
  createDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: '01', group: '客服主管', status: 'Biz Checker', date: '2017/09/30 14:00:00', update: '2017/09/30 14:00:00', createDate: '2017/09/30 14:00:00' },
  { id: '02', group: '客服專員', status: 'Biz Maker', date: '2017/09/30 14:00:00', update: '2017/09/30 14:00:00', createDate: '2017/09/30 14:00:00' },
  { id: '03', group: '系統審核主管', status: 'Digital Checker', date: '2017/09/30 14:00:00', update: '2017/09/30 14:00:00', createDate: '2017/09/30 14:00:00' },
  { id: '04', group: '系統管理員', status: 'Digital Maker', date: '2017/09/30 14:00:00', update: '2017/09/30 14:00:00', createDate: '2017/09/30 14:00:00' },
];

@Component({
  selector: 'app-mgt010400',
  templateUrl: './mgt010400.component.html',
  styleUrls: ['./mgt010400.component.css']
})
export class Mgt010400Component implements OnInit {

  selected = '';
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
