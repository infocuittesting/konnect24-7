import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService { 

    constructor (
        private http: Http
      ) {}

        
      postandgetdata(input:any):  Observable<object[]> {
       
        const headers = new Headers();
         headers.append('Content-Type','application/json');
         const options = new RequestOptions({ headers: headers });
         console.log('working');
         let body={  
        "PF_Account":input.PF_Account,"PF_Company_Address":input.PF_Company_Address,
        "PF_Business_Address":input.PF_Business_Address,"PF_Postalcode":input.PF_Postalcode.toString(),"PF_Owner":input.PF_Owner,
        "PF_Territory":input.PF_Territory,"PF_Type":input.PF_Type,"PF_AR_Number":input.PF_AR_Number,"PF_City":input.PF_City,
        "PF_Ref_Currency":input.PF_Ref_Currency,"PF_Company_Communication1":input.PF_Company_Communication1,"PF_Company_Communication2":input.PF_Company_Communication2,"PF_Company_Communication3":input.PF_Company_Communication3,
        "PF_Company_Commtype1":input.PF_Company_Commtype1,"PF_Company_Commtype2":input.PF_Company_Commtype2,"PF_Company_Commtype3":input.PF_Company_Commtype3,"PF_Company_Country":input.PF_Company_Country,"PF_Company_State":input.PF_Company_State,
    };
        console.log(body);
         return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateCompanyProfile',input,options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
     }




          
     deleteCompanyProfile(insertdata:any):  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/DeleteProfileRecord?PF_Firstname=aravindh&PF_Mobileno=23432435&PF_Type=company')
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }


      updateCompanyProfile(insertdata:any):  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileRecordCompany',insertdata,options)
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }


      countrydropdown():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/profilecountry',options)
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }


      statedropdown():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/profilestate',options)
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }

      communication1dropdown():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers })
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/profilecommunication')
           .map(this.extractData)
  
      }

      currencydropdown():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers })
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/profilecurrency')
           .map(this.extractData)
  
      }
  
      profile():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers })
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/profilepftype ')
           .map(this.extractData)
  
      }
  
      postaldropdown():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers })
       
        return this.http.get('https://hotel360.herokuapp.com//Profile/profilepostalcode')
           .map(this.extractData)
  
      }
  
      citydropdown():  Observable<object[]> {
         
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers })
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/profilecity')
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
   // private handleErrorObservable (error: Response | any) {
     //   console.error("error mesage e=-=-=-=-"+error);
       // return Observable.throw(error.message || error);
        //}
}