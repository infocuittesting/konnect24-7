import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { Options } from 'selenium-webdriver/edge';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Injectable()
export class EditBusinessBlockService {

  constructor(private http: Http,public session:SessionStorageService) { }

   // blockstatus dropdown.....................
   blockstatusdropdown():Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_BusinessBlockStatus',options)
       .map(this.extractData)

  }
// market dropdown............................
marketdropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Market',options)
     .map(this.extractData)

}

// source dropdown..................................
sourcedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Source',options)
     .map(this.extractData)

}

// Origin Dropdown.........................
origindropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Origin',options)
     .map(this.extractData)

}
// payment dropdown...................
paymentdropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Payment',options)
     .map(this.extractData)

}
// cancel Reason...................
cancelreasondropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_CancelReason',options)
     .map(this.extractData)

}

// Meeting space type...........................
meetingsizetypedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_MeetingSpaceType',options)
     .map(this.extractData)

}

// Inventory Control Dropdown....................
Inventorydropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_InventoryContrtol',options)
     .map(this.extractData)

}

// Ratecode Dropdown..............................
Ratecodedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Profile/profileratecode ',options)
     .map(this.extractData)

}

// Reservation type dropdown.......................
Resetypedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Restype ',options)
     .map(this.extractData)

}
// block type dropdown........................................................
// Reservation type dropdown.......................
BlockTypedropdown():Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
 
  return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_Block_Type ',options)
     .map(this.extractData)

}


  Editblock(block):  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={

    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_UPDATE_BusinessBlockDefinite',body,options)
       .map(this.extractData)
  }
  

  QueryEditblock():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={
        "block_id":this.session.retrieve("blockid".toString())
    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_EditBusinessBlockSearch',body,options)
       .map(this.extractData)
  }
  // Query Room Revenue......................................................................................
QueryRoomRevenue():Observable<object[]> {
  console.log("sucess is worked")
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body = {
    
      "block_id":this.session.retrieve("blockid".toString())
      
  }
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_QueryRoomRevenue',body,options)
     .map(this.extractData)

}

// Create Paymaster Reservation................................................................
PaymasterReservation():Observable<object[]> {
  // console.log("going to service",blockids,typeof(blockids))
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  let body = {
    
      "block_id": this.session.retrieve("blockid".toString())
      
  }
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_PayMasterReservation',body,options)
     .map(this.extractData)

}

Edit_grid_data(params:any):Observable<object[]> {
   console.log("going to service",params)
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers })
  
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_UPDATE_BusinessBlockDefinite',params,options)
     .map(this.extractData)

}
// select_grid_data():  Observable<object[]> {   
//   const headers = new Headers({'Content-Type':'application/json'})
//   const options = new RequestOptions({ headers: headers });
//   let body={
//               "block_id":this.session.retrieve("blockid")
//   }
//     return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_QueryGrid',body,options)
//    .map(this.extractData)

// }






  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
   console.log(JSON.stringify(body));
    // a(JSON.stringify(body));
        return body;
    }

}
