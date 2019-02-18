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
  public types:any;


  constructor(private ProfileService:ProfileService,private route:Router,public session:SessionStorageService) { }
  public user:any=[];
  user33={};
  public profile;
  submit(input1) {
    console.log('session',this.session.retrieve('profile_edit_nav'))
    if((this.session.retrieve('profile_edit_nav')==null) || (this.session.retrieve('profile_edit_nav')==undefined)){   
      console.log("input in submit function",input1)
      this.ProfileService.postandgetdata (input1)
      .subscribe(( user333:any)=> {
        this.user33 = user333;
        this.profile=user333.ReturnCode;
        this.checkpftype = user333.profiletype;
        this.session.store("id",user333.profileid);
        console.log("id valuesssssssssssssssssss",user333.profileid);
        if(this.profile=="RIS"){
           this.profile="The Company Profile is successfully"+input1.PF_Account;
        
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
    else{
      this.ProfileService.updateCompanyProfile(input1)
      .subscribe((resp: any) => {
        if(resp.ReturnCode=='RUS'){
        this.profile="The Profile is Updated for "+input1.PF_Account;
      }
      this.session.clear()
     });
    
    }
                    
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
   

cleardata(){
  this.user=[];
}
public arr_type=[]
public testing_val:any;

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
  this.types=resp.ReturnValue;
  this.type = this.types.slice(0,5)

  console.log('arrayvalllllllllll',this.types.slice(0,5))
});


this.testing_val = this.session.retrieve('profile_details')
  console.log('companeyyyyyy',this.testing_val.pf_account)

  this.user.PF_Account = this.testing_val.pf_account
  this.user.PF_Company_Address = this.testing_val.pf_company_address
  this.user.PF_Business_Address = this.testing_val.pf_business_address
  this.user.PF_City = this.testing_val.pf_city
  this.user.PF_Postalcode = this.testing_val.pf_postalcode
  this.user.PF_Company_Country = this.testing_val.pf_company_country
  this.user.PF_Company_State = this.testing_val.pf_company_state
  this.user.PF_Owner = this.testing_val.pf_owner
  this.user.PF_Territory = this.testing_val.pf_territory
  this.user.PF_Type = this.testing_val.pf_type
  this.user.PF_Ref_Currency = this.testing_val.pf_ref_currency
  this.user.PF_AR_Number = this.testing_val.pf_ar_number
  this.user.PF_Company_Commtype1 = this.testing_val.pf_company_commtype1
  this.user.PF_Company_Commtype2 = this.testing_val.pf_company_commtype2
  this.user.PF_Company_Commtype3 = this.testing_val.pf_company_commtype3
  this.user.PF_Company_Communication1 = this.testing_val.pf_company_communication1
  this.user.PF_Company_Communication2 = this.testing_val.pf_company_communication2
  this.user.PF_Company_Communication3 = this.testing_val.pf_company_communication3


}

}
