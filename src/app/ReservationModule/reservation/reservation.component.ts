import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { ReservationService } from "./reservation.service";
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [ReservationService]
})
export class ReservationComponent implements OnInit {

  // public navtag:any={};
  public PF_Firstname:any;
  public Pf_lastname;
  public Pf_language;
  public PF_Mobileno;
  public Pf_title;
  public Pf_country;
  public Pf_vip;
  public res_arrival;
  public res_extension;
  public res_source;

  public tableschanges = [];
  public language = [];
  public country = [];
  public restype = [];
  public source = [];
  public origin = [];
  public roomtype = [];
  public payment = [];
  public getc = [];
  public marketpro = [];

  public user1;
  public RES_packages;

  
  public date: any = new Date().toJSON().split('T')[0];
  constructor(private ReservationService: ReservationService, private route: Router, public session: SessionStorageService) {
    // this.date = new Date().toISOString().slice(11,19);
  }
  clearsession() {

    console.log("consoleeeeeeeeeeeeeeeee" + this.session.retrieve("checknav"))
    if (this.session.retrieve("checknav") == "Walk-in") {
      this.route.navigate(['checkin/']);

    }
    this.session.clear();
  }

  test(company) {
    company = "Company";
    if (company == "Company") {
      this.session.store("test", company)
    }
    this.route.navigate(['psearch/'])
  }

  test1(travel) {
    travel = "Travel Agent";
    if (travel == "Travel Agent") {
      this.session.store("test", travel)
    }
    this.route.navigate(['psearch/'])
  }

  test2(param) {
    param = "Group";
    if (param == "Group") {
      this.session.store("test", param)
    }
    this.route.navigate(['psearch/'])
  }

  test3(param) {
    param = "Source";
    if (param == "Source") {
      this.session.store("test", param)
    }
    this.route.navigate(['psearch/'])
  }

  test4(param) {
    param = "Contact";
    if (param == "Contact") {
      this.session.store("test", param)
    }
    this.route.navigate(['psearch/'])
  }
  //getting value for expirydate and merging it in a variable   
  private month: any;
  private year: any;
  onMonthChange(month: any) {
    this.month = month.toString();
  }
  onYearChange(year: any) {
    this.year = year.toString();
  }
  private creditcard_expiry: any;
  getcreditexpiry() {
    this.creditcard_expiry = this.month + "/" + this.year;
    console.log(this.creditcard_expiry);
  }



  user: any = {};
  //date difference 
  arriveDepartureDateFun(arrDate, depDate, ) {
    if (arrDate != null && depDate != null) {
      const daydiff = moment(arrDate).diff(moment(depDate), "days");
      this.user.RES_Nights = Math.abs(daydiff);
    }
  }


  public ratequery: any;
  modalchange(RES_Arrival, RES_Depature, RES_Adults) {
    if (this.session.retrieve("profileid") == null) {
      var comid = "";
    } else {
      comid = this.session.retrieve("profileid").toString();
    }
    let body = {
      "arrival_date": RES_Arrival,
      "departure_date": RES_Depature,
      "adults": parseInt(RES_Adults),
      "com_pf_id": comid
    }
    console.log(body)
    this.ReservationService.RateQuery(body)
      .subscribe((resp: any) => {

        this.ratequery = resp.Return;
      });

  }

  public usera;
  public confim;
  user33 = {};
  submit(inputt,param): void {

    if (this.compid == undefined) {
      this.compid = "";
    }
    if(this.month==undefined){
      this.month="";
    }
    if(this.year==undefined){
      this.year="";
    }
    this.creditcard_expiry = this.month + "/" + this.year;
    inputt.RES_Exp_Date = this.creditcard_expiry;
    

    if((this.session.retrieve("reservationedit")==null)||(this.session.retrieve("reservationedit")==undefined)){
      this.ReservationService.postandgetdata(inputt, this.compid,this.PF_Mobileno)
      .subscribe((resp: any) => {

        this.user33 = resp;
        this.confim = resp.ConfirmationNumber;
        this.usera = resp.ReturnCode;
        if (this.usera == "RIS") {
          this.usera = "Reservation is Created for " + this.PF_Firstname + " " + this.Pf_lastname;
          this.confim = "The Confirmation Number is:" + this.confim;
          param.reset();
          this.PF_Firstname = "";
          this.Pf_lastname = "";
          this.Pf_language = "";
          this.PF_Mobileno = "";
          this.Pf_title = "";
          this.Pf_country = "";
          this.Pf_vip = "";
          this.compid = "";
          this.company = ""; this.TravelAgent = ""; this.group = ""; this.contact = ""; this.res_source = "";
          this.session.clear();

        }else if (this.usera == "RAE"){
          this.usera = "Reservation is Already Exist";
          param.reset();
          this.PF_Firstname = "";
          this.Pf_lastname = "";
          this.Pf_language = "";
          this.PF_Mobileno = "";
          this.Pf_title = "";
          this.Pf_country = "";
          this.Pf_vip = "";
          this.compid = "";
          this.company = ""; this.TravelAgent = ""; this.group = ""; this.contact = ""; this.res_source = "";
          this.session.clear();
        } else if (resp.Status == "Failure") {
          this.usera = "Room Type or Date is not declared";
        }

      });
    }
    else if(this.session.retrieve("reservationedit")=='resevedit'){
      // edit update service
      this.ReservationService.postandgetdataedit(inputt, this.compid,this.resid,this.uniquid,this.pfid,param)
      .subscribe((resp: any) => {
        this.user33 = resp;
        this.confim = resp.ConfirmationNumber;
        this.usera = resp.ReturnCode;
        if (this.usera == "RUS") {
          this.usera = "Reservation is Edited for " + this.PF_Firstname;
        } else if (resp.Status == "Failure") {
          this.usera = "Room Type or Date is not declared";
        }
        
        this.user = " ";
        this.PF_Firstname = "";
        this.Pf_lastname = "";
        this.Pf_language = "";
        this.PF_Mobileno = "";
        this.Pf_title = "";
        this.Pf_country = "";
        this.Pf_vip = "";
        this.compid = "";
        this.company = ""; this.TravelAgent = ""; this.group = "";this.res=""; 
        this.contact = ""; this.res_source = "";this.resid="";this.uniquid="";this.pfid="";
        this.session.clear();
      })
    }
    else if(this.session.retrieve("Frontdesk_checkin")=='Walkin'){
      this.ReservationService.postandgetdata(inputt, this.compid,this.PF_Mobileno)
      .subscribe((resp: any) => {

        this.user33 = resp;
        this.confim = resp.ConfirmationNumber;
        this.usera = resp.ReturnCode;
        if (this.usera == "RIS") {
          this.usera = "Reservation is Created for " + this.PF_Firstname + " " + this.Pf_lastname;
          this.confim = "The Confirmation Number is:" + this.confim;
          param.reset();
          this.PF_Firstname = "";
          this.Pf_lastname = "";
          this.Pf_language = "";
          this.PF_Mobileno = "";
          this.Pf_title = "";
          this.Pf_country = "";
          this.Pf_vip = "";
          this.compid = "";
          this.company = ""; this.TravelAgent = ""; this.group = ""; this.contact = ""; this.res_source = "";
          this.session.clear();

        }else if (this.usera == "RAE"){
          this.usera = "Reservation is Already Exist";
          param.reset();
          this.PF_Firstname = "";
          this.Pf_lastname = "";
          this.Pf_language = "";
          this.PF_Mobileno = "";
          this.Pf_title = "";
          this.Pf_country = "";
          this.Pf_vip = "";
          this.compid = "";
          this.company = ""; this.TravelAgent = ""; this.group = ""; this.contact = ""; this.res_source = "";
          this.session.clear();
        } else if (resp.Status == "Failure") {
          this.usera = "Room Type or Date is not declared";
        }
        


      });
      this.route.navigate(['checkin/']);

    }

    //this.route.navigate(['reservation/']);
  }

  submitwait(inputt): void {
    // console.log(inputt);
    if (this.compid == undefined) {
      this.compid = "";
    }
    this.ReservationService.getwaitdata(inputt, this.compid,this.PF_Mobileno,this.PF_Firstname,this.Pf_lastname)
      .subscribe((resp: any) => {
        this.user1 = resp.ReturnCode;
        if (this.user1 == "RIS") {
          this.user1 = "Reservation Waitlist is Created for " + this.PF_Firstname + " " + this.Pf_lastname;
        }
        this.user = "";
        this.PF_Firstname = "";
        this.Pf_lastname = "";
        this.Pf_language = "";
        this.PF_Mobileno = "";
        this.Pf_title = "";
        this.Pf_country = "";
        this.Pf_vip = "";
        this.compid = "";
        this.company = ""; this.TravelAgent = ""; this.group = ""; this.contact = ""; this.res_source = "";
        this.session.clear();
      });
  }

  //  loadProfile(nav){
  //   console.log('*******************************'+nav+'*********************************');
  //   this.session.store("navigate",nav);
  //   this.route.navigate(['psearch/']);
  //  }

  //group market value
  public company; TravelAgent; group; contact;
  public compid;res:any;resid:any;uniquid;pfid;
  ngOnInit() {
    console.log("tesaaaaaaaaaaaa", this.session.retrieve("profiletype"))

    if (this.session.retrieve("profiletype") == 'Company') {
      this.company = this.session.retrieve("typeaccount")
      if (this.session.retrieve("profileid") == null) {
        this.compid = ""
      }
      else {
        this.compid = this.session.retrieve("profileid");
        console.log("tetstttt pfid", this.compid)
      }

    }
    if (this.session.retrieve("profiletype") == 'Travel Agent') {
      this.TravelAgent = this.session.retrieve("typeaccount")
      if (this.session.retrieve("profileid") == null) {
        this.compid = ""
      } else {
        this.compid = this.session.retrieve("profileid");
        console.log("tetstttt pfid", this.compid)
      }
    }
    if (this.session.retrieve("profiletype") == 'Contact') {
      this.contact = this.session.retrieve("typeaccount");
      if (this.session.retrieve("profileid") == null) {
        this.compid = ""
      } else {
        this.compid = this.session.retrieve("profileid");
        console.log("tetstttt pfid", this.compid)
      }
    }
    if (this.session.retrieve("profiletype") == 'Source') {
      this.res_source = this.session.retrieve("typeaccount");
      if (this.session.retrieve("profileid") == null) {
        this.compid = ""
      } else {
        this.compid = this.session.retrieve("profileid");
        console.log("tetstttt pfid", this.compid)
      }
    }
    if (this.session.retrieve("profiletype") == 'Group') {
      this.group =this.session.retrieve("typeaccount");
      if (this.session.retrieve("profileid") == null) {
        this.compid = ""
      } else {
        this.compid = this.session.retrieve("profileid");
        console.log("tetstttt pfid", this.compid)
      }
    }

    if (this.session.retrieve("Frontdesk_checkin") == "Edit") {
      this.PF_Firstname = this.session.retrieve("fname");
      this.user.RES_Arrival = this.session.retrieve("res_arrival");
      this.user.RES_Depature = this.session.retrieve("depature");
      this.user.RES_Nights = this.session.retrieve("res_nights");
      this.user.RES_Adults = this.session.retrieve("res_adults");
      this.user.RES_child = this.session.retrieve("res_child");
      this.user.RES_Number_Of_Rooms = this.session.retrieve("res_number_of_rooms");
      this.user.RES_Room_Type = this.session.retrieve("res_room_type");
      this.user.RES_Rate_Code = this.session.retrieve("res_rate_code");
      this.user.RES_Rate = this.session.retrieve("res_rate");
      this.RES_packages = this.session.retrieve("res_packages");
      this.user.RES_Block_Code = this.session.retrieve("res_block_code");
      this.user.RES_RTC = this.session.retrieve("res_rtc");

      this.res_extension = this.session.retrieve("res_extension");
      this.user.RES_Currency = this.session.retrieve("res_currency");
      this.user.RES_Res_Type = this.session.retrieve("res_res_type");
      this.user.RES_Market = this.session.retrieve("res_market");
      this.user.RES_Source = this.session.retrieve("res_source");
      this.user.RES_Origin = this.session.retrieve("res_origin");
      this.user.RES_Payment = this.session.retrieve("res_payment");
      this.user.RES_Creditcard_Number = this.session.retrieve("res_creditcard_number");

      this.user.RES_RTC = this.session.retrieve("res_exp_date");

      this.user.RES_Guest_Balance = this.session.retrieve("res_guest_balance");
      this.user.RES_Disc_Amount = this.session.retrieve("res_disc_amount");
      this.user.RES_Disc_perc = this.session.retrieve("res_disc_perc");
      this.user.RES_Disc_Reason = this.session.retrieve("res_disc_reason");
      this.user.RES_Specials = this.session.retrieve("res_specials");
      this.user.RES_Item_Inv = this.session.retrieve("res_item_inv");
      this.user.PF_Mobileno = this.session.retrieve("mobileno");

    }
    if (this.session.retrieve("Frontdesk_checkin") == "Walkin") {
      this.session.clear("pf_fname");
      this.session.clear("pf_lastname");
      this.session.clear("pf_language");
      this.session.clear("pf_mobileno");
      this.session.clear("pf_title");
      this.session.clear("pf_individual_country");
      this.session.clear("pf_individual_vip");
    }

    // end of day 

    if (this.session.retrieve("EndofDayResv_checkin") == "Resv") {
      this.PF_Firstname = this.session.retrieve("pf_fname");
      this.user.RES_Arrival = this.session.retrieve("res_arrival");
      this.user.RES_Depature = this.session.retrieve("depature");
      this.user.RES_Nights = this.session.retrieve("res_nights");
      this.user.RES_Adults = this.session.retrieve("res_adults");
      this.user.RES_child = this.session.retrieve("res_child");
      this.user.RES_Number_Of_Rooms = this.session.retrieve("res_number_of_rooms");
      this.user.RES_Room_Type = this.session.retrieve("res_room_type");
      this.user.RES_Rate_Code = this.session.retrieve("res_rate_code");
      this.user.RES_Rate = this.session.retrieve("res_rate");
      this.RES_packages = this.session.retrieve("res_packages");
      this.user.RES_Block_Code = this.session.retrieve("res_block_code");
      this.user.RES_RTC = this.session.retrieve("res_rtc");

      this.res_extension = this.session.retrieve("res_extension");
      this.user.RES_Currency = this.session.retrieve("res_currency");
      this.user.RES_Res_Type = this.session.retrieve("res_res_type");
      this.user.RES_Market = this.session.retrieve("res_market");
      this.res_source = this.session.retrieve("res_source");
      this.user.RES_Origin = this.session.retrieve("res_origin");
      this.user.RES_Payment = this.session.retrieve("res_payment");
      this.user.RES_Creditcard_Number = this.session.retrieve("res_creditcard_number");

      this.user.RES_RTC = this.session.retrieve("res_exp_date");

      this.user.RES_Guest_Balance = this.session.retrieve("res_guest_balance");
      this.user.RES_Disc_Amount = this.session.retrieve("res_disc_amount");
      this.user.RES_Disc_perc = this.session.retrieve("res_disc_perc");
      this.user.RES_Disc_Reason = this.session.retrieve("res_disc_reason");
      this.user.RES_Specials = this.session.retrieve("res_specials");
      this.user.RES_Item_Inv = this.session.retrieve("res_item_inv");
      this.user.PF_Mobileno = this.session.retrieve("pf_mobileno");
      
    }


    //  this.navtag.navigate ="Rev";
    this.session.store("navigate", "Rev");

    this.PF_Firstname = this.session.retrieve("fname");
    this.Pf_lastname = this.session.retrieve("lastname");
    this.Pf_language = this.session.retrieve("language");
    this.PF_Mobileno = this.session.retrieve("mobileno");
    this.Pf_title = this.session.retrieve("title");
    this.Pf_country = this.session.retrieve("individual_country");
    this.Pf_vip = this.session.retrieve("individual_vip");
    if(this.session.retrieve("reservationedit")=='resevedit')
    {
      this.res=this.session.retrieve("editval");

      this.user.RES_Arrival = this.res.res_arrival;
      this.user.RES_Depature = this.res.res_depature;
      this.user.RES_Nights = this.res.res_nights;
      this.user.RES_Adults = this.res.res_adults;
      this.user.RES_Child = this.res.res_child;
      this.user.RES_Number_Of_Rooms = this.res.res_number_of_rooms;
      this.user.RES_Room_Type = this.res.res_room_type;
      this.user.RES_Rate_Code = this.res.res_rate_code;
      this.user.RES_Rate = this.res.res_rate;
      this.RES_packages = this.res.res_packages;
      this.user.RES_Block_Code = this.res.res_block_code;
      this.user.RES_RTC = this.res.res_rtc;
      this.user.RES_Room = this.res.res_room;
      this.res_extension = this.res.res_extension;
      this.user.RES_Currency = this.res.res_currency;
      this.user.RES_Res_Type = this.res.res_res_type;
      this.user.RES_Market = this.res.res_market;
      this.user.RES_Source = this.res.res_source;
      this.user.RES_Origin = this.res.res_origin;
      this.user.RES_Payment = this.res.res_payment;
      this.user.RES_Comments=this.res.res_comments;
      this.user.RES_Creditcard_Number = this.res.res_creditcard_number;
      this.user.RES_Guest_Balance = this.res.res_guest_balance;
      this.user.RES_Disc_Amount = this.res.res_disc_amount;
      this.user.RES_Disc_perc = this.res.res_disc_perc;
      this.user.RES_Disc_Reason = this.res.res_disc_reason;
      this.user.RES_Specials = this.res.res_specials;
      this.user.RES_Item_Inv = this.res.res_item_inv;
      this.resid=this.res.res_id;
      this.uniquid=this.res.res_unique_id;
      this.pfid=this.res.pf_id;
    }
    //setInterval timer for ETA input field
    console.log(this.PF_Firstname, this.Pf_lastname, this.Pf_language, this.PF_Mobileno, this.Pf_title, this.Pf_country, this.Pf_vip);
    console.log(this.Pf_language);

    this.ReservationService.getrestype()
      .subscribe((resp: any) => {
        this.restype = resp.ReturnValue;
      });

    this.ReservationService.getsource()
      .subscribe((resp: any) => {
        this.source = resp.ReturnValue;
      });

    this.ReservationService.getorigin()
      .subscribe((resp: any) => {
        this.origin = resp.ReturnValue;
      });

    this.ReservationService.getpayment()
      .subscribe((resp: any) => {
        this.payment = resp.ReturnValue;
      });

    this.ReservationService.getcurrencydata()
      .subscribe((resp: any) => {
        this.getc = resp.ReturnValue;
      });

    this.ReservationService.getmarket()
      .subscribe((resp: any) => {
        this.marketpro = resp.ReturnValue;
      });
  }

  // ngOnDestroy() {

  //   this.session.clear('EndofDayResv_checkin');
  //   this.session.clear("pf_fname");
  //   this.session.clear("pf_lastname");
  //   this.session.clear("pf_language");
  //   this.session.clear("pf_mobileno");
  //   this.session.clear("pf_title");
  //   this.session.clear("pf_individual_country");
  //   this.session.clear("pf_individual_vip");
  //   this.session.clear("profile");
  //   this.session.clear("profileid")
  //   // this.user.RES_Arrival.clear();
  //   //Timer clear for ETA input
  //   if (this.now) {
  //     clearInterval(this.now);
  //   }
  //   //Clearing session
  //   // this.session.clear();
  // }

  //Select
  selectrow(detail) {
    this.user.RES_Rate_Code = detail.rate_code;
    console.log(this.user.RES_Rate_Code)
  }
  selectdata(details) {
    this.user.RES_Rate = details.rate;
    this.user.RES_Room_Type = details.roomstype;
    this.user.RES_RTC = details.roomstype;
  }
  // navigating to profile


  //Reservation edit
  
}

