import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { Options } from 'selenium-webdriver/edge';

@Injectable()
export class BillingService {

  constructor( private http: Http,public session:SessionStorageService) { }


  gethistorylog():  Observable<object[]> {
       
     const headers = new Headers({'Content-Type':'application/json'})
     const options = new RequestOptions({ headers: headers });
     let body =
     {
        "res_id":this.session.retrieve("id1")
        
     }
  
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_POSTING_HISTORY_LOG',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

  inhousetobilling():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body =
    {
       "res_id":this.session.retrieve("id1"),
       "res_room":this.session.retrieve("id")
       
    }
   console.log(JSON.stringify(body));
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_SELECT_QUERYGUESTBILLING',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
 }

 updateeditposting(amt,quan,ed_arcode,ed_sup,ref,cqno): Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 let body={ 
  "Res_id":this.session.retrieve("id1"),
  "res_room":this.session.retrieve("id"),
  "post_id":this.session.retrieve("posid"),
  "Posting_amount":amt,
  "Arrangement_code":ed_arcode.toString(),
  "Checkno":cqno.toString(),
  "Posting_supplement":ed_sup,
  "Posting_reference":ref,
  "Posting_quantity":quan
 }
 console.log(JSON.stringify(body));

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_UPDATE_UPDATEGUESTBILLING',body,options)
     .map(this.extractData)

}

expirydate(cardno,PF_Expiration_Date):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let body =
  {
     "res_id":this.session.retrieve("id1"),
     "PF_Creditcard_No":cardno,
     "PF_Expiration_Date":PF_Expiration_Date
     
  }
 console.log(JSON.stringify(body));
 return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileCreditcard',body,options)
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
}


postbuttoninsert(selected,currency,amount,ref,supp,expdt): Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 let body={ 
  "res_id":this.session.retrieve("id1"),
  "res_room":this.session.retrieve("id"),
  "Payment_code_id":selected.toString(),
  "currency_id":currency.toString(),
  "Postig_amount":amount,
  "payment_supplemet":supp,
  "Posting_reference":ref,
  "credicard_id":expdt.toString(), 
 }
 console.log(JSON.stringify(body));

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_INSERT_UPDATEPOSTINGPAYMENT',body,options)
     .map(this.extractData)

}

postbuttoninsert1(selected,currency,amount,ref,supp): Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 let body={ 
  "res_id":this.session.retrieve("id1"),
  "res_room":this.session.retrieve("id"),
  "Payment_code_id":selected.toString(),
  "currency_id":currency.toString(),
  "Postig_amount":amount,
  "payment_supplemet":supp,
  "Posting_reference":ref,
  "credicard_id":"", 
 }
 console.log(JSON.stringify(body));

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_INSERT_UPDATEPOSTINGPAYMENT',body,options)
     .map(this.extractData)

}

currencydropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_CURRENCY_SELECT',options)
     .map(this.extractData)

}
paymentcodedropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CASH_PAYMENT_CODE_SELECT',options)
     .map(this.extractData)

}

postingcodedropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CASH_BILLING_CODE_SELECT',options)
     .map(this.extractData)

}

transferwindow(poscdid,postwindow):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body={ 
    "Res_id":this.session.retrieve("id1"),
    "Post_id":poscdid.toString(),
    "Post_window":postwindow,
   }
   console.log(JSON.stringify(body));

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_UPDATE_TransfertoAnotherWindow',body,options)
     .map(this.extractData)

}

postingbill(poscdid,totalPos,totalamt):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body={
    "Res_id":this.session.retrieve("id1"),
    "res_room":this.session.retrieve("id"),
    "bills":poscdid,
    "Total_amount":totalamt,
    "Total_posting":totalPos
    }
   console.log("final input",JSON.stringify(body));

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_INSERT_UPDATEGUESTBILLING',body,options)
     .map(this.extractData)

}

transferanotherroom(totalamt,grppos,cqno):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body={
    "Res_id":this.session.retrieve("id1"),
    "Res_room":this.session.retrieve("id"),
    "transfer_option":grppos,
    "to_room":totalamt.toString(),
    "checkno":cqno
    }
   console.log("final input",JSON.stringify(body));

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_CAH_POST_UPDATE_TransfertoAnotherRoom',body,options)
     .map(this.extractData)

}


roomdropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
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
