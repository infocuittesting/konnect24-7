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
    return this.http.get('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountSetup')
       .map(this.extractData)
  }

  accounttype_dropdown():  Observable<object[]> {    
    let body={}
       return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountTypeDropdown',body)
          .map(this.extractData)
     }
   


  accountdelete(prof_id):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    console.log('delete service working')

    // console.log("pfid",this.id);
    let body=
          {
            // "profile_id":this.session.retrieve("id"),
            "profile_id":String(prof_id),
          
    
}

       console.log("delete",JSON.stringify(body));
       return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_DELETE_AccountSetup',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
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
