import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

  constructor(private http: HttpClient) { }

  // post(url: string, body: any, optionHeader?: { [header: string]: string }): Observable<Response> {
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   // set option header
  //   for (let header in optionHeader) {
  //     let value = optionHeader[header];
  //     headers.append(header, value);
  //   }
  //   return this.http.post(url, body, {
  //     headers: headers,
  //   }).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError)
  //   )
  // }
  get(urlL: string, optionHeader?: { [header: string]: string }): Observable<Response> {
    let headers = new HttpHeaders();
    for (let header in optionHeader) {
      let value = optionHeader[header];
      headers.append(header, value);
    }
    return this.http.get(urlL, { headers: headers })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      )
  }
  private extractData(res) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res;
    return res || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
