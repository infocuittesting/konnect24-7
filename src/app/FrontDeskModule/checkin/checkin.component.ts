import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { CheckinService} from './checkin.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
  providers:[CheckinService]
})
export class CheckinComponent implements OnInit {
  public searchandedit =[];

  constructor(private checkinService:CheckinService,private route:Router,public session:SessionStorageService) { }
  //to show today date
  public startDate = new Date().toJSON().split('T')['0'];
  public endDate = new Date().toJSON().split('T')['0'];

  showMore;

    //show more
    showMoreBut(){
      this.showMore=true;
    }
    //show less
    showLessBut(){
      this.showMore=false;
    }
// between dates arrival
filterDatefrmList(startDate,endDate){
  if(startDate!=null && endDate!=null){
    let selectedMembers = this.searchandedit.filter(
      m => new Date(m.res_arrival) >= new Date(startDate) && new Date(m.res_arrival) <= new Date(endDate)
      );
        console.log(selectedMembers);
        this.searchandedit = selectedMembers;
  }else {
    this.searchandedit = this.searchandedit;
  }
  
}
  //checkin
  status={};

checkinProfile(){
  let inputparms={
    "Res_id":this.session.retrieve("id"),
    "pf_id":this.session.retrieve("id1"),
    "Res_unique_id":this.session.retrieve("uniq")
  }
  
  this.checkinService.checkinProfile(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.Return;
  });

}
  ngOnInit() {
    this.checkinService.searchedit()
    .subscribe((resp: any) => {
     this.searchandedit=resp.ReturnValue;
     //filter on page load
     //searchandedit,
//     let filteronstart = this.searchandedit.filter(
  //    m => new Date(m.res_arrival) >= new Date(this.startDate) && new Date(m.res_arrival) <= new Date(this.endDate)
    //  );
      //  console.log(filteronstart);
        //this.searchandedit = filteronstart;
   });
  
  }
  public chin=true
  public option=true;
  flag_chin=false
  public resid;
  selectindex=null;
  selectMembersEdit(details,index){

    //if(this.resid == details.res_id){
     // this.option=true;
    //}else 
    if(details.res_guest_status=="due in" || details.res_guest_status=="reserved" || details.res_guest_status=="no show" || details.res_guest_status=="Check out" || details.res_guest_status=="due out" && this.resid == details.res_id){
      this.flag_chin=true;
      this.chin=true;
      this.option=false;
      this.selectindex=index; 
    }else{
      this.flag_chin=false;
        this.selectindex=null;
        this.chin=false;
        this.option=false;
    }

  this.selectindex=index;
  this.resid=details.res_id;


 // if(this.resid=details.res_id){
 //   this.chin=false; this.option=false;
 // }else{    this.chin=true; this.option=true;}
  this.session.store("id",details.res_id.toString());
  this.session.store("uniq",details.res_unique_id.toString());
  //this.session.store("res_room",details.res_room.toString());

  this.session.store("id1",details.pf_id.toString());
  this.session.store("id2",details.res_room.toString());
  
  
  console.log("res_iddddddddd",details.res_id)
  console.log("id2",details.res_room)
  console.log("uniq",details.res_unique_id)
  
}
loadcheckin(params){
    
  if(params == "Walk-in"){
    this.session.store("checknav",params);
  }
  this.route.navigate(['reservation/']);
}

}

