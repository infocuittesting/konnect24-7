
import { Component,OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { IndividualService } from "./individual.service";
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-individualprofile',
  templateUrl: './individualprofile.component.html',
  styleUrls: ['./individualprofile.component.css'],
  providers:[IndividualService]
})
export class IndividualprofileComponent implements OnInit{
public country=[];
public statelist=[];
public viplist=[];
public nationality=[];
public currency=[];
public itl=[];
public lit=[];
public tl=[];
public comm1=[];
public comm2=[];
public comm3=[];
public listtype=[];
public navtag;
public checkpftype;

  constructor(private IndividualService:IndividualService,private route:Router,public session:SessionStorageService) { }
public user={};
  public individual;
  individual1 = {};
  user33={};
  user34={};
  // value:any;
  submit(inputt):any {
    console.log(inputt);
      this.IndividualService.postandgetdata (inputt)
      .subscribe(( user333:any)=> {
        this.user33 = user333;
        this.individual=user333.ReturnCode;
        if(this.individual=="RIS"){
          this.individual="The Profile is Created for "+inputt.PF_Firstname+" "+inputt.PF_Lastname;
          // let key = "individualprofile";
          // this.value = inputt;

          // this.value = JSON.stringify(this.value);
          // sessionStorage.setItem(key,inputt);
          // this.checkpftype = inputt.PF_Type;
          // if(this.checkpftype == "Travel Agent"){
          //   this.session.store("agentval",inputt.PF_Type)
          //   console.log("travel agentttttttttttttttttt"+inputt.PF_Type)
          // }
          // else if(this.checkpftype == "Source"){
          //   this.session.store("sourceval",inputt.PF_Type)
          // }
          // else if(this.checkpftype == "Company"){
          //   this.session.store("pf_accounts",inputt.PF_Type);
          //   console.log("comapnyyyyyyyyyyyyyyyyyyyyy"+inputt.PF_Type)
          // }
          
          // else if(this.checkpftype == "Contact"){
          //   this.session.store("Contactval",inputt.PF_Type);
          // }
          // else if(this.checkpftype == "Group"){
          //   this.session.store("Groupval",inputt.PF_Type);
          // }
          this.session.store("pf_fname",inputt.PF_Firstname);
          this.session.store("pf_lastname",inputt.PF_Lastname);
          this.session.store("pf_language",inputt.PF_Language);
          this.session.store("pf_title",inputt.PF_Title);
          this.session.store("pf_mobileno",inputt.PF_Mobileno.toString());
          this.session.store("pf_individual_country",inputt.PF_Individual_Country);
          this.session.store("pf_individual_vip",inputt.PF_Individual_VIP);
          // this.navigatepages();
        }
      });  
     }


    //  navigatepages(){
    //   this.navtag = this.session.retrieve("navigate");
    //   if(this.navtag == "Rev"){
    //     this.route.navigate(['reservation/']);
    //   }
    //   else if(this.navtag == "Block"){
    //     this.route.navigate(['bcreate/']);
    //   }
    // }


     servicestatus=[];

   
     
   updateIndividualProfile(){
    let inputparms={
     "PF_Firstname":"aravindh",
        "PF_Mobileno":"34545",
        "PF_Individual_Address":"Oxon Hill, MD, USA",
        "PF_Home_Address":"Oxon Hill, MD, USA",	
        "PF_City":"newyork",	
        "PF_Postalcode":"621334",	
        "PF_Individual_Country":"america",	
        "PF_Individual_State":"hawaii"
      
        

   }
  this.IndividualService.updateIndividualProfile(inputparms)
  .subscribe((resp: any) => {
   this.servicestatus=resp.ServiceStatus;
 });

}

ngOnInit()
{
  this.navtag= this.session.retrieve("navigate");
  console.log("########################"+this.navtag);
  //dropdown 
  this.IndividualService.countrydropdown()
  .subscribe((resp: any) => {
   this.country=resp.ReturnValue;
 });

 this.IndividualService.statedropdown()
  .subscribe((resp: any) => {
   this.statelist=resp.ReturnValue;
 });

 this.IndividualService.vipdropdown()
 .subscribe((resp: any) => {
  this.viplist=resp.ReturnValue;
});

this.IndividualService.nationalitydropdown()
 .subscribe((resp: any) => {
  this.nationality=resp.ReturnValue;
});

this.IndividualService.currencydropdown()
 .subscribe((resp: any) => {
  this.currency=resp.ReturnValue;
});

this.IndividualService.citydropdown()
 .subscribe((resp: any) => {
  this.itl=resp.ReturnValue;
});

this.IndividualService.titledropdown()
 .subscribe((resp: any) => {
  this.lit=resp.ReturnValue;
});

this.IndividualService.languagedropdown()
 .subscribe((resp: any) => {
  this.tl=resp.ReturnValue;
});

this.IndividualService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm1=resp.ReturnValue;
});


this.IndividualService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm2=resp.ReturnValue;
});


this.IndividualService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm3=resp.ReturnValue;
});

this.IndividualService.pftypedropdown()
  .subscribe((resp: any) => {
   this.listtype=resp.ReturnValue;
 });



}

cleardata(){
  this.user = '';
  }
}
