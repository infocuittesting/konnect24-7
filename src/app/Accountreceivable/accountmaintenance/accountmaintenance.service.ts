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
       
     private extractData(res: Response) {
       //alert('hai20')
       console.log('res========---===='+res);
       let body = res.json();
       // alert(JSON.stringify(body))
       console.log(JSON.stringify(body));
           return body;
       }
}
