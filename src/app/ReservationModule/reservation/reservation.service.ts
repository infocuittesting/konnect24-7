import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { JsonPipe } from '@angular/common';

@Injectable()
export class ReservationService { 

    constructor (
        private http: Http,public session:SessionStorageService
      ) {}
        
      postandgetdata(input,parm,param):  Observable<object[]> {
       
        const headers = new Headers();
         headers.append('Content-Type','application/json');
         const options = new RequestOptions({ headers: headers });
         console.log('working');
         if(param == null){param = ''; }if(input.RES_Adults==null||input.RES_Adults == undefined){input.RES_Adults = "0" }
         if(input.RES_Child==null||input.RES_Child == undefined){input.RES_Child = "0" }if(input.RES_Number_Of_Rooms==undefined||input.RES_Number_Of_Rooms==null){input.RES_Number_Of_Rooms="1";}
         let body=
          {
            "RES_Arrival":input.RES_Arrival,
            "RES_Depature":input.RES_Depature,  
            "RES_Nights":input.RES_Nights.toString(),
            "RES_Adults":input.RES_Adults, 
            "RES_Child":input.RES_Child,  
            "RES_Number_Of_Rooms":input.RES_Number_Of_Rooms,
             "RES_Room_Type":input.RES_Room_Type,
             "RES_Room":"0", 
             "RES_Rate":input.RES_Rate,
             "RES_Packages":"",
             "RES_Block_Code":"", 
             "RES_Res_Type":input.RES_Res_Type, 
             "RES_Market":input.RES_Market, 
             "RES_Source":input.RES_Source,
             "RES_Origin":input.RES_Origin,
             "RES_Payment":input.RES_Payment,
             "RES_RTC":input.RES_RTC,
             "RES_Creditcard_Number":input.RES_Creditcard_Number,
             "RES_Exp_Date":input.RES_Exp_Date,
             "RES_Guest_Balance":input.RES_Guest_Balance,
             "RES_Disc_Amount":input.RES_Disc_Amount,
             "RES_Disc_Reason":input.RES_Disc_Reason,
             "RES_Specials":input.RES_Specials,
             "RES_Comments":input.RES_Comments,
             "RES_Item_Inv":input.RES_Item_Inv,
             "RES_Extension":"",
             "RES_Rate_Code":input.RES_Rate_Code,
             "RES_ETA":input.RES_ETA,
             "RES_Block":parm,
             "RES_Party":"", 
             "RES_Currency":input.RES_Currency,
             "RES_Disc_perc":input.RES_Disc_perc,
             "PF_Firstname":this.session.retrieve("fname")+" "+ this.session.retrieve("lastname"),
             "PF_Mobileno": param.toString(),
             "pf_id": this.session.retrieve("pfid")
            };      

          console.log(body);
         return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_UpdateNewReservation',body,options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
     }
     
     //Edit reservation
     postandgetdataedit(input,parm,resid,uniquid,pfid,param):  Observable<object[]> {
       
      const headers = new Headers();
       headers.append('Content-Type','application/json');
       const options = new RequestOptions({ headers: headers });
       if(input.RES_Child==undefined||input.RES_Child==null){input.RES_Child="0";}if(input.RES_Adults==undefined||input.RES_Adults==null){input.RES_Adults="";}
       if(input.RES_Nights==undefined||input.RES_Nights==null){input.RES_Nights="";}if(input.RES_Number_Of_Rooms==undefined||input.RES_Number_Of_Rooms==null){input.RES_Number_Of_Rooms="1";}
       if(input.RES_Rate==undefined||input.RES_Rate==null){input.RES_Rate="";}if(input.RES_Source==undefined||input.RES_Source==null){input.RES_Source="";}
       if(input.RES_Disc_Reason==undefined||input.RES_Disc_Reason==null){input.RES_Disc_Reason="";}if(input.RES_Specials==undefined||input.RES_Specials==null){input.RES_Specials="";}
       if(input.RES_Comments==undefined||input.RES_Comments==null){input.RES_Comments="";}if(input.RES_Item_Inv==undefined||input.RES_Item_Inv==null){input.RES_Item_Inv="";}       
       if(param == null){param = ''; }if(input.RES_Guest_Balance==undefined||input.RES_Guest_Balance==null){input.RES_Guest_Balance="";}
       if(input.RES_Disc_Amount==undefined||input.RES_Disc_Amount==null){input.RES_Disc_Amount="";}if(input.RES_Disc_perc==undefined||input.RES_Disc_perc==null){input.RES_Disc_perc="";}
       if(input.RES_Creditcard_Number==undefined||input.RES_Creditcard_Number==null){input.RES_Creditcard_Number="";}if(input.RES_Currency==undefined||input.RES_Currency==null){input.RES_Currency="";}
       if(input.RES_Payment == null){input.RES_Payment = '';}if(input.RES_Room == null||input.RES_Room == undefined){input.RES_Room = '';}
       if(input.RES_RTC == null||input.RES_RTC == undefined){input.RES_RTC = '';}  if(input.RES_ETA == null||input.RES_ETA == undefined){input.RES_ETA = '';}
       if(input.RES_Res_Type == null||input.RES_Res_Type == undefined){input.RES_Res_Type = '';} 
       if(input.RES_Origin == null||input.RES_Origin == undefined){input.RES_Origin = '';} if(input.RES_Market == null||input.RES_Market == undefined){input.RES_Market = '';}
       let body=
        {
          "RES_Arrival":input.RES_Arrival,
          "RES_Depature":input.RES_Depature,  
          "RES_Nights":input.RES_Nights.toString(),
          "RES_Adults":input.RES_Adults.toString(), 
          "RES_Child":input.RES_Child.toString(),  
          "RES_Number_Of_Rooms":input.RES_Number_Of_Rooms.toString(),
           "RES_Room_Type":input.RES_Room_Type,
           "RES_Room":input.RES_Room.toString(), 
           "RES_Rate":input.RES_Rate.toString(),
           "RES_Packages":"",
           "RES_Block_Code":"", 
           "RES_Res_Type":input.RES_Res_Type, 
           "RES_Market":input.RES_Market, 
           "RES_Source":input.RES_Source ,
           "RES_Origin":input.RES_Origin,
           "RES_Payment":input.RES_Payment,
           "RES_RTC":input.RES_RTC,
           "RES_Creditcard_Number":input.RES_Creditcard_Number,
           "RES_Exp_Date":input.RES_Exp_Date,
           "RES_Guest_Balance":input.RES_Guest_Balance.toString(),
           "RES_Disc_Amount":input.RES_Disc_Amount.toString(),
           "RES_Disc_Reason":input.RES_Disc_Reason,
           "RES_Specials":input.RES_Specials,
           "RES_Comments":input.RES_Comments,
           "RES_Item_Inv":input.RES_Item_Inv,
           "RES_Extension":"",
           "RES_Rate_Code":input.RES_Rate_Code,
           "RES_ETA":input.RES_ETA,
           "RES_Block":parm,
           "RES_Party":"", 
           "RES_Currency":input.RES_Currency,
           "RES_Disc_perc":input.RES_Disc_perc.toString(),
           "PF_Firstname":this.session.retrieve("fname"),
           "PF_Mobileno": param.toString(),
           "Res_guest_status":"",
           "pf_id": pfid,
           "res_id":resid.toString(),
           "res_unique_id":uniquid.toString()
          };      

        console.log(JSON.stringify(body));
       return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_UPDATE_UpdateReservation',body,options)
          .map(this.extractData)
   }

     //wait setvice call
    getwaitdata(input,parm,param,PF_Firstname,Pf_lastname):  Observable<object[]> {
      
      const headers = new Headers();
       headers.append('Content-Type','application/json');
       const options = new RequestOptions({ headers: headers });
       let body={
        "RES_Arrival":input.RES_Arrival,
        "RES_Depature":input.RES_Depature,  
        "RES_Nights":input.RES_Nights.toString(),
        "RES_Adults":input.RES_Adults, 
        "RES_Child":input.RES_Child,  
        "RES_Number_Of_Rooms":input.RES_Number_Of_Rooms,
         "RES_Room_Type":input.RES_Room_Type,
         "RES_Room":"0", 
         "RES_Rate":input.RES_Rate,
         "RES_Packages":"",
         "RES_Block_Code":"", 
         "RES_Res_Type":input.RES_Res_Type, 
         "RES_Market":input.RES_Market, 
         "RES_Source":input.RES_Source,
         "RES_Origin":input.RES_Origin,
         "RES_Payment":input.RES_Payment,
         "RES_RTC":input.RES_RTC,
         "RES_Creditcard_Number":input.RES_Creditcard_Number,
         "RES_Exp_Date":input.RES_Exp_Date,
         "RES_Guest_Balance":input.RES_Guest_Balance,
         "RES_Disc_Amount":input.RES_Disc_Amount,
         "RES_Disc_Reason":input.RES_Disc_Reason,
         "RES_Specials":input.RES_Specials,
         "RES_Comments":input.RES_Comments,
         "RES_Item_Inv":input.RES_Item_Inv,
         "RES_Extension":"",
         "RES_Rate_Code":input.RES_Rate_Code,
         "RES_ETA":input.RES_ETA,
         "RES_Block":parm,
         "RES_Party":"", 
         "RES_Currency":input.RES_Currency,
         "RES_Disc_perc":input.RES_Disc_perc,
         "PF_Firstname":PF_Firstname+" "+Pf_lastname,
         "PF_Mobileno": param.toString(),
         "pf_id": this.session.retrieve("pfid")
        };
      console.log("tesrttttt",body)
       return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_WaitlistReservation',body,options)
          .map(this.extractData)
          //.catch(this.handleErrorObservable);
   }

//Get rate Query 
RateQuery(param):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_SELECT_RateQuery',param,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}

getrestype():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Restype')
     .map(this.extractData)
}
getsource():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Source')
     .map(this.extractData)
}
getorigin():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Origin')
     .map(this.extractData)
}

getpayment():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Payment')
     .map(this.extractData)
}
getcurrencydata():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Profile/profilecurrency')
     .map(this.extractData)
}
getmarket():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Market')
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
   // private handleErrorObservable (error: Response | any) {
     //   console.error("error mesage e=-=-=-=-"+error);
       // return Observable.throw(error.message || error);
        //}
}