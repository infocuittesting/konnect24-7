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
  ngOnInit() {

    this.AccountmaintenanceService.account_table()
    .subscribe((resp: any) => { 
     this.ac_maintain_tabl=resp.ReturnValue;
     console.log("account maintain table valuessssssss",this.ac_maintain_tabl)
   });
  }

}
