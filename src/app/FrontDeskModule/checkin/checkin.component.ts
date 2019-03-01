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
  public firstname:any;
  public arrival:any;
  public queryString:string;





  constructor(private checkinService:CheckinService,private route:Router,public session:SessionStorageService) { }
  //to show today date
  public startDate = new Date().toJSON().split('T')['0'];
  public endDate = new Date().toJSON().split('T')['0'];

  showMore;

  //clear
clear(){
  this.queryString = "";
  //this.startDate = "";
  //this.endDate = "";
  
}

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
  status;
  returnmsg;
checkinProfile(){
  let inputparms={
    "Res_id":this.session.retrieve("id"),
    "pf_id":this.session.retrieve("id1"),
    "Res_unique_id":this.session.retrieve("uniq")
  }
  console.log(inputparms);
  this.checkinService.checkinProfile(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.ReturnCode;
    if(this.status=="RUS"){
      this.status="The Checkin is conformed for "+this.firstname;
    }
    else if(this.status=="AGS"){
      this.status="The Checkin is conformed for "+this.firstname;
    }
    this.checkinService.searchedit()
    .subscribe((resp: any) => {
     this.searchandedit=resp.ReturnValue;
   });
  });

}
  ngOnInit() {
    this.checkinService.searchedit()
    .subscribe((resp: any) => {
     this.searchandedit=resp.ReturnValue;
   });
  
  }

  public depature:any;
  public night:any;
  public adults:any;
  public child:any;
  public no_room:any;
  public res_room_type:any;
  public res_rate_code:any;
  public res_rate:any;
  public res_packages:any;
  public res_block_code:any;
  public res_rtc:any;
  public res_extension
public res_currency
public res_res_type
public res_market
public res_source
public res_origin
public res_payment
public res_creditcard_number
public res_exp_date

public res_guest_balance
public res_disc_amount
public res_disc_perc
public res_disc_reason
public res_specials
public res_item_inv

public pf_mobileno




  public chin=true
  public edit = true;
  flag_edit = false;
  public option=true;
  flag_chin=false;
  public lambreturn:any;
  public pristatus:any;
  public showhide=false;
  public Res_id_getting:any;
  public Res_unique_id_getting:any;
  public resid;
  selectindex=null;
  selectMembersEdit(details,index){

    //if(this.resid == details.res_id){
     // this.option=true;
    //}else

    this.Res_id_getting = details.res_id
      this.Res_unique_id_getting = details.res_unique_id
      console.log("Res_id_getting",this.Res_id_getting,this.Res_unique_id_getting)

    if(this.flag_edit==false){
      this.flag_edit=true;
      this.edit=true;
      this.selectindex=index; 
    }else{
          this.flag_edit=true;
          this.selectindex=null;
          this.edit=false;
    }
     
    if(this.resid == details.res_id && details.res_guest_status=="waitlist" || details.res_guest_status=="reserved" || details.res_guest_status=="no show" || details.res_guest_status=="Check out" || details.res_guest_status=="due out" || details.res_guest_status=="checkin"){
      this.flag_chin=true;
      this.chin=true;
      this.option=false;
      this.selectindex=index; 
    }else{
      this.flag_chin=false;
      this.flag_edit=true;
        this.selectindex=null;
        this.chin=false;
        this.edit=false;
        this.option=false;
    }

  this.selectindex=index;
  this.resid=details.res_id;
  
       // alert id getting 
       this.checkinService.lampalert(this.Res_id_getting,this.Res_unique_id_getting)
       .subscribe((resp: any) => {
       this.lambreturn=resp.ReturnValue;
       this.pristatus=resp.Status;
       if(this.pristatus=="Success"){
       if(this.lambreturn.length!=0){
       this.showhide=true;
       }else if(this.lambreturn.length==0){
       this.showhide=false;
  }
  }
  
  });
  
//reservation screen edit button 
  this.firstname = details.pf_firstname;
  this.arrival = details.res_arrival;
  this.depature = details.res_depature;
  this.night = details.res_nights;
  this.adults = details.res_adults;
  this.child = details.res_child;
  this.no_room = details.res_number_of_rooms;
  this.res_room_type = details.res_room_type;
  this.res_rate_code = details.res_rate_code;
  this.res_rate = details.res_rate;
  this.res_packages = details.res_packages;
  this.res_block_code = details.res_block_code;
  this.res_rtc = details.res_rtc;
  
  this.res_extension = details.res_extension;
  this.res_currency = details.res_currency;
  this.res_res_type = details.res_res_type;
  this.res_market = details.res_market;
  this.res_source = details.res_source;
  this.res_origin = details.res_origin;
  this.res_payment = details.res_payment;
  this.res_creditcard_number = details.res_creditcard_number;
  this.res_exp_date = details.res_exp_date;
  this.res_guest_balance = details.res_guest_balance;
  this.res_disc_amount = details.res_disc_amount;
  this.res_disc_perc = details.res_disc_perc;
  this.res_disc_reason = details.res_disc_reason;
  this.res_specials = details.res_specials;
  this.res_item_inv = details.res_item_inv;
  this.pf_mobileno = details.pf_mobileno;

  







 // if(this.resid=details.res_id){
 //   this.chin=false; this.option=false;
 // }else{    this.chin=true; this.option=true;}
  this.session.store("id",details.res_id.toString());
  this.session.store("uniq",details.res_unique_id.toString());
  //this.session.store("res_room",details.res_room.toString());

  this.session.store("id1",details.pf_id.toString());
  this.session.store("Room",details.res_room.toString());
  
  
  console.log("res_iddddddddd",details.res_id)
  console.log("Room",details.res_room)
  console.log("uniq",details.res_unique_id)


  
  
}
loadcheckin(params){
    
  if(params == "Walk-in"){
    this.session.store("checknav",params);
    this.session.store("Frontdesk_checkin","Walkin");
  }else if(params == "Edit"){
    this.session.store("Frontdesk_checkin","Edit");
    this.session.store("checknav",params);
  this.session.store("fname",this.firstname);
  this.session.store("res_arrival",this.arrival);
  this.session.store("depature",this.depature);
  this.session.store("res_nights",this.night);
  this.session.store("res_adults",this.adults);
  this.session.store("res_child",this.child);
  this.session.store("res_number_of_rooms",this.no_room);
  this.session.store("res_room_type",this.res_room_type);
  this.session.store("res_rate_code",this.res_rate_code);
  this.session.store("res_rate",this.res_rate);
  this.session.store("res_packages",this.res_packages);
  this.session.store("res_block_code",this.res_block_code)
  this.session.store("res_rtc",this.res_rtc)
 
  this.session.store("res_extension",this.res_extension)
  this.session.store("res_currency",this.res_currency)
  this.session.store("res_res_type",this.res_res_type)
  this.session.store("res_market",this.res_market)
  this.session.store("res_source",this.res_source)
  this.session.store("res_origin",this.res_origin)
  this.session.store("res_payment",this.res_payment)
  this.session.store("res_creditcard_number",this.res_creditcard_number)
  this.session.store("res_exp_date",this.res_exp_date)

  this.session.store("res_guest_balance",this.res_guest_balance)
  this.session.store("res_disc_amount",this.res_disc_amount)
  this.session.store("res_disc_perc",this.res_disc_perc)
  this.session.store("res_disc_reason",this.res_disc_reason)
  this.session.store("res_specials",this.res_specials)
  this.session.store("res_item_inv",this.res_item_inv)

  this.session.store("mobileno",this.pf_mobileno)


  


  }
  this.route.navigate(['reservation/']);
}

}

