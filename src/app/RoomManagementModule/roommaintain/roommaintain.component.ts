import { Component, OnInit } from '@angular/core';
import { RoommaintainService } from './roommaintain.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";



@Component({
  selector: 'app-roommaintain',
  templateUrl: './roommaintain.component.html',
  styleUrls: ['./roommaintain.component.css'],
  providers:[ RoommaintainService ]
})
export class RoommaintainComponent implements OnInit {

  public main =[ 
  //   {
  //   "rm_room": 103,
  //   "rm_room_type": "KSGS",
  //   "rm_room_status": "clean",
  //   "rm_fo_status": "",
  //   "rm_mainteanance_reason": "deepclean",
  //   "rm_last_change": "world wide widgets",
  //   "emp_firstname": "sruthi",
  //   "emp_lastname": "sundaram",
  //   "rm_resolvedon": "madurai",
  //   "rm_resolvedby": "India",
  //   "rm_mainteanance_remarks": 621005,
  //  },
  
  //  {
  //   "rm_room": 105,
  //   "rm_room_type": "KSGS",
  //   "rm_room_status": "clean",
  //   "rm_fo_status": "",
  //   "rm_mainteanance_reason": "deepclean",
  //   "rm_last_change": "world wide widgets",
  //   "emp_firstname": "suhasini",
  //   "emp_lastname": "sundaram",
  //   "rm_resolvedon": "madurai",
  //   "rm_resolvedby": "India",
  //   "rm_mainteanance_remarks": 621005,
  //  },
  
  //  {
  //   "rm_room": 106,
  //   "rm_room_type": "KSGS",
  //   "rm_room_status": "clean",
  //   "rm_fo_status": "",
  //   "rm_mainteanance_reason": "deepclean",
  //   "rm_last_change": "world wide widgets",
  //   "emp_firstname": "daisy",
  //   "emp_lastname": "veroni",
  //   "rm_resolvedon": "madurai",
  //   "rm_resolvedby": "India",
  //   "rm_mainteanance_remarks": 621005,
  //  },

  //  {
  //   "rm_room": 107,
  //   "rm_room_type": "KSGS",
  //   "rm_room_status": "clean",
  //   "rm_fo_status": "",
  //   "rm_mainteanance_reason": "deepclean",
  //   "rm_last_change": "world wide widgets",
  //   "emp_firstname": "pavithra",
  //   "emp_lastname": "sundaram",
  //   "rm_resolvedon": "madurai",
  //   "rm_resolvedby": "India",
  //   "rm_mainteanance_remarks": 621005,
  //  },

  //  {
  //   "rm_room": 108,
  //   "rm_room_type": "KSGS",
  //   "rm_room_status": "clean",
  //   "rm_fo_status": "",
  //   "rm_mainteanance_reason": "deepclean",
  //   "rm_last_change": "world wide widgets",
  //   "emp_firstname": "swathi",
  //   "emp_lastname": "s",
  //   "rm_resolvedon": "madurai",
  //   "rm_resolvedby": "India",
  //   "rm_mainteanance_remarks": 621005,
  //  },
  
  
  

  ];
  roomclass=[];

  roomcard=[];
  
  constructor(private maintainService: RoommaintainService,private route:Router,
    public session:SessionStorageService) { }

  user={};
  user1={};
  user2={};
  user35={};
 
  user33={};
  user36={};
  user37={};

roomcard1=[];
roomcard3=[];
resolving=[];

     submit(inputt):void {
       // console.log('sruthi',inputt,'kanu');
        this.maintainService.postandgetdata (inputt)
        .subscribe(( user333:any)=> {
          this.user33 = user333;
          this.roomcard=user333.Return;
          if(user333.Return == "Record Inserted Successfully"){
            console.log("checking return value is success or not")
            this.maintainService.roommaintenance()
            .subscribe((resp: any) => {
            this.main = resp.ReturnValue;
        });
          }
        },
         );  
          }


          update(inputt):void {
         // console.log('sruthi',inputt,'kanu');
              this.maintainService.updateroommaintenance(inputt)
              .subscribe(( user335:any)=> {
                this.user35 = user335;
                this.roomcard1=user335.Return;
                if(user335.Return == "Record Updated Successfully"){
                  console.log("checking return value is success or not")
                  this.maintainService.roommaintenance()
                  .subscribe((resp: any) => {
                  this.main = resp.ReturnValue;
              });
                }
              },
               );  
                }


          delete(inputt):void {
            // console.log('sruthi',inputt,'kanu');
                 this.maintainService.deleteroommaintenance(inputt)
                 .subscribe(( user337:any)=> {
                   this.user37 = user337;
                   this.roomcard3=user337.Return;
                   if(user337.Return == "Record Deleted Successfully"){
                    console.log("checking return value is success or not")
                    this.maintainService.roommaintenance()
                    .subscribe((resp: any) => {
                    this.main = resp.ReturnValue;
                });
                  }
                 },
                  );  
                   }


                resolveroom(inputt):void {
                  // console.log('sruthi',inputt,'kanu');
                       this.maintainService.resolveroom(inputt)
                       .subscribe(( user336:any)=> {
                         this.user36 = user336;
                         this.resolving=user336.Return;
                       },
                        );  
                         }

reason = [];
room = [];

  ngOnInit() {

      
  this.maintainService.roommaintenance()
  .subscribe((resp: any) => {
   this.main=resp.ReturnValue;

});

this.maintainService.roomclassdropdown()
   .subscribe((resp: any) => {
    this.roomclass=resp.ReturnValue;
  });


  this.maintainService.reasondropdown()
   .subscribe((resp: any) => {
     this.reason=resp.ReturnValue;
console.log("res");
  
});

this.maintainService.roomdropdown()
.subscribe((resp: any) => {
  this.room=resp.ReturnValue;
console.log("res");

});

  }

  

  selectindex=null;
public deleteDataDetails:any;
selectMembersMaintain(details,index){
this.selectindex=index;
this.deleteDataDetails=details;
this.session.store("id8",details.rm_room.toString());
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
   this.copy =JSON.parse(JSON.stringify(this.main))
    }
  this.main=[];
  console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
  for(var j=0;j<this.copy.length;j++){
    if(this.filtercheckboxList.includes(this.copy[j].rm_resolvedby)){
      this.main.push(this.copy[j]);
    }
  }
}else{
  this.main=this.copy; 
}
}


}
