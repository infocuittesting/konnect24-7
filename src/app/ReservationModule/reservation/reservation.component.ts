import { Component, OnInit  } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { ReservationService } from "./reservation.service";
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

import { Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[ReservationService]
})
export class ReservationComponent implements OnInit {

  // public navtag:any={};
  public PF_Firstname;
  public Pf_lastname; 
  public Pf_language;
  public PF_Mobileno;
  public Pf_title;
  public Pf_country;
  public Pf_vip;
  public res_arrival;
  public res_extension;
  public res_source;

  public tableschanges =[];
  public language =[];
  public country=[];
  public restype=[];
  public source=[];
  public origin=[];
  public roomtype=[];
  public payment =[];
  public getc =[];
  public marketpro =[];
  
  public user1;
  public RES_packages;

  public now:any;
  public date:any = new Date().toJSON().split('T')[0];
  constructor(private ReservationService:ReservationService,private route:Router,public session:SessionStorageService) { 
    // this.date = new Date().toISOString().slice(11,19);
  }
  clearsession(){
    
    console.log("consoleeeeeeeeeeeeeeeee" + this.session.retrieve("checknav"))
    if (this.session.retrieve("checknav") == "Walk-in") {
      this.route.navigate(['checkin/']);
    
  }
  this.session.clear();
}
//getting value for expirydate and merging it in a variable   
  private month:any;
  private year:any;
  onMonthChange(month:any){
    this.month = month.toString();
  }
  onYearChange(year:any){
    this.year = year.toString();
  }
  private creditcard_expiry:any;
  getcreditexpiry(){
      this.creditcard_expiry = this.month+"/"+this.year;
      console.log(this.creditcard_expiry);
  }
  


  user:any={};
  //date difference 
  arriveDepartureDateFun(arrDate,depDate,){
    if(arrDate!=null && depDate!=null){
  const daydiff = moment(arrDate).diff(moment(depDate), "days");
  this.user.RES_Nights=Math.abs(daydiff);
    }
  }


  public ratequery:any;
  modalchange(RES_Arrival,RES_Depature,RES_Adults){
   let body ={
    "arrival_date":RES_Arrival,
    "departure_date":RES_Depature,
    "adults":RES_Adults
   }
   this.ReservationService.RateQuery(body)
   .subscribe( (resp:any) => {
     
     this.ratequery = resp.Return;
    });

  }
  
 public usera;
 public confim;
  user33={};
  submit(inputt):void {
  // console.log(inputt);
  // this.creditcard_expiry = inputt.PF_Expiration_Month+"/"+inputt.PF_Expiration_Year

  //passing creditcard expiry in inputt object
  this.creditcard_expiry = this.month+"/"+this.year;
  inputt.RES_Exp_Date = this.creditcard_expiry;
  inputt.RES_ETA = this.now;
      this.ReservationService.postandgetdata (inputt)
      .subscribe( (resp:any) => {
        
        this.user33 = resp;
          this.confim=resp.ConfirmationNumber;
          this.usera=resp.ReturnCode;
          if(this.usera == "RIS"){
            this.usera = "Reservation is Created for "+this.PF_Firstname+" "+this.Pf_lastname;
            this.confim= "The Confirmation Number is:"+this.confim;

          }
else{
  this.usera="Reservation is Already Exist";
} 

          this.user=" ";
          this.PF_Firstname="";
          this.Pf_lastname="";
          this.Pf_language="";
          this.PF_Mobileno="";
          this.Pf_title="";
          this.Pf_country="";
          this.Pf_vip="";

      });  
                      this.route.navigate(['reservation/']);
     }
 
  submitwait(inputt):void {
  // console.log(inputt);
      this.ReservationService.getwaitdata (inputt)
      .subscribe( (resp:any) => {
          this.user1=resp.ReturnCode;
          if(this.user1 == "RIS"){
            this.user1 = "Reservation Waitlist is Created for "+this.PF_Firstname+" "+this.Pf_lastname;
          }
          this.user="";
          this.PF_Firstname="";
          this.Pf_lastname="";
          this.Pf_language="";
          this.PF_Mobileno="";
          this.Pf_title="";
          this.Pf_country="";
          this.Pf_vip="";
          
      });  
     }

    //  loadProfile(nav){
    //   console.log('*******************************'+nav+'*********************************');
    //   this.session.store("navigate",nav);
    //   this.route.navigate(['psearch/']);
    //  }

     ngOnInit() {
       if(this.session.retrieve("Frontdesk_checkin") == "Edit"){
        this.PF_Firstname= this.session.retrieve("pf_fname");
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
       if(this.session.retrieve("Frontdesk_checkin") == "Walkin"){
        this.session.clear("pf_fname");
        this.session.clear("pf_lastname");
        this.session.clear("pf_language");
        this.session.clear("pf_mobileno");
        this.session.clear("pf_title");
        this.session.clear("pf_individual_country");
        this.session.clear("pf_individual_vip");
       }

       // end of day 

       if(this.session.retrieve("EndofDayResv_checkin") == "Resv"){
        this.PF_Firstname= this.session.retrieve("pf_fname");
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
       this.session.store("navigate","Rev");

       this.PF_Firstname= this.session.retrieve("pf_fname");
       this.Pf_lastname = this.session.retrieve("pf_lastname");
       this.Pf_language = this.session.retrieve("pf_language");
       this.PF_Mobileno = this.session.retrieve("pf_mobileno");
       this.Pf_title = this.session.retrieve("pf_title");
       this.Pf_country = this.session.retrieve("pf_individual_country");
       this.Pf_vip = this.session.retrieve("pf_individual_vip");
    //setInterval timer for ETA input field
    console.log(this.PF_Firstname,this.Pf_lastname,this.Pf_language,this.PF_Mobileno,this.Pf_title,this.Pf_country,this.Pf_vip);
      setInterval(()=>{
        this.now =  moment().format("HH:mm:ss");
      },1000);
      console.log(this.now);
      console.log(this.Pf_language);
      this.ReservationService.getratecode()
      .subscribe((resp: any) => {
        this.tableschanges=resp.ReturnValue;
      });
       
      this.ReservationService.getrestype()
      .subscribe((resp: any) => {
        this.restype=resp.ReturnValue;
      }); 
      
      this.ReservationService.getsource()
      .subscribe((resp: any) => {
        this.source=resp.ReturnValue;
      });

      this.ReservationService.getorigin()
      .subscribe((resp: any) => {
        this.origin=resp.ReturnValue;
      });      

      this.ReservationService.getroomtype()
      .subscribe((resp: any) => {
        this.roomtype=resp.ReturnValue;
      }); 
      
      this.ReservationService.getpayment()
      .subscribe((resp: any) => {
        this.payment=resp.ReturnValue;
      });
      
      this.ReservationService.getcurrencydata()
      .subscribe((resp: any) => {
        this.getc=resp.ReturnValue;
      }); 

      this.ReservationService.getmarket()
      .subscribe((resp: any) => {
        this.marketpro=resp.ReturnValue;
      });                   
    }  
    ngOnDestroy(){
      
      this.session.clear('EndofDayResv_checkin');
      this.session.clear("pf_fname");
      this.session.clear("pf_lastname");
      this.session.clear("pf_language");
      this.session.clear("pf_mobileno");
      this.session.clear("pf_title");
      this.session.clear("pf_individual_country");
      this.session.clear("pf_individual_vip");

      this.user.RES_Arrival="";
      //Timer clear for ETA input
      if(this.now){
        clearInterval(this.now);
      }
//Clearing session
// this.session.clear();
    }
}

