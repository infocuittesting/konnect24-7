import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class StarterService {

  constructor(private http: Http) { }

    //statistics details
    statisticsDetails(): Observable<object[]> {

      const headers = new Headers({ 'Content-Type': 'application/json' })
      const options = new RequestOptions({ headers: headers });
      //let body = { "userKey": dashbrddata };
  
      return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
        .map(this.extractData)
      //.catch(this.handleErrorObservable);
    }  

    //card details
    getcard(): Observable<object[]> {
      const headers = new Headers({ 'Content-Type': 'application/json' })
      const options = new RequestOptions({ headers: headers });
      return this.http.post('https://hotel360.herokuapp.com/Hotel_PMS_Select_GetTodayRoomAvailabilityArrival',options)
        .map(this.extractData)
    }  

    //card details
    getpanel(): Observable<object[]> {
      const headers = new Headers({ 'Content-Type': 'application/json' })
      const options = new RequestOptions({ headers: headers });
      return this.http.get('https://hotel360.herokuapp.com/Today_booking_and_today_arrival_reservation')
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
