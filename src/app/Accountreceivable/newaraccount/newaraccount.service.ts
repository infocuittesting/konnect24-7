import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class NewaraccountService {

  constructor(private http: Http,public session:SessionStorageService) { }


  ar_account_table():  Observable<object[]> {    
 let body={}
    return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountSetup',body)
       .map(this.extractData)
  }


 
  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
    // alert(JSON.stringify(body))
    console.log(JSON.stringify(body));
        return body;
    }

}
