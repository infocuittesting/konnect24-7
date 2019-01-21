import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TurndownmanagementService {

  constructor(private http: Http) { }

  getturndown():Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });   
    return this.http.post('https://hotel360.herokuapp.com/hotel_rm_post_Select_Turndown_management',options)
       .map(this.extractData)
  }
  insertturndown(param,inputt):Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });   
    let body ={
      "traces_id":inputt,
      "turndown_status":param
    }
    console.log(body)
    return this.http.post('https://hotel360.herokuapp.com/hotel_rm_post_update_Turndown_management',body,options)
       .map(this.extractData)
  }
  turndowndropdown():Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });   
    return this.http.post('https://hotel360.herokuapp.com/hotel_rm_post_select_Dropdown_Turndown_management',options)
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
