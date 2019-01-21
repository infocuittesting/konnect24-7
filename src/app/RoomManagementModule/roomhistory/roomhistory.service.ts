import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomhistoryService {

  constructor(private http: Http) { }

  getroomhistory():  Observable<object[]> {   
    return this.http.get('https://hotel360.herokuapp.com/RoomHistory')
       .map(this.extractData)
  
  }

  roomtypedropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
       .map(this.extractData)

  }
  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();   
    console.log(JSON.stringify(body))
    // console.log(JSON.stringify(body));
        return body;
    }  
}
