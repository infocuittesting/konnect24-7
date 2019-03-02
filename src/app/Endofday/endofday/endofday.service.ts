import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class EndofdayService {

  constructor(private http: Http) { }

  Trace():  Observable<object[]> {
       
    // const headers = new Headers({'Content-Type':'application/json'})
    // const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_Get_Select_QueryGuestTraces')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  

  countrycheck():  Observable<object[]> {
       
    //const headers = new Headers({'Content-Type':'application/json'})
    //const options = new RequestOptions({ headers: headers });
   return this.http.get('https://hotel360.herokuapp.com/Hotel_END_OF_Day_POST_countrycheck')
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
 }
 notcheckout():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
 return this.http.post('https://hotel360.herokuapp.com/Hotel_END_OF_Day_POST_Departure_Not_Checkedout',options)
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
}

businessdate():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
 return this.http.post('https://hotel360.herokuapp.com/Hotel_END_OF_Day_POST_Roll_Business_date',options)
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
}

postingrooms():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
 return this.http.post('https://hotel360.herokuapp.com/Hotel_END_OF_Day_POST_Posting_Rooms_charges',options)
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
}

runaddtional():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
 return this.http.post('https://hotel360.herokuapp.com/Hotel_END_OF_Day_POST_Run_Additional_procedures',options)
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
}

runprint():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
 return this.http.post('https://hotel360.herokuapp.com/Hotel_END_OF_Day_POST_print_final_report',options)
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
}

dropdown():  Observable<object[]> {
       
 return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Payment')
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
}

Checkout(inputt:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
 return this.http.post('https://hotel360.herokuapp.com/HOTEL_CASH_RESERVATION_STATUS',inputt,options)
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
}



  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();   
    //alert(JSON.stringify(body))
    console.log(JSON.stringify(body));
        return body;
    }

}
