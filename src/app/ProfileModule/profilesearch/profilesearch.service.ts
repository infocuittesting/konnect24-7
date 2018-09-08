import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class ProfilesearchService {

  constructor( private http: Http,public session:SessionStorageService ) { }

  getprofile():  Observable<object[]> {

   
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
   
  
    return this.http.get('https://hotel360.herokuapp.com/Profile/QueryProfileSearch')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }


  profile():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilepftype')
       .map(this.extractData)

  }


  updateProfile(input:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body=
          {
           "pf_id":this.session.retrieve("id"),
           "PF_Firstname":input.PF_Firstname,
           "PF_Mobileno":input.PF_Mobileno,
           "PF_Lastname":input.PF_Lastname,
           "PF_City":input.PF_City,
}
    return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileRecord',body,options)
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
   
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilecurrency')
       .map(this.extractData)

  }


  communication1dropdown():  Observable<object[]> {
     
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilecommunication')
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
