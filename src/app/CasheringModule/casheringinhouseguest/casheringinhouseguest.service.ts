import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";


@Injectable()
export class CasheringinhouseguestService {

  constructor( private http: Http,public session:SessionStorageService) { }
  

  restypedropdown():  Observable<object[]> {    
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Restype')
       .map(this.extractData)
  }


  expirydate(cardno,creditcard_expiry):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body =
    {
       "res_id":this.session.retrieve("id1"),
       "PF_Creditcard_No":cardno,
       "PF_Expiration_Date":creditcard_expiry
       
    }
   console.log(JSON.stringify(body));
   return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileCreditcard',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
  }


  checkoutbuttoninsert(input,balnc,exprydt): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body={ 
    "res_id":this.session.retrieve("id1"),
    "res_room":this.session.retrieve("id"),
    "Payment_code_id":input.selected,
    "currency_id":input.currency,
    "Postig_amount":balnc,
    "payment_supplemet":input.supp,
    "Posting_reference":input.ref,
    "credicard_id":exprydt
   }
   console.log(JSON.stringify(body));
  
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_INSERT_UPDATEPOSTINGPAYMENTCHECKOUT',body,options)
       .map(this.extractData)
  
  }

  checkoutbuttoninsert1(input,balnc): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body={ 
    "res_id":this.session.retrieve("id1"),
    "res_room":this.session.retrieve("id"),
    "Payment_code_id":input.selected,
    "currency_id":input.currency,
    "Postig_amount":balnc,
    "payment_supplemet":input.supp,
    "Posting_reference":input.ref,
    "credicard_id":""
   }
   console.log(JSON.stringify(body));
  
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_INSERT_UPDATEPOSTINGPAYMENTCHECKOUT',body,options)
       .map(this.extractData)
  
  }


  currencydropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_CURRENCY_SELECT',options)
       .map(this.extractData)

  }
  inhousetable():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_CAH_POST_SELECT_QUERYINHOUSERECORD')
       .map(this.extractData)

  }
  
  foliohistory():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_FOLIO_HISTORY',options)
       .map(this.extractData)

  }
   
 checkoutzero():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body =
    { 
       "res_id":this.session.retrieve("id1"),
       "res_room":this.session.retrieve("id")
       
    }
   console.log(JSON.stringify(body));
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_CASH_RESERVATION_STATUS',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
 }

 paymentcodedropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CASH_PAYMENT_CODE_SELECT',options)
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
