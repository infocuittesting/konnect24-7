import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class InvoiceService {

  constructor(private http: Http,public session:SessionStorageService) { }


invoice_table():  Observable<object[]> {    
 let body={
  "account_no":this.session.retrieve("account_number"),
  "invoice_no":this.session.retrieve("invoice_no")
 }
    return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_Billingpost',body)
       .map(this.extractData)
  }

  invoice_adjust(adjst,acc_bill):  Observable<object[]> {    
    let body={
    "account_bill":String(acc_bill),
    "invoice_no":String(this.session.retrieve("invoice_no")),
	  "account_no":this.session.retrieve("account_number"),
	  "reason_code":adjst.reasn_code,
	  "reason_text":adjst.reasn_txt,
	  "adjust_type":Number(adjst.adjust_typ),
	  "adjust_amount":Number(adjst.amount),
	  "emp_id":1
    }
    console.log(body)
       return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_UPDATE_AdjustBillingpost',body)
          .map(this.extractData)
     }
 

// reason code dropdown
     adjst_reasondropdown():  Observable<object[]> {    
      let body={
      }
         return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_REASONDropdown',body)
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
