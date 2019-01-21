import { Component, OnInit } from '@angular/core';
import { RoomhistoryService } from './roomhistory.service';
@Component({
  selector: 'app-roomhistory',
  templateUrl: './roomhistory.component.html',
  styleUrls: ['./roomhistory.component.css'],
  providers:[RoomhistoryService]
})
export class RoomhistoryComponent implements OnInit {

  constructor( private RoomhistoryService:RoomhistoryService) { }
  public roomhistory=[];
  public listroom=[];
  public rm_room_type;
  public deptdate; public creditcard;
  ngOnInit() {
    this.RoomhistoryService.getroomhistory()
    .subscribe((resp: any) => {
    this.roomhistory=resp.ReturnValue;
   
    });
    this.RoomhistoryService.roomtypedropdown()
    .subscribe((resp: any) => {
     this.listroom=resp.ReturnValue;
   });

  }
  clearfield(){
    this.rm_room_type="";
    this.deptdate="";this.creditcard="";
  }

}
