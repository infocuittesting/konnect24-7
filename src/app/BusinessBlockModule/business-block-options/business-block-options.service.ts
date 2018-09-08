import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class BusinessBlockOptionsService {

  constructor(private http: Http,public session:SessionStorageService) { }
  insertbusinessblock(args:any): Observable<object[]> {
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     let body=
     {
      "block_id":this.session.retrieve("blockid"),
      "notes_date":args.notesdate,
      "notes_type":args.notetype,
      "title":args.title,
      "description":args.description,    
     }
     console.log(JSON.stringify(body));
     return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_Business_Block_Notes',body,options)
     .map(this.extractData)

  }
  cancel(input:any): Observable<object[]> {
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     let body=
     {
      // "block_id":input.block_id,
      "block_id":this.session.retrieve("blockid"),
      "reason_id":input.reason_id,
      "cancel_description":input.description,
      "destination":input.Destination,
        
     }
     console.log(JSON.stringify(body));
     return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_GroupCancel',body,options)
     .map(this.extractData)

  }
  // changes activity log
  getchaTables1():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={
      "block_id":this.session.retrieve("blockid")
    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_Business_Block_activitylog',body,options)
       .map(this.extractData)
}
// notetypeDroup down
notetype():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.get('https://hotel360.herokuapp.com/Profile/profilenotetype')
     .map(this.extractData)
}
//
reason():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_CancelReason')
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
