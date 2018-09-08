import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class OutoforderService {

  constructor( private http: Http,public session:SessionStorageService ) { }

postandgetdata(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={"rm_room":input.rm_room.toString(),"rm_status":input.rm_status,"rm_from_date":input.rm_from_date,"rm_through_date":input.rm_through_date,
   "rm_return_as":input.rm_return_as,"rm_reason":input.rm_reason,"rm_description":input.rm_description
  };
   console.log(body);
   return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Insert_Updateoutoforderservice',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}


outofOrder():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Select_Queryoutoforderservice',options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  
  roomnumberdropdown():  Observable<object[]> {
       
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


  orderlisting1():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
       .map(this.extractData)

  }

  reasonlisting():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/select_mainteanance_reason',options)
       .map(this.extractData)

  }

  servicelisting():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/select_room_service_status',options)
       .map(this.extractData)

  }


  orderlisting2():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
       .map(this.extractData)

  }


  updateroomoutoforder(input:any):  Observable<object[]> {
       
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     console.log('working');
     let body={
        "RM_Room":this.session.retrieve("id1"),
        // "rm_room":input.rm_room.toString(),
        "RM_Status":input.rm_status,"RM_From_Date":input.rm_from_date,"RM_Through_Date":input.rm_through_date,
        "RM_Return_As":input.rm_return_as,"RM_Reason":input.rm_reason,"RM_Description":input.rm_description
    };
    console.log(body);
     return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Update_Updateoutoforderservices',body,options)
        .map(this.extractData)
        //.catch(this.handleErrorObservable);
  }



  deleteoutoforder(input:any):  Observable<object[]> {
       
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     console.log('working');
     let body={
        "rm_room":this.session.retrieve("id1")   
    };
    
     return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Delete_Deleteoutoforderservice',body,options)
        .map(this.extractData)
        //.catch(this.handleErrorObservable);
  }
  
  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
 console.log(JSON.stringify(body));
    //  alert(JSON.stringify(body));
        return body;
    }

}
