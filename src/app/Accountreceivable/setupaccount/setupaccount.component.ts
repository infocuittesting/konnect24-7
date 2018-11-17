import { Component, OnInit } from '@angular/core';
import { SetupaccountService } from './setupaccount.service';
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-setupaccount',
  templateUrl: './setupaccount.component.html',
  styleUrls: ['./setupaccount.component.css'],
  providers:[SetupaccountService]
})
export class SetupaccountComponent implements OnInit {

  public Id = this.session.retrieve("id");
  public user41 ={};
  public setupdate:any;
  public Account= [];
  public statetype=[];
  public roomtype=[];
  public count=[];
  public confim;
  public PF_Firstname;

  constructor(private pService: SetupaccountService, public session:SessionStorageService ) { }

  ngOnInit() {
    this.PF_Firstname= this.session.retrieve("pf_fname");
    this.pService.blockstatus()
    .subscribe((resp: any) => {
    this.roomtype=resp.ReturnValue;
     console.log("service working fine",this.roomtype);
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
   this.pService.accountsetup(inputt)
   .subscribe(( user349:any)=> {
     this.user41 = user349;
     this.setupdate=user349.Return;
     console.log("service working fine",this.setupdate)
     if(this.setupdate == "RAI"){
       console.log("service woking ",this.setupdate)
      this.setupdate = "setup rate account  is Created for "+this.PF_Firstname;
      this.setupdate= "The Confirmation Number is:"+this.confim;

    }
    else{
      this.setupdate="setaccount  is Already Exist";
    }
   },
  
    );  
     }

  //update 

  update1(inputt){

    console.log(inputt);
   this.pService.accountsetupupdate(inputt)
   .subscribe(( user349:any)=> {
     this.user41 = user349;
     this.setupdate=user349.Return;
     console.log(" update service working fine",this.setupdate)
     if(this.setupdate == "RUS"){
       console.log("service woking ",this.setupdate)
      this.setupdate = "setup rate account  is Updated for "+this.PF_Firstname;
      this.setupdate= "The Confirmation Number is:"+this.confim;

    }
    else{
      this.setupdate="setaccount  is Already updated Exist";
    }
   },
  
    );  
     }
  
 
}
