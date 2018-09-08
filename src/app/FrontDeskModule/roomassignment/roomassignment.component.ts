import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { RoomassignmentService } from "./roomassignment.service";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-roomassignment',
  templateUrl: './roomassignment.component.html',
  styleUrls: ['./roomassignment.component.css'],
  providers:[ RoomassignmentService]
})
export class RoomassignmentComponent implements OnInit {

 public searchandedit =[];
  constructor(private RoomassignmentService:RoomassignmentService,private route:Router,public session:SessionStorageService) { }
  showMore;
    //show more
    showMoreBut(){
      this.showMore=true;
    }
    //show less
    showLessBut(){
      this.showMore=false;
    }
  // Room Unassign
  public status;
  unassignProfile(){
     let inputparms={
       "Res_id":this.session.retrieve("rmid"),
      "Res_room": this.session.retrieve("hsid"),
      "Res_unique_id":this.session.retrieve("uniq")

    }
   this.RoomassignmentService.unassignProfile(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.ReturnCode;
    if(this.status=="RUS"){
      this.status="The room number "+this.room +" is unassigned for "+this.Name;
    }
    
    this.RoomassignmentService.searchedit()
    .subscribe((resp: any) => {
     this.searchandedit=resp.ReturnValue;
   });
   this.Name.clear();
   this.room.clear();
  });
}

// Room Checkin
checkinProfile(){
  let inputparms={
    "Res_id":this.session.retrieve("rmid"),
    "pf_id":this.session.retrieve("rmpfid"),
    "Res_unique_id":this.session.retrieve("uniq")

  }
  
  this.RoomassignmentService.checkinProfile(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.Return;
  });

}

ngOnInit() {

  this.RoomassignmentService.searchedit()
  .subscribe((resp: any) => {
   this.searchandedit=resp.ReturnValue;
 });

}
public room;
public Name;
public chin=true;
public assign=true;
public unass=true;
public rmrsid;
selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.rmrsid=details.res_id;
if(this.rmrsid=details.res_id){
  this.assign=false;
  this.unass=false;
  this.chin=false;
}else{
  this.assign=true;
  this.unass=true;
  this.chin=true;
}
this.Name=details.pf_firstname;
this.room=details.res_room;
this.session.store("rmid",details.res_id.toString());
this.session.store("rmpfid",details.pf_id.toString());
this.session.store("uniq",details.res_unique_id.toString());

}

}
