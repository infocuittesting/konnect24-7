import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilesearchService } from './profilesearch.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-profilesearch',
  templateUrl: './profilesearch.component.html',
  styleUrls: ['./profilesearch.component.css'], 
  providers:[ProfilesearchService ]

})
export class ProfilesearchComponent implements OnInit {
public navtag;
public navtag1;
  constructor(private pService: ProfilesearchService,private route:Router,
  public session:SessionStorageService) { 
    this.profile1 = this.someData;
  
  }


queryString:string;
city:string;
lastname:string;
postal:string;
mobile:string;

navigatepages(){
  this.navtag = this.session.retrieve("navigate");
   this.navtag1 = this.session.retrieve("test");
  if(this.navtag == "Rev"){
    this.route.navigate(['reservation/']);
  }
  else if(this.navtag == "Block"){

    console.log("this is check thcodifklks")
    
    this.route.navigate(['bcreate/']);
  }
  else if(this.navtag =="Revopt"){
    this.route.navigate(['reservationoption/']);
  }

   if((this.navtag1=="Company")||(this.navtag1=="Travel Agent")||(this.navtag1=="Source")||(this.navtag1=="Group")||
   (this.navtag1=="Contact")){
    this.route.navigate(['reservation/']);
    this.session.clear("test");

  }

  // else if(this.navtag == "agentBlock"){
    
  //   console.log("agent navigate to blov")
  //   this.route.navigate(['bcreate/']);
  // }
  // else if(this.navtag == "sourceBlock"){
  //   this.route.navigate(['bcreate/']);
  // }
  // else if(this.navtag == "groupBlock"){
  //   this.route.navigate(['bcreate/']);
  // }
 
}
clear(){
this.queryString = '';
this.city = '';
this.lastname = '';
this.mobile = '';
this.postal = '';
this.pftypeselection ='';
}
  
 public type = [];

public options = [];

 
 someData = []

  pftypeselection;
  profile1 = [];
  profilesearch = [];
  user41 ={};
  profileupdate={};
  users ={};
  country={};
  statelist={};
  currency={};
  comm1={};
  comm2={};
  comm3={};
  viplist={};
  nationality={};
  public endof:any;
  public blockof:any;

//  onSelect(val){
//   console.log(val);
//   this.profile1 = this.someData.filter(x => x.pf_type == val)
// }
showMore;
  //show more
  showMoreBut(){
    this.showMore=true;
  }
  //show less
  showLessBut(){
    this.showMore=false;
  }
update(inputt):void {

  console.log(inputt);
 this.pService.updateProfile(inputt)
 .subscribe(( user349:any)=> {
   this.user41 = user349;
   this.profileupdate=user349.Return;
 },
  );  
   }


  ngOnInit() {
   
    if(this.session.retrieve("EndofDay_checkin") == "Edit"){
      this.endof=this.session.retrieve('pf_id')
    }else{
      this.session.clear('EndofDay_checkin');
    }
    if(this.session.retrieve("BlockProfile") == "block_Profile_edit"){
      this.blockof = this.session.retrieve('pf_id')
    }
    else{
      this.session.clear('BlockProfile');
    }

    this.navtag= this.session.retrieve("navigate");
    
    console.log(this.session.retrieve("navigate"));
     this.pService.getprofile()
   .subscribe((resp: any) => {
   this.profile1=resp.ReturnValue;

 });
if(this.session.retrieve("test") != undefined){
  this.pftypeselection=this.session.retrieve("test");
}else{
  this.pftypeselection="";
}


 this.pService.getprofile()
 .subscribe((resp: any) => {
 this.someData=resp.ReturnValue;

});

 this.pService.profile()
 .subscribe((resp: any) => {
  this.options=resp.ReturnValue;
});

this.pService.countrydropdown()
.subscribe((resp: any) => {
 this.country=resp.ReturnValue;
});

this.pService.statedropdown()
.subscribe((resp: any) => {
 this.statelist=resp.ReturnValue;
});

this.pService.vipdropdown()
.subscribe((resp: any) => {
this.viplist=resp.ReturnValue;
});

this.pService.nationalitydropdown()
.subscribe((resp: any) => {
this.nationality=resp.ReturnValue;
});

this.pService.currencydropdown()
.subscribe((resp: any) => {
this.currency=resp.ReturnValue;
});


this.pService.communication1dropdown()
.subscribe((resp: any) => {
this.comm1=resp.ReturnValue;
});


this.pService.communication1dropdown()
.subscribe((resp: any) => {
this.comm2=resp.ReturnValue;
});


this.pService.communication1dropdown()
.subscribe((resp: any) => {
this.comm3=resp.ReturnValue;
});

}

profileedit(params){
    
  if(params == "ProfileEdit"){
    if(this.checkpftype=='Individual'){
    this.session.store("profile_edit_nav",params);
    this.session.store('profile_details',this.indi_profile);
    this.route.navigate(['individualprofile/']);
  }else{
    this.session.store("profile_edit_nav",params);
    this.session.store('profile_details',this.indi_profile);
    this.route.navigate(['profile/']);
  }
  }
  //this.route.navigate(['profilestatistics/']);
}

ngOnDestroy(){
  this.session.clear('EndofDay_checkin');
  this.session.clear('BlockProfile');
}
res=false;
new=false;
option=true;
ok=true;
edit=true;
pfid;

profile_id:any;
public indi_profile:any
selectindex=null;
public checkpftype;
selectMembersEdit(details,index){
this.selectindex=index;

this.profile_id=details.pf_id;
console.log("profile_idddddddddddddddd",this.profile_id)


this.pfid=details.pf_id;
console.log("profileeeeeeeeeeee",this.pfid)
this.checkpftype = details.pf_type;
console.log("check the condition"+this.checkpftype)
if(this.pfid==details.pf_id){
  this.res=true;
  this.new=true;
  this.option=false;
  this.ok=false;
  this.edit=false;
  console.log("enable and disable")
}
else
{
  this.res=false;
  this.new=false;
  this.option=true;
  this.ok=true;
  this.edit=true;
}
if(this.checkpftype == "Travel Agent"){
  this.session.store("agentval",details.pf_account)
  console.log("travel agentttttttttttttttttt"+details.pf_account)
  }
  else if(this.checkpftype == "Source"){
    this.session.store("sourceval",details.pf_account)
    console.log("sourceeeeeeeeeeeeeeeeeeee"+details.pf_account)
  }
  else if(this.checkpftype == "Company"){
    this.session.store("pf_accounts",details.pf_account);
    console.log("comapnyyyyyyyyyyyyyyyyyyyyy"+details.pf_account)
  }
  
  else if(this.checkpftype == "Contact"){
    this.session.store("Contactval",details.pf_account);
  }
  else if(this.checkpftype == "Group"){
    this.session.store("Groupval",details.pf_account);
  }

  this.indi_profile = details
this.session.store("id",details.pf_id);
this.session.store("pf_id",details.pf_id);
this.session.store("profileid",details.pf_id);

this.session.store("pf_fname",details.pf_firstname);
//this.session.store("pf_lastname",details.pf_lastname);
//this.session.store("pf_language",details.pf_language);
//this.session.store("pf_title",details.pf_title);


//this.session.store("pf_mobileno",details.pf_mobileno);
//this.session.store("pf_individual_country",details.pf_individual_country);
//this.session.store("pf_individual_vip",details.pf_individual_vip);
//this.session.store("dateofbirth",details.pf_date_of_birth)

//this.session.store("postalcode",details.pf_postalcode)
//this.session.store("companyaddress",details.pf_company_address)
//this.session.store("businessaddress",details.pf_business_address)
//this.session.store("city",details.pf_city)
//this.session.store("state",details.pf_company_state)
//this.session.store("profiletype",details.pf_type)

if(details.pf_type == "Individual"){
this.session.store("pfid",details.pf_id);
this.session.store("fname",details.pf_firstname);
this.session.store("lastname",details.pf_lastname);
this.session.store("language",details.pf_language);
this.session.store("mobileno",details.pf_mobileno);
this.session.store("title",details.pf_title);
this.session.store("individual_country",details.pf_individual_country);
this.session.store("individual_vip",details.pf_individual_vip);
}

if((details.pf_type == "Contact")||(details.pf_type == "Group")||(details.pf_type == "Source")
||(details.pf_type == "Travel Agent"||(details.pf_type == "Company"))){
this.session.store("profiletype",details.pf_type);
this.session.store("typeaccount",details.pf_account)
this.session.store("profileid",details.pf_id);
console.log("accccccccccccccccc",this.session.retrieve("typeaccount"))
}
// individualprofile

}
   

}