import { Component, OnInit, Input } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule, NgForm, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { EditRevenueManagementService } from './edit-revenue-management.service';
import { SessionStorageService } from "ngx-webstorage";
import { DISABLED } from '@angular/forms/src/model';
import * as moment from 'moment';



@Component({
  selector: 'app-edit-revenue-management',
  templateUrl: './edit-revenue-management.component.html',
  styleUrls: ['./edit-revenue-management.component.css'],
  providers: [EditRevenueManagementService]
})
export class EditRevenueManagementComponent implements OnInit {

  public arryses = [];
  public ratecat = [];
  public prc = [];
  public price = [];
  public shop = [];
  public src = [];
  public money = [];
  public room: any;
  public savehead: any;
  public sucalert: any;
  public successratevar: any;
  public failalert: any;
  public newnegovar: any;
  public ratedetvar: any;


  public revenueroom = [];
  public negotiatecode: any = [];
  public rateheader: any = {};
  public funct = [];
  public databindvalues = [];
  tierFlag = 0;


  public ncode = [
    //   { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'1'},
    // { Rate_code: 'EXTRA', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'2'},
    // { Rate_code: 'HIGH', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'4'},
    // { Rate_code: 'LOW', Begin_sell_date: '26-07-2018',End_sell_date:'99-07-2018',ID:'3'},
    // { Rate_code: 'LOW', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'3'},
    // { Rate_code: 'CORP', Begin_sell_date: '16-07-2018',End_sell_date:'19-07-2018',ID:'1'},
    // { Rate_code: 'EXTRA', Begin_sell_date: '17-07-2018',End_sell_date:'29-07-2018',ID:'2'},
  ];

  public date: any = new Date().toJSON().split('T')[0];
  constructor(private EditRevenuemanagement: EditRevenueManagementService, public session: SessionStorageService, private route: Router, private fb: FormBuilder) {
    this.negotiatecode = this.ncode;

  }

  funcat(roomtypelist) {
    console.log("roomdetailsssssssssssssss", roomtypelist);
    this.funct = roomtypelist.rate_class;
    console.log("function catttttttttttttt", this.funct);
  }
  public currentTab: any = 1;
  tabname(args) {
    this.currentTab = args;
    console.log(this.currentTab);
  }


  editratedetaills: any = {};
  cat_id: any;
  rateheadalert: any;
  public cond;


  ratedetalert: any;

  ratedetins(editratedetaills, tab) {
    this.cond = this.session.retrieve("ratecodenav");
    if (editratedetaills.mon == true) {
      editratedetaills.mon = "1";

    } else {
      editratedetaills = "0";

    }
    if (editratedetaills.tue == true) {
      editratedetaills.tue = "1";

    } else {
      editratedetaills.tue = "0";


    }
    if (editratedetaills.wed == true) {
      editratedetaills.wed = "1";

    } else {
      editratedetaills.wed = "0";


    }
    if (editratedetaills.thu == true) {
      editratedetaills.thu = "1";

    } else {
      editratedetaills.thu = "0";


    }
    if (editratedetaills.fri == true) {
      editratedetaills.fri = "1";

    } else {
      editratedetaills.fri = "0";


    }
    if (editratedetaills.sat == true) {
      editratedetaills.sat = "1";

    } else {
      editratedetaills.sat = "0";


    }
    if (editratedetaills.sun == true) {
      editratedetaills.sun = "1";

    } else {
      editratedetaills.sun = "0";


    }
    console.log("insert rate detailssssssssssssssss", );

    console.log("insert rate detailssssssssssssssss", this.rmid2);
    if (this.cond == "New") {
      this.EditRevenuemanagement.ratedetins(this.rmid2, this.currentTab, editratedetaills)
        .subscribe((resp: any) => {
          this.ratedetvar = resp.ReturnCode;
          if (this.ratedetvar == 'RIS') {
            this.ratedetalert = "ratetier created successfully";
          }
          else {
            this.ratedetalert = "can't able to create ratedetails";
          }
        });
    }
    else {
      this.EditRevenuemanagement.updateratedetail( this.rmid2, this.rmid3, this.currentTab, editratedetaills, this.ratedetail.ratedaysid,this.roomsidrate,this.packagesids)
        .subscribe((resp: any) => {
          this.ratedetvar = resp.ReturnCode;

          if (this.ratedetvar == 'RUS') {
            this.ratedetalert = "ratetier updated successfully";
          }
          else {
            this.ratedetalert = "can't able to create ratedetails";
          }
        });
    }
  }


  public ratedettabl = [];
  public roomtyp = [];
  public ratetier1;
  public roomidd = [];
  public rateheadbind = [];
  public ratedetbind = [];
  editblock: any = {};
  ratecodedis = true;
  public rate_tier_one = [];
  public rate_tier_two = [];
  public rate_tier_three = [];
  public rate_tier_four = [];

  ngOnInit() {
    console.log(this.ncode);
    this.EditRevenuemanagement.ratecategorydropdown()
      .subscribe((resp: any) => {
        this.ratecat = resp.Return;
      });
    this.EditRevenuemanagement.databindvalues()
      .subscribe((resp: any) => {
        console.log("consoleeeeeeeeeeeeeeeee" + this.session.retrieve("ratecodenav"))
        if (this.session.retrieve("ratecodenav") == "New") {
          this.edit_data_bind = [];
          this.ratecodedis = false;

        } else {
          this.edit_data_bind = resp.Rate_header[0];
          this.price = resp.Rate_header[0];

          this.editblock.ratecodedrop = this.edit_data_bind.rate_code;
          this.editblock.ratecode = this.edit_data_bind.rate_code;

          this.editblock.descrp = this.edit_data_bind.rate_description;
          this.editblock.beginselldate = this.edit_data_bind.begin_sell_date;
          this.editblock.endselldate = this.edit_data_bind.end_sell_date;
          this.editblock.ratecategoryid = this.edit_data_bind.ratecategory_id;
          this.editblock.market_id = this.edit_data_bind.market_id;
          this.editblock.source_id = this.edit_data_bind.source_id;
          this.editblock.Minimum_stay_through = this.edit_data_bind.min_stay;
          this.editblock.Maximum_stay_through = this.edit_data_bind.max_stay;
          this.editblock.Minimum_Advance_Booking = this.edit_data_bind.min_advance_book;
          this.editblock.Minimum_Occupancy = this.edit_data_bind.max_occupancy;
          this.editblock.Maximum_Advance_Booking = this.edit_data_bind.max_advance_book;
          this.editblock.Maximum_Occupancy = this.edit_data_bind.min_occupancy;

          this.editblock.Negotiated = this.edit_data_bind.negotiated;
          this.editblock.Rate = this.edit_data_bind.print_rate;
          this.editblock.Membership = this.edit_data_bind.membership;
          this.editblock.discount = this.edit_data_bind.discount;
          this.editblock.Day = this.edit_data_bind.day_use;
          this.editblock.Complimentary = this.edit_data_bind.complimentary;
          this.editblock.House = this.edit_data_bind.house_use;
          this.editblock.Suppress = this.edit_data_bind.suppress_rate;
          this.editblock.Type = this.edit_data_bind.day_type;
          this.editblock.Package = this.edit_data_bind.package;




          this.edit_data_bind = resp.Rate_header_room_types[0];
          this.editblock.roomtype = this.edit_data_bind.room_type;

          this.edit_data_bind = resp.Rate_header_packages[0];
          this.editblock.type = this.edit_data_bind.package_code;



        }

      });

    this.EditRevenuemanagement.ratecodedropdown()
      .subscribe((resp: any) => {
        this.price = resp.Rate_header;
        //this.prc=resp.Return;
      });

    this.EditRevenuemanagement.marketdropdown()
      .subscribe((resp: any) => {
        this.shop = resp.Return;
      });

    this.EditRevenuemanagement.sourcedropdown()
      .subscribe((resp: any) => {
        this.src = resp.Return;
      });

    this.EditRevenuemanagement.currencydropdown()
      .subscribe((resp: any) => {
        this.money = resp.Return;
      });

    this.EditRevenuemanagement.roomtypesdropdown()
      .subscribe((resp: any) => {
        this.room = resp.ReturnValue;
      });

    this.EditRevenuemanagement.revenuepackages()
      .subscribe((resp: any) => {
        this.revenueroom = resp.Return;
      });


    this.EditRevenuemanagement.seasoncode()
      .subscribe((resp: any) => {
        this.arryses = resp.Return;
      });

    // this.EditRevenuemanagement.getallvalues()
    //  .subscribe((resp: any) => {
    //   this.ratedettabl=resp.Rate_details;
    //   this.roomtyp=resp.room_types;
    //   console.log(this.roomtyp);

    // });
    this.EditRevenuemanagement.getallvalues()
      .subscribe((resp: any) => {
        this.ratedettabl = resp.Rate_details;
       
        //this.ratedettabl = resp.room_types[0];
        //this.ratedettabl = resp.room_types;
        console.log("oooooooooooooooo" + this.ratedettabl);

      });

    this.EditRevenuemanagement.allvalues()
      .subscribe((resp: any) => {
        this.rateheadbind = resp.Rate_header;
        this.ratedetbind = resp.Rate_details;
        console.log("return values", this.rateheadbind, this.ratedetbind)
      });
  }

  onSelect(val) {
    // val = val.toLowerCase();
    // val = val.toLowerCase();
    console.log(val);
    if (val == "0") {
      this.ncode = this.negotiatecode;
    }
    else {
      this.ncode = this.negotiatecode.filter(x => x.ratecode_id == val)
    }
  }


  ratecodeid = [];
  selectindex = null;
  edbut = true;
  delbut = true;
  //select values from table on click
  selectMembers(details, index) {
    this.edbut = false;
    this.delbut = false;
    this.selectindex = index;
    this.ratecodeid = details.negotiated_code_id;
    console.log("ratecode id for delete", this.ratecodeid);
  }

  //ratedetails table selection
  ratedetail: any = {};
  public edit_data_binding: any = [];
  public edit_data_bind: any = [];
  ratedetidvar = [];
  room_types = [];
  deleteids = [];
  roomsidrate = [];
  packagesids = [];
  selectindexx = null
  selectMembers1(detailss, indexx) {
    if (this.session.retrieve("ratecodenav") == "New") {
      this.edit_data_bind = {};
    }
    else {
      this.editratedetaills.seasoncod = detailss.season_code;
      this.editratedetaills.start_date = detailss.start_date;
      this.editratedetaills.end_date = detailss.end_date;
      this.editratedetaills.mon = detailss.mon;
      this.editratedetaills.tue = detailss.tue;
      this.editratedetaills.wed = detailss.wed;
      this.editratedetaills.thu = detailss.thu;
      this.editratedetaills.fri = detailss.fri;
      this.editratedetaills.sat = detailss.sat;
      this.editratedetaills.sun = detailss.sun;
      this.editratedetaills.one_adult_amount = detailss.one_adult_amount;
      this.editratedetaills.two_adult_amount = detailss.two_adult_amount;
      this.editratedetaills.three_adult_amount = detailss.three_adult_amount;
      this.editratedetaills.four_adult_amount = detailss.four_adult_amount;
      this.editratedetaills.extra_adult_amount = detailss.extra_adult_amount;
      this.editratedetaills.one_child_amount = detailss.one_child_amount;
      this.editratedetaills.two_child_amount = detailss.two_child_amount;
      this.editratedetaills.extra_child_amount = detailss.extra_child_amount;
      this.editratedetaills.packdet = detailss.packages_id;
      // this.editratedetaills.roomtypedet = detailss.rooms_id;
      console.log("ratecodeiddddddddddddddd" + JSON.stringify(this.editratedetaills));
    }

    this.selectindexx = indexx;
    this.deleteids = detailss.rate_details_id;
    this.roomsidrate = detailss.rooms_id;
    this.packagesids = detailss.packages_id;
    this.ratedetail.ratedetailid = detailss.rate_details_id;
    this.ratedetail.roomsid = detailss.rooms_id;
    this.ratedetail.packageid = detailss.packages_id;
    this.ratedetail.ratedaysid = detailss.rate_days_id;
    this.ratedetail.ratetierid = detailss.rate_tier_id;

    // this.session.store("ratedaysid",detailss.rate_days_id);  
    // this.session.store("roomsid",detailss.rooms_id);  
    // this.session.store("packagesid",detailss.packages_id);  
    //this.session.store("ratetierid",detailss.rate_tier_id);  

    console.log("daysiddddddddddddd", this.ratedetail.ratedaysid, detailss.rooms_id, detailss.packages_id, detailss.rate_days_id);

  }

  // delete rate details
  delratdet: any;
  delratalert: any;
  ratdetfun() {

    this.EditRevenuemanagement.deleteratedet(this.deleteids)
      .subscribe((resp: any) => {
        this.delratdet = resp.ReturnCode;
        console.log(this.delratdet);
        if (this.delratdet == 'RDS') {
          this.delratalert = "RateTier deleted successfully";
        }
        else {
          this.delratalert = "can't able to delete Tier";
        }

      });
    this.EditRevenuemanagement.getallvalues()
      .subscribe((resp: any) => {
        console.log("select ratedetailssssssssss", this.ratedettabl)
        this.ratedettabl = resp.Rate_details;
        //this.ratedettabll = resp.Return;
        this.room_types = resp.room_types;

        this.roomtyp = resp.room_types;
        console.log("select ratedetails", this.ratedettabl, this.roomtyp)
        console.log("select ratedetailssssssssss", this.ratedettabl, this.room_types)
      });
  }

  // toggletab(tabval){
  //   console.log(tabval);

  // }

  //selecting values from multiple checkboxes in roomtype(ratedetails)
  selected2 = [];
  selected_id2 = [];
  selected_type2 = [];
  idx2: any;
  public rmid2: any;
  public rmtype2: any;
  exist2(item) {
    this.selected2.indexOf(item) > -1;
  }


  toggleSelection2(item) {
    this.idx2 = this.selected2.indexOf(item);
    // this.room_type += item.type
    console.log("string", item.type)
    if (this.idx2 > -1) {
      this.selected2.splice(this.idx2, 1);
      this.selected_id2.splice(this.idx2, 1);
      this.selected_type2.splice(this.idx2, 1);

    }
    else {
      this.selected2.push(item);
      this.selected_id2.push(item.id);
      this.selected_type2.push(item.type);

    }
    this.rmtype2 = this.selected_type2.toString();
    this.rmid2 = this.selected_id2;
    console.log("selected id", this.rmid2);
    console.log("selected type", this.rmtype2.toString());

  }
  selected3 = [];
  selected_id3 = [];
  selected_type3 = [];
  idx3: any;
  public rmid3: any;
  public rmtype3: any;
  exist3(item) {
    this.selected2.indexOf(item) > -1;
  }


  toggleSelection3(item) {
    this.idx3 = this.selected3.indexOf(item);
    // this.room_type += item.type
    console.log("string", item.type)
    if (this.idx3 > -1) {
      this.selected3.splice(this.idx3, 1);
      this.selected_id3.splice(this.idx3, 1);
      this.selected_type3.splice(this.idx3, 1);

    }
    else {
      this.selected3.push(item);
      this.selected_id3.push(item.id);
      this.selected_type3.push(item.type);

    }
    this.rmtype3 = this.selected_type3.toString();
    this.rmid3 = this.selected_id3;
    console.log("selected id", this.rmid3);
    console.log("selected type", this.rmtype3.toString());

  }
}

// rate tier  update function 

