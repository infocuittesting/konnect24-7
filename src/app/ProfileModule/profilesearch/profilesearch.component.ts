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
  // this.navtag1 = this.session.retrieve("navigate1");
  if(this.navtag == "Rev"){
    this.route.navigate(['reservation/']);
  }
  else if(this.navtag == "Block"){

    console.log("this is check thcodifklks")
    
    this.route.navigate(['bcreate/']);
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


 onSelect(val){
  console.log(val);
  this.profile1 = this.someData.filter(x => x.pf_type == val)
}
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
    this.navtag= this.session.retrieve("navigate");
    
    console.log(this.session.retrieve("navigate"));
     this.pService.getprofile()
   .subscribe((resp: any) => {
   this.profile1=resp.ReturnValue;

 });

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
res=false;
new=false;
option=true;
ok=true;
edit=true;
pfid;
selectindex=null;
public checkpftype;
selectMembersEdit(details,index){
this.selectindex=index;
this.pfid=details.pf_id;
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
this.session.store("id",details.pf_id);
this.session.store("pf_fname",details.pf_firstname);
this.session.store("pf_lastname",details.pf_lastname);
this.session.store("pf_language",details.pf_language);
this.session.store("pf_title",details.pf_title);

this.session.store("pf_mobileno",details.pf_mobileno.toString());
this.session.store("pf_individual_country",details.pf_individual_country);
this.session.store("pf_individual_vip",details.pf_individual_vip);

console.log("guruuuuuuuuuuu",details.pf_account);


}
  

}