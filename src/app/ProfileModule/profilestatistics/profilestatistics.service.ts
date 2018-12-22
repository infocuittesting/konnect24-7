import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class ProfilestatisticsService {

  constructor(public session:SessionStorageService,private http: Http) { }

  databindvalues():  Observable<object[]> {
    console.log("servicessssssssssssssssssssss")
 const headers = new Headers({'Content-Type':'application/json'})
 const options = new RequestOptions({ headers: headers })
 let body={
   "pf_id":this.session.retrieve("profile_id")
 }
 return this.http.post('https://hotel360.herokuapp.com/Profile/QueryProfileStatistics',body,options)
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

}
