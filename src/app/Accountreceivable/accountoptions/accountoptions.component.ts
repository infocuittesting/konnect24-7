import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { AccountoptionsService} from './accountoptions.service';
import { ToasterServiceService } from '../../toaster-service.service'; 

@Component({
  selector: 'app-accountoptions',
  templateUrl: './accountoptions.component.html',
  styleUrls: ['./accountoptions.component.css'],
  providers:[ AccountoptionsService]
})
export class AccountoptionsComponent implements OnInit {

  constructor(private AccountoptionsService: AccountoptionsService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }

  acc_trace_val=[];
  ngOnInit() {
    this.AccountoptionsService.acc_traces_table()
    .subscribe((resp: any) => {
 
     this.acc_trace_val=resp.ReturnValue;
     console.log("trace table valuessssssss",this.acc_trace_val)
   });
  }

}
