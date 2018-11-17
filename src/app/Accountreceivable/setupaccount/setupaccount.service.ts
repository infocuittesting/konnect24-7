import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";


@Injectable()
export class SetupaccountService {

  constructor(private http: Http,public session:SessionStorageService) { }

  accountsetup(input:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    console.log('insert service working')

    // console.log("pfid",this.id);
    let body=
          {
            "profile_id":this.session.retrieve("id"),
            "account_type_id":(input.account_type_id),
            "credit_limit":input.credit_limit,
            "contact":String(input.contact),
            "phone":String(input.phone),
            "email":input.email,
            "ar_address":input.ar_address,
            "city":input.city,
            "postal_code":String(input.postal_code),
            "country_id":String(input.country_id),
            "state_id":String(input.state_id),
            "permanent_account":input.permanent_account,
            "currency_id":1,
            "flagged":input.flagged,
            "created_by":1,
          


}

console.log("jsonnnnn",JSON.stringify(body));
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_AccountSetup',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

  accountsetupupdate(input:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    console.log('insert service working')

    // console.log("pfid",this.id);
    let body=
          {
            "profile_id":this.session.retrieve("id"),
            "account_type_id":(input.account_type_id),
            "credit_limit":input.credit_limit,
            "contact":String(input.contact),
            "phone":String(input.phone),
            "email":input.email,
            "ar_address":input.ar_address,
            "city":input.city,
            "postal_code":String(input.postal_code),
            "country_id":String(input.country_id),
            "state_id":String(input.state_id),
            "permanent_account":0,
            "currency_id":1,
            "flagged":0,
            "created_by":1,
            // "account_balance":130,
          


}

console.log("update",JSON.stringify(body));
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_UPDATE_AccountSetup',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }


  blockstatus():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    console.log("working")
    
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_REASONDropdown',options)
       .map(this.extractData)
  }


  state():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    console.log("working")
    
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilestate')
       .map(this.extractData)
  }

  country():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    console.log("working")
    
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilecountry')
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
