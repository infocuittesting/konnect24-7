import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import {QueryReservationListService} from './query-reservation-list.service';

@Component({
  selector: 'app-query-reservation-list',
  templateUrl: './query-reservation-list.component.html',
  styleUrls: ['./query-reservation-list.component.css'],
  providers:[QueryReservationListService]
})
export class QueryReservationListComponent implements OnInit {

  constructor(private reservationlistservice:QueryReservationListService,public session:SessionStorageService,private route:Router) { }
  public querylist=[];
  ngOnInit() {
    console.log("sucesssssssssssssssssssss")
    this.reservationlistservice.QueryRoomingList()
  .subscribe((resp: any) => {
      this.querylist=resp.ReturnValue;
      console.log("working fine",this.querylist);
  
  });
  }

  

    
  
}
