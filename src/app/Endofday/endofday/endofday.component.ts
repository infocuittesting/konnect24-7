import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import {EndofdayService} from './endofday.service';
import { SessionStorageService } from "ngx-webstorage";
import { ToasterServiceService } from '../../toaster-service.service';

@Component({
  selector: 'app-endofday',
  templateUrl: './endofday.component.html',
  styleUrls: ['./endofday.component.css'],
  providers:[EndofdayService]
})
export class EndofdayComponent implements OnInit {
  public resv = false;
  public profile =false;
  public FrontDesk =false;
  public RoomManagement=false;
  public Cashiering=false;
  public Printfinalrate=false;
 
  constructor(private EndofdayService:EndofdayService,private route:Router,public session:SessionStorageService, public toaster:ToasterServiceService) { }

    public checkvalue:any;
    public getcheck:any;
    public notcheck:any;
    public businessdate:any;
    public posting:any;
    public runadd:any;
    public runprint:any;
    public pf_id:any;

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
  public firstname:any;
  public arrival:any;
  
  public pf_mobileno

  ngOnInit() {
   
  }
  public edit = true;
  flag_edit = false;
  selectindex=null;
  res_id:string;
  res_room:string;
  selectednotcheck(details,index){
    this.res_id = details.res_id;
    this.res_room = details.res_room;
    console.log("res_iddd",this.res_id)
    console.log("res_room",this.res_room)


  }
  selected(details,index){

    if(this.flag_edit==false){
      this.flag_edit=true;
      this.edit=true;
      this.selectindex=index; 
    }else{
          this.flag_edit=true;
          this.selectindex=null;
          this.edit=false;
    }

    this.pf_id = details.pf_id;
    console.log("tttt",this.pf_id)
    this.session.store("pf_id",details.pf_id);
    
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

 
  }

  public dropdown:any;
  showhiderestriction(param){

    if (param == "Reservation") {
      this.resv = true;
      this.EndofdayService.countrycheck()
      .subscribe((resp: any) => {
       this.checkvalue=resp.ReturnValue;
       this.getcheck=resp.ReturnValue;
     });
    }
    else {
      this.resv = false;
     
    }
    if (param == "Profile") {
      this.profile = true;
      this.EndofdayService.notcheckout()
      .subscribe((resp: any) => {
       this.notcheck=resp.ReturnValue;
     });

     this.EndofdayService.dropdown()
     .subscribe((resp: any) => {
      this.dropdown=resp.ReturnValue;
    });

     
    }
    else {
      this.profile = false;
     
    }
    if (param == "FrontDesk") {
      this.FrontDesk = true;
      this.EndofdayService.businessdate()
      .subscribe((resp: any) => {
       this.businessdate=resp.Date;
     });
    }
    else {
      this.FrontDesk = false;
     
    }
    if (param == "RoomManagement") {
      this.RoomManagement = true;
      this.EndofdayService.postingrooms()
      .subscribe((resp: any) => {
       this.posting=resp.ReturnValue;
     });

    }
    else {
      this.RoomManagement = false;
     
    }
    if (param == "Cashiering") {
      this.Cashiering = true;
      this.EndofdayService.runaddtional()
      .subscribe((resp: any) => {
       this.runadd=resp.ReturnValue;
     });

    }
    else {
      this.Cashiering = false;
     
    }
    if (param == "Printfinalrate") {
      this.Printfinalrate = true;
      this.EndofdayService.runprint()
      .subscribe((resp: any) => {
      this.runprint=resp.ReturnValue[1].room_repport_file;
      console.log("testttttt",this.runprint)
});
  
    }
    else {
      this.Printfinalrate = false;
     
    }
  }
  loadendofday(params){

  if(params == "Edit"){
      this.session.store("EndofDay_checkin","Edit");
      this.session.store("checknav",params);    
    }
    this.route.navigate(['psearch/']);
  }

  loadendofdayResv(params){

    if(params == "Resv"){
        this.session.store("EndofDayResv_checkin","Resv");
        this.session.store("checknavResv",params); 
        this.session.store("pf_fname",this.firstname);
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
      
        this.session.store("pf_mobileno",this.pf_mobileno)           
      }
      this.route.navigate(['reservation/']);
    }


    public endofday:any;
    public checkoutresp:any;

    Checkout(){
      let body={
        "res_id":this.res_id.toString(),
        "res_room":this.res_room.toString()
      }
     this.EndofdayService.Checkout(body)
     .subscribe((resp: any) => {
      this.endofday=resp.StatusCode;
      this.toaster.success("Traces is Updated successfully");
    });
   
   }

}
