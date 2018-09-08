import { Component,OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { ProfileService } from "./profile.service";
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {

  public country1=[];
  public state1=[];
  public currency=[];
  public comm1=[];
  public comm2=[];
  public comm3=[];
  public type=[];
  public cury=[];
  public itl=[];
  public navtag;
  public checkpftype; 


  constructor(private ProfileService:ProfileService,private route:Router,public session:SessionStorageService) { }
  public user={};
  user33={};
  public profile;
  submit(input1) {
      console.log("input in submit function",input1)
      this.ProfileService.postandgetdata (input1)
      .subscribe(( user333:any)=> {
        this.user33 = user333;
        this.profile=user333.ReturnCode;
        this.checkpftype = user333.profiletype;
        this.session.store("id",user333.profileid);
        console.log("id valuesssssssssssssssssss",user333.profileid);
        if(this.profile=="RIS"){
           this.profile="The Company Profile is successfully"+user333.profileid;
        
        console.log("create company success",this.checkpftype,typeof(this.checkpftype))
        if(this.checkpftype == "Travel Agent"){
          this.session.store("agentval",input1.PF_Account)
          console.log("travel agentttttttttttttttttt"+input1.PF_Account)
        }
        else if(this.checkpftype == "Source"){
            this.session.store("sourceval",input1.PF_Account)
            console.log("sourceeeeeeeeeeeeeeeeeeee"+input1.PF_Account)
        }
        else if(this.checkpftype == "Company"){
            this.session.store("pf_accounts",input1.PF_Account);
            console.log("comapnyyyyyyyyyyyyyyyyyyyyy"+input1.PF_Account)
        }
          
        else if(this.checkpftype == "Contact"){
            this.session.store("Contactval",input1.PF_Account);
        }
        else if(this.checkpftype == "Group"){
            this.session.store("Groupval",input1.PF_Account);
        }
        else{
            console.log("work agala")
        }  
        }
        else{
          console.log("else else else")
        }
      });  
                    
     }

     navigatepages(){
      this.navtag = this.session.retrieve("navigate");
      if(this.navtag == "Rev"){
        this.route.navigate(['reservation/']);
      }
      else if(this.navtag == "Block"){
        this.route.navigate(['bcreate/']);
      }
    }


     servicestatus=[];
     deleteCompanyProfile(){
        let inputparms={
  
   
       }
      this.ProfileService.deleteCompanyProfile(inputparms)
      .subscribe((resp: any) => {
       this.servicestatus=resp.ServiceStatus;
     });
   }
   
   updateCompanyProfile(){
    let inputparms={


   }
  this.ProfileService.updateCompanyProfile(inputparms)
  .subscribe((resp: any) => {
   this.servicestatus=resp.ServiceStatus;
 });
}

cleardata(){
  this.user=' ';
}
ngOnInit()
{
  this.navtag= this.session.retrieve("navigate");
  this.ProfileService.countrydropdown()
  .subscribe((resp: any) => {
   this.country1=resp.ReturnValue;
 });

 this.ProfileService.statedropdown()
 .subscribe((resp: any) => {
  this.state1=resp.ReturnValue;
});

this.ProfileService.currencydropdown()
 .subscribe((resp: any) => {
  this.currency=resp.ReturnValue;
});


this.ProfileService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm1=resp.ReturnValue;
});


this.ProfileService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm2=resp.ReturnValue;
});

this.ProfileService.postaldropdown()
 .subscribe((resp: any) => {
  this.cury=resp.ReturnValue;
});

this.ProfileService.citydropdown()
 .subscribe((resp: any) => {
  this.itl=resp.ReturnValue;
});
this.ProfileService.communication1dropdown()
 .subscribe((resp: any) => {
  this.comm3=resp.ReturnValue;
});

this.ProfileService.profile()
 .subscribe((resp: any) => {
  this.type=resp.ReturnValue;
});


}

}
