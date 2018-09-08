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
