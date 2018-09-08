import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SessionStorageService } from "ngx-webstorage";

@Injectable()
export class HousekeepingService { 

    constructor (
        private http: Http,public session:SessionStorageService
      ) {}

    
      gethousekeepingdata():  Observable<object[]> {
       
        // const headers = new Headers({'Content-Type':'application/json'})
        // const options = new RequestOptions({ headers: headers });
       
      
        return this.http.get('https://hotel360.herokuapp.com/Hotel_Rm_Post_Select_QueryRoomList')
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }
            
      getroomlist(body):  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
     
       console.log(body);
        return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Update_Updateroomstatus',body,options)
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }

      getcleanroom(insertdata:any):  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.post('https://hotel360.herokuapp.com/Hotel_Rm_Post_Select_Queryhousekeepinglist',insertdata,options)
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }

      roomdropdown1():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers })
       
        return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
           .map(this.extractData)
    
      }
    
      roomdropdown2():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers })
       
        return this.http.post('https://hotel360.herokuapp.com/Select_Room_No',options)
           .map(this.extractData)
    
      }
    
      roomassign(input:any):  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });

       
        return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_POST_UPDATE_RoomAssign',input,options)
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }

     
        private extractData(res: Response) {
            //alert('hai20')
            console.log('res========---===='+res);
            let body = res.json();
           console.log(JSON.stringify(body));
            // a(JSON.stringify(body));
                return body;
            }


    }