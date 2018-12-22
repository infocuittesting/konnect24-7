import { Component, OnInit } from '@angular/core';
import { ProfilestatisticsService } from "./profilestatistics.service"
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-profilestatistics',
  templateUrl: './profilestatistics.component.html',
  styleUrls: ['./profilestatistics.component.css'],
  providers:[ProfilestatisticsService]
})
export class ProfilestatisticsComponent implements OnInit {

  constructor( private ProfilestatisticsService: ProfilestatisticsService, public session: SessionStorageService,) { }


 public edit_data_bind: any = [];
 public edit_data_bind_last:any=[];
  editblock: any = {};
  
  ngOnInit() {


    this.ProfilestatisticsService.databindvalues()
    .subscribe((resp: any) => {
      console.log("consoleeeeeeeeeeeeeeeee" + this.session.retrieve("ratecodenav"))
        this.edit_data_bind = resp.currentyear
        this.edit_data_bind_last = resp.lastyear
        console.log("^^^^^^^^^^^^^^^^^^^^^^^" + JSON.stringify(this.edit_data_bind));
        // this.editblock.ratecodedropset =  this.edit_data_bind.rate_code;
        this.editblock.Room_Nights = this.edit_data_bind.Room_Nights;
        this.editblock.Arrival_Rooms = this.edit_data_bind.Arrival_Rooms;
        this.editblock.Cancel_Res = this.edit_data_bind.Cancel_Res;
        this.editblock.Room_Revenue = this.edit_data_bind.Cancel_Res;
        this.editblock.No_Show_Res = this.edit_data_bind.Cancel_Res;
        this.editblock.Cancel_Rooms = this.edit_data_bind.Cancel_Res;
        this.editblock.No_Show_Rooms = this.edit_data_bind.Cancel_Res;


        this.editblock.Room_Nights1 = this.edit_data_bind_last.Room_Nights;
        this.editblock.Arrival_Rooms1 = this.edit_data_bind_last.Arrival_Rooms;
        this.editblock.Cancel_Res1 = this.edit_data_bind_last.Cancel_Res;
        this.editblock.Room_Revenue1 = this.edit_data_bind_last.Cancel_Res;
        this.editblock.No_Show_Res1 = this.edit_data_bind_last.Cancel_Res;
        this.editblock.Cancel_Rooms1 = this.edit_data_bind_last.Cancel_Res;
        this.editblock.No_Show_Rooms1 = this.edit_data_bind_last.Cancel_Res;
    });


  }

}
