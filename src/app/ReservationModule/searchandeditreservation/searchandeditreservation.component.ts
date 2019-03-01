import { Component, OnInit, Input } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { NgClass } from "@angular/common";
import { SearchandeditreservationService } from './searchandeditreservation.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-searchandeditreservation',
  templateUrl: './searchandeditreservation.component.html',
  styleUrls: ['./searchandeditreservation.component.css'],
  providers: [SearchandeditreservationService]
})
export class SearchandeditreservationComponent implements OnInit {

  public searchandedit = [];
  public arry = [];
  public privilege;
  public resof: any;
  public showMore = false;
  constructor(private pService: SearchandeditreservationService, private route: Router, public session: SessionStorageService) { }

  ngOnInit() {
    if (this.session.retrieve("Blockresv") == "block_resv_edit") {
      this.resof = this.session.retrieve('res_unique_id')
    }
    else {
      this.session.clear('Blockresv')
    }
    this.pService.searchedit()
      .subscribe((resp: any) => {
        this.searchandedit = resp.ReturnValue;
      });

    this.pService.reasondropdown()
      .subscribe((resp: any) => {
        this.arry = resp.ReturnValue;
      });

  }

  ngOnDestroy() {
    this.session.clear('Blockresv')
  }

  //show more
  showMoreBut() {
    this.showMore = true;
  }
  //show less
  showLessBut() {
    this.showMore = false;
  }

  //res cancel
  cans = {};
  public user3;
  public cansl;
  subcancel(inputt) {
    this.pService.cancel(inputt,this.uniq_id)
      .subscribe((resp: any) => {
        this.user3 = resp.ReturnCode;
        if (this.user3 == "RIS") {
          this.user3 = "The Reservation is cancelled for " + this.name;
          this.cansl = "The Cancellation Number is " + resp.cancellationNumber;
          this.pService.searchedit()
            .subscribe((resp: any) => {
              this.searchandedit = resp.ReturnValue;
            });
        }
        this.name = "";
        this.cans = "";
      },
      );
  }
  public queryString;
  //clear
  clearinput(param) {
    this.queryString = "";
    param.reset();
    this.pService.searchedit()
      .subscribe((resp: any) => {
        this.searchandedit = resp.ReturnValue;
      });
  }



  //Reinstate service 
  public reinstates;
  public reinreturn;
  subrein() {
    let body = {
      "res_id": this.session.retrieve("id"),
      "res_unique_id": this.uniq_id,
      "RES_Room_Type": this.session.retrieve("RoomType"),
      "RES_Arrival": this.session.retrieve("arrival"),
      "RES_Depature": this.session.retrieve("departure"),
      "RES_Number_Of_Rooms": this.session.retrieve("res_number_of_rooms")
    };
    this.pService.Reinstate(body)
      .subscribe((resp: any) => {
        this.reinreturn = resp.ReturnCode;
        if (this.reinreturn == "RIS") {
          this.reinreturn = " The Cancelled Reservation is Reinstated for " + this.name;
          this.reinstates = "The Confirmation Number is " + resp.ConfirmationNumber;
          this.pService.searchedit()
            .subscribe((resp: any) => {
              this.searchandedit = resp.ReturnValue;
            });
        }
        this.name = " ";
      },
      );
  }


  //Accept Waitlist
  public AcceptState;
  public Acceptreturn;
  subaccp() {
    let body = {
      "Res_id": this.session.retrieve("id"),
      "pf_id": this.session.retrieve("id1"),
      "Res_unique_id": this.session.retrieve("uniq"),
      "RES_Arrival": this.session.retrieve("arrival"),
      "RES_Number_Of_Rooms": this.session.retrieve("res_number_of_rooms").toString(),
      "RES_Depature": this.session.retrieve("departure"),
      "RES_Room_Type": this.session.retrieve("RoomType")
    };
    this.pService.AcceptWaitlist(body)
      .subscribe((acceptwaitlist: any) => {
        this.AcceptState = acceptwaitlist.ConfirmationNumber;
        this.Acceptreturn = acceptwaitlist.ReturnCode;
        if (this.Acceptreturn == "RIS") {
          this.Acceptreturn = "The Waitlist is Moved to Reservation for " + this.name;
          this.AcceptState = "The Reservation Number is " + acceptwaitlist.ConfirmationNumber;
          this.pService.searchedit()
            .subscribe((resp: any) => {
              this.searchandedit = resp.ReturnValue;
            });
        }
        this.name = "";
      },
      );
    this.Acceptreturn = "The Waitlist is Not Accepted Room is Not Available";
  }



  // between dates arrival
  filterDatefrmList(startDate, endDate) {
    if (startDate != null && endDate != null) {
      let selectedMembers = this.searchandedit.filter(
        m => new Date(m.res_arrival) >= new Date(startDate) && new Date(m.res_arrival) <= new Date(endDate)
      );
      console.log(selectedMembers);
      this.searchandedit = selectedMembers;
    } else {
      this.searchandedit = this.searchandedit;
    }

  }

  public rein = true;
  public cale = true;
  public wait = true;
  public edit = true;
  public new = false;
  public profile = false;
  public option = true;
  public reinstate;
  public resid; resedit;
  public name;
  public showhide = false;
  public showhidepreferences = false;
  public showhidenotes = false;
  public showfix = false;
  public showhidereser = false;
  public pristatus;
  public fixrate: any[];
  public notes;
  public preferences;
  public pfid;
  public duedatevali; privilegess: any;
  public selectindex = null; due;uniq_id:any;

  selectMembersEdit(details, index) {
    console.log(details)
    this.selectindex = index;
    this.reinstate = details.res_guest_status;
    this.resid = details.res_id;
    this.uniq_id=details.res_unique_id;
    this.pfid = details.pf_id;

    //privilleges Glow
    this.pService.privileges(this.resid)
      .subscribe((resp: any) => {
        this.privilege = resp.ReturnValue;
        this.pristatus = resp.Status;
        if (this.pristatus == "Success") {
          if (this.privilege.length != 0) {
            this.showhide = true;
          } else if (this.privilege.length == 0) {
            this.showhide = false;
          }
        }

      });


    //Duedate Glow
    this.pService.duedate(this.resid,this.uniq_id)
      .subscribe((resp: any) => {
        this.due = resp.ReturnCode;
        if (this.due == "RV") {
          this.showhidereser = true;
          this.duedatevali = "Deposit";
        } else if (this.due == "RIV") {
          this.showhidereser = true;
          this.duedatevali = "Cancel Deposit";
        } else
          if (this.due == "NOR") {
            this.showhidereser = false;
          }

      });

    //Notes Glow
    this.pService.Notes(this.pfid)
      .subscribe((resp: any) => {
        this.notes = resp.ReturnValue;
        this.pristatus = resp.Status;
        if (this.pristatus == "Success") {
          if (this.notes.length != 0) {
            this.showhidenotes = true;
          } else if (this.notes.length == 0) {
            this.showhidenotes = false;
          }
        }

      });

    //Prefernece Glow
    this.pService.Preferences(this.pfid)
      .subscribe((resp: any) => {
        this.preferences = resp.ReturnValue;
        this.pristatus = resp.Status;
        if (this.pristatus == "Success") {
          if (this.preferences.length != 0) {
            this.showhidepreferences = true;
          } else if (this.preferences.length == 0) {
            this.showhidepreferences = false;
          }
        }
      });

    //fixedrate to glow
    this.pService.Fixed(this.resid)
      .subscribe((resp: any) => {
        this.fixrate = resp.ReturnValue;
        this.pristatus = resp.Status;
        if (this.pristatus == "Success") {
          if (this.fixrate.length != 0) {
            this.showfix = true;
          } else if (this.fixrate.length == 0) {
            this.showfix = false;
          }
        }

      });

    this.name = details.pf_firstname;
    if (this.resid == details.res_id) {
      this.new = true;
      this.profile = true;
      this.option = false;
      this.edit = false;
    } else {
      this.new = false;
      this.profile = false;
      this.option = true;
      this.edit = true;
    }
    if (this.reinstate == "cancel") {
      this.rein = false;
    } else {
      this.rein = true;
    }
    if (this.reinstate == "reserved") {
      console.log(this.reinstate);
      this.cale = false;
    } else {
      this.cale = true;
    }
    if (this.reinstate == "waitlist") {
      console.log(this.reinstate);
      this.wait = false;
    } else {
      this.wait = true;
    }
    this.session.store("id", details.res_id.toString());
    this.session.store("id1", details.pf_id.toString());
    this.session.store("name", details.pf_firstname);
    this.session.store("arrival", details.res_arrival);
    this.session.store("departure", details.res_depature);
    this.session.store("nights", details.res_nights);
    this.session.store("status", details.res_guest_status);
    this.session.store("Room", details.res_room);
    this.session.store("Adults", details.res_adults);
    this.session.store("child", details.res_child);
    this.session.store("RoomType", details.res_room_type);
    this.session.store("restype", details.res_res_type);
    this.session.store("rate", details.res_rate);
    this.session.store("conf", details.res_confnumber);
    this.session.store("uniq", details.res_unique_id.toString());
    this.session.store("market", details.res_market);
    this.session.store("Ratecode", details.res_rate_code);
    this.session.store("source", details.res_source);
    this.session.store("percentage", details.res_disc_perc);
    this.session.store("Discreasons", details.res_disc_reason);
    this.session.store("DiscAmount", details.res_disc_amount);
    this.session.store("Currency", details.res_currency);
    this.session.store("res_number_of_rooms", details.res_number_of_rooms);
    this.resedit = details;


  }

  // CAncel Due Date
  cancledue() {
    this.pService.duecancel(this.resid,this.uniq_id)
      .subscribe((resp: any) => {
        resp.ReturnValue;
      })
  }

  resevedit(param) {
    if (param == "resevedit") {
      this.session.store("reservationedit", param)
      this.session.store("fname", this.resedit.pf_firstname);
      this.session.store("lastname", this.resedit.pf_lastname);
      this.session.store("language", this.resedit.pf_language);
      this.session.store("mobileno", this.resedit.pf_mobileno);
      this.session.store("title", this.resedit.pf_title);
      this.session.store("individual_country", this.resedit.pf_individual_country);
      this.session.store("individual_vip", this.resedit.pf_individual_vip);
      this.session.store("editval", this.resedit);
      this.session.store("res_child", this.resedit.res_child);
      this.session.store("resource", this.resedit.res_source)
      console.log("my testt", this.session.retrieve("editval"));
      this.route.navigate(['reservation/']);
    }

  }


}

