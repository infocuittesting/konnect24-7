import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomdiscrepencyService {

  constructor(private http: Http) { }


  postandgetdata(input:any):  Observable<object[]> {
       
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     console.log('working');
     let body={"RM_HK_Status":input.RM_HK_Status,"RM_Room":input.RM_Room,"RM_HK_Person":input.RM_HK_Person
   
   
};
    
     return this.http.post('https://hotel360.herokuapp.com/hotel_rm_post_update_updateroomdiscrepancies',input,options)
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

getfloordropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/select_floor',options)
     .map(this.extractData)

}


getroomdiscrepencies():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Select_QueryRoomDiscrepancies',options)
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
// private handleErrorObservable (error: Response | any) {
 //   console.error("error mesage e=-=-=-=-"+error);
   // return Observable.throw(error.message || error);
    //}
}


