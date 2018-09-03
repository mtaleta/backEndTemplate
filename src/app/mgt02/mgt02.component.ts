import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-mgt02',
  templateUrl: './mgt02.component.html',
  styleUrls: ['./mgt02.component.css']
})
export class Mgt02Component {
  data: any;

  constructor(private http: Http) { }

  ngOnInit() {
    let url = '/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5';
    this.data = this.http.get(url).pipe(map(x => x.json()));
  }

}
