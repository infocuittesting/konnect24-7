import { Component, OnInit } from '@angular/core';
import { OutoforderService } from './outoforder.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";


@Component({
  selector: 'app-outoforderservice',
  templateUrl: './outoforderservice.component.html',
  styleUrls: ['./outoforderservice.component.css'],
  providers:[ OutoforderService]
})
export class OutoforderserviceComponent implements OnInit {

  public order =[];
  public dele=true;
  public edit=true;
  onSelect6(val){
    console.log(val);
    this.order = this.orderData.filter(x => x.rm_room == val)
  }

  orderData=[];
  roomnumber=[];
  roomclass=[];
  orderlist=[];
  ordertolist=[];
  reasonlist=[];
  servicelist=[];
  user334={};
  list=[];
  constructor(private roomService: OutoforderService,private route:Router,public session:SessionStorageService) {
    this.order = this.orderData;
   }

oos2=[];
oos3;
   roomcard;
   roomcard1=[];
   public room=[];
   public arr:any;
  user={};
  user2:any=[];
  user34={};
  user35={};
 
  user33={};
  submit(inputt):void {
    // console.log('sruthi',inputt,'kanu');
     this.roomService.postandgetdata(inputt)
     .subscribe(( user333:any)=> {
       this.user33 = user333;
       this.roomcard=user333.ReturnCode;
       if(this.roomcard=="RIS"){
        this.roomcard="The Out Of Order/Out Of Service is created";
        console.log("checking return value is success or not")
        this.roomService.outofOrder()
        .subscribe((resp: any) => {
        this.order = resp.ReturnValue;
    });
      }
      //  window.location.reload();
     },
      );  
       }


       update(inputt):void {
        // console.log('sruthi',inputt,'kanu');
         this.roomService.updateroomoutoforder(inputt)
         .subscribe(( user334:any)=> {
           this.user34 = user334;
           this.roomcard1=user334.Return;

           if(user334.Return == "Record Updated Successfully"){
                this.edit=true;this.dele=true;this.user2="";
            console.log("checking return value is success or not")
            this.roomService.outofOrder()
            .subscribe((resp: any) => {
            this.order = resp.ReturnValue;
        });
          }
          //  window.location.reload();
         },
          );  
           }

           delete():void {
            // console.log('sruthi',inputt,'kanu');
             this.roomService.deleteoutoforder(this.deleteDataDetails)
             .subscribe(( user335:any)=> {
               this.user35 = user335;
               this.oos3=user335.ReturnCode;
              //  window.location.reload();
              if(this.oos3 == "RDS"){
                this.edit=true;this.dele=true;
                this.oos3="The "+status+" is deleted for room "+this.deleteDataDetails;
                console.log("checking return value is success or not")
                this.roomService.outofOrder()
                .subscribe((resp: any) => {
                this.order = resp.ReturnValue;
            });
              }
             },
              );  
               }
    
               level(){
                this.roomService.outofOrder()
                .subscribe((resp: any) => {
                 this.order=resp.ReturnValue;
              
              });
              }

  ngOnInit() {
      
   this.roomService.outofOrder()
   .subscribe((resp: any) => {
    this.order=resp.ReturnValue;
 
 });

 //retunstatus
 
 this.roomService.room()
 .subscribe((resp: any) => {
  this.arr=resp.ReturnValue;
  this.room = this.arr.slice(0,4)
  this.servicelist=this.arr.slice(4,6)
  console.log("valueeee",this.room)
});

 this.roomService.orderlisting1()
 .subscribe((resp: any) => {
  this.orderlist=resp.ReturnValue;

});

 this.roomService.orderlisting2()
 .subscribe((resp: any) => {
  this.ordertolist=resp.ReturnValue;

});



this.roomService.reasonlisting()
.subscribe((resp: any) => {
 this.reasonlist=resp.ReturnValue;

});
 this.roomService.outofOrder()
 .subscribe((resp: any) => {
  this.orderData=resp.ReturnValue;

});

 this.roomService.roomnumberdropdown()
    .subscribe((resp: any) => {
     this.roomnumber=resp.ReturnValue;
   });

   this.roomService.roomclassdropdown()
   .subscribe((resp: any) => {
    this.roomclass=resp.ReturnValue;
  });
  }

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
     this.copy =JSON.parse(JSON.stringify(this.order))
      }
    this.order=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_status)){
        this.order.push(this.copy[j]);
      }
    }
  }else{
    this.order=this.copy; 
  }
  }

  status;
  selectindex=null;
  public deleteDataDetails:any;
  selectOrdersEdit(details,index){
  this.selectindex=index;
  this.deleteDataDetails=details.rm_room;
  if(this.deleteDataDetails==details.rm_room){
    this.dele=false;
    this.edit=false;
  }
  this.status=details.rm_status;
  this.user2.rm_room=details.rm_room;
  this.user2=details;
  }

}