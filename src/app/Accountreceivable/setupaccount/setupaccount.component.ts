import { Component, OnInit } from '@angular/core';
import { SetupaccountService } from './setupaccount.service';
import { SessionStorageService } from "ngx-webstorage";

// @ViewChild('dropmodal') dropmodal :CommonModalComponent;
@Component({
  
  selector: 'app-setupaccount',
  templateUrl: './setupaccount.component.html',
  styleUrls: ['./setupaccount.component.css'],
  providers:[SetupaccountService]
})
// @ViewChild('childModalOption1') childModalOption1 :Component;{}
export class SetupaccountComponent implements OnInit {
  public Account:any= {};
  public Id = this.session.retrieve("id");
  
// console.log("accountnum",this.accountnum);
  public user41 ={};
  public setupdate:any;
  public statetype=[];
  public roomtype=[];
  public count=[];
  public confim;
  public PF_Firstname;
  public showupdate=false;

  constructor(private pService: SetupaccountService, public session:SessionStorageService ) { }
  public routerconfig:any;
  ngOnInit() {
   this.Account.PF_Firstname=this.session.retrieve("PF_Firstname")
  this.routerconfig = this.session.retrieve("araccount");
  if(this.routerconfig == "edit"){

  this.Account.account_number = this.session.retrieve("account_number");
  this.Account.credit_limit = this.session.retrieve("credit_limit");
  this.Account.accountnum = this.session.retrieve("account_number");
  this.Account.contact = this.session.retrieve("contact");
  this.Account.phone = this.session.retrieve("phone");
  this.Account.email = this.session.retrieve("email");
  this.Account.ar_address = this.session.retrieve("ar_address");
  this.Account.city = this.session.retrieve("city");
  this.Account.postal_code = this.session.retrieve("postal_code");
  this.Account.country_id = this.session.retrieve("country_id");
  this.Account.state_id = this.session.retrieve("state_id");
  this.Account.permanent_account = this.session.retrieve("permanent_account");
  this.showupdate = true;
}else{
  this.session.clear("araccount");
}

//session clear
this.session.clear("credit_limit");
this.session.clear("account_number");
this.session.clear("contact");
this.session.clear("phone");
this.session.clear("email");
this.session.clear("ar_address");
this.session.clear("city");
this.session.clear("postal_code");
this.session.clear("country_id");
this.session.clear("state_id");
this.session.clear("permanent_account");
// this.session.clear("credit_limit");



    this.PF_Firstname= this.session.retrieve("pf_fname");
    this.pService.blockstatus()
    .subscribe((resp: any) => {
    this.roomtype=resp.ReturnValue;
     console.log("account type working fine",this.roomtype);
    });


    this.pService.state()
    .subscribe((resp: any) => {
    this.statetype=resp.ReturnValue;
     console.log("working fine",this.statetype);
    });

    this.pService.country()
    .subscribe((resp: any) => {
    this.count=resp.ReturnValue;
     console.log("working fine country",this.count);
    });
  }


  update(inputt){

    console.log(inputt);
   this.pService.setupaccountinsert(inputt)
   .subscribe(( user349:any)=> {
     this.user41 = user349;
     this.setupdate=user349.ReturnCode;
     console.log("service working fine",this.setupdate)
     if(this.setupdate == "RIS"){
       console.log("service woking ",this.setupdate)
      this.setupdate = "setup rate account record inserted successfully";
      // this.setupdate= "The Confirmation Number is:"+this.confim;

    }
    else{
      this.setupdate="setaccount  is Already Exist";
    }
   },
  
    );  
     }

  //update 

  update1(inputt){

    console.log("account inputttttt in ok button",inputt);
    
    if(inputt.flagged==true){
      inputt.flagged=1
    }
    else{
      inputt.flagged=0
    }

    if(inputt.permanent_account==true){
      inputt.permanent_account=1
    }
    else{
      inputt.permanent_account=0
    }

  console.log("input after condition",inputt)
   this.pService.accountsetupupdate(inputt)
   .subscribe(( user349:any)=> {
     this.user41 = user349;
     this.setupdate=user349.ReturnCode;
     console.log(" update service working fine",this.setupdate)
     if(this.setupdate == "RUS"){
       console.log(" update service woking ",this.setupdate)
      this.setupdate = "setup rate account  is Updated successfully";
      // this.setupdate= "The Confirmation Number is:"+this.confim;

    }
    else{
      this.setupdate="setaccount  is Already updated ";
    }
   },
  
    );  
     }
  
     public dropmodal:any
     onSelect(value){
      console.log("value on clicking the drodown",value)
      if(value=='ddmodal'){
        this.dropmodal.show()
      }
     }
}
