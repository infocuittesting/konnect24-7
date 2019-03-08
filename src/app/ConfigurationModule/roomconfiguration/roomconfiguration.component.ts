import { Component, OnInit } from '@angular/core';
import { GeneralconfigurationService } from '../generalconfiguration/generalconfiguration.service';
import { ToasterServiceService } from '../../toaster-service.service';

@Component({
  selector: 'app-roomconfiguration',
  templateUrl: './roomconfiguration.component.html',
  styleUrls: ['./roomconfiguration.component.css'],
  providers: [GeneralconfigurationService]
})
export class RoomconfigurationComponent implements OnInit {

  constructor(private GeneralconfigurationService: GeneralconfigurationService, private toasterService: ToasterServiceService) { }

  public roomtable = []; fotable = []; rmclasstable = []; fltable = []; house;
  public confrmno: any = [];
  Success(message) {
    //console.log("message",message);
    this.toasterService.success(message);
  }

  ngOnInit() {

    // Get roomtype
    this.GeneralconfigurationService.roomtype()
      .subscribe((resp: any) => {
        this.roomtable = resp.ReturnValue;
      });

    // Get origin code
    this.GeneralconfigurationService.fos()
      .subscribe((resp: any) => {
        this.fotable = resp.ReturnValue;
      });

    // Get room class
    this.GeneralconfigurationService.rmclass()
      .subscribe((resp: any) => {
        this.rmclasstable = resp.ReturnValue;
      });

    // Get floor
    this.GeneralconfigurationService.floor()
      .subscribe((resp: any) => {
        this.fltable = resp.ReturnValue;
      });

    //get room config
    this.GeneralconfigurationService.gethousekeepingdata()
      .subscribe((resp: any) => {
        this.house = resp.ReturnValue;
      });

  }

  //insert Room config
  inrmno(param, par) {
    this.GeneralconfigurationService.instrmno(param)
      .subscribe((resp: any) => {
        par.reset();
        if (resp.ReturnCode == "RIS") {
          this.Success("The Room Configuration is Done");
          this.GeneralconfigurationService.gethousekeepingdata()
            .subscribe((resp: any) => {
              this.house = resp.ReturnValue;
            });
        }
      });
  }

}
