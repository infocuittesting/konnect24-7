import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class RoomoccupancyService {

  constructor(private http: Http) { }
  gestservices(start_date): Observable<object[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = { "start_date": start_date };
 console.log("its come in occupoancy",body)
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RM_Post_SELECT_OccupancyGraph',body,options)
      .map(this.extractData)
    
  }
  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---====' + res);
    let body = res.json();
    console.log(JSON.stringify(body));
    return body;
  }
}
