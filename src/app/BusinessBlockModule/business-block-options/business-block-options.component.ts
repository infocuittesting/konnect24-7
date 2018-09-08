import { Component, OnInit } from '@angular/core';
// import {DatePicker} from './datepicker';
import {BusinessBlockOptionsService} from './business-block-options.service'
// import { MomentModule } from 'angular2-moment';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import * as moment from 'moment';



@Component({
  selector: 'app-business-block-options',
  templateUrl: './business-block-options.component.html',
  styleUrls: ['./business-block-options.component.css'],
  providers:[BusinessBlockOptionsService]

})
export class BusinessBlockOptionsComponent implements OnInit {
  


  public Id = this.session.retrieve("blockid");
  public Name = this.session.retrieve("blockname");
  public cancelnumber;
  public notenumber;
 public notes={};
 public cancel={};
 public return:any =[];
 public cancelmessage:any=[];
 public tableschanges;
 public roomtype=[];
 public reason=[];
 public now;
  constructor(private blockservice:BusinessBlockOptionsService,private route:Router,public session:SessionStorageService ) { }
 insertnotes(args){
   console.log(args);
   this.blockservice.insertbusinessblock(args)
   .subscribe((resp: any) => {
    this.return=resp.ReturnCode;
  
    if(this.return == "RIS"){
      this.notenumber="The notes is created for block id "+this.session.retrieve("blockid");
      console.log("service working fine");
    }
    else{
      console.log("service failure");
    }
  });
  
 }
 function(input){
  console.log(input);
  this.blockservice.cancel(input)
  .subscribe((resp:any)=>{
  this.cancelmessage=resp.ReturnCode;
  this.cancelnumber=resp.CancellationNumber;
  if(this.cancelmessage == "RIS"){
    this.cancelnumber="The group cancellaton number is "+this.cancelnumber;
    console.log("service working fine");
  }
  else{
    console.log("service failure");
  }
});
}

// CancelGroup(args){
//   console.log(args);
//   this.blockservice.insertbusinessblock(args)
//   .subscribe((resp: any) => {
//    this.return=resp.ReturnCode;
//    if(this.return == "RIS"){
//      console.log("service working fine");
//    }
//    else{
//      console.log("service failure");
//    }
//  });
 
// }
  ngOnInit() {
    
    this.blockservice.getchaTables1()
    .subscribe((resp: any) => {
      this.tableschanges=resp.ReturnValue;
    });
    // notetype droup down
    this.blockservice.notetype()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;

});

this.blockservice.reason()
.subscribe((resp: any) => {
this.reason=resp.ReturnValue;

});
//Date and time
setInterval(()=>{
  this.now =  moment().format("DD-MMM-YYYY HH:mm:ss");
},1000);

  
}
}
