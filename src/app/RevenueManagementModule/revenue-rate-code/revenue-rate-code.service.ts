import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RevenueRateCodeService {

  constructor(private http: Http) { }

  selratecode():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_SelectRatesetupAll',options)
       .map(this.extractData)

  }

  ratecodedropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_SelectRatesetupAll',options)
       .map(this.extractData)

  }
  ratecategorydropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_RATECATEGORY',options)
       .map(this.extractData)

  }

  deleteratecode(ratecdid):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "ratecode_id": ratecdid
    }
    return this.http.post('https://hotel360.herokuapp.com/Delete_Rate_code',body,options)
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
