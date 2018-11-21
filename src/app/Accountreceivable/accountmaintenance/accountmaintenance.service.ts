import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class AccountmaintenanceService {

  constructor(private http: Http,public session:SessionStorageService) { }

  account_table():  Observable<object[]> {    
    let body={
      "account_no":this.session.retrieve("account_number")
    }
       return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountInvoice',body)
          .map(this.extractData)
     }
  //  market dropdown value
  market_dropdown():  Observable<object[]> {    
        return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Market')
          .map(this.extractData)
      }
   
 //  source dropdown value
  source_dropdown():  Observable<object[]> {    
      return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Source')
          .map(this.extractData)
    }

    //  payment dropdown value
    payment_dropdown():  Observable<object[]> {    
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Payment')
        .map(this.extractData)
    }

    //  payment dropdown value
    currency_dropdown():  Observable<object[]> {    
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilecurrency')
        .map(this.extractData)
    }

//  room class dropdown value
    room_class_dropdown():  Observable<object[]> {   
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers }) 
      return this.http.post('https://hotel360.herokuapp.com/Select_Class',options)
          .map(this.extractData)
    }
  // posting code dropdown for posting payment
    postingcodedropdown():  Observable<object[]> {      
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })       
      return this.http.post('https://hotel360.herokuapp.com/HOTEL_CASH_BILLING_CODE_SELECT',options)
          .map(this.extractData)
    
    }

    // compress button
    compress(comp,invoice_num,openamt,invoiceamt):  Observable<object[]> {    
      let body={
        "account_number":this.session.retrieve("account_number"),
        "account_name":comp.account_name,
        "market_id":String(comp.market_code),
        "source_id":String(comp.source_code),
        "room_class_id":String(comp.roomclass_code),
        "invoice_supplement":comp.supplement,
        "reference":comp.reference,
        "open_amount":openamt,
        "invoice_amount":invoiceamt,
        "invoice_no":invoice_num
      }
      console.log("json body for compress",body)
         return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_CompressInvoice',body)
            .map(this.extractData)
      }

    // uncompress 
    uncompress(invoice_num):  Observable<object[]> {    
      let body={
        "account_number":this.session.retrieve("account_number"),
        "invoice_no":invoice_num
      }
      console.log("json body for compress",body)
         return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_DELETE_UnCompressInvoice',body)
            .map(this.extractData)
      }

// insert new accountinvoice
      insert_accountin(newinvoice):  Observable<object[]> {    
        let body={
          "account_number":this.session.retrieve("account_number"),          
          "account_name":newinvoice.guest,
          "market_id":String(newinvoice.market_code),
          "source_id":String(newinvoice.source_code),
          "room_class_id":String(newinvoice.roomclass_code),
          "invoice_supplement":newinvoice.supp,
          "reference":newinvoice.refr
          
          }
          
           return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_AccountInvoice ',body)
              .map(this.extractData)
         }
       
    //  room class dropdown value
    paymenttype_dropdown():  Observable<object[]> {   
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers }) 
      return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_InvoicePaymentDropdown',options)
          .map(this.extractData)
    }
    // insert post in payment button
         payment_button(newinvoice,invoice_num):  Observable<object[]> {    
          let body={

            "payment_code_id":newinvoice.paycode,
            "currency_id":newinvoice.paycurrency,
            "posting_amount":Number(newinvoice.payamount),
            "posting_supplement":newinvoice.pay_supplement ,
            "posting_reference":newinvoice.pay_reference,
            "invoice_payment_type_id":newinvoice.paymnt_type_id,
            "account_no":this.session.retrieve("account_number"),
            "invoice_no":invoice_num
          }
          console.log("final input for payment ",JSON.stringify(body));
             return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_ApplyPaymentSelectiviely',body)
                .map(this.extractData)
           }
    //Posting bills in invoice-->post  
           postingbill(poscdid):  Observable<object[]> {
       
            const headers = new Headers({'Content-Type':'application/json'})
            const options = new RequestOptions({ headers: headers })
            let body={

              "bills":poscdid
            
              }
             console.log("final input",JSON.stringify(body));
          
            return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_Billingpost',body,options)
               .map(this.extractData)
          
          }
// unapply table values
          unapply_table(invoice_num):  Observable<object[]> {    
            let body={
              "account_no":this.session.retrieve("account_number"),
              "invoice_no":invoice_num
            }
               return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_UnappyPayment',body)
                  .map(this.extractData)
            }
// unapply button 
            unapply_button(unapply_value):  Observable<object[]> {    
            let body={
              "posting_payment_id":String(unapply_value.posting_payment_id),
              "posting_amount":unapply_value.posting_amount,
              "account_no":this.session.retrieve("account_number"),
              "invoice_no":unapply_value.invoice_no
            }
            console.log("json_body_unapply",body)
                return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_UNApplyPayment',body)
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
