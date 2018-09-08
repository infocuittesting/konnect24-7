import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class QueryReservationListService {

  constructor(private http: Http,public session:SessionStorageService) { }


  // QueryRooming List screen.................................
QueryRoomingList():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let body={
    "block_id":this.session.retrieve("blockid".toString())
  }
  
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_QueryGroupReservation',body,options)
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
