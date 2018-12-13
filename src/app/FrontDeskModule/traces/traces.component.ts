import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {TracesService} from './traces.service';
import { SessionStorageService } from "ngx-webstorage";
import { ToasterServiceService } from '../../toaster-service.service';
@Component({
  selector: 'app-traces',
  templateUrl: './traces.component.html',
  styleUrls: ['./traces.component.css'],
  providers:[TracesService]
})
export class TracesComponent implements OnInit {

  constructor(private TracesService:TracesService,public session:SessionStorageService, public toaster:ToasterServiceService) { }
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
  selectindex ;
  traces_id ;
  res_id ;

  selected(details,index){
    this.selectindex=index;
  this.resid=details.res_id;
  this.uid=details.res_unique_id;
  this.trace=details.traces_id;
  this.traces_id=details.traces_id;
  this.res_id=details.res_id;
  //this.session.store("traces_id",details.traces_id.toString());
  //this.session.store("res_id",details.res_id.toString());
  console.log("traces_id",details.traces_id)
  console.log("res_id",details.res_id)
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

public deletetrace
deletetraces(){
  let body={
    "traces_id":this.traces_id,
    "res_id":this.res_id
  }
 this.TracesService.deletetraces(body)
 .subscribe((resp: any) => {
  this.deletetrace=resp.Returncode;
  if(this.deletetrace=="RDS"){
    this.deletetrace="Traces is Deleted successfully";
    this.toaster.success("Traces is Deleted successfully");
    this.TracesService.Trace()
    .subscribe((resp: any) => {
     this.gettrace=resp.ReturnValue;
   });
  }
});

}


}
