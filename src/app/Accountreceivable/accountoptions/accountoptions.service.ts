import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class AccountoptionsService {

  constructor(private http: Http,public session:SessionStorageService) { }

//-----------------------trace starts  ------------------------//
// trace table
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

  // insert new traces
  acc_traces_new(traceinput):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    
   let body={
    "account_number":this.session.retrieve("account_number") ,
    "trace_on":traceinput.traceon,
    "trace_text":traceinput.tracetxt,
    "acc_resolved_on":"",
    "acc_resolved_by":"",
    "created_by":1
  }
  console.log("insert trace json inputs",body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_AccountTraces',body,options)
       .map(this.extractData)    
  }


  transfer_table():  Observable<object[]> {    
    let body={}
       return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountSetup',body)
          .map(this.extractData)
     }

  acc_traces_edit(createdon,trace_txt):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    
   let body={
    "account_number":this.session.retrieve("account_number") ,
    "trace_on":createdon,
    "trace_text":trace_txt,
    "acc_resolved_on":"",
    "acc_resolved_by":"",
    "created_by":1
  }
  console.log("update trace json inputs",body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_UPDATE_AccountTraces',body,options)
       .map(this.extractData)
  
  }

    // Trace delete
    Trace_delete(trace_id):  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
      console.log("trace id",trace_id)
     let body={  
        "traces_id":String(trace_id)
     }
      return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_DELETE_AccountTraces',body,options)
         .map(this.extractData)
    
    }
  //----------------- trace ends--------------------------//
//tranfer data option
Transferdata(input:any,to_acc):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  console.log("invoice")
 let body={  
    // "traces_id":String(trace_id)
    // "invoice_no":this.session.retrieve("invoice_no"),
    "From_account":String(this.session.retrieve("account_number")),
	   "Invoice_no":this.session.retrieve("Invoice_no"),
     "To_aacount":String(to_acc)
 }
 console.log("json body for transfer",JSON.stringify(body));
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_ARTransfer',body,options)
     .map(this.extractData)

}


// -------------------AR notes starts-----------------------------//


ar_notes_table():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  console.log("session account number",this.session.retrieve("account_number"))
 let body={  
    "account_number":this.session.retrieve("account_number")   
 }
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_ArNotes',body,options)
     .map(this.extractData)

}


  // insert new notes
  ar_notes_new(newnotes):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    
   let body={
    "account_number":this.session.retrieve("account_number") ,
    "ar_note_date":newnotes.date, 
    "ar_note_title":newnotes.title,
    "ar_note_description":newnotes.desc
  }
  console.log("insert notes json inputs",body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_ArNotes',body,options)
       .map(this.extractData)
  
  }

  // edit new notes
  ar_notes_edit(editnotedate,editnotetitle,editnotedesc,notes_id):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    
   let body={
    "account_number":this.session.retrieve("account_number") ,
    "ar_note_date":editnotedate, 
    "ar_note_title":editnotetitle,
    "ar_note_description":editnotedesc,
    "ar_notes_id":notes_id,
    "modified_by":1
  }
  console.log("update notes json inputs",body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_UPDATE_ArNotes',body,options)
       .map(this.extractData)
  
  }

  // ar notes delete
  ar_notes_delete(notes_id):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    // console.log("session account number",this.session.retrieve("account_number"))
   let body={  
      "account_number":this.session.retrieve("account_number"),
      "ar_notes_id":notes_id   
   }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_DELETE_ArNotes',body,options)
       .map(this.extractData)
  
  }

  //------------------- ar notes ends---------------//

  //------------------- pay history ---------------//

  payhis_table():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    // console.log("session account number for payhistory",this.session.retrieve("account_number"))
   let body={  
      "account_no":this.session.retrieve("account_number")   
   }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountPayHistory',body,options)
       .map(this.extractData)
  
  }

  // ---------------------post history-----------//
  posthis_table():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    // console.log("session account number for posthistory",this.session.retrieve("invoice_number"))
   
   let body={  
    "invoice_no":this.session.retrieve("invoice_no") 
   }
   console.log("posthisbodyyyyy",body)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountPostHistory',body,options)
       .map(this.extractData)
  
  }

  // ----------------------Yearview-------------//
  yearview_table():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })   
 
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_YearViewAmount',options)
       .map(this.extractData)
  
  }

  notes_title():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })   
 
   
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilenotetype',options)
       .map(this.extractData)
  
  }

  accounttype_dropdown():  Observable<object[]> {    
    let body={}
       return this.http.post('http://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_AccountTypeDropdown',body)
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
