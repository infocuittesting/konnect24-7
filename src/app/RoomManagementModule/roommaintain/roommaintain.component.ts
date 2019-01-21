import { Component, OnInit } from '@angular/core';
import { RoommaintainService } from './roommaintain.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { ToasterServiceService } from '../../toaster-service.service'; 




@Component({
  selector: 'app-roommaintain',
  templateUrl: './roommaintain.component.html',
  styleUrls: ['./roommaintain.component.css'],
  providers:[ RoommaintainService ]
})
export class RoommaintainComponent implements OnInit {
  public resolut:boolean=true;
  public dele:boolean=true;
  public edit:boolean=true;
  public main =[];
  roomclass=[];

  roomcard=[];
  
  constructor(private maintainService: RoommaintainService,private route:Router,
    public session:SessionStorageService,private toasterService:ToasterServiceService) { }
    Success(message){
      //  console.log("message",message);
       this.toasterService.success(message);
     }

  user={};
  user1:any=[];
  user2={};
  user35={};
 
  user33={};
  user36={};
  user37={};

roomcard1=[];
roomcard3=[];
resolving=[];

     submit(inputt) {
       // console.log('sruthi',inputt,'kanu');
        this.maintainService.postandgetdata (inputt)
        .subscribe(( user333:any)=> {
          this.user33 = user333;
          this.roomcard=user333.Return;
          if(user333.Return == "Record Inserted Successfully")
          this.Success(this.roomcard);
          console.log("workingggggggggggggg",this.roomcard)
          {
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
                if(user335.Return == "Record Updated Successfully")
                this.Success(this.roomcard1);
                {
                  console.log("checking return value is success or not")
                  this.resolut=true;this.edit=true;this.dele=true;
                  this.maintainService.roommaintenance()
                  .subscribe((resp: any) => {
                  this.main = resp.ReturnValue;
              });
                }
              },
               );  
                }


          delete():void {
            // console.log('sruthi',inputt,'kanu');
                 this.maintainService.deleteroommaintenance(this.param)
                 .subscribe(( user337:any)=> {
                   this.user37 = user337;
                   this.roomcard3=user337.Return;
                   if(user337.Return == "Record Deleted Successfully"){
                    console.log("checking return value is success or not")
                    this.resolut=true;this.edit=true;this.dele=true;  
                    this.maintainService.roommaintenance()
                    .subscribe((resp: any) => {
                    this.main = resp.ReturnValue;
                });
                  }
                 },
                  );  
                   }


                resolveroom():void {
                  // console.log('sruthi',inputt,'kanu');
                       this.maintainService.resolveroom1(this.param)
                       .subscribe(( user336:any)=> {
                         this.user36 = user336;
                         this.resolving=user336.Return;
                         this.resolut=true;this.edit=true;this.dele=true;
                       },
                        );  
                         }

public reason = [];
public room = [];
public arr=[];
public roomstatus:any=[];
public servicelist:any=[];
  ngOnInit() {

     //retunstatus
 
 this.maintainService.room()
 .subscribe((resp: any) => {
  this.arr=resp.ReturnValue;
  this.roomstatus = this.arr.slice(0,4)
  this.servicelist=this.arr.slice(4,6)
  console.log("valueeee",this.roomstatus)
});
      
  this.maintainService.roommaintenance()
  .subscribe((resp: any) => {
   this.main=resp.ReturnValue;
   console.log("workinggggggggggggggggggggg",this.main)

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

  
public param;
  selectindex=null;
public deleteDataDetails:any;
selectMembersMaintain(details,index){
this.selectindex=index;
this.deleteDataDetails=details;
this.session.store("id8",details.rm_room.toString());
this.param=details.rm_room.toString();
this.user1=details;
if(this.param==details.rm_room){
  this.dele=false;
  this.resolut=false;
  this.edit=false;
}
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
