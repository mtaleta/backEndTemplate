import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    // http.get('http://localhost:4200/api/db.json')
    //     .subscribe(result => {
    //       this.data = result;
    //     });
  }

  getData() {
    return this.http.get('http://localhost:4200/api/db.json')
   }
}
