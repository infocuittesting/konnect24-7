import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { AccountmaintenanceService} from './accountmaintenance.service';
import { ToasterServiceService } from '../../toaster-service.service';

@Component({
  selector: 'app-accountmaintenance',
  templateUrl: './accountmaintenance.component.html',
  styleUrls: ['./accountmaintenance.component.css'],
  providers:[ AccountmaintenanceService]
})
export class AccountmaintenanceComponent implements OnInit {

  constructor(private AccountmaintenanceService: AccountmaintenanceService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }

  public ac_maintain_tabl=[];
  public market_val=[];
  public source_val=[];
  public room_cls_val=[];
  public enablebut=true;
  ngOnInit() {
    this.AccountmaintenanceService.account_table()
    .subscribe((resp: any) => { 
     this.ac_maintain_tabl=resp.ReturnValue;
     console.log("account maintain table valuessssssss",this.ac_maintain_tabl)
   });


   this.AccountmaintenanceService.market_dropdown()
   .subscribe((resp: any) => { 
    this.market_val=resp.ReturnValue;
    console.log("marketdropdown valuess",this.market_val)
  });

  this.AccountmaintenanceService.source_dropdown()
  .subscribe((resp: any) => { 
   this.source_val=resp.ReturnValue;
   console.log("sourcedropdown valuess",this.source_val)
 });

 this.AccountmaintenanceService.room_class_dropdown()
 .subscribe((resp: any) => { 
  this.room_cls_val=resp.ReturnValue;
  console.log("roomdropdown valuess",this.room_cls_val)
});

}

  selectindex
  selectMembersEdit(index,value){
    this.enablebut=false
    this.selectindex=index
    console.log("indexand value of account maintain",index,value)
    this.session.store("invoice_no",value.invoice_no)
    

  }
newinvoice={}
  newinvoicefun(newinvoice){
console.log("new invoice values",newinvoice)
this.AccountmaintenanceService.insert_accountin(newinvoice)
.subscribe((resp: any) => {
  var insertresp=resp.ReturnCode
  if(insertresp=='RIS'){
    var message="New Invoice Created Successfully"
    this.toasterService.success(message);
  }

  // refresh traces table records //
  this.AccountmaintenanceService.account_table()
  .subscribe((resp: any) => { 
   this.ac_maintain_tabl=resp.ReturnValue;
   console.log("account maintain table value",this.ac_maintain_tabl)
 });
 });
  }

}
