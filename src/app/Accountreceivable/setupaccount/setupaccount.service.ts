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
    let body=
          {
            "pf_id":this.session.retrieve("id"),
            "account_type_id":(input.account_type_id),
            "credit_limit":input.credit_limit,
            "contact":input.contact,
            "phone":input.phone,
            "email":input.email,
            "ar_address":input.ar_address,
            "city":input.city,
            "postal_code":input.postal_code,
            "country_id":input.country_id,
            "permanent_account":input.permanent_account,
            "currency_id":input.currency_id,
            "flagged":input.flagged,
            "created_by":input.created_by,
           


}
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_AccountSetup',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  blockstatus():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_Account_typeDropdown')
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
