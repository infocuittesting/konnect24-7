import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionStorageService } from "ngx-webstorage";
import * as jsPDF from 'jspdf';
import { Router } from "@angular/router";
import { ManagingqueueService } from "./managingqueue.service";
@Component({
  selector: 'app-managingqueue',
  templateUrl: './managingqueue.component.html',
  styleUrls: ['./managingqueue.component.css'],
  providers:[ManagingqueueService]
})
export class ManagingqueueComponent implements OnInit {
  
  @ViewChild('report') content:ElementRef;

  // clear

  public queryString:string;
  public roomtype:string;
  


  clear(){
    this.queryString=''
    this.roomtype=''
    this.roomno=''
    this.roomclass=''
    this.pService.checkin()
    .subscribe((resp: any) => {
     this.search=resp.ReturnValue;
   });
  
  }
  public  downloadPDF(){

  let  l = {
      orientation: 'l',
      unit: 'mm',
      format: 'a3',
      compress: true,
      fontSize: 8,
      lineHeight: 1,
      autoSize: false,
      printHeaders: true
  };
    let doc = new jsPDF( l,'','');

    let specialElementHandlers = {
      '#editor':function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':250,
      'height':100,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

  
  constructor(private pService:ManagingqueueService,private route:Router,public session:SessionStorageService ) { 
    this.search=this.someData;
  }
public class1;  
public room;
public search = [];
public list=[];
public returnmsg;
someData = []

onSelect(val){
  console.log(val.toLowerCase());
  this.search = this.someData.filter(x => x.rm_room_type == val.toLowerCase())
  console.log(this.search);
}
roomno;
onSelected(val){
  console.log(val);
  this.search = this.someData.filter(x => x.res_room == val)
  console.log(this.search);
}
roomclass
onSelectclass(val){
  console.log(val.toLowerCase());
  this.search = this.someData.filter(x => x.roomclass == val.toLowerCase())
  console.log(this.search);
}
  //checkin
  status={};

checkinProfile(){
  let inputparms={
    "Res_id":this.session.retrieve("id"),
    "pf_id":this.session.retrieve("id1"),
    "Res_unique_id":this.session.retrieve("uniq")
  }
  
  this.pService.checkinProfile(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.ReturnCode;
    this.returnmsg=resp.alertvalue;
    if(this.status=="RUS"){
      this.status="The Checkin is conformed for "+this.name;
    }
    else if(this.status=="AGS"){
      this.status=resp.alertvalue[0].res_alert_description;
    }
    this.pService.checkin()
    .subscribe((resp: any) => {
     this.search=resp.ReturnValue;
   });
  });

}

  ngOnInit() {
  
  this.pService.checkin()
  .subscribe((resp: any) => {
   this.search=resp.ReturnValue;
 });

 this.pService.checkin()
 .subscribe((resp: any) => {
  this.someData=resp.ReturnValue;
});

 this.pService.roomtype()
 .subscribe((resp: any) => {
  this.list=resp.ReturnValue;
});

this.pService.roomdropdown()
.subscribe((resp: any) => {
 this.room=resp.ReturnValue;
});

this.pService.roomclassdropdown()
.subscribe((resp: any) => {
 this.class1=resp.ReturnValue;
});

}
edbutn=true;
flag = false;
name;
selectindex=null;
selectMembersEdit(details,index){
this.selectindex=index;
this.name=details.pf_firstname;
this.session.store("id",details.res_id.toString());
this.session.store("id1",details.pf_id.toString());
this.session.store("id2",details.res_room.toString());
this.session.store("uniq",details.res_unique_id.toString());
console.log(this.session.retrieve("id"));
if(details.res_guest_status=="due in" || details.res_guest_status=="reserved" || details.res_guest_status=="no show" || details.res_guest_status=="Check out" || details.res_guest_status=="due out"){
  this.flag=true;
  this.edbutn=true;
  this.selectindex=index; 

}else{
  this.flag=false;
    this.selectindex=null;
    this.edbutn=false;
}


}

}

