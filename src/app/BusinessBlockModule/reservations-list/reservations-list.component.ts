import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
import {ReservationListService} from './reservations-list.service';
// import { ReservationsListComponent } from './BusinessBlockModule/reservations-list/reservations-list.component';
@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css'],
  providers:[ReservationListService],
 
})
export class ReservationsListComponent implements OnInit {
  public Id = this.session.retrieve("blockid");
public Name = this.session.retrieve("blockname");

  constructor(private reservationlist: ReservationListService,public session:SessionStorageService,private route:Router) { }

  ngOnInit() {
    console.log("Query going to reservation button")
      this.reservationlist.QueryPaymasterReservation()
      .subscribe((resp: any) => {
          this.querypay=resp.ReturnValue;
           console.log("queryss to the table",this.querypay);
          
       });
  }

// Seletct reservation list.........................

public querypay=[];
public selectindex=null;
public res_block_code;
public res_arrival;
public res_depature;
public blockid;
public rmtype;
public res_nights;
gro = true;
ReservationsListComponent(resvlist,index)
  {
      this.selectindex = index;
    this.blockid = resvlist.res_block_code;
    this.rmtype  = resvlist.res_room_type;
    if(this.blockid == resvlist.res_block_code && this.rmtype == "PM"){
       this.gro = false;
    }
    else{
      this.gro = true;
    }
    this.session.store("blockid",resvlist.res_block_code);
    this.session.store("arrive",resvlist.res_arrival);
    this.session.store("depature",resvlist.res_depature);
    this.session.store("nightss",resvlist.res_nights);
    
    console.log("successfully select the record",resvlist.res_block_code,typeof(resvlist.res_block_code))
}
}
