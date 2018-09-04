import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  nameEn: string;
  date: string;
  updater: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: '權限管理	', nameEn: 'Access Control', date: '', updater: '' },
  { name: '人員群組管理	', nameEn: 'Group Management', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: '群組功能管理-功能名稱編輯', nameEn: 'Group Function Management - Function Name Editor', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: '群組功能管理-群組功能管理', nameEn: '	Group Function Management', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: '人員設定', nameEn: '	Group Function Management', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: '推播平台管理', nameEn: 'Push platform', date: '', updater: '' },
  { name: 'App 設定', nameEn: 'App Set Up', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: 'Channel 設定', nameEn: 'Channel Set Up', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: 'Api 設定', nameEn: 'Api Set Up	', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: '通知項目管理', nameEn: 'Notificatin', date: '', updater: '' },
  { name: '通知項目設定', nameEn: 'Notificatin Set Up', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: '報表', nameEn: 'Report', date: '', updater: '' },
  { name: '行銷類報表	', nameEn: 'MIS Report', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: '行銷類報表	', nameEn: 'MIS Report', date: '2017/09/30 14:00:00', updater: 'Alex' },
  { name: '行銷類報表	', nameEn: 'MIS Report', date: '2017/09/30 14:00:00', updater: 'Alex' },
];

@Component({
  selector: 'app-mgt010200',
  templateUrl: './mgt010200.component.html',
  styleUrls: ['./mgt010200.component.css']
})
export class Mgt010200Component implements OnInit {

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  data = [
    {
      "title": "Access Control",
      "titleTw": "權限管理",
      "name": [
        "Group management",
        "Group function management - Function name editor",
        "Group function management",
        "Personal setting"
      ],
      "nameTw": [
        "人員群組管理",
        "群組功能管理-功能名稱編輯",
        "群組功能管理-群組功能管理",
        "人員設定"
      ]
    },
    {
      "title": "Push platform",
      "titleTw": "推播平台管理",
      "name": [
        "APP Set up",
        "Channel Set up",
        "API Set up"
      ],
      "nameTw": [
        "App 設定",
        "Channel 設定",
        "Api 設定"
      ]
    },
    {
      "title": "Notificatin",
      "titleTw": "通知項目管理",
      "name": [
        "Notificatin Set Up"
      ],
      "nameTw": [
        "通知項目設定"
      ]
    },
    {
      "title": "Marketing Message",
      "titleTw": "行銷通知",
      "name": [
        "Import Marketing Customer List",
        "Marketing Message Establishment",
        "Marketing Message Inquiry",
        "Marketing Message Approval",
        "Marketing Message History Records Inquiry"
      ],
      "nameTw": [
        "行銷通知名單匯入",
        "行銷通知建立",
        "行銷通知查詢",
        "行銷通知審核",
        "行銷通知歷史資料查詢"
      ]
    }
  ];
}
