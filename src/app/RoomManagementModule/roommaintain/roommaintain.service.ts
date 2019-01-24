import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class RoommaintainService {

                                                                                                       

  constructor(private http: Http,public session:SessionStorageService  ) { }

  //return status
  room():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/Select_RoomStatus',options)
       .map(this.extractData)
 
  }


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
     console.log(input);
     let body={"rm_room":input.rm_room.toString(),"rm_mainteanance_reason":input.rm_mainteanance_reason,"rm_mainteanance_remarks":input.rm_mainteanance_remarks,
     "rm_return_as":input.rm_return_as,"rm_status":input.rm_status,
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
      "rm_room":input.rm_room,
      // "rm_room":input.rm_room.toString(),
     "rm_mainteanance_reason":input.rm_mainteanance_reason,"rm_mainteanance_remarks":input.rm_mainteanance_remarks,
     "rm_return_as":input.rm_return_as,"rm_status":input.rm_status,
  };
  
   return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Insert_Updateroommaintenance',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}


resolveroom1(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={
    "rm_room":input,
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
    "rm_room":input,
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
