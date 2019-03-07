import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class GeneralconfigurationService {

  constructor(private http: Http) { }

  //get pefernece buttom
  pref(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Profile/profilepreferencegroup')
      .map(this.extractData)
  }

  //get pefernece buttom
  crd(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Cardtype')
      .map(this.extractData)
  }

  //get reservation
  res(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Restype')
      .map(this.extractData)
  }

  //get aleart code
  art(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Alertcode')
      .map(this.extractData)
  }

  //get alertarea
  artar(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Alertarea')
      .map(this.extractData)
  }

  //get Source
  sor(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Source')
      .map(this.extractData)
  }

  //get department
  dep(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Department')
      .map(this.extractData)
  }

  //get Cancel reason
  can(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_CancelReason')
      .map(this.extractData)
  }

  //get privileges
  pri(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Privileges')
      .map(this.extractData)
  }

  //get Waitlist
  waitlist(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Waitlist_reason')
      .map(this.extractData)
  }

  //get roomtype
  roomtype(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type', options)
      .map(this.extractData)
  }

  //get room class
  rmclass(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/Select_Class', options)
      .map(this.extractData)
  }

  //get roomcondition
  rmcon(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/Select_Condition', options)
      .map(this.extractData)
  }

  //get maintain
  maint(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/select_mainteanance_reason', options)
      .map(this.extractData)
  }

  //get peyment
  pay(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_SELECT_REASONDropdown', options)
      .map(this.extractData)
  }

  //get rate category
  ratecate(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_SELECT_RATECATEGORY', options)
      .map(this.extractData)
  }

  //get season code
  seasoncode(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_SELECT_Seasoncode', options)
      .map(this.extractData)
  }

  //get season code
  marketgroup(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Market')
      .map(this.extractData)
  }

  //get origin code
  ori(): Observable<object[]> {
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Origin')
      .map(this.extractData)
  }

  //get fo status
  fos(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/Select_Hkstatus_Code', options)
      .map(this.extractData)
  }

  //get floor 
  floor(): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    return this.http.post('https://hotel360.herokuapp.com/select_floor', options)
      .map(this.extractData)
  }

// get Room cofiguration
  gethousekeepingdata():  Observable<object[]> {

    return this.http.get('https://hotel360.herokuapp.com/Hotel_Rm_Post_Select_QueryRoomList')
       .map(this.extractData)     
  }
  //insert preference buttom
  instpref(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "prefernecegroup": parm.preferencegroup,
      "preferencegroup_desc": parm.preferencegroup_desc
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Profile/profilepreferencevalue_insert', body, options)
      .map(this.extractData)
  }

  //insert creditcard buttom
  instcredit(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "creditcard_description": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Cardtype', body, options)
      .map(this.extractData)
  }

  //insert reservationtype buttom
  instrestype(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "restype": parm.restype,
      "restype_description": parm.restype_description
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_RestypeInsert', body, options)
      .map(this.extractData)
  }

  //insert alertcode buttom
  instalert(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "alertcode": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Alertcode', body, options)
      .map(this.extractData)
  }

  //insert alertarea buttom
  instalertar(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "alertarea": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Alertarea', body, options)
      .map(this.extractData)
  }

  //insert source buttom
  instso(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "sourcecode": parm.sourcecode,
	"sourcedescription":parm.sourcedescription
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Source', body, options)
      .map(this.extractData)
  }

  //insert creditcard buttom
  instdept(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "department": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Department', body, options)
      .map(this.extractData)
  }

  //insert creditcard buttom
  instcan(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "reason": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_CancelReason', body, options)
      .map(this.extractData)
  }

  //insert privileges buttom
  instpri(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "privileges_desc": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Privileges', body, options)
      .map(this.extractData)
  }

  //insert waitlist buttom
  instwait(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "waitlist_reason": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Waitlist_reason', body, options)
      .map(this.extractData)
  }

  //insert waitlist buttom
  instroom(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "type": parm.type,
      "description": parm.description
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/insert_room_type', body, options)
      .map(this.extractData)
  }

  //insert roomclass buttom
  instrmclass(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "class": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/insert_room_type', body, options)
      .map(this.extractData)
  }

  //insert room condition buttom
  instrmcon(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "rm_condition": parm.rm_condition,
      "rm_condition_description": parm.rm_condition_description
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Insert_Condition', body, options)
      .map(this.extractData)
  }
  //insert maintainance reason buttom
  instmaint(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "mainteanance_reason": parm
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/insert_mainteanance_reason', body, options)
      .map(this.extractData)
  }

   //insert room config buttom
   instrmno(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "rm_room":parm.rm_room,
        "rm_room_type":parm.rm_room_type,	
        "rm_room_status":parm.rm_room_status,
        "rm_fo_status":parm.rm_fo_status,
        "rm_reservation_status":parm.rm_reservation_status,	
        "rm_floor":parm.rm_floor,	
        "rm_room_class":parm.rm_room_class,	
        "rm_am_pm":parm.rm_am_pm,	
        "rm_features":parm.rm_features,	
        "rm_hk_status":parm.rm_hk_status,	
        "rm_hk_person":"0",	
        "rm_fo_person":"0",	
        "rm_status_subcategory":"",	
        "rm_turndown_status":"",	
        "rm_mainteanance_status":"",	
        "rm_rc_description":"",
      "rm_room_discrepancy":""
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/insert_room_no', body, options)
      .map(this.extractData)
  }
  
  //insert payment buttom
  instpay(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "reason_code": parm.reason_code,
      "reason_description": parm.reason_description
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_AR_POST_INSERT_REASONDropdown', body, options)
      .map(this.extractData)
  }

  //insert Rate Condition buttom
  instrc(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "rate_class": parm.rate_class,
      "rate_category": parm.rate_category,
      "rate_category_decription": parm.rate_category_decription
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_POST_INSERT_RATECATEGORY', body, options)
      .map(this.extractData)
  }

  //insert season code buttom
  instss(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "season_code": parm.season_code,
      "season_code_description": parm.season_code_description
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_REVENUE_MANAGEMENT_Insert_season_code_revenue', body, options)
      .map(this.extractData)
  }

  //insert Market Group buttom
  instmk(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "marketgroup": parm.marketgroup,
      "marketgroup_description": parm.marketgroup_description
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Market', body, options)
      .map(this.extractData)
  }

  //insert origin code buttom
  instori(parm): Observable<object[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    let body = {
      "origincode": parm.origincode,
      "origindescription": parm.origindescription
    }
    console.log(JSON.stringify(body))
    return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_POST_INSERT_Origin', body, options)
      .map(this.extractData)
  }

 

  private extractData(res: Response) {
    console.log('res========---====' + res);
    let body = res.json();
    console.log(JSON.stringify(body));
    return body;
  }
}
