import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class BusinessBlockSearchService {

  constructor(private http: Http,public session:SessionStorageService) { 

  }
  bsearchtable():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_BusinessBlockSearch')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
// Notes Glow
  Notes(blockid):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={
      "block_id":blockid
    }
   console.log("block notesssssssss glow",blockid)
    return this.http.post('https://hotel360.herokuapp.com/HOTEL_BBL_POST_SELECT_Business_Block_Notes',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }

  // follow up group
  followupgroup(blockid):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={
      "block_id":blockid
    }
   console.log("block followupgroup glow",blockid)
    return this.http.post('https://hotel360.herokuapp.com/Hotel_PMS_Select_BlockFollowupDecisiondate',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
  // cutoffdate group

  cutoffdate(blockid):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    let body={
      "block_id":blockid
    }
   console.log("block followupgroup glow",blockid)
    return this.http.post('https://hotel360.herokuapp.com/Hotel_PMS_Select_Blockcutoffdatecutoffdays',body,options)
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
  }
// rooming list duedate
rooming_list_due(blockid):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  let body={
    "block_id":blockid
  }
 console.log("block followupgroup glow",blockid)
  return this.http.post('https://hotel360.herokuapp.com/Hotel_PMS_Select_Roominglistdue_date',body,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}
//Blockstatus

blockstatus():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Block_status')
     .map(this.extractData)
}
//status droupdown
status():  Observable<object[]> {   
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
  return this.http.get('https://hotel360.herokuapp.com/HOTEL_BBL_GET_SELECT_BusinessBlockStatus')
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
