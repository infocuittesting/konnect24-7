import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ManagingqueueService {

  constructor(
    private http: Http
  ) { }
 


checkin():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_POST_SELECT_QueryQueueReservation',options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}

    //checkin profile
    checkinProfile(insertdata:any):  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
       
      return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_POST_UPDATE_CheckinGuestArrivals',insertdata,options)
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
    }

roomtype():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}
roomdropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
     .map(this.extractData)

}
roomclassdropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/Select_Class',options)
     .map(this.extractData)

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
