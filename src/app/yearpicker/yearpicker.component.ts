import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yearpicker',
  template: `<div>

  <div>      
  <select class="form-control" style="width:100px;" required>
          <option value="" disabled selected style="display: none;">Select your option</option>
          <option  *ngFor="let y of years"  [selected]="yy === y ">{{y}}</option>    
  </select>
  </div>

  </div>`,
  styleUrls: ['./yearpicker.component.css']
})
export class YearpickerComponent implements OnInit {

 
  constructor() { }
  private years: number[] =[];
  private yy : number;
  ngOnInit() {
    this.getYear();
  }
  getYear(){
    var today = new Date();
    this.yy = today.getFullYear();        
    for(var i = (this.yy); i <= (this.yy+100); i++){
    this.years.push(i);}
}
}
