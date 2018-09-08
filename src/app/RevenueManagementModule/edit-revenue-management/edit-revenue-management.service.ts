import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";
import { Options } from 'selenium-webdriver/edge';

@Injectable()
export class EditRevenueManagementService {

  constructor(private http: Http,public session:SessionStorageService) { }

  ratecategorydropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_RATECATEGORY',options)
       .map(this.extractData)

  }
  revenuepackages():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_SELECT_Packages',options)
       .map(this.extractData)

  }

  ratecodedropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_SelectRatesetupAll',options)
       .map(this.extractData)

  }

  marketdropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_SELECT',options)
       .map(this.extractData)

  }

  sourcedropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_SOURCE_SELECT',options)
       .map(this.extractData)

  }
  currencydropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_MARKET_CURRENCY_SELECT',options)
       .map(this.extractData)

  }
  seasoncode():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_SELECT_Seasoncode',options)
       .map(this.extractData)

  }
  roomtypesdropdown():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
       .map(this.extractData)

  }

  deleteratedet(deleteids):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "rate_details_id": deleteids
    }
    console.log("delllllllllllllllllllll",deleteids);
    return this.http.post('https://hotel360.herokuapp.com/Delete_Rate_details',body,options)
       .map(this.extractData)

  }

  getallvalues():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "ratecode_id":this.session.retrieve("ratecodeedit")
    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_UpdateRatecodeSetup',body,options)
       .map(this.extractData)

  }


  allvalues():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "ratecode_id":this.session.retrieve("ratecodeedit")
    }
    console.log("binding values ratecodeeeeeeeee",JSON.stringify(body));
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_UpdateRatecodeSetup',body,options)
       .map(this.extractData)

  }

  updaterateheader(cat_id,rmid,rmid1,input:any): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body=
   {
    "rate_code_details":{
      "rate_code":""  ,
      "rate_description":"abcdefg",
      "rate_category_id":input.ratecategoryid,
      "ratecode_id":25
    },
    "rateheader_id":121,
    "begin_sell_date":input.beginselldate,
    "end_sell_date":input.endselldate,
    "market_id":input.market_id.toString(),
      "source_id":input.source_id.toString(),
      "display_sequence":3,
      "room_types":rmid,
      "package":rmid1,
      "packages_id":27,
      "sell_controls":{
        "min_stay":input.Minimum_stay_through,
        "max_stay":input.Maximum_stay_through,
        "min_advance_book":input.Minimum_Advance_Booking,
        "max_advance_book":input.Maximum_Advance_Booking,
        "min_occupancy":input.Minimum_Occupancy,
        "max_occupancy":input.Maximum_Occupancy,
        "sell_id":18
      },
      "transaction_details":{
        "tranction_code_id":3,
        "pkg_tranction_code_id":3,
          "currency_code_id":4,
          "exchange_type_id":3,
          "tax_inc":3,
          "tranction_detail_id":12
      },
      "components":{
          "package":input.Package,
          "day_use":input.Day,
          "negotiated":input.Negotiated,
          "complimentary":input.Complimentary,
          "suppress_rate":input.Suppress,
          "house_use":input.House,
          "print_rate":input.Rate,
          "day_type":input.Type,
          "discount":input.discount,
          "membership":input.Membership,
          "components_id":10
      }
  }
  
   console.log(JSON.stringify(body));

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_INSERT_UpdateRatecodeSetup',body,options)
       .map(this.extractData)

  }

  updateratedetail(rmid2,rmid3,tab,editratedetaills:any,ratedaysid,roomsidrate,packagesids):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
    
        "rate_details_id":editratedetaills.ratecodedrop,
        "season_code_id":editratedetaills.seasoncod,
        "start_date":editratedetaills.start_date,
        "end_date":editratedetaills.end_date,
        "days":{
            "sun":editratedetaills.sun,
            "mon":editratedetaills.mon,
            "tue":editratedetaills.tue,
            "wed":editratedetaills.wed, 
            "thu":editratedetaills.thu,
            "fri":editratedetaills.fri,
            "sat":editratedetaills.sat,
        },
        "rate_days_id":ratedaysid,
        "one_adult_amount":editratedetaills.one_adult_amount,
       "two_adult_amount":editratedetaills.two_adult_amount,
       "three_adult_amount":editratedetaills.three_adult_amount,
       "four_adult_amount":editratedetaills.four_adult_amount,
       "extra_adult_amount":editratedetaills.extra_adult_amount,
       "one_child_amount":editratedetaills.one_child_amount,
       "two_child_amount":editratedetaills.two_child_amount,
       "extra_child_amount":editratedetaills.extra_child_amount,
       "room_types":rmid2,
       "rooms_id":roomsidrate ,
       "package":"",
       "packages_id":packagesids,
       "rate_tier_id":tab
    }
    console.log(JSON.stringify(body));

    return this.http.post('http://hotel360.herokuapp.com/HOTEL_REM_POST_UPDATE_RATE_DETAILS',body,options)
       .map(this.extractData)

  }
  databindvalues():  Observable<object[]> {
    console.log("servicessssssssssssssssssssss")
 const headers = new Headers({'Content-Type':'application/json'})
 const options = new RequestOptions({ headers: headers })
 let body={
   "ratecode_id":this.session.retrieve("ratecodeedit")
 }
 return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_UpdateRatecodeSetup',body,options)
    .map(this.extractData)

}
  ratedetins(rmid2,tab,editratedetaills:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
    
      "ratecode_id":editratedetaills.ratecodedrop,
      "season_code_id":editratedetaills.seasoncod,
      "start_date":editratedetaills.start_date,
      "end_date":editratedetaills.end_date,
      "days":{
          "sun":editratedetaills.sun,
          "mon":editratedetaills.mon,
          "tue":editratedetaills.tue,
          "wed":editratedetaills.wed,
          "thu":editratedetaills.thu,
          "fri":editratedetaills.fri,
          "sat":editratedetaills.sat
      },
      "one_adult_amount":editratedetaills.one_adult_amount,
     "two_adult_amount":editratedetaills.two_adult_amount,
     "three_adult_amount":editratedetaills.three_adult_amount,
     "four_adult_amount":editratedetaills.four_adult_amount,
     "extra_adult_amount":editratedetaills.extra_adult_amount,
     "one_child_amount":editratedetaills.one_child_amount,
     "two_child_amount":editratedetaills.two_child_amount,
     "extra_child_amount":editratedetaills.extra_child_amount,
     "room_types":rmid2,
     "package":[0],
     "rate_tier_id":tab
  }

  
  console.log(JSON.stringify(body));
    return this.http.post('http://hotel360.herokuapp.com/HOTEL_REM_POST_INSERT_RATE_DETAILS',body,options)
       .map(this.extractData)

  }

  private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
    // alert(JSON.stringify(body))
    console.log(JSON.stringify(body));
        return body;
    }

}
