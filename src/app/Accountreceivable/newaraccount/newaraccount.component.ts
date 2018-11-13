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

  selectMembersEdit(details,index){
    this.session.store("account_number",details.account_number.toString());
    this.enable_select=false;
  }

}
