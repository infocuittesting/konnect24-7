import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { NewaraccountService} from './newaraccount.service';
import { ToasterServiceService } from '../../toaster-service.service'; 

@Component({
  selector: 'app-newaraccount',
  templateUrl: './newaraccount.component.html',
  styleUrls: ['./newaraccount.component.css'],
  providers:[ NewaraccountService]
})
export class NewaraccountComponent implements OnInit {

  constructor(private NewaraccountService: NewaraccountService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }
  mini = false;
  onerecord = false;
  showhiderestriction(param){
    // if(param == "all"){
    // this.mini = false;
    // }else{
    // this.mini = true;
    // }
    if(param == "onerecord"){
      this.onerecord = true;
      this.mini = true;
    }
    else{
      this.onerecord = false;
      this.mini = false;
    }
  }
  public res_table=[];
  public enable_select=true
  ngOnInit() {

    this.NewaraccountService.ar_account_table()
    .subscribe((resp: any) => {
 
     this.res_table=resp.ReturnValue;
     console.log("table valuessssssss",this.res_table)
   });
  }
selectindex
  selectMembersEdit(details,index){
    this.selectindex=index
    this.session.store("account_number",details.account_number.toString());
    this.session.store("pf_account_name",details.pf_account.toString());
    //setup account
    this.session.store("account_number",details.account_number.toString());
    this.session.store("credit_limit",details.credit_limit);
    this.session.store("contact",details.contact.toString());
    this.session.store("phone",details.phone.toString());
    this.session.store("email",details.pf_account.toString());
    this.session.store("ar_address",details.ar_address.toString());
    this.session.store("city",details.city.toString());
    this.session.store("postal_code",details.postal_code.toString());
    this.session.store("country_id",details.country_id.toString());
    this.session.store("state_id",details.state_id);
    this.session.store("permanent_account",details.permanent_account);
  





    this.enable_select=false;
  }
  newsetupaccount(){
    this.session.store("araccount","new");
    this.route.navigate(['psearch/']);

  }

  editsetupaccount(){
    this.session.store("araccount","edit");
    this.route.navigate(['Setupaccount/']);

  }
}
