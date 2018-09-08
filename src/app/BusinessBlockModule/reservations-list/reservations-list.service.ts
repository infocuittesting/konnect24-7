
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { Options } from 'selenium-webdriver/edge';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable()
export class ReservationListService {

  constructor(private http: Http,public session:SessionStorageService) { 

  }
  // Query Pay Master Reservation
QueryPaymasterReservation():Observable<object[]> {
  console.log("query going to service")
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body = {
    
      "block_id":this.session.retrieve("blockid".toString())
      
  }
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_QueryPayMasterReservation',body,options)
     .map(this.extractData)

}
  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
   console.log(JSON.stringify(body));
    // a(JSON.stringify(body));
        return body;
    }


}
