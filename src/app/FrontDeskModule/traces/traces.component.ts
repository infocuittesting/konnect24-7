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
public gettracedrop:any;
checkboxValue;
checkValue;
public deptdrop:any;

  ngOnInit() {
    this.TracesService.Trace()
    .subscribe((resp: any) => {
     this.gettrace=resp.ReturnValue;
   });

   this.TracesService.Tracesdeptcode()
   .subscribe((resp: any) => {
    this.gettracedrop=resp.ReturnValue;
  });

  this.TracesService.depttracemain()
  .subscribe((resp: any) => {
   this.deptdrop=resp.ReturnValue;
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

  public name:any;
  public tdate:any;
  public trace_dept_code:any;
  cleandata(){
    this.name="";
    this.tdate="";
    this.trace_dept_code="";
    this.checkValue=false;
    this.checkboxValue=false;
  }

  // selected from table
  public resid:any;
  public uid:any;
  public trace:any;
  public selectindex:any ;
  public traces_id:any;
  public res_id:any;
  public fromvalue:any;
  public tovalue:any;
  public motime:any;
  public deptmodel:any;
  public fronttext:any;

  flag = false;
  ednew =true;
  newval = false

  selected(details,index){
    this.selectindex=index;
  this.resid=details.res_id;
  this.uid=details.res_unique_id;
  this.trace=details.traces_id;
  this.traces_id=details.traces_id;
  this.res_id=details.res_id;


  //display selected value into trace edit button 

  this.fromvalue = details.res_arrival;
  this.tovalue = details.res_depature;
  this.motime = details.traces_time;
  this.deptmodel = details.traces_dept_code;
  this.fronttext = details.traces_trace_text;

  


  if(this.flag==false){
    this.flag=true;
    this.ednew=false;
    this.newval = true;
    this.selectindex=index; 
  
  }else{
    this.flag=false;
      this.selectindex=null;
      this.ednew=true;
      this.newval = false;
  }
  
  
  //this.session.store("res_id",details.res_id);
  //this.session.store("res_unique_id",details.res_unique_id);
  
  //console.log("res_unique_id",details.res_unique_id)
  //console.log("res_id",details.res_id)
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

public trac=[];


Insertguest(trac){
  let body={
    "res_id":this.resid,
    "res_unique_id":this.uid,
    "traces_from_date":trac.from_date,
    "traces_to_date":trac.to_date,
    "traces_time":trac.time,
    "traces_dept_code":trac.dept_code,
    "traces_trace_text":trac.straces_text
  }
  console.log('testttttttt',body)
 this.TracesService.Insertguest(body)
 .subscribe((resp: any) => {
  this.deletetrace=resp.ReturnCode;
  if(this.deletetrace=="RIS"){
    //this.deletetrace="Traces is Insert successfully";
    this.toaster.success("Traces is Insert successfully");
    this.TracesService.Trace()
    .subscribe((resp: any) => {
     this.gettrace=resp.ReturnValue;
   });
  }
});


}

Updateguest(motime,deptmodel,fronttext){
  let body={
    "res_id":this.resid,
    "res_unique_id":this.uid,
    "traces_id":this.trace,
    "traces_time":motime,
    "traces_dept_code":deptmodel,
    "traces_trace_text":fronttext
  }
  
 this.TracesService.Updateguest(body)
 .subscribe((resp: any) => {
  this.deletetrace=resp.ReturnCode;
  if(this.deletetrace=="RUS"){
    //this.deletetrace="Traces is Insert successfully";
    this.toaster.success("Traces is Updated successfully");
    this.TracesService.Trace()
    .subscribe((resp: any) => {
     this.gettrace=resp.ReturnValue;
   });
  }
});
console.log("update functionnnnnnnnnnn",JSON.stringify(body));
}

}
