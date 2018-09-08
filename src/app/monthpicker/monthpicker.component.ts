import { Component, OnInit } from '@angular/core';
import {MonthComponent} from '../month/month.component';

@Component({
  selector: 'app-monthpicker',
  template: `<div>

  <div >      
  <select class="form-control"  style="width:80px;" required>
          <option  *ngFor="let p of months"  [selected]="mm === p.val ">{{p.val}}</option>    
  </select>
  </div>
  </div>`,
  styleUrls: ['./monthpicker.component.css']
})
export class MonthpickerComponent implements OnInit {

  constructor() { }
  private mm : any ;
  months = [
          { val: '01' , name: 'Jan' },
          { val: '02' , name: 'Feb' },
          { val: '03' ,name: 'Mar' },
          { val: '04' , name: 'Apr' },
          { val: '05' , name: 'May' },
          { val: '06' , name: 'Jun' },
          { val: '07' , name: 'Jul' },
          { val: '08' , name: 'Aug' },
          { val: '09' , name: 'Sep' },
          { val: '10' , name: 'Oct' },
          { val: '11' , name: 'Nov' },
          { val: '12' , name: 'Dec' }
      ];
  ngOnInit() {
    this.getMonth(); 

  }
  getMonth(){
    var today = new Date();
    this.mm = today.getMonth()+1;     
    if(this.mm<10) {
    this.mm='0'+this.mm        
        }
    }

}
