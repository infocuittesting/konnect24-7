import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class RoomconditionService {

  constructor (private http: Http,public session:SessionStorageService ) { }


  getroomcondition():  Observable<object[]> 
  {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    return this.http.get('https://hotel360.herokuapp.com/Hotel_Rm_Post_Select_QueryRoomCondition')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

  insertRoomcondition(input:any):  Observable<object[]> {
    // console.log('kannu',input)     
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers:headers,});
  
    let body=
          {
            "rm_room":this.session.retrieve("id"),
           "rm_condition":input.rm_condition,
          }
  
   return this.http.post('http://hotel360.herokuapp.com/Hotel_Rm_Post_Insert_Updateroomcondition',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  

  updateRoomcondition(input:any):  Observable<object[]> {
    // console.log('kannu',input)     
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers:headers,});
  
    let body=
          {
            "rm_room":this.session.retrieve("id"),
           "rm_condition":input,
          }
  
   return this.http.post('https://hotel360.herokuapp.com/hotel_rm_post_update_updateroomcondition',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }


  deleteroomcondition(input:any):  Observable<object[]> {
       
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     console.log('working');
     let body={
      "rm_room":this.session.retrieve("id"),
    };
    
     return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Delete_RoomCondition',body,options)
        .map(this.extractData)
        //.catch(this.handleErrorObservable);
  }
  
  

  roomdropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
       .map(this.extractData)

  }

  conditiondropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/Select_Condition',options)
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
   console.log(JSON.stringify(body));
     // a(JSON.stringify(body));
         return body;
     }

}
