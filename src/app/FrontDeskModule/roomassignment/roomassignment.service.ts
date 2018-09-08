import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomassignmentService {


  constructor(private http: Http) { }

  searchedit():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_RES_GET_SELECT_QueryReservationSearch')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

//unassigning profile
  unassignProfile(insertdata:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
     
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_GET_SELECT_RoomUnassign',insertdata,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

  //unassigning profile
  checkinProfile(insertdata:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
     
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_POST_UPDATE_CheckinGuestArrivals',insertdata,options)
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
