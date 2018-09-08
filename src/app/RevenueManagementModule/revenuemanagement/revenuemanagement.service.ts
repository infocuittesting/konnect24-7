import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";


@Injectable()
export class RevenuemanagementService {

  constructor(public session:SessionStorageService,private http: Http) { }

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

  insertnewnego(input:any): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body={ 

    "rate_code_id":input.ratecod.toString(),
    "negotiate_begin_sell_date":input.begin,
    "negotiate_end_sell_date":input.endsel,
    "negotiate_commision_code_id":0
   }
   console.log("negooooooooooooooooooo"+JSON.stringify(body));

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_INSERT_NEGOTIATED',body,options)
       .map(this.extractData)

  }

  deletenego(ratecodeid):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "negotiated_code_id":ratecodeid.toString()
    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_DELETE_Negotiated_Rate',body,options)
       .map(this.extractData)

  }

  deleteratedet(deleteids):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "rate_details_id": deleteids
    }
    console.log("rate_details_iddddddddddddddddddddd"+deleteids)
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

  allvalues():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "ratecode_id":this.session.retrieve("ratecodeedit")
    }
    console.log("binding values ratecodeeeeeeeee",JSON.stringify(body));
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_SELECT_UpdateRatecodeSetup ',body,options)
       .map(this.extractData)

  }
  
  editnego(bgsd:any,rateecode):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
      "rate_code_id":rateecode,
	    "negotiate_begin_sell_date":bgsd.beginn,
	    "negotiate_end_sell_date":bgsd.endsell,
	    "negotiate_commision_code_id":0
    }
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_UPDATE_Negotiated_Rate',body,options)
       .map(this.extractData)

  }

  NegotiatedRate():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   
    return this.http.get('http://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_SELECT_Negotiated_Rate',options)
       .map(this.extractData)

  }
  
  saverateheader(ratecode,cat_id,rmid,rmid1,input:any): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body=
   {
    "rate_code_details":{
      "rate_code":ratecode  ,
      "rate_description":input.descrp,
      "rate_category_id":input.ratecategoryid
    },
    "begin_sell_date":input.beginselldate,
    "end_sell_date":input.endselldate,
    "market_id":input.market_id.toString(),
      "source_id":input.source_id.toString(),
      "display_sequence":3,
      "room_types":rmid,
      "package":rmid1,
      "sell_controls":{
        "min_stay":input.Minimum_stay_through,
        "max_stay":input.Maximum_stay_through,
        "min_advance_book":input.Minimum_Advance_Booking,
        "max_advance_book":input.Maximum_Advance_Booking,
        "min_occupancy":input.Minimum_Occupancy,
        "max_occupancy":input.Maximum_Occupancy
      },
      "transaction_details":{
        "tranction_code_id":3,
        "pkg_tranction_code_id":3,
          "currency_code_id":4,
          "exchange_type_id":3,
          "tax_inc":3
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
          "membership":input.Membership
      }
  }
  
   console.log('####################'+JSON.stringify(body)+'#####################');

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_INSERT_UpdateRatecodeSetup',body,options)
       .map(this.extractData)

  }
  updaterateheader(ratecode,cat_id,rmid,rmid1,input:any): Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
   let body=
   {
    "rate_code_details":{
      "rate_code":ratecode  ,
      "rate_description":input.descrp,
      "rate_category_id":input.ratecategoryid,
      "ratecode_id":this.session.retrieve("ratecodeedit")
    },
    "rateheader_id":this.session.retrieve("rateheaderid"),
    "begin_sell_date":input.beginselldate,
    "end_sell_date":input.endselldate,
    "market_id":input.market_id.toString(),
      "source_id":input.source_id.toString(),
      "display_sequence":3,
      "room_types":rmid,
      "package":rmid1,
      "packages_id":this.session.retrieve("packagesid"),
      "rooms_id":this.session.retrieve("roomsid"),
      "sell_controls":{
        "min_stay":input.Minimum_stay_through,
        "max_stay":input.Maximum_stay_through,
        "min_advance_book":input.Minimum_Advance_Booking,
        "max_advance_book":input.Maximum_Advance_Booking,
        "min_occupancy":input.Minimum_Occupancy,
        "max_occupancy":input.Maximum_Occupancy,
        "sell_id":this.session.retrieve("sellid")
      },
      "transaction_details":{
        "tranction_code_id":this.session.retrieve("tranctioncodeid"),
        "pkg_tranction_code_id":3,
          "currency_code_id":4,
          "exchange_type_id":3,
          "tax_inc":0,
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
          "components_id":this.session.retrieve("componentsid")
      }
  }
  
   console.log('******************'+JSON.stringify(body)+'************************');

    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REM_POST_UPDATE_UpdateRatecodeSetup',body,options)
       .map(this.extractData)

  }

  insertratedetail(ratecodedrop,input:any,rmid2,rmid3):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
    
        "ratecode_id":ratecodedrop,
        "season_code_id":input.seasoncod,
        "start_date":input.start_date,
        "end_date":input.end_date,
        "days":{
            "sun":input.sun,
            "mon":input.mon,
            "tue":input.tue,
            "wed":input.wed,
            "thu":input.thu,
            "fri":input.fri,
            "sat":input.sat
        },
        "one_adult_amount":input.one_adult_amount,
       "two_adult_amount":input.two_adult_amount,
       "three_adult_amount":input.three_adult_amount,
       "four_adult_amount":input.four_adult_amount,
       "extra_adult_amount":input.extra_adult_amount,
       "one_child_amount":input.one_child_amount,
       "two_child_amount":input.two_child_amount,
       "extra_child_amount":input.extra_child_amount,
       "room_types":rmid2,
       "package":rmid3,
       "rate_tier_id":0
    }
    console.log('testtttttttttttttttttttt'+JSON.stringify(body)+'************************');
    return this.http.post('http://hotel360.herokuapp.com/HOTEL_REM_POST_INSERT_RATE_DETAILS',body,options)
       .map(this.extractData)

  }
 


  updateratedetail(ratedetail,user:any,rmid2,rmid3):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers })
    let body={
    
        "rate_details_id":ratedetail.ratedetailid,
        "season_code_id":user.seasoncod,
        "start_date":user.start_date,
        "end_date":user.end_date,
        "days":{
            "sun":user.sun,
            "mon":user.mon,
            "tue":user.tue,
            "wed":user.wed, 
            "thu":user.thu,
            "fri":user.fri,
            "sat":user.sat
        },
        "rate_days_id":ratedetail.ratedaysid,
        "one_adult_amount":user.one_adult_amount,
       "two_adult_amount":user.two_adult_amount,
       "three_adult_amount":user.three_adult_amount,
       "four_adult_amount":user.four_adult_amount,
       "extra_adult_amount":user.extra_adult_amount,
       "one_child_amount":user.one_child_amount,
       "two_child_amount":user.two_child_amount,
       "extra_child_amount":user.extra_child_amount,
       "room_types":rmid2,
       "rooms_id":ratedetail.roomsid ,
       "package":rmid3,
       "packages_id":ratedetail.packageid,
       "rate_tier_id":0
    }
 
    console.log('@@@@@@@@@@@@@@'+JSON.stringify(body));
    return this.http.post('http://hotel360.herokuapp.com/HOTEL_REM_POST_UPDATE_RATE_DETAILS',body,options)
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
