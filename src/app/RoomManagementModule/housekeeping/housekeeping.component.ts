import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HousekeepingService } from './housekeeping.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import * as jsPDF from 'jspdf';
import { SessionStorageService } from "ngx-webstorage";



@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.component.html',
  styleUrls: ['./housekeeping.component.css'],
  providers: [HousekeepingService]
})
export class HousekeepingComponent implements OnInit {

  @ViewChild('myModal') content:ElementRef;


  public  downloadPDF(){

    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor':function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }

  cleardata(){
    this.session.clear();
  }

house = [


    //  { rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "101", rm_room_type: "kngn", rm_room_status: "clean", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },


    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "102", rm_room_type: "kngs", rm_room_status: "dirty", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },

    //  { rm_room: "103", rm_room_type: "kngn", rm_room_status: "pick up", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "103", rm_room_type: "kngn", rm_room_status: "pick up", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "103", rm_room_type: "kngn", rm_room_status: "pick up", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },


    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "104", rm_room_type: "kngn", rm_room_status: "inspected", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },



    //  { rm_room: "105", rm_room_type: "kngn", rm_room_status: "out of order", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "105", rm_room_type: "kngn", rm_room_status: "out of order", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "105", rm_room_type: "kngn", rm_room_status: "out of order", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },


    //  { rm_room: "106", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    // { rm_room: "106", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },
    //  { rm_room: "106", rm_room_type: "kngn", rm_room_status: "out of service", rm_fo_status: "vaccant", rm_reservation_status: "icha", rm_floor: "3rd floor", rm_room_class: "icha", rm_am_pm: "20", rm_features: "20", },


  ];



fromroom=[];
toroom=[];
roomlist;
roomlist1=[];
user23={};
user24={};
user={};


  constructor(private roomService: HousekeepingService, private route: Router,public session:SessionStorageService) { }

  public rmid:any;
  public rmtype:any;

  
  ngOnInit() {


    this.roomService.gethousekeepingdata()
      .subscribe((resp: any) => {
        this.house = resp.ReturnValue;

      });

      this.roomService.roomdropdown1()
      .subscribe((resp: any) => {
       this.fromroom=resp.ReturnValue;
     });

     this.roomService.roomdropdown2()
     .subscribe((resp: any) => {
      this.toroom=resp.ReturnValue;
    });
  }

  //seelct and clear all
chkFlag=false;
checkselectClr=false;
selectandClearAll(flag){
 
 if(flag=='clr'){
   this.chkFlag=true;
   this.checkselectClr=false;
   this.filtercheckboxList=[];
 }else if(flag=='sel'){
   this.chkFlag=true;
   this.checkselectClr=true;
   this.filtercheckboxList=['clean','inspected','dirty','out of service','out of order','pick up'];
 }
 if(this.chkFlag==true){
   if(this.copy.length>0){
     this.house=this.copy;
   }
 }
}

  //filter data in table  using checkbox
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
     this.copy =JSON.parse(JSON.stringify(this.house))
      }
    this.house=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_room_status)){
        this.house.push(this.copy[j]);
      }
    }
  }else{
    this.house=this.copy; 
  }
  }


  filtercheckboxData1(ngmodel, flag) {
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
     this.copy =JSON.parse(JSON.stringify(this.house))
      }
    this.house=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_fo_status)){
        this.house.push(this.copy[j]);
      }
    }
  }else{
    this.house=this.copy; 
  }
  }


  public commonflag: string;

  public changeroomlist: string;

  public changeroom: number;
  roomstatusradio(flag) {
    this.commonflag = flag;
    console.log(this.commonflag);

  }  
  public searchandedit;
    roomassign(){
    let body =
    {
      "Res_id": this.session.retrieve("rmid"),
      "Res_room": this.hsid,
      "Res_unique_id":this.session.retrieve("uniq")
    }
    console.log(body);
    this.roomService.roomassign(body)
    .subscribe(( user233:any)=> {
    

    }); 

  }

  public updateroomstatus:any={};
  housekeepingstatus(hsid,inputt) {
// ***********************************
    console.log("hsid",hsid,inputt);
    if (this.commonflag == 'roomlist') {
      
      if(hsid.includes(",")){
        console.log("More than One value is there");
        this.updateroomstatus =
        {
          "Room_List":hsid,
           "RM_Room_Status":inputt.RM_Room_Status
    
        }
      }
      else{
        console.log(" One value is there");
        this.updateroomstatus =
        {
          "RM_Room":hsid,
           "RM_Room_Status":inputt.RM_Room_Status
    
        }
      }
    }

    else if (this.commonflag == 'fromtoroom') {
      this.updateroomstatus =
      {
         "RM_Room_Status":inputt.RM_Room_Status,
         "From_Room":inputt.From_Room.toString(),
         "To_Room":inputt.To_Room.toString()
      }
    }
    //calling service
    this.roomService.getroomlist (this.updateroomstatus)
    .subscribe(( user233:any)=> {
      
      this.user23 = user233;
      this.roomlist=user233.ReturnCode;
      if(this.roomlist == "RUS"){
        this.roomlist="The Room Status is changed to "+inputt.RM_Room_Status;
        this.roomService.gethousekeepingdata()
        .subscribe((resp: any) => {
        this.house = resp.ReturnValue;
        
        });
      }
  //  location.reload()  
    });
      //clearing selected
  this.selected_id =[];
}
public ok=true;
public roomid;
//selecting values from multiple checkboxes in roomtype(rateheader)
selected=[];
public hsid:any=[];
idx:any;
selected_id=[];
exist(item){
 this.selected.indexOf(item)>-1;
}


toggleSelection(item){

 this.idx=this.selected.indexOf(item);
 console.log(this.idx);
 // this.room_type += item.type

 if(this.idx>-1){
   this.selected.splice(this.idx,1);
   this.selected_id.splice(this.idx,1);
 }
 else{
   this.selected.push(item);
   this.selected_id.push(item.rm_room);

 }
this.hsid=this.selected_id.toString();
 console.log("multiple selecttttttttttt",this.hsid);
 // this.hsid=this.hsid;
 this.roomid=item.rm_room.toString();
 if(this.roomid=item.rm_room){
   this.ok=false;
 }else{
   this.ok=true;
 }
}
 clearall(){
         //clearing selected
  this.selected_id =[];
 }

}