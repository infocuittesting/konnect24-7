import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportsService {

  constructor(private http: Http) { }

  statisticsDetails(): Observable<object[]> {

   
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });

    return this.http.post('https://hotel360.herokuapp.com/futurebooking', options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }


  historybooking(): Observable<object[]> {

   
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });

    return this.http.post('https://hotel360.herokuapp.com/HistoryBooking', options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

   getroomdetails(startdate,enddate): Observable<object[]> {
      
    let body = {
      "from_date": startdate,
      "to_date": enddate
    }
     
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });


    return this.http.post('https://hotel360.herokuapp.com/GetReservationNoshowreport',body,options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  profile( startdate, enddate): Observable<object[]> {
    let body = {

      "from_date": startdate,
      "to_date": enddate
    } 
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });


    return this.http.post('https://hotel360.herokuapp.com/GetProfileReport',body,options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  profile1(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  profile2(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  // Front Desk
  frontdesk(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }


  frontdesk1(startdate,enddate): Observable<object[]> {
    let body = {
      "from_date": startdate,
      "to_date": enddate
    }

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/GetFrontDeskReport',body,options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  //cashering

  cashering(startdate,enddate): Observable<object[]> {

    let body = {
      "from_date": startdate,
      "to_date": enddate
    }
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });

    return this.http.post('https://hotel360.herokuapp.com/GetZerobalanceaccount',body,options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  casheringtotalcount( startdate,enddate): Observable<object[]> {

    let body = {
      "from_date": startdate,
      "to_date": enddate
    }
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
   console.log("go to total amount")
    return this.http.post('https://hotel360.herokuapp.com/Cashiergettotalamount',body,options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  Roomtransver(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  // RevenueManagement

  revenue(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  revenue1(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }


  revenue2(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }


  businessblocks(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  businessblocks1(startdate, enddate): Observable<object[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });

    let body = {
      "from_date": startdate,
      "to_date": enddate
    }

    return this.http.post('https://hotel360.herokuapp.com/GetBusinessBlock', body, options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  //statistics details
  statistics(statisticsddata: any): Observable<object[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    //let body = { "userKey": dashbrddata };

    return this.http.post('https://ivrinfocuit.herokuapp.com/QueryStatistics', statisticsddata, options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }



  // Room management
  roomdisk(): Observable<object[]> {



    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  fecility( startdate, enddate): Observable<object[]> {
     
    let body = {
      "from_date": startdate,
      "to_date": enddate
    }

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    //let body = { "userKey": dashbrddata };


    return this.http.post('https://hotel360.herokuapp.com/',body,options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }
  Roomconditions(  startdate, enddate): Observable<object[]> {
              
    let body = {
      "from_date": startdate,
      "to_date": enddate
    }
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    //let body = { "userKey": dashbrddata };
    

    return this.http.post('https://hotel360.herokuapp.com/GetRoomcondition',body,options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }
  roommaintence(): Observable<object[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    //let body = { "userKey": dashbrddata };



    return this.http.post('https://hotel360.herokuapp.com/GetRoomHousekeeping',options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }
  //guastservice
  gestservices(): Observable<object[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    //let body = { "userKey": dashbrddata };

    return this.http.post('https://hotel360.herokuapp.com/GetFrontofficestatus',options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }
  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---====' + res);
    let body = res.json();
    console.log(JSON.stringify(body));
    return body;
  }
}
