import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
 
@Injectable()
export class InquriprocessserviceService {

  constructor(private http: Http,public session:SessionStorageService) { }
// RoomtypeDroupDowns
  roomtypedroupdown():  Observable<object[]> {   
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
       .map(this.extractData)
}

roomtypedroupdown1():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
     .map(this.extractData)
}
roomtypedroupdown2():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
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
    vallvall(daisy):  Observable<object[]> {   
      console.log("vaalvallfunction",daisy)
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      let body = {
        
        "Inquiry":
        {	
        "start_date":daisy.RES_Arrival,
        "nights":daisy.RES_Nights,
        "end_date":daisy.RES_Depature,
        "rooms_per_day":daisy.roomperday,
        "meeting_space_size":daisy.meeting_size,
        "meeting_space_type":daisy.meeting_size_type,
        "attendess":daisy.attdence,
        "pf_id":"cpy71",
        "roomtype_one":daisy.roomtypeselection,
        "roomtype_two":daisy.roomtype1selection,
        "roomtype_three":daisy.roomtype2selection,
        "roomtype_count_one":daisy.count,
        "roomtype_count_two":daisy.count2,
        "roomtype_count_three":daisy.count3
          },
       "Inquiry_grid":
          [{
          
            "day":"day1",
            "Kngn":"12",
            "Ksbn":"",
            "Ksbs":"",
            "Sjsn":"",
            "Sjss":"",
            "Comp":"10",
            "Kngs":"8",
            "Com1":"",
            "Total":"30"
          }]
      };
      
      return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_INSERT_BusinessBlock',body,options)
         .map(this.extractData)
    }    
}
