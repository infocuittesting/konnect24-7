import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

import { QueueroomService } from "./queueroom.service";
import { Router } from "@angular/router";
import * as jsPDF from 'jspdf';
import * as moment from 'moment';

@Component({
  selector: 'app-queueroom',
  templateUrl: './queueroom.component.html',
  styleUrls: ['./queueroom.component.css'],
  providers:[QueueroomService]


})

export class QueueroomComponent implements OnInit {


  @ViewChild('myModal') content:ElementRef;


  public  downloadPDF(){

    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor':function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,10,10,{
      // 'width':210,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }
 public queuerooms:any=[];
  public queue=[];
  public listroom=[];
  public room=[];
  qroom = [];
  public now;
  qroom1 = [];
  public rm_room_type;
  public queueroom;
  constructor(private pService: QueueroomService,private route:Router) { 
    // this.queue = this.qroom;
    this.queuerooms = this.qroom;
  }

  cleardata(){
   this.rm_room_type="";
   this.queueroom="";
  }

  onSelect(val){
    val = val.toLowerCase();
    console.log(val);
    this.queuerooms = this.qroom.filter(x => x.rm_room_type == val)
  }

  onSelect1(val){
    // val = val.toLowerCase();
    console.log(val);
    this.queuerooms = this.qroom1.filter(x => x.rm_room == val)
  }


  ngOnInit() {

    //current time
    setInterval(()=>{
      this.now =  moment().format("HH:mm:ss");
    },1000);
  

    this.pService.getqueueroom()
    .subscribe((resp: any) => {
    this.queuerooms=resp.ReturnValue;
    this.queue=resp.overview;
   
    });

    this.pService.roomtypedropdown()
    .subscribe((resp: any) => {
     this.listroom=resp.ReturnValue;
   });

   this.pService.roomdropdown()
   .subscribe((resp: any) => {
    this.room=resp.ReturnValue;
  });

  this.pService.getqueueroom()
  .subscribe((resp: any) => {
  this.qroom=resp.ReturnValue;
 
 });

 this.pService.getqueueroom()
  .subscribe((resp: any) => {
  this.qroom1=resp.ReturnValue;
 
 });
   
  }

  //select row to show time;
  public queutime;
  public actual;
  selectrow(details){
    this.queutime=details.rm_qtime;
    if(this.queutime==details.rm_qtime){
      console.log(typeof this.queutime)
    }
  }

  ngOnDestroy(){

    if(this.now){
      clearInterval(this.now);
    }
  }
}
