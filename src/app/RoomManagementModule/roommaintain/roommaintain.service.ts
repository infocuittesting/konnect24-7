import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class RoommaintainService {

                                                                                                       

  constructor(private http: Http,public session:SessionStorageService  ) { }


  roommaintenance():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Select_Queryroommaintenance',options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }


  postandgetdata(input:any):  Observable<object[]> {
       
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     console.log('working');
     let body={"rm_room":input.rm_room.toString(),"rm_mainteanance_reason":input.rm_mainteanance_reason,"rm_mainteanance_remarks":input.rm_mainteanance_remarks
    };
    
     return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Insert_Updateroommaintenance',body,options)
        .map(this.extractData)
        //.catch(this.handleErrorObservable);
 }

 updateroommaintenance(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
      "rm_room":this.session.retrieve("id8"),
      // "rm_room":input.rm_room.toString(),
     "rm_mainteanance_reason":input.rm_mainteanance_reason,
     "rm_mainteanance_remarks":input.rm_mainteanance_remarks
  };
  
   return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Insert_Updateroommaintenance',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}


resolveroom(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
    "rm_room":this.session.retrieve("id8"),
  };
  
   return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Update_ResolveRoomMaintenance',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}


deleteroommaintenance(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
    "rm_room":this.session.retrieve("id8"),
  };
  
   return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Delete_DeleteRoomMaintenance',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}


 roomclassdropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/Select_Class',options)
     .map(this.extractData)

}


reasondropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/select_mainteanance_reason',options)
     .map(this.extractData)

}


roomdropdown():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
     .map(this.extractData)

}

    private extractData(res: Response) {
        //alert('hai20')
        // console.log('res========---===='+res);
        let body = res.json();
      console.log(JSON.stringify(body));
        //  alert(JSON.stringify(body));
            return body;
        }

}
