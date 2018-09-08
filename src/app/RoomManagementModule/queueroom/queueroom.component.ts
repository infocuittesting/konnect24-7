import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

import { QueueroomService } from "./queueroom.service";
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { LowerCasePipe } from '@angular/common';
import * as jsPDF from 'jspdf';


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
  public queue=[
    { rm_qtime: "101", rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", pf_firstname: "sruthi",rm_vip:"" },
    { rm_qtime: "101", rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", pf_firstname: "sneha",rm_vip:"" },
    { rm_qtime: "101", rm_room: "103", rm_room_type: "ksbn", rm_room_status: "out of order", rm_fo_status: "occupied", pf_firstname: "satheesh",rm_vip:"" },
    { rm_qtime: "101", rm_room: "104", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "occupied", pf_firstname: "daisy",rm_vip:"" },
    { rm_qtime: "101", rm_room: "105", rm_room_type: "sjsn", rm_room_status: "inspected", rm_fo_status: "occupied", pf_firstname: "banu",rm_vip:"" },
    { rm_qtime: "101", rm_room: "106", rm_room_type: "sdbu", rm_room_status: "pick up", rm_fo_status: "vaccant", pf_firstname: "aravindh",rm_vip:"" },
    { rm_qtime: "101", rm_room: "107", rm_room_type: "comb", rm_room_status: "clean", rm_fo_status: "vaccant", pf_firstname: "siva",rm_vip:"" },

  ];
  public listroom=[];
  public room=[];
  qroom = [
    // { rm_qtime: "101", rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", pf_firstname: "sruthi",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", pf_firstname: "sneha",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "103", rm_room_type: "ksbn", rm_room_status: "out of order", rm_fo_status: "occupied", pf_firstname: "satheesh",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "104", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "occupied", pf_firstname: "daisy",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "105", rm_room_type: "sjsn", rm_room_status: "inspected", rm_fo_status: "occupied", pf_firstname: "banu",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "106", rm_room_type: "sdbu", rm_room_status: "pick up", rm_fo_status: "vaccant", pf_firstname: "aravindh",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "107", rm_room_type: "comb", rm_room_status: "clean", rm_fo_status: "vaccant", pf_firstname: "siva",rm_vip:"" },
  ];
  qroom1 = [
    // { rm_qtime: "101", rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", pf_firstname: "sruthi",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", pf_firstname: "sneha",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "103", rm_room_type: "ksbn", rm_room_status: "out of order", rm_fo_status: "occupied", pf_firstname: "satheesh",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "104", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "occupied", pf_firstname: "daisy",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "105", rm_room_type: "sjsn", rm_room_status: "inspected", rm_fo_status: "occupied", pf_firstname: "banu",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "106", rm_room_type: "sdbu", rm_room_status: "pick up", rm_fo_status: "vaccant", pf_firstname: "aravindh",rm_vip:"" },
    // { rm_qtime: "101", rm_room: "107", rm_room_type: "comb", rm_room_status: "clean", rm_fo_status: "vaccant", pf_firstname: "siva",rm_vip:"" },
  ];
  constructor(private pService: QueueroomService,private route:Router) { 
    // this.queue = this.qroom;
    this.queuerooms = this.qroom;
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

  // onSelect3(val){
  //   val = val.toLowerCase();
  //   console.log(val);
  //   this.queue = this.qroom2.filter(x => x.rm_room == val)
  // }

  ngOnInit() {
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

}
