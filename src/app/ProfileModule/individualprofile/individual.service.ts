import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class IndividualService { 

    constructor (
        private http: Http
      ) {}

        
      postandgetdata(input:any):  Observable<object[]> {
       
        const headers = new Headers();
         headers.append('Content-Type','application/json');
         const options = new RequestOptions({ headers: headers });
         console.log('working');
         let body={"PF_Firstname":input.PF_Firstname, 
         "PF_Lastname":input.PF_Lastname, 
         "PF_Language":input.PF_Language,
         "PF_Title":input.PF_Title,
         "PF_Mobileno":input.PF_Mobileno,
         "PF_Individual_Address":input.PF_Individual_Address,
         "PF_Home_Address":input.PF_Home_Address,
         "PF_City":input.PF_City,
         "PF_Postalcode":input.PF_Postalcode,
         "PF_Individual_Country":input.PF_Individual_Country,
         "PF_Individual_State":input.PF_Individual_State,
         "PF_Salutation":" ",
         "PF_Individual_VIP":input.PF_Individual_VIP,
         "PF_Nationality":input.PF_Nationality,
         "PF_Date_Of_Birth":input.PF_Date_Of_Birth,
         "PF_Type":input.PF_Type,
         "PF_Passport":input.PF_Passport,
         "PF_Individual_Communication1":input.PF_Individual_Communication1,
         "PF_Individual_Communication2":input.PF_Individual_Communication2,
         "PF_Individual_Communication3":input.PF_Individual_Communication3,
         "PF_Individual_Commtype1":input.PF_Individual_Commtype1,
         "PF_Individual_Commtype2":input.PF_Individual_Commtype2,
         "PF_Individual_Commtype3":input.PF_Individual_Commtype3
       };
        
         return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateIndividualProfile',body,options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
     }


    

    updateIndividualProfile(insertdata:any):  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateIndividualProfileRecord',insertdata,options)
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
    }
    

    countrydropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/profilecountry')
         .map(this.extractData)

    }


    statedropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/profilestate')
         .map(this.extractData)

    }


    vipdropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/profilevip')
         .map(this.extractData)

    }

    nationalitydropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/profilenationality')
         .map(this.extractData)

    }

    currencydropdown():  Observable<object[]> {
       
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
    titledropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/Title')
         .map(this.extractData)

    }
    languagedropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
     
      return this.http.get('https://hotel360.herokuapp.com//Profile/profilelanguage')
         .map(this.extractData)

    }


    communication1dropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/profilecommunication')
         .map(this.extractData)

    }

    pftypedropdown():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers })
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/profilepftype')
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