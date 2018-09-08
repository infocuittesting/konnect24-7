import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  RoomconditionService } from './roomcondition.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-roomcondition',
  templateUrl: './roomcondition.component.html',
  styleUrls: ['./roomcondition.component.css'],
  providers:[ RoomconditionService]
})
export class RoomconditionComponent implements OnInit {

  constructor(private pService: RoomconditionService,private route:Router,public session:SessionStorageService) { 
    this.room = this.roomData;
    this.room = this.roomData1;
  }
  public room:any = [
  ];
rm_condition;
user33=[];
user1={};
newroom:any;
newroom1:any=[];
newroom2:any=[];
user34:any={};
user35={};

roomData = [];
roomData1 = [];
     onSelect4(val){
      console.log(val);
      this.room = this.roomData.filter(x => x.rm_condition == val)
    }

    onSelect5(val){
      console.log(val);
      this.room = this.roomData1.filter(x => x.rm_room == val)
    }
  roomcondition=[];
  condition=[];
  class=[];

  submit(inputt):void {


      this.pService.insertRoomcondition(inputt)
      .subscribe(( user333:any)=> {
        this.newroom=user333.ReturnCode;
        if(this.newroom == "RIS"){
         this.newroom =" The Room Condition is Generated for "+this.rmid;
          this.pService. getroomcondition()
          .subscribe((resp: any) => {
          this.room = resp.ReturnValue;
      });
        } 
      },
       );  
        }


        update(inputt){

        
            this.pService.updateRoomcondition(inputt)
            .subscribe(( user334:any)=> {
              this.newroom1=user334.ReturnCode;
              if(this.newroom1== "RUS"){
             this.newroom1="Room condition is Changed for "+this.rmid;
              }
              this.pService.getroomcondition()
              .subscribe((resp: any) => {
              this.room=resp.ReturnValue;
              });
              });
              }


              delete(inputt):void {
                
                     this.pService.deleteroomcondition(inputt)
                     .subscribe(( user337:any)=> {
                       this.user35 = user337;
                       this.newroom2=user337.ReturnCode;
                       if(this.newroom2 == "RDS"){
                         this.newroom2="The "+this.rmid+" Room Condition is Deleted";
                        
                        this.pService.getroomcondition()
                        .subscribe((resp: any) => {
                        this.room=resp.ReturnValue;
                        });
                      }
                     },
                      );  
                       }

  ngOnInit() {

    this.pService.getroomcondition()
    .subscribe((resp: any) => {
    this.room=resp.ReturnValue;
    this.roomData=resp.ReturnValue;
    this.roomData1=resp.ReturnValue;
    });

    this.pService.roomdropdown()
    .subscribe((resp: any) => {
     this.roomcondition=resp.ReturnValue;
   });
   
   this.pService.conditiondropdown()
   .subscribe((resp: any) => {
    this.condition=resp.ReturnValue;
  });

  this.pService.roomclassdropdown()
  .subscribe((resp: any) => {
   this.class=resp.ReturnValue;
 });

  }
  checkboxflg=[];
  count=0;
  copy=[];
  filtercheckboxList:any=[];
  filtercheckboxData(ngmodel, flag) {
    if (ngmodel == true) {
         this.filtercheckboxList.push(flag);
    }else{
      for(var i=0;i<this.filtercheckboxList.length;i++){
        if(flag==this.filtercheckboxList[i]){
          this.filtercheckboxList.splice(i,1);
          break;
        }
      }
    }
    //final list for table
    if(this.filtercheckboxList!=null && this.filtercheckboxList.length>0){
     
      if(this.count==0){
        this.count++;
     this.copy =JSON.parse(JSON.stringify(this.room))
      }
    this.room=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_fo_status)){
        this.room.push(this.copy[j]);
      }
    }
  }else{
    this.room=this.copy; 
  }
  }
  new=true;
  edit=true;
  deleted=true;
  public rmid;
  public rmc;
  selectindex=null;
selectRoomEdit(details,index){
this.selectindex=index;
this.rmid=details.rm_room;
this.rmc=details.rm_condition;
if((this.rmid=details.rm_room) && (this.rmc == null)){
  this.new=false;
}
else{
  this.new=true;
}

if((this.rmid=details.rm_room) && (this.rmc!=null)){
  this.edit=false;
  this.deleted=false;
}
else{
  this.edit=true;
  this.deleted=true;
}
this.session.store("id",details.rm_room.toString());

}

}