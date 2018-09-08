import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class PackagesService {

  constructor(private http: Http) { }
  Packages():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_SELECT_Packages_All',options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  
  //packages delete
  delePack(inputt:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_PAC_POST_DELETE_Package',inputt,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();   
    //alert(JSON.stringify(body))
    console.log(JSON.stringify(body));
        return body;
    }

}
