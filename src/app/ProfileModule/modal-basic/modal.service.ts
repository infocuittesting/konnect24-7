import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod, } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class ModalService { 

    constructor (
        private http: Http,public session:SessionStorageService 
      ) {}


      
        
   getTables(insertdata:any):  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.post('http://hotel360.herokuapp.com/Profile/QueryProfileAcitivitylog',insertdata,options)
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
    }

    credicardtype():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Cardtype')
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
  }


    deleteCredit(input:any):  Observable<object[]> {
      const headers = new Headers({'Content-Type':'application/json'})
       const options = new RequestOptions({ headers: headers });
       return this.http.post('https://hotel360.herokuapp.com/Profile/DeleteProfileCreditcard',input,options)
          .map(this.extractData)
          //.catch(this.handleErrorObservable);
     }
     
     negotesDelete(input:any):  Observable<object[]> {
      const headers = new Headers({'Content-Type':'application/json'})
       const options = new RequestOptions({ headers: headers });
       return this.http.post('https://hotel360.herokuapp.com/Profile/DeleteProfileNegotiate',input,options)
          .map(this.extractData)
          //.catch(this.handleErrorObservable);
     }

     notesDelete(input:any):  Observable<object[]> {
      const headers = new Headers({'Content-Type':'application/json'})
       const options = new RequestOptions({ headers: headers });
       return this.http.post('https://hotel360.herokuapp.com/Profile/DeleteProfileNotes',input,options)
          .map(this.extractData)
          //.catch(this.handleErrorObservable);
     }


     deleterecordDelete(input:any):  Observable<object[]> {
      const headers = new Headers({'Content-Type':'application/json'})
       const options = new RequestOptions({ headers: headers });
       return this.http.post('https://hotel360.herokuapp.com/Profile/DeleteProfileRecord',input,options)
          .map(this.extractData)
          //.catch(this.handleErrorObservable);
     }


     preferDelete(input:any):  Observable<object[]> {
      const headers = new Headers({'Content-Type':'application/json'})
       const options = new RequestOptions({ headers: headers });
       return this.http.post('https://hotel360.herokuapp.com/Profile/DeleteProfilePreference',input,options)
          .map(this.extractData)
          //.catch(this.handleErrorObservable);
     }



    getFuture(insertdata:any):  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.post('https://hotel360.herokuapp.com/Profile/QueryFutureReservation',insertdata,options)
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
  }


  getHistory(insertdata:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.post('https://hotel360.herokuapp.com/Profile/QueryProfileHistory',insertdata,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
}

    ratecodedropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/profileratecode ')
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
  }

  notedropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilenotetype')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
}


preferencedropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.get('https://hotel360.herokuapp.com/Profile/profilepreferencevalue')
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


preferencegroupdropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.get('https://hotel360.herokuapp.com/Profile/profilepreferencegroup ')
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}



    getNegotiated(insertdata:any):  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.post('https://hotel360.herokuapp.com/Profile/QueryNegotiatedRate',insertdata,options)
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
  }

  getNegotes():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.post('https://hotel360.herokuapp.com/Profile/QueryNegotiatedRate',options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
}
      
  
  getNotes(insertdata:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.post('https://hotel360.herokuapp.com/Profile/QueryProfileNotes',insertdata,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
}


getCreditcard(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('http://hotel360.herokuapp.com/Profile/QueryProfileCreditcard',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}





//insert service for credit card
insertCreditcard(input:any):  Observable<object[]> {
  // console.log('kannu',input)     
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers:headers,});

  let body=
        {
         "pf_id":this.session.retrieve("id"),
         "PF_Card_Type":input.PF_Card_Type,
   	    "PF_Creditcard_No":input.PF_Creditcard_No,
   	     "PF_Expiration_Date":input.PF_Expiration_Date
   }

  console.log(body);
 
  return this.http.post('http://hotel360.herokuapp.com/Profile/UpdateProfileCreditcardnew',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


insertNotes(input:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let body=
  {
   "pf_id":this.session.retrieve("id"),
   "PF_Note_Type":input.PF_Note_Type,
   "PF_Note_Title":input.PF_Note_Title,
  "PF_Note_Description":input.PF_Note_Description,
  "PF_Notes_Date":input.PF_Notes_Date
 }
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileNotes',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}



insertNegotiated(input:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });

  let body=
  {
   "pf_id":this.session.retrieve("id"),
   "pf_rate_code":input.pf_rate_code,
   "PF_Start_Sell_Date":input.PF_Start_Sell_Date,
   "PF_End_Sell_Date":input.PF_End_Sell_Date,
  }

  
 
  return this.http.post('http://hotel360.herokuapp.com/Profile/UpdateNegotiatedRate',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


insertPrefer(input:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });

  let body=
  {
   "pf_id":this.session.retrieve("id"),
   "PF_Preference_Group":input.PF_Preference_Group,
   "PF_Preference_Description":input.PF_Preference_Description,
   "PF_Guest_Preference":input.PF_Guest_Preference,
   "pf_preference_group_desc": input.pf_preference_group_desc
  }
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfilePreferencenew',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}



   
getPreferences(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/QueryProfilePreference',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}

Preferences(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/QueryProfilePreference',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}

updateCredit(input:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  // let body=
  //       {
  //        "pf_id":this.session.retrieve("id"),
  //        "cc_id":this.session.retrieve("id1"),
  //        "PF_Card_Type":input.PF_Card_Type,
  //  	    "PF_Creditcard_No":input.PF_Creditcard_No,
  //  	     "PF_Expiration_Date":input.PF_Expiration_Date
  //  }

  let body=
        {
         "pf_id":this.session.retrieve("id"),
         "cc_id":this.session.retrieve("id1"),
         "PF_Card_Type":input.PF_Card_Type,
   	    "PF_Creditcard_No":input.PF_Creditcard_No,
   	     "PF_Expiration_Date":input.PF_Expiration_Date
   }
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileCreditcardRecord',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


updateNegotiated(input:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let body=
  {
   "pf_id":this.session.retrieve("id"),
   "negotiate_id":this.session.retrieve("id3"),
   "PF_Rate_Code":input.PF_Rate_Code,
   "PF_Start_Sell_Date":input.PF_Start_Sell_Date,
   "PF_End_Sell_Date":input.PF_End_Sell_Date,
  }
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileNegotiatedRateRecord',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


updatePrefer(input:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  let body=
  {
   "pf_id":this.session.retrieve("id"),
   "preference_id":this.session.retrieve("id4"),
   "PF_Preference_Group":input.PF_Preference_Group,
   "PF_Preference_Description":input.PF_Preference_Description,
   "PF_Guest_Preference":input.PF_Guest_Preference,
   "pf_preference_group_desc": input.pf_preference_group_desc
  }
  
return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfilePreference',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}

updateNotes(input:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let body=
  {
   "pf_id":this.session.retrieve("id"),
   "notes_id":this.session.retrieve("id2"),
   "PF_Note_Type":input.PF_Note_Type,
   "PF_Note_Title":input.PF_Note_Title,
   "PF_Note_Description":input.PF_Note_Description,
   "PF_Notes_Date":input.PF_Notes_Date
 }
  
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileNotesRecord',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}
 private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
  console.log(JSON.stringify(body));
    // a(JSON.stringify(body));
        return body;
    }
   // private handleErrorObservable (error: Response | any) {
     //   console.error("error mesage e=-=-=-=-"+error);
       // return Observable.throw(error.message || error);
        //}
}
