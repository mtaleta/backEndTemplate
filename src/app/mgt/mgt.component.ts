import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientServiceService } from '../http-client-service.service';

@Component({
  selector: 'app-mgt',
  templateUrl: './mgt.component.html',
  styleUrls: ['./mgt.component.css']
})
export class MgtComponent implements OnInit {
  data: Observable<any>;

  constructor(public HttpClientServiceService:HttpClientServiceService) { }

  ngOnInit() {
    let newUrl = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5';

    this.data = this.HttpClientServiceService.get(newUrl);

  }
}
