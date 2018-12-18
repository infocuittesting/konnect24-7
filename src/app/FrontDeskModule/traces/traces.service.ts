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
  Tracesdeptcode():  Observable<object[]> {
       
    // const headers = new Headers({'Content-Type':'application/json'})
    // const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Department')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  depttracemain():  Observable<object[]> {
       
    // const headers = new Headers({'Content-Type':'application/json'})
    // const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Department')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

  
  Insertguest(inputt:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
   return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Insert_UpdateGuestTraces',inputt,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
 }
 Updateguest(inputt:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
 return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Update_UpdateGuestTraces',inputt,options)
    .map(this.extractData)
    //.catch(this.handleErrorObservable);
    
}
  deletetraces(inputt:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
   return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Delete_RemoveTraces',inputt,options)
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
