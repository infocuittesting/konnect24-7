import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class AccountoptionsService {

  constructor(private http: Http,public session:SessionStorageService) { }


  acc_traces_table():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    console.log("session account number",this.session.retrieve("account_number"))
   let body={  
      "account_number":this.session.retrieve("account_number")   
   }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountTraces',body,options)
       .map(this.extractData)
  
  }

  acc_traces_new(traceinput,curdate):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    
   let body={
    "account_number":this.session.retrieve("account_number") ,
    "trace_on":traceinput.traceon,
    "trace_text":traceinput.tracetxt,
    "acc_resolved_on":"",
    "acc_resolved_by":"",
    "created_on":curdate,
    "created_by":1
  }
  console.log("insert trace json inputs",body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_AccountTraces',body,options)
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
