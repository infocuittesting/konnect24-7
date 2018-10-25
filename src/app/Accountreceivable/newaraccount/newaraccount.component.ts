import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newaraccount',
  templateUrl: './newaraccount.component.html',
  styleUrls: ['./newaraccount.component.css']
})
export class NewaraccountComponent implements OnInit {

  constructor() { }
  mini = false;
  onerecord = false;
  showhiderestriction(param){
    // if(param == "all"){
    // this.mini = false;
    // }else{
    // this.mini = true;
    // }
    if(param == "onerecord"){
      this.onerecord = true;
      this.mini = true;
    }
    else{
      this.onerecord = false;
      this.mini = false;
    }
  }
  ngOnInit() {
  }

}
