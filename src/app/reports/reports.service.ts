import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportsService {

  constructor(private http: Http) { }

  statisticsDetails(): Observable<object[]> {

   

    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  statisticsDetails1(): Observable<object[]> {

   

    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  profile(): Observable<object[]> {

   

    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
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


  frontdesk1(): Observable<object[]> {

   

    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  //cashering
     
  cashering(): Observable<object[]> {

   

    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

  cashering1(): Observable<object[]> {

   

    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
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

  businessblocks1(): Observable<object[]> {

   

    return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  }

   //statistics details
   statistics(statisticsddata: any): Observable<object[]> {

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    //let body = { "userKey": dashbrddata };

    return this.http.post('https://ivrinfocuit.herokuapp.com/QueryStatistics', statisticsddata , options)
      .map(this.extractData)
    //.catch(this.handleErrorObservable);
  } 



    // Room management
    roomdisk(): Observable<object[]> {

   

      return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
        .map(this.extractData)
      //.catch(this.handleErrorObservable);
    }
    
    fecility(): Observable<object[]> {

   

      return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
        .map(this.extractData)
      //.catch(this.handleErrorObservable);
    }
    Roomconditions(): Observable<object[]> {

   

      return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
        .map(this.extractData)
      //.catch(this.handleErrorObservable);
    }
    roommaintence(): Observable<object[]> {

   

      return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
        .map(this.extractData)
      //.catch(this.handleErrorObservable);
    }
    gestservices(): Observable<object[]> {

   

      return this.http.get('https://hotel360.herokuapp.com/Reservationdonutchart')
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
