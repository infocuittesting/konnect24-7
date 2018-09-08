import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class SearchandeditreservationService {

  constructor(    private http: Http,public session:SessionStorageService) { }

  searchedit():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_RES_GET_SELECT_QueryReservationSearch')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  

  reasondropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_CancelReason')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  
  cancel(input:any):  Observable<object[]> {    
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     let body={
     "Res_id":this.session.retrieve("id"),
     "Res_unique_id":this.session.retrieve("uniq"),
     "Cancel_reason":input.Cancel_reason,
     "Cancel_description":input.Cancel_description
   };
     return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_CancelReservation',body,options)
        .map(this.extractData)
  }

  Reinstate(input:any):  Observable<object[]> {    
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_ReinstateReservation',input,options)
        .map(this.extractData)
  }

  AcceptWaitlist(input:any):  Observable<object[]> {    
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_AcceptWaitlistReservation',input,options)
        .map(this.extractData)
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
