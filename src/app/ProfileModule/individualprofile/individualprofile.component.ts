
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
public user:any=[];
  public individual;
  individual1 = {};
  user33={};
  user34={};
  // value:any;
  submit(inputt):any {
    console.log(inputt);
    if((this.session.retrieve('profile_edit_nav')==null) || (this.session.retrieve('profile_edit_nav')==undefined)){
      this.IndividualService.postandgetdata (inputt)
      .subscribe(( user333:any)=> {
        this.user33 = user333;
        this.individual=user333.ReturnCode;
        if(this.individual=="RIS"){
          this.individual="The Profile is Created for "+inputt.PF_Firstname+" "+inputt.PF_Lastname;
          this.session.clear()
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
          //this.session.store("pf_fname",inputt.PF_Firstname);
          //this.session.store("pf_lastname",inputt.PF_Lastname);
          //this.session.store("pf_language",inputt.PF_Language);
          //this.session.store("pf_title",inputt.PF_Title);
          //this.session.store("pf_mobileno",inputt.PF_Mobileno.toString());
          //this.session.store("pf_individual_country",inputt.PF_Individual_Country);
          //this.session.store("pf_individual_vip",inputt.PF_Individual_VIP);
          // this.navigatepages();
        }
      }); 
    }

    else{
      this.IndividualService.updateIndividualProfile(inputt)
      .subscribe((resp: any) => {
        if(resp.ReturnCode=='RUS'){
        this.individual="The Profile is Updated for "+inputt.PF_Firstname;
      }
      this.session.clear()
     });
    
    }
     }



     servicestatus=[];

   
     public testing_val:any;
     public listtypes:any;

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
   this.listtypes=resp.ReturnValue;
  this.listtype = this.listtypes.slice(5)
  console.log('arrayvalllllllllll',this.listtype)

 });

 this.testing_val = this.session.retrieve('profile_details')
 console.log('testttttttt',this.testing_val)

 this.user.PF_Firstname=this.testing_val.pf_firstname
 this.user.PF_Lastname=this.testing_val.pf_lastname
 this.user.PF_Language=this.testing_val.pf_language

 this.user.PF_Title=this.testing_val.pf_title
 this.user.PF_Mobileno=this.testing_val.pf_mobileno
 this.user.PF_Individual_Country=this.testing_val.pf_individual_country

 this.user.PF_Date_Of_Birth=this.testing_val.pf_date_of_birth
 this.user.PF_Postalcode=this.testing_val.pf_postalcode
 this.user.PF_Individual_Address=this.testing_val.pf_individual_address

 this.user.PF_Home_Address=this.testing_val.address_one
 this.user.PF_Individual_City=this.testing_val.pf_city
 this.user.PF_Individual_State=this.testing_val.pf_individual_state
 this.user.PF_Passport = this.testing_val.pf_passport

 this.user.PF_Type = this.testing_val.pf_type
 this.user.PF_Individual_VIP = this.testing_val.pf_individual_vip
 this.user.PF_Nationality = this.testing_val.pf_nationality
 this.user.PF_Individual_Communication1 = this.testing_val.pf_individual_communication1
 this.user.PF_Individual_Communication2 = this.testing_val.pf_individual_communication2
 this.user.PF_Individual_Communication3 = this.testing_val.pf_individual_communication3

 this.user.PF_Individual_Commtype1 = this.testing_val.pf_individual_commtype1
 this.user.PF_Individual_Commtype2 = this.testing_val.pf_individual_commtype2
 this.user.PF_Individual_Commtype3 = this.testing_val.pf_individual_commtype3



 

}

//ngOnDestroy(){
 // this.session.clear(this.user);
//}

public PF_Firstname:any;
cleardata(){
  this.user = '';
  }
}
