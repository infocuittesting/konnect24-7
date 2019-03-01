import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class SearchandeditreservationService {

  constructor(private http: Http, public session: SessionStorageService) { }

  //Getting table value
  searchedit(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_RES_GET_SELECT_QueryReservationSearch')
      .map(this.extractData)
    }


  //get reason dropdown
  reasondropdown(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_CancelReason')
      .map(this.extractData)
  }


  //get glow of privilege buttom

  privileges(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = { "res_id": parm }
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Get_Select_QueryGuestPrivileges', body, options)
      .map(this.extractData)
  }


  //get glow of duedate buttom

  duedate(parm,param): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = { "res_id": parm, "res_unique_id": param }
    console.log("doue",body)
    return this.http.post('https://hotel360.herokuapp.com/Hotel_PMS_Select_DepositDueDate', body, options)
      .map(this.extractData)
  }

  //get glow of duedate buttom

  duecancel(parm,param): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = { "res_id": parm, "res_unique_id": param }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_SELECT_QueryDeposit', body, options)
      .map(this.extractData)
  }
  //get glow of fixed buttom

  Fixed(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = { "res_id": parm }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_SELECT_QueryFixedRateReservation', body, options)
      .map(this.extractData)
  }


  //get glow of Notes buttom

  Notes(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = { "pf_id": parm }
    console.log(body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_GET_SELECT_QueryNotes', body, options)
      .map(this.extractData)
  }


  //get glow of pefernece buttom

  Preferences(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = { "pf_id": parm }
    console.log(body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_GET_SELECT_Querypreference', body, options)
      .map(this.extractData)
  }

  
  //Cancel reservation

  cancel(input: any,param): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    let body = {
      "Res_id": this.session.retrieve("id"),
      "Res_unique_id": param,
      "Cancel_reason": input.Cancel_reason,
      "Cancel_description": input.Cancel_description,
      "Res_Arrival": this.session.retrieve("arrival"),
      "Res_Depature": this.session.retrieve("departure"),
      "Res_Room_Type": this.session.retrieve("RoomType")
    };
    console.log(body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_CancelReservation', body, options)
      .map(this.extractData)
  }


  //Reservation Reinstate

  Reinstate(input: any): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    console.log(input)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_ReinstateReservation', input, options)
      .map(this.extractData)
  }


  //Acceptwait list

  AcceptWaitlist(input: any): Observable<object[]> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    console.log(JSON.stringify(input))
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_AcceptWaitlistReservation', input, options)
      .map(this.extractData)
  }

  private extractData(res: Response) {
    console.log('res========---====' + res);
    let body = res.json();
    console.log(JSON.stringify(body));
    return body;
  }

}
