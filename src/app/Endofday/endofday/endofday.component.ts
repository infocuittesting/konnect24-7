import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endofday',
  templateUrl: './endofday.component.html',
  styleUrls: ['./endofday.component.css']
})
export class EndofdayComponent implements OnInit {
  public resv = false;
  public profile =false;
  public FrontDesk =false;
  public RoomManagement=false;
  public Cashiering=false;
  public Printfinalrate=false;
  constructor() { }

  ngOnInit() {
  }

  showhiderestriction(param){

    if (param == "Reservation") {
      this.resv = true;
    }
    else {
      this.resv = false;
     
    }
    if (param == "Profile") {
      this.profile = true;
    }
    else {
      this.profile = false;
     
    }
    if (param == "FrontDesk") {
      this.FrontDesk = true;
    }
    else {
      this.FrontDesk = false;
     
    }
    if (param == "RoomManagement") {
      this.RoomManagement = true;
    }
    else {
      this.RoomManagement = false;
     
    }
    if (param == "Cashiering") {
      this.Cashiering = true;
    }
    else {
      this.Cashiering = false;
     
    }
    if (param == "Printfinalrate") {
      this.Printfinalrate = true;
    }
    else {
      this.Printfinalrate = false;
     
    }
  }

}
