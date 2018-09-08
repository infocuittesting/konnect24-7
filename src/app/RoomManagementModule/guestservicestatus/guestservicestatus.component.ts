import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { GuestservicestatusService } from './guestservicestatus.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-guestservicestatus',
  templateUrl: './guestservicestatus.component.html',
  styleUrls: ['./guestservicestatus.component.css'],
  providers:[GuestservicestatusService]
})
export class GuestservicestatusComponent implements OnInit {


  @ViewChild('myModal') content:ElementRef;


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
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

  constructor(private guestService: GuestservicestatusService,private route:Router) { }

  public room=[];
  public service=[];
  public guestservice=[];
  public guestserviceData=[];
  public guestserviceData1=[];


  onSelect7(val){
    console.log(val);
    this.guestservice = this.guestserviceData.filter(x => x.rm_room == val)
  }


  onSelect8(val){
    console.log(val);
    this.guestservice = this.guestserviceData1.filter(x => x.rm_service_status == val)
  }

  ngOnInit() {

    this.guestService.roomguestdropdown()
   .subscribe((resp: any) => {
    this.room=resp.ReturnValue;
  });

  this.guestService.servicedropdown()
  .subscribe((resp: any) => {
   this.service=resp.ReturnValue;
 });

 this.guestService.guestservicestatus()
 .subscribe((resp: any) => {
  this.guestservice=resp.ReturnValue;
});

this.guestService.guestservicestatus()
.subscribe((resp: any) => {
 this.guestserviceData=resp.ReturnValue;
});


this.guestService.guestservicestatus()
.subscribe((resp: any) => {
 this.guestserviceData1=resp.ReturnValue;
});
  }
//CHECKBOX FILTERING
   checkboxflg=[];
  count=0;
  copy=[];
  filtercheckboxList:any=[];
  filtercheckboxData(ngmodel, flag) {
    if (ngmodel == true) {
         this.filtercheckboxList.push(flag);
    }else{
      for(var i=0;i<this.filtercheckboxList.length;i++){
        if(flag==this.filtercheckboxList[i]){
          this.filtercheckboxList.splice(i,1);
          break;
        }
      }
    }
    //final list for table
    if(this.filtercheckboxList!=null && this.filtercheckboxList.length>0){
     
      if(this.count==0){
        this.count++;
     this.copy =JSON.parse(JSON.stringify(this.guestservice))
      }
    this.guestservice=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_room_status)){
        this.guestservice.push(this.copy[j]);
      }
    }
  }else{
    this.guestservice=this.copy; 
  }
  }
  //END OF CHECKBOX

}
