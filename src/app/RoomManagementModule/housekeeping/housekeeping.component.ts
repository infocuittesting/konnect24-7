import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HousekeepingService } from './housekeeping.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import * as jsPDF from 'jspdf';
import { SessionStorageService } from "ngx-webstorage";
import { ToasterServiceService } from '../../toaster-service.service'; 





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

  // cleardata(){
  //   this.session.clear();
  // }

house = [];



fromroom=[];
toroom=[];
roomlist;
roomlist1=[];
user23={};
user24={};
user:any=[];


  constructor(private roomService: HousekeepingService, private route: Router,public session:SessionStorageService,private toasterService:ToasterServiceService) { }

  Success(message){
    //  console.log("message",message);
     this.toasterService.success(message);
   }
  public rmid:any;
  public rmtype:any;
  public statistics:any;
  
  ngOnInit() {


    this.roomService.gethousekeepingdata()
      .subscribe((resp: any) => {
        this.house = resp.ReturnValue;

      });
    //statistic table
    this.roomService.getstatisticsdata()
    .subscribe((resp: any) => {
      this.statistics = resp.ReturnValue;
      console.log("testttttt",this.statistics)
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
   this.filtercheckboxList=['clean','inspected','dirty','out of service','out of order','pick up','vaccant','occupied'];
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
    console.log("checkbox filter ",this.filtercheckboxList);
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
  sample(flag) {
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
    if(user233.ReturnCode=="RUS"){
      this.roomlist="The Room Number "+this.hsid+" is Assigned Successfully"
      this.Success(this.roomlist);
      this.route.navigate(['roomassignment/']);
    this.session.clear();
    }

    }); 

  }

  public updateroomstatus:any={};
  housekeepingstatus(inputt) {
// ***********************************
    console.log("hsid",inputt,this.hsid);
    if (this.commonflag == 'roomlist') {
      
      if(this.hsid.includes(",")){
        console.log("More than One value is there");
        this.updateroomstatus =
        {
          "Room_List":this.hsid,
           "RM_Room_Status":inputt.RM_Room_Status
    
        }
      }
      else{
        console.log(" One value is there");
        this.updateroomstatus =
        {
          "RM_Room":this.hsid,
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
        this.Success(this.roomlist);
        console.log("workingggggggggggggggg",this.roomlist)
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
this.selected_id=[];
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
 this.user.RM_Room=this.hsid
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