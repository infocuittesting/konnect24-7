import { Component, OnInit, Input } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule, NgForm, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { RevenuemanagementService } from "./revenuemanagement.service"
import { SessionStorageService } from "ngx-webstorage";
import * as moment from 'moment';


@Component({
  selector: 'app-revenuemanagement',
  templateUrl: './revenuemanagement.component.html',
  styleUrls: ['./revenuemanagement.component.css'],
  providers: [RevenuemanagementService]
})
export class RevenuemanagementComponent implements OnInit {


  public arryses = [];
  public ratecat = [];
  public prc = [];
  public price: any = [];
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
  constructor(public session: SessionStorageService, private RevenuemanagementService: RevenuemanagementService, private route: Router, private fb: FormBuilder) {
    this.negotiatecode = this.ncode;

  }


  funcat(roomtypelist) {
    console.log("roomdetailsssssssssssssss", roomtypelist);
    this.funct = roomtypelist.rate_class;
    console.log("function catttttttttttttt", this.funct);
  }


  user = {};
  cat_id: any;
  rateheadalert: any;
  public cond;

  rateheaderins(ratecode, input: any) {

    this.cond = this.session.retrieve("ratecodenav");

    console.log(this.cond);



    if (input.discount == true) {
      input.discount = "1";
      console.log("one")
    } else {
      input.discount = "0";
      console.log("zero")

    }
    if (input.Negotiated == true) {
      input.Negotiated = "1";
      console.log("one")
    } else {
      input.Negotiated = "0";
      console.log("zero")

    }
    if (input.Rate == true) {
      input.Rate = "1";
      console.log("one")
    } else {
      input.Rate = "0";
      console.log("zero")
    }
    if (input.Membership == true) {
      input.Membership = "1";
      console.log("one")
    } else {
      input.Membership = "0";
      console.log("zero")
    }
    if (input.Day == true) {
      input.Day = "1";
      console.log("one")
    } else {
      input.Day = "0";
      console.log("zero")
    }
    if (input.Complimentary == true) {
      input.Complimentary = "1";
      console.log("one")
    } else {
      input.Complimentary = "0";
      console.log("zero")
    }
    if (input.House == true) {
      input.House = "1";
      console.log("one")
    } else {
      input.House = "0";
      console.log("zero")
    }
    if (input.Suppress == true) {
      input.Suppress = "1";
      console.log("one")
    } else {
      input.Suppress = "0";
      console.log("zero")
    }

    if (input.Type == true) {
      input.Type = "1";
      console.log("one")
    } else {
      input.Type = "0";
      console.log("zero")
    }
    if (input.Package == true) {
      input.Package = "1";
      console.log("one")
    } else {
      input.Package = "0";
      console.log("zero")
    }
    if (this.cond == "New") {

      console.log('inputs from html' + JSON.stringify(input) + 'and rate code is' + ratecode);

      this.RevenuemanagementService.saverateheader(ratecode, this.cat_id, this.rmid, this.rmid1, input)
        .subscribe((resp: any) => {
          this.savehead = resp.ReturnCode;
          if (this.savehead == 'RIS') {
            this.rateheadalert = "rateheader created successfully";
                      }
          else {
            this.rateheadalert = "sorry,currently can't able to update";
          }


        });

      console.log(this.savehead);


    }//new ends
    if (this.cond == "Edit") {
      //do edit function webservice here 
      this.RevenuemanagementService.updaterateheader(ratecode, this.cat_id, this.rmid, this.rmid1, input)
        .subscribe((resp: any) => {
          this.savehead = resp.ReturnCode;
          if (this.savehead == 'RUS') {
            this.rateheadalert = "Rate code updated successfully";
          }
          else {
            this.rateheadalert = "sorry,currently can't able to update";
          }
        });
      //  this.session.clear("ratecodeedit")
    }


  }
  //rate header ends
  newnego(input) {
    console.log("from html", input);
    this.RevenuemanagementService.insertnewnego(input)
      .subscribe((resp: any) => {
        this.newnegovar = resp.ReturnCode;
        console.log("newnegotiated outputttttttttt", typeof (this.newnegovar), this.newnegovar);

        console.log("sucalert and fail", this.sucalert, this.failalert);
        if (this.newnegovar == 'RIS') {
          this.sucalert = "negotiated created successfully";
        }
        else {
          this.sucalert = "sorry,currently can't able to create negotiated rate";
        }
        this.RevenuemanagementService.NegotiatedRate()
          .subscribe((resp: any) => {
            this.ncode = resp.Return;
          });
      });


  }

  ratedetalert: any;
  ratedetins(ratecodedrop, user) {
    this.cond = this.session.retrieve("ratecodenav");
    console.log(this.cond);
    if (user.mon == true) {
      user.mon = "1";
      console.log("one")
    } else {
      user.mon = "0";
      console.log("zero")

    }
    if (user.tue == true) {
      user.tue = "1";
      console.log("one")
    } else {
      user.tue = "0";
      console.log("zero")

    }
    if (user.wed == true) {
      user.wed = "1";
      console.log("one")
    } else {
      user.wed = "0";
      console.log("zero")

    }
    if (user.thu == true) {
      user.thu = "1";
      console.log("one")
    } else {
      user.thu = "0";
      console.log("zero")

    }
    if (user.fri == true) {
      user.fri = "1";
      console.log("one")
    } else {
      user.fri = "0";
      console.log("zero")

    }
    if (user.sat == true) {
      user.sat = "1";
      console.log("one")
    } else {
      user.sat = "0";
      console.log("zero")

    }
    if (user.sun == true) {
      user.sun = "1";
      console.log("one")
    } else {
      user.sun = "0";
      console.log("zero")

    }
    console.log("insert rate detailssssssssssssssss", );

    console.log('*******RATE DETAILS*******' + JSON.stringify(user) + '****packages***' + this.rmid2 + '****roomtype***' + this.rmid3);
    if (this.cond == "New") {

      this.session.store("copypast", user.mon);
      this.session.store("copypast1", user.tue);

      this.RevenuemanagementService.insertratedetail(ratecodedrop, user, this.rmid2, this.rmid3)
        .subscribe((resp: any) => {
          this.ratedetvar = resp.ReturnCode;
          if (this.ratedetvar == 'RIS') {
            this.ratedetalert = "ratedetails created successfully";
            this.repeatflag = 2;
            console.log("Checking repeat array",JSON.stringify(this.repeat));
          }
          else {
            this.ratedetalert = "can't able to create ratedetails";
          }
        });
    }
    else {
      this.RevenuemanagementService.updateratedetail(this.ratedetail, user, this.rmid2, this.rmid3)
        .subscribe((resp: any) => {
          this.ratedetvar = resp.ReturnCode;
          if (this.ratedetvar == 'RUS') {
            this.ratedetalert = "ratedetails updated successfully";
          }
          else {
            this.ratedetalert = "can't able to create ratedetails";
          }
        });
    }


  }

  editvar: any;
  negoeditalert: any;
  // edit negotiated values
  editnego(bgsd) {
    this.RevenuemanagementService.editnego(bgsd, this.bgsd.rateecode)
      .subscribe((resp: any) => {
        this.editvar = resp.ReturnCode;
        if (this.editvar == 'RUS') {
          this.negoeditalert = "negotiated updated successfully";
        }
        else {
          this.negoeditalert = "can't able to update";
        }

      });

  }


  public ratedettabl = [];
  public roomtyp = [];
  public roomidd = [];
  public edit_data_bind: any = [];
  public cond_clear: any;
  falg4newEdit: any = false;
  editblock: any = {};
  editblockk: any = {};

  ratecodedis = true;
  edbutt = false;

  ngOnInit() {

    console.log(this.ncode);
    this.RevenuemanagementService.ratecategorydropdown()
      .subscribe((resp: any) => {
        this.ratecat = resp.Return;
      });


    this.RevenuemanagementService.databindvalues()
      .subscribe((resp: any) => {
        console.log("consoleeeeeeeeeeeeeeeee" + this.session.retrieve("ratecodenav"))
        if (this.session.retrieve("ratecodenav") == "New") {
          this.ratecodedis = false;
          this.edbutt = true;
          this.edit_data_bind = [];
        } else {
          this.edit_data_bind = resp.Rate_header[0];
          // this.price = resp.Rate_header[0];
          console.log("^^^^^^^^^^^^^^^^^^^^^^^" + JSON.stringify(this.edit_data_bind));
          // this.editblock.ratecodedropset =  this.edit_data_bind.rate_code;
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

          console.log("checkkkkkkkkk" + this.editblock.ratecode);



        }


      });

    this.RevenuemanagementService.ratecodedropdown()
      .subscribe((resp: any) => {
        this.price = resp.Rate_header;
        //this.prc = resp.Return;

        //this.price = resp.Rate_header[0];
        //this.editblockk.ratecodedropset =  this.price.rate_code;
        console.log("priceeeeeeeeeeeeeeeeeeeeeeeeeeeee", this.price)
      });

    this.RevenuemanagementService.marketdropdown()
      .subscribe((resp: any) => {
        this.shop = resp.Return;
      });

    this.RevenuemanagementService.sourcedropdown()
      .subscribe((resp: any) => {
        this.src = resp.Return;
      });

    this.RevenuemanagementService.currencydropdown()
      .subscribe((resp: any) => {
        this.money = resp.Return;
      });

    this.RevenuemanagementService.roomtypesdropdown()
      .subscribe((resp: any) => {
        this.room = resp.ReturnValue;
      });

    this.RevenuemanagementService.revenuepackages()
      .subscribe((resp: any) => {
        this.revenueroom = resp.Return;
      });


    this.RevenuemanagementService.seasoncode()
      .subscribe((resp: any) => {
        this.arryses = resp.Return;
      });

    this.RevenuemanagementService.NegotiatedRate()
      .subscribe((resp: any) => {
        this.ncode = resp.Return;
        this.negotiatecode = resp.Return;
      });


    this.RevenuemanagementService.getallvalues()
      .subscribe((resp: any) => {
        this.ratedettabl = resp.Rate_details;
        //this.ratedettabl = resp.room_types[0];
        //this.ratedettabl = resp.room_types;
        console.log("oooooooooooooooo" + this.ratedettabl);

      });
  }

  onSelect(val) {
    console.log(val);
    this.ncode = this.negotiatecode.filter(x => x.rate_code == val)
  }
  public repeat: any = {};
  public repeatflag = 1;

  repeatingpaste(){
    this.editratedetail = this.repeat;
    console.log("PASTE BUTTON",JSON.stringify(this.editratedetail));
  }
  repeating(param) {
    if (this.repeatflag == 1) {
      this.repeat = param;
      console.log("REPEAT", JSON.stringify(this.repeat));
      this.repeatflag = 2;
    }
    else if (this.repeatflag == 2) {
      this.editratedetail = this.repeat;
      console.log("PASTING REPEAT VALUES", JSON.stringify(this.editratedetail));

      this.editratedetail.seasoncod = this.repeat.season_code;
      this.editratedetail.start_date = this.repeat.start_date;
      this.editratedetail.end_date = this.repeat.end_date;
      this.editratedetail.mon = this.repeat.mon;
      this.editratedetail.tue = this.repeat.tue;
      this.editratedetail.wed = this.repeat.wed;
      this.editratedetail.thu = this.repeat.thu;
      this.editratedetail.fri = this.repeat.fri;
      this.editratedetail.sat = this.repeat.sat;
      this.editratedetail.sun = this.repeat.sun;
      this.editratedetail.one_adult_amount = this.repeat.one_adult_amount;
      this.editratedetail.two_adult_amount = this.repeat.two_adult_amount;
      this.editratedetail.three_adult_amount = this.repeat.three_adult_amount;
      this.editratedetail.four_adult_amount = this.repeat.four_adult_amount;
      this.editratedetail.extra_adult_amount = this.repeat.extra_adult_amount;
      this.editratedetail.one_child_amount = this.repeat.one_child_amount;
      this.editratedetail.two_child_amount = this.repeat.two_child_amount;
      this.editratedetail.extra_child_amount = this.repeat.extra_child_amount;


      this.editratedetail.packdet = this.repeat.packages_id;
      this.editratedetail.roomtypedet = this.repeat.room_type;
      // this.session.retrieve("copypast") == this.editratedetail.mon;
      // this.session.retrieve("copypast1") == this.editratedetail.tue;
      // console.log("sesioooooooooooooo",this.editratedetail.mon)
    }
  }

  clear() {
    this.RevenuemanagementService.NegotiatedRate()
      .subscribe((resp: any) => {
        this.ncode = resp.Return;
        console.log('*********', JSON.stringify(this.negotiatecode));
      });
  }

  ratecodeid: any = {};
  selectindex = null;
  edbut = true;
  delbut = true;
  bgsd: any = {};
  //select values from table on click
  selectMembers(details, index) {

    this.edbut = false;
    this.delbut = false;
    this.selectindex = index;
    this.bgsd.rateecode = details.ratecode_id;
    this.bgsd.beginn = details.negotiate_begin_sell_date;
    this.bgsd.endsell = details.negotiate_end_sell_date;
    //this.ratecodeid = details.negotiate_end_sell_date;


    console.log("ratecode id for delete", this.bgsd.rateecode, this.bgsd.beginn, this.bgsd.endsell);


  }

  //ratedetails table selection  

  ratedetail: any = {};
  ratedetidvar = [];
  strtdt = [];
  selectindexx = null
  public edit_data_binding: any = [];
  public deleteids = [];
  editratedetail: any = {};
  selectMembers1(detailss, indexx) {
    if (this.session.retrieve("ratecodenav") == "New") {
      this.edit_data_bind = {};
    }
    else {

      this.editratedetail.seasoncod = detailss.season_code;
      this.editratedetail.start_date = detailss.start_date;
      this.editratedetail.end_date = detailss.end_date;
      this.editratedetail.mon = detailss.mon;
      this.editratedetail.tue = detailss.tue;
      this.editratedetail.wed = detailss.wed;
      this.editratedetail.thu = detailss.thu;
      this.editratedetail.fri = detailss.fri;
      this.editratedetail.sat = detailss.sat;
      this.editratedetail.sun = detailss.sun;
      this.editratedetail.one_adult_amount = detailss.one_adult_amount;
      this.editratedetail.two_adult_amount = detailss.two_adult_amount;
      this.editratedetail.three_adult_amount = detailss.three_adult_amount;
      this.editratedetail.four_adult_amount = detailss.four_adult_amount;
      this.editratedetail.extra_adult_amount = detailss.extra_adult_amount;
      this.editratedetail.one_child_amount = detailss.one_child_amount;
      this.editratedetail.two_child_amount = detailss.two_child_amount;
      this.editratedetail.extra_child_amount = detailss.extra_child_amount;


      this.editratedetail.packdet = detailss.packages_id;
      this.editratedetail.roomtypedet = detailss.room_type;
      console.log("ratecodeiddddddddddddddd" + JSON.stringify(this.editratedetail));
    }

    this.selectindexx = indexx;
    this.deleteids = detailss.rate_details_id;
    //this.packageidset=detailss.packages_id;
    this.ratedetail.ratedetailid = detailss.rate_details_id;
    this.ratedetail.roomsid = detailss.rooms_id;
    this.ratedetail.packageid = detailss.packages_id;
    this.ratedetail.ratedaysid = detailss.rate_days_id;
    this.ratedetail.ratetierid = detailss.rate_tier_id;
    console.log("tettttttttttttttttt" + this.ratedetail.ratedetailid, this.ratedetail.roomsid, this.ratedetail.packageid, this.ratedetail.ratedaysid, this.ratedetail.ratetierid)
    console.log("detailsiddddddd" + this.deleteids)
    // if (this.session.retrieve("ratecodenav") == "New") {   
    //   this.edit_data_binding = [];
    // } else {
    // this.edit_data_binding = resp.Rate_details[0];
    //  this.edit_data_binding.season_code =  this.edit_data_binding.season_code;
    //  console.log("kkkkkkkkkkkkkkkkk",this.edit_data_binding)      //  this.edit_data_binding.season_code =  this.edit_data_binding.season_code;
    //  console.log("kkkkkkkkkkkkkkkkk",this.edit_data_binding)
    // }


    // this.session.store("ratedaysid",detailss.rate_days_id);  
    // this.session.store("roomsid",detailss.rooms_id);  
    // this.session.store("packagesid",detailss.packages_id);  
    //this.session.store("ratetierid",detailss.rate_tier_id);  


  }


  delret: any;
  negodelalert: any;
  //delete negotiated values
  negodel() {
    console.log(this.ratecodeid)
    this.RevenuemanagementService.deletenego(this.ratecodeid)
      .subscribe((resp: any) => {
        this.delret = resp.ReturnCode;
        console.log(this.delret);
        if (this.delret == 'RDS') {
          this.negodelalert = "negotiated deleted successfully";
        }
        else {
          this.negodelalert = "can't able to delete negotiated";
        }

        this.RevenuemanagementService.NegotiatedRate()
          .subscribe((resp: any) => {
            this.ncode = resp.Return;
            console.log('*********', JSON.stringify(this.negotiatecode));
          });
      });


  }

  // delete rate details
  delratdet: any;
  delratalert: any;
  ratedettabll = [];
  room_types = [];
  ratdetfun() {
    this.RevenuemanagementService.deleteratedet(this.deleteids)
      .subscribe((resp: any) => {
        this.delratdet = resp.ReturnCode;
        console.log(this.delratdet);
        if (this.delratdet == 'RDS') {
          this.delratalert = "RateDetails deleted successfully";
        }
        else {
          this.delratalert = "can't able to delete negotiated";
        }

      });


    this.RevenuemanagementService.getallvalues()
      .subscribe((resp: any) => {
        console.log("select ratedetailssssssssss", this.ratedettabll, this.room_types)
        this.ratedettabl = resp.Rate_details;
        //this.ratedettabll = resp.Return;
        this.room_types = resp.room_types;

        this.roomtyp = resp.room_types;
        console.log("select ratedetails", this.ratedettabl, this.roomtyp)
        console.log("select ratedetailssssssssss", this.ratedettabll, this.room_types)
      });
  }

  // toggletab(tabval){
  //   console.log(tabval);

  // }

  //selecting values from multiple checkboxes in roomtype(rateheader)
  selected = [];
  selected_id = [];
  selected_type = [];
  idx: any;
  public rmid: any;
  public rmtype: any;
  exist(item) {
    this.selected.indexOf(item) > -1;
  }


  toggleSelection(item) {
    this.idx = this.selected.indexOf(item);
    // this.room_type += item.type
    console.log("string", item.type)
    if (this.idx > -1) {
      this.selected.splice(this.idx, 1);
      this.selected_id.splice(this.idx, 1);
      this.selected_type.splice(this.idx, 1);

    }
    else {
      this.selected.push(item);
      this.selected_id.push(item.id);
      this.selected_type.push(item.type);

    }
    this.rmtype = this.selected_type.toString();
    this.rmid = this.selected_id;
    console.log("selected id", this.rmid);
    console.log("selected type", this.rmtype.toString());

  }

  //selecting values from multiple checkboxes in package(rateheader)
  selected1 = [];
  selected_id1 = [];
  selected_code = [];
  idx1: any;
  public rmid1: any;
  public rmcode: any;
  exist1(item) {
    this.selected1.indexOf(item) > -1;
  }


  toggleSelection1(item) {
    this.idx1 = this.selected1.indexOf(item);
    // this.room_type += item.type
    console.log("string", item.type)
    if (this.idx1 > -1) {
      this.selected1.splice(this.idx1, 1);
      this.selected_id1.splice(this.idx1, 1);
      this.selected_code.splice(this.idx1, 1);

    }
    else {
      this.selected1.push(item);
      this.selected_id1.push(item.package_code_id);
      this.selected_code.push(item.package_code);

    }
    this.rmcode = this.selected_code.toString();
    this.rmid1 = this.selected_id1;
    console.log("selected id", this.rmid1);
    console.log("selected code", this.rmcode.toString());

  }


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

  //selecting values from multiple checkboxes in package(ratedetails)
  selected3 = [];
  selected_id3 = [];
  selected_code3 = [];
  idx3: any;
  public rmid3: any;
  public rmcode3: any;
  exist3(item) {
    this.selected3.indexOf(item) > -1;
  }


  toggleSelection3(item) {
    this.idx3 = this.selected3.indexOf(item);
    // this.room_type += item.type
    console.log("string", item.type)
    if (this.idx3 > -1) {
      this.selected3.splice(this.idx3, 1);
      this.selected_id3.splice(this.idx3, 1);
      this.selected_code3.splice(this.idx3, 1);

    }
    else {
      this.selected3.push(item);
      this.selected_id3.push(item.package_code_id);
      this.selected_code3.push(item.package_code);

    }
    this.rmcode3 = this.selected_code3.toString();
    this.rmid3 = this.selected_id3;
    console.log("selected id", this.rmid3);
    console.log("selected code", this.rmcode3.toString());

  }

}
