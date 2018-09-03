import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

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
    // this.data = this.http.get(url).pipe(map(x => x.json()));
    this.data = this.http.get(url)
      .pipe(
        map((response: Response) => response.json()),
        catchError(this._errorhandler)
      )
  }

  getData() {
    // return this.http.get('http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5')
    //   .pipe(
    //     map((response: Response) => response.json()),
    //     catchError(this._errorhandler)
    //   )
  }
  _errorhandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'server Error');
  }
}
