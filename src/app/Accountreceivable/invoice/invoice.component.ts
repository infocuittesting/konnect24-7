import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { InvoiceService} from './invoice.service';
import { ToasterServiceService } from '../../toaster-service.service';
import { DatePipe } from '@angular/common'; 


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers:[InvoiceService]
})
export class InvoiceComponent implements OnInit {

  constructor(private InvoiceService: InvoiceService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }
 
  public disablbut=true;
  public invoice_tab=[];
  public reasndropdown=[];
  ngOnInit() {
    this.InvoiceService.invoice_table()
    .subscribe((resp: any) => { 
     this.invoice_tab=resp.ReturnValue;
    //  console.log("invoice table valuessssssss",this.invoice_tab)
   });

   this.InvoiceService.adjst_reasondropdown()
   .subscribe((resp: any) => { 
    this.reasndropdown=resp.ReturnValue;
    console.log("reason dropdownvalues",this.reasndropdown)
  });
  }

  //on clicking table values
  public acc_bill:any 
  selectindex
  selectMembersEdit(index,value){
    this.selectindex=index
    this.disablbut=false
    this.acc_bill=value.account_bill
    console.log(this.acc_bill)
  }
  

  // invoice-->adjust -->on clicking ok button
  public adjust_res:any
  adjust={}
  adjustfun(adjust){
    console.log("adjust ok button click",adjust,this.acc_bill)
    this.InvoiceService.invoice_adjust(adjust,this.acc_bill)
    .subscribe((resp: any) => { 
     this.adjust_res=resp.ReturnCode;
     if(this.adjust_res=='RUS'){
      var message="Adjust Trn posted successfully"
      this.toasterService.success(message);
    }
   });
  }
}
