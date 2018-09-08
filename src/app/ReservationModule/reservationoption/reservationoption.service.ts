import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class ReservationoptionService {

  constructor(
    private http: Http,public session:SessionStorageService
  ) { }

  //room move table
  gethousekeepingdata():  Observable<object[]> {
       
    // const headers = new Headers({'Content-Type':'application/json'})
    // const options = new RequestOptions({ headers: headers });
   
  
    return this.http.get('https://hotel360.herokuapp.com/Hotel_Rm_Post_Select_QueryRoomList')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  // Alert 
alert(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
    "Res_id":this.session.retrieve("id"),
    "Res_unique_id":this.session.retrieve("uniq"),
   "RES_Alert_Code":input.RES_Alert_Code,
   "RES_Alert_Area":input.RES_Alert_Area,
   "RES_Alert_Description":input.RES_Alert_Description
   
 };
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_UpdateAlertReservation',body,options)
      .map(this.extractData)
}

// Fixed reservatipn
     Fixedcharges(input:any):  Observable<object[]> {  
      const headers = new Headers();
       headers.append('Content-Type','application/json');
       const options = new RequestOptions({ headers: headers });
       console.log('working');
       let body={ "Res_id":this.session.retrieve("id"),"Res_unique_id":this.session.retrieve("uniq"), "Fixed_Charges_Begin_Date":input.Fixed_Charges_Begin_Date, "Fixed_Charges_End_Date":input.Fixed_Charges_End_Date,"Fixed_Charges_Transaction_Code":input.Fixed_Charges_Transaction_Code,"Fixed_Charges_Article_Code":input.Fixed_Charges_Article_Code,
       "Fixed_Charges_Amount":input.Fixed_Charges_Amount,"Fixed_Charges_Quantity":input.Fixed_Charges_Quantity, "Fixed_Charges_Supplement":input.Fixed_Charges_Supplement,"Fixed_Charges_Occurrence":input.Fixed_Charges_Occurrence
     };
       return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Insert_UpdateFixedChargesReservation',body,options)
          .map(this.extractData)
   }


// privileges start
   privileges(inputss:any):  Observable<object[]> {
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     console.log('working');
     let body={"res_id":this.session.retrieve("id"),"privileges_key":inputss.privileges_key,"res_unique_id":this.session.retrieve("uniq")
   };
     return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Insert_UpdateGuestPrivileges',body,options)
        .map(this.extractData)
 }

 
// Queue start
resqueue(inputss:any):  Observable<object[]> {
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_POST_INSERT_UpdateQueueRreservation',inputss,options)
      .map(this.extractData)
}

// traces
Traces(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   let body={"res_id":this.session.retrieve("id"),"Res_unique_id":this.session.retrieve("uniq"),"traces_from_date":input.traces_from_date, "traces_to_date":input.traces_to_date,
   "traces_time":input.traces_time,"traces_dept_code":input.traces_dept_code,"traces_trace_text":input.traces_trace_text
 };
   return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Insert_UpdateGuestTraces',body,options)
      .map(this.extractData)
}


//waitlist 
waitli(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   let par={
"Res_id":this.session.retrieve("id"),
"pf_id":this.session.retrieve("id1"),
"Res_unique_id":this.session.retrieve("uniq"),
"RES_Waitlist_Reason":input.RES_Waitlist_Reason,
"RES_Waitlist_Priority":input.RES_Waitlist_Priority,
"RES_Waitlist_Telephoneno":input.RES_Waitlist_Telephoneno,
"RES_Waitlist_Description":input.RES_Waitlist_Description
 }
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_WaitlistReason',par,options)
      .map(this.extractData)
}

//room move
Roommove(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   let par={
"Res_id":this.session.retrieve("id"),
"Res_unique_id":this.session.retrieve("uniq"),
"Res_room":input.toString()
   }
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_UPDATE_RoomMove',par,options)
      .map(this.extractData)
}

// changes activity log
  getchaTables1():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={
      "Res_id":this.session.retrieve("id")
    }
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_Select_QueryReservationActivitylog',body,options)
       .map(this.extractData)
}


Delete(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_DELETE_DeleteReservation',input,options)
      .map(this.extractData)
}
// credit
getcredit(insertdata:any):  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });

  return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Get_Select_QueryReservationCreditcard',insertdata,options)
     .map(this.extractData)
}

// insert credit
insertcredit(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
    "pf_id":this.session.retrieve("id1"),
    "pf_creditcard_no":input.pf_creditcard_no,
   "pf_card_type":input.pf_card_type,
   "pf_expiration_date":input.pf_expiration_date
   
 };
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_ReservationCreditcard',body,options)
      .map(this.extractData)
}

// update credit
insertcredit1(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
    "pf_id":this.session.retrieve("id1"),
    "cc_id": this.session.retrieve("ccid"),
    "pf_creditcard_no":input.pf_creditcard_no,
   "pf_card_type":input.pf_card_type,
   "pf_expiration_date":input.pf_expiration_date
   
 };
   return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Update_UpdateReservationCreditcard',body,options)
      .map(this.extractData)
}
//credit card delete

// delete credit
deletecredit(input:any):  Observable<object[]> { 
  console.log(input);   
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_Delete_DeleteReservationCreditcard',input,options)
      .map(this.extractData)
}

// credit
getdeposit():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let param={
    "RES_Id":this.session.retrieve("id"),
 }

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_SELECT_QueryDeposit',param,options)
     .map(this.extractData)
}

// Deposit
deposit(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
    "res_id":this.session.retrieve("id"),
    "RES_Deposit_Type":input.RES_Deposit_Type,
    "RES_Deposit_Rule":input.RES_Deposit_Rule,
    "RES_Deposit_Percentage":input.RES_Deposit_Percentage,
    "RES_Deposit_Amount":input.RES_Deposit_Amount,
    "RES_Due_Date":input.RES_Due_Date,
    "RES_Deposit_Comments":input.RES_Deposit_Comments,
    }
   console.log(JSON.stringify(body));
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_UpdateDeposit',body,options)
      .map(this.extractData)
}
// Deposite Completed
// Deposit
depositupdate(input:any):  Observable<object[]> {    
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
    "Res_id":this.session.retrieve("id"),
    "deposit_id":this.session.retrieve("depid"),
    "RES_Deposit_Type":input.RES_Deposit_Type,
    "RES_Deposit_Rule":input.RES_Deposit_Rule,
    "RES_Deposit_Percentage":input.RES_Deposit_Percentage,
    "RES_Deposit_Amount":input.RES_Deposit_Amount,
    "RES_Due_Date":input.RES_Due_Date,
    "RES_Deposit_Comments":input.RES_Deposit_Comments,
    }
   
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_UPDATE_UpdateDeposit',body,options)
      .map(this.extractData)
}
// Deposite Completed


// credit
gethistory(insertdata:any):  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });

  return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_SELECT_QueryHistoryReservation',insertdata,options)
     .map(this.extractData)
}

// AreaCode Dropdown
getarea():  Observable<object[]> {      
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers }); 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Alertarea')
     .map(this.extractData)
}

// Alert Code Dropdown
getcode():  Observable<object[]> {      
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers }); 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Alertcode')
     .map(this.extractData)
}

//Deparment Dropdown
getdepartment():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers }); 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Department')
     .map(this.extractData)
}


// transaction code
gettransaction():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Transaction_code')
     .map(this.extractData)
}

//Room Type
getroomtype():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.post(' https://hotel360.herokuapp.com/Select_Room_Type',options)
     .map(this.extractData)
}


//Room market
getmarket():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Market',options)
     .map(this.extractData)
}

//Rate Code
getratecode():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Profile/profileratecode')
     .map(this.extractData)
}

//source Code
getsourcecode():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Source')
     .map(this.extractData)
}

//waitlistReason Code
getreason():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Waitlist_reason')
     .map(this.extractData)
}

//currency Code
getcurrency():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Profile/profilecurrency')
     .map(this.extractData)
}

//deposit rules
getdepositrule():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_depositrule')
     .map(this.extractData)
}

//credittype rules
getcredittype():  Observable<object[]> {       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Cardtype')
     .map(this.extractData)
}

// Fixed rate
Fixedrate():  Observable<object[]> {  
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body=
   {
    "Res_id":this.session.retrieve("id"),
    "RES_Arrival":this.session.retrieve("arrival"),
    "RES_Depature":this.session.retrieve("departure"),
    "RES_Adults":this.session.retrieve("Adults".toString()),
    "RES_Child":this.session.retrieve("child".toString()),
    "RES_Room_Type":this.session.retrieve("RoomType"),
    "RES_RTC":this.session.retrieve("RoomType"),
    "RES_Room":this.session.retrieve("Room"),
    "RES_Rate_Code":this.session.retrieve("Ratecode"),
    "RES_Rate":this.session.retrieve("rate"),
    "RES_Disc_Amount":this.session.retrieve("DiscAmount"),
    "RES_Disc_perc":this.session.retrieve("percentage"),
    "RES_Disc_Reason":this.session.retrieve("Discreasons"),
    "RES_Market":this.session.retrieve("market"),
    "RES_Source":this.session.retrieve("source"),
    "RES_Currency":this.session.retrieve("Currency")
    };
    console.log(JSON.stringify(body));
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_UpdateFixedRateReservation',body,options)
      .map(this.extractData)
}

private extractData(res: Response) {
//alert('hai20')
console.log('res========---===='+res);
let body = res.json();
console.log(JSON.stringify(body));
    return body;
}
}

