import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class RominglistService {

  constructor(private http: Http,public session:SessionStorageService) { }

// Create Group Reservation
GroupReservation(savedetails1):Observable<object[]> {
    console.log("insert going to service", savedetails1)
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body = savedetails1 
      
       
    
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_GroupReservations',body,options)
       .map(this.extractData)
  
  } 
  updateroom(roomsgrid):Observable<object[]> {
    // console.log("", )
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body = {
    "block_id":this.session.retrieve("blockid"),
    "data": roomsgrid
    // [
    //        {
    //            "roomtype_id": 2,
    //            "available_rooms": 6
    //        },
    //        {
    //            "roomtype_id": 4,
    //            "available_rooms": 4
    //        },
    //        {
    //            "roomtype_id": 6,
    //            "available_rooms": 4
    //        }
    //    ]
    }
    
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_UPDATE_UpdateRoomingList_Roomtype',body,options)
       .map(this.extractData)
  
  } 

  QueryRoomtypeGrid():Observable<object[]> {
    console.log("query hhhhh")
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body = {
      
        "block_id":this.session.retrieve('blockid')
        
    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_SelectRoomingList_Roomtype',body,options)
       .map(this.extractData)
  
  }
query_grid_data():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={
                "block_id":this.session.retrieve("blockid")
    }
      return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_QueryGrid',body,options)
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
