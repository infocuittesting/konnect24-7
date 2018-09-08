import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {TracesService} from './traces.service';
@Component({
  selector: 'app-traces',
  templateUrl: './traces.component.html',
  styleUrls: ['./traces.component.css'],
  providers:[TracesService]
})
export class TracesComponent implements OnInit {

  constructor(private TracesService:TracesService) { }
public gettrace;
checkboxValue;
checkValue;

  ngOnInit() {
    this.TracesService.Trace()
    .subscribe((resp: any) => {
     this.gettrace=resp.ReturnValue;
   });
  }
  newFunction()
  {
    if(this.checkboxValue==true){
      this.checkboxValue= "resolved";
    }
  }
  fuc(){
    if(this.checkValue==true)
    {
      this.checkValue="unresolved"
    }
  }

  // selected from table
  resid;
  uid;
  trace;
  selectindex=null;
  selected(details,index){
    this.selectindex=index;
  this.resid=details.res_id;
  this.uid=details.res_unique_id;
  this.trace=details.traces_id;
  }

  //resolve
  public resolvetrace;
 resolve(){
   let body={
     "res_id":this.resid,
     "res_unique_id":this.uid,
     "traces_id":this.trace
   }
  this.TracesService.Tracesresolve(body)
  .subscribe((resp: any) => {
   this.resolvetrace=resp.ReturnCode;
   if(this.resolvetrace=="RUS"){
     this.resolvetrace="Traces is Resolved successfully";
     this.TracesService.Trace()
     .subscribe((resp: any) => {
      this.gettrace=resp.ReturnValue;
    });
   }
 });

}

}
