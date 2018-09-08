import { Component, OnInit, Input } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { NgClass } from "@angular/common";
import { SearchandeditreservationService} from './searchandeditreservation.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-searchandeditreservation',
  templateUrl: './searchandeditreservation.component.html',
  styleUrls: ['./searchandeditreservation.component.css'],
  providers:[SearchandeditreservationService]
})
export class SearchandeditreservationComponent implements OnInit {

  public searchandedit =[];
  public arry=[];

  constructor(private pService:SearchandeditreservationService,private route:Router,public session:SessionStorageService) { }
  showMore=false;
  ngOnInit() {
      
  this.pService.searchedit()
  .subscribe((resp: any) => {
   this.searchandedit=resp.ReturnValue;
 });
     
this.pService.reasondropdown()
.subscribe((resp: any) => {
 this.arry=resp.ReturnValue;
});

}

  //show more
  showMoreBut(){
    this.showMore=true;
  }
  //show less
  showLessBut(){
    this.showMore=false;
  }

//res cancel
cans={};
public user3;
public cansl;
subcancel(inputt):void {
    this.pService.cancel(inputt)
    .subscribe( (resp:any )=> {
      this.user3=resp.ReturnCode;

      if(this.user3=="RIS")
      {
        this.user3="The Reservation is cancelled for "+this.name;
        this.cansl="The Cancellation Number is"+resp.cancellationNumber;
        this.pService.searchedit()
        .subscribe((resp: any) => {
         this.searchandedit=resp.ReturnValue;
       });
      } 
      this.name="";
      this.cans="";
    },
    );  
   }


public reinstates;
public reinreturn;
subrein():void {
  let body={
    "res_id":this.session.retrieve("id"),
    "res_unique_id":this.session.retrieve("uniq")
  };

   //reinstate
    this.pService.Reinstate(body)
    .subscribe( (resp:any)=> {
      this.reinreturn=resp.ReturnCode;
      if(this.reinreturn=="RIS"){
      this.reinreturn=" The Cancelled Reservation is Reinstated for "+this.name;
      this.reinstates="The Confirmation Number is "+resp.ConfirmationNumber;
      this.pService.searchedit()
      .subscribe((resp: any) => {
       this.searchandedit=resp.ReturnValue;
     });
      }
this.name=" ";
    },
    );  
   }
   //Accept Waitlist
   public AcceptState;
   public Acceptreturn;
   subaccp(){
     let body={
       "Res_id":this.session.retrieve("id"),
       "pf_id":this.session.retrieve("id1"),
       "Res_unique_id":this.session.retrieve("uniq"),
     };
       this.pService.AcceptWaitlist(body)
       .subscribe((acceptwaitlist:any)=> {
         this.AcceptState=acceptwaitlist.ConfirmationNumber;
         this.Acceptreturn=acceptwaitlist.ReturnCode;
         if(this.Acceptreturn=="RIS"){
          this.Acceptreturn= "The Waitlist is Moved to Reservation for "+this.name;
          this.AcceptState="The Reservation Number is "+acceptwaitlist.ConfirmationNumber;
          this.pService.searchedit()
          .subscribe((resp: any) => {
           this.searchandedit=resp.ReturnValue;
         });
          }
       this.name=""; 
       },
       );  
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
rein=true;
cale=true;
wait=true;
new=false;
profile=false;
option=true;
public reinstate;
public resid;
public name;
selectindex=null;
selectMembersEdit(details,index){
console.log(details)  
this.selectindex=index;
this.reinstate=details.res_guest_status;
this.resid=details.res_id;
this.name=details.pf_firstname;
if(this.resid==details.res_id){
  this.new=true;
  this.profile=true;
  this.option=false;
}else{
  this.new=false;
  this.profile=false;
  this.option=true;
}
if(this.reinstate=="cancel"){
  this.rein=false;
}else {
  this.rein=true;
}
if(this.reinstate=="reserved"){
  console.log(this.reinstate);
  this.cale=false;
}else {
  this.cale=true;
}
if(this.reinstate=="waitlist"){
  console.log(this.reinstate);
  this.wait=false;
}else {
  this.wait=true;
}
this.session.store("id",details.res_id.toString());
this.session.store("id1",details.pf_id.toString());
this.session.store("name",details.pf_firstname);
this.session.store("arrival",details.res_arrival);
this.session.store("departure",details.res_depature);
this.session.store("nights",details.res_nights);
this.session.store("status",details.res_guest_status);
this.session.store("Room",details.res_room);
this.session.store("Adults",details.res_adults);
this.session.store("child",details.res_child);
this.session.store("RoomType",details.res_room_type);
this.session.store("restype",details.res_res_type);
this.session.store("rate",details.res_rate);
this.session.store("conf",details.res_confnumber);
this.session.store("uniq",details.res_unique_id.toString());
this.session.store("market",details.res_market);
this.session.store("Ratecode",details.res_rate_code);
this.session.store("source",details.res_source);
this.session.store("percentage",details.res_disc_perc);
this.session.store("Discreasons",details.res_disc_reason);
this.session.store("DiscAmount",details.res_disc_amount);
this.session.store("Currency",details.res_currency);


}
}

