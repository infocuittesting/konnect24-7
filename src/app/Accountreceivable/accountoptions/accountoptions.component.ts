import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { AccountoptionsService} from './accountoptions.service';
import { ToasterServiceService } from '../../toaster-service.service';
import { DatePipe } from '@angular/common'; 



@Component({
  selector: 'app-accountoptions',
  templateUrl: './accountoptions.component.html',
  styleUrls: ['./accountoptions.component.css'],
  providers:[ AccountoptionsService,DatePipe]
})
export class AccountoptionsComponent implements OnInit {

  constructor(private datePipe: DatePipe,private AccountoptionsService: AccountoptionsService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }

  public Success(message){
    //  console.log("message",message);
     this.toasterService.success(message);
   }

  acc_trace_val=[];
  public traces_account_name:any
  public curdate:any
  newtrace={};
  ngOnInit() {
    this.AccountoptionsService.acc_traces_table()
    .subscribe((resp: any) => {
 
     this.acc_trace_val=resp.ReturnValue;
    //  console.log("trace table valuessssssss",this.acc_trace_val)
     this.traces_account_name=this.session.retrieve("pf_account_name")
    
   });
  }

// insert new trace//
  public insertresp:any
  newtracefun(newtrace){

    this.curdate=new Date()    
    this.curdate=this.datePipe.transform(this.curdate,'yyyy-MM-dd')
    // console.log("current date",this.curdate)

// refresh traces table records //
    this.AccountoptionsService.acc_traces_new(newtrace,this.curdate)
    .subscribe((resp: any) => {
      this.insertresp=resp.ReturnCode
      if(this.insertresp=='RIS'){
        var message="new trace created successfully"
        this.toasterService.success(message);
      }
      this.AccountoptionsService.acc_traces_table()
    .subscribe((resp: any) => {
     this.acc_trace_val=resp.ReturnValue;  
   });
   });
  }
 
}
