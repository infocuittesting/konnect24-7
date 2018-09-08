import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TracesService {

  constructor(private http: Http) { }
  Trace():  Observable<object[]> {
       
    // const headers = new Headers({'Content-Type':'application/json'})
    // const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_Get_Select_QueryGuestTraces')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  Tracesresolve(inputt:any):  Observable<object[]> {
       
     const headers = new Headers({'Content-Type':'application/json'})
     const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Update_TracesResloved',inputt,options)
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
