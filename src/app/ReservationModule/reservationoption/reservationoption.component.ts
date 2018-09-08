import { Component, OnInit, Input ,ViewChild,ElementRef } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as jsPDF from 'jspdf';
import { Router } from "@angular/router";
import { ReservationoptionService } from "./reservationoption.service";
import { SessionStorageService } from "ngx-webstorage";
import { DatePipe } from '@angular/common';  

@Component({
  selector: 'app-reservationoption',
  templateUrl: './reservationoption.component.html',
  styleUrls: ['./reservationoption.component.css'],
  providers:[ReservationoptionService]
})
export class ReservationoptionComponent implements OnInit {
  
  @ViewChild('content') content:ElementRef;


  public Id = this.session.retrieve("id");
  public Name = this.session.retrieve("name");
  public Arrival = this.session.retrieve("arrival");
  public Departure = this.session.retrieve("departure");
  public Nights = this.session.retrieve("nights");
  public Status = this.session.retrieve("status");
  public Room = this.session.retrieve("Room");
  public Adults = this.session.retrieve("Adults");
  public child = this.session.retrieve("child");
  public RoomType = this.session.retrieve("RoomType");
  public restype = this.session.retrieve("restype");
  public Rate = this.session.retrieve("rate");
  public conf = this.session.retrieve("conf");
  public market = this.session.retrieve("market");
  public Ratecode = this.session.retrieve("Ratecode");
  public Source = this.session.retrieve("source");
  public Percentage=this.session.retrieve("percentage");
  public Discreasons=this.session.retrieve("Discreasons");
  public DiscAmount=this.session.retrieve("DiscAmount");
  public Currency=this.session.retrieve("Currency");
  public house:any;
  public tableschanges =[];
  public alist =[];
  public clist =[];
  public dlist =[];
  public listu=[{}];
  public listtc=[];
  public roomlist=[];
  public listmarket=[];
  public rc=[];
  public creditlist=[];
  public wl=[];
  public sc=[];
  public arrcu=[];
  public drget=[];
  public arrycdt=[];
  public deptarry=[];
  public history=[];
  find={};

  constructor(private pppService:ReservationoptionService,private route:Router,public session:SessionStorageService ) { }
 

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
  

  //getting value for expirydate and merging it in a variable   
  private month:any;
  private year:any;
  onMonthChange(month:any){
    this.month = month.toString();
  }
  onYearChange(year:any){
    this.year = year.toString();
  }
  private creditcard_expiry:any;
  getcreditexpiry(){
      this.creditcard_expiry = this.month+"/"+this.year;
      console.log(this.creditcard_expiry);
  }
  

  
//Alert start
alerts={};
public user3;

alertsub(inputt) {
    this.pppService.alert(inputt)
    .subscribe( (resp:any )=> {
      this.user3=resp.ReturnCode; 
      if(this.user3=="RIS"){
        this.user3="Alert is Created for " +this.Name;
      }
     this.alerts=" ";
    },
    );  
   }

     //Fixed charges options 
    fixed:any=[];     
    public fixs;
     fix(inputt) {
       console.log(inputt);
         this.pppService.Fixedcharges(inputt)
         .subscribe(( user333:any )=> {
          this.fixs=user333.ReturnCode;
          if(this.fixs =="RIS"){
            this.fixs = "Fixed Charges is Created for "+this.Name;
          }
          else{
            this.fixs = " Please Enter Valid Date";
          }
          this.fixed="";
         },

            );  
              this.route.navigate(['reservationoption/']);
        }  
         //Fixed charges options end.



//privileges option service     
checkedvalue1:String;
     checkboxfun1(chk1){
this.checkedvalue1=chk1.values;
     }
 pri;
    privillege=[];    
  submits(inputt):void {
    console.log(inputt);
    let body= {'privileges_key': this.checkedvalue1 + " | Scheduled check out at " +inputt.checkouttime };
      this.pppService.privileges (body)
      .subscribe((users333:any) => {
     this.pri=users333.ReturnCode;
     if(this.pri=="RIS"){
       this.pri="Privilleges is created for "+this.Name;
     }  
      },
      );  
      this.route.navigate(['reservationoption/']);
     }
// privileges option end

//waitlist start
waitls:any={};
public waitlist;
submitwait(input){
this.pppService.waitli(input)
.subscribe((user333:any )=> {
  this.waitlist = user333.ReturnCode;
  if(this.waitlist=="RIS"){
    this.waitlist=" Waitlist Reason is created for "+this.Name;
  }
});
}
//waitlist start

submitroom(input){
this.pppService.Roommove(input)
.subscribe((user333:any )=> {
  this.waitlist = user333.ReturnCode;
  if(this.waitlist=="RIS"){
    this.waitlist=" Waitlist Reason is created for "+this.Name;
  }
});
}
// Traces start 
public tracess;
submittrace(input) {
    this.pppService.Traces(input)
    .subscribe(( user333:any )=> {
      this.tracess = user333.ReturnCode;
      if(this.tracess=="RIS"){
        this.tracess=" Traces is Add for "+this.Name;
      }
 
    });  
   }

// Trace End

// deposite start

resdepos={};
 
public resdepo;
submitdep(inputt):void {
    this.pppService.deposit(inputt)
    .subscribe( (user333:any) => {
      this.resdepo = user333.ReturnCode;
      if(this.resdepo=="RIS"){
        this.resdepo=" Deposit is Add For "+ this.Name;
      }
      this.pppService.getdeposit()
      .subscribe((resp: any) => {
        this.deptarry=resp.ReturnValue;
        console.log(this.deptarry)
      });
 this.resdepos=" ";
    },

            );  
              this.route.navigate(['reservationoption/']);
   }

   //upadte Deposit
   resdepos1={};
submitdep1(inputt):void {
    this.pppService.depositupdate(inputt)
    .subscribe( (user333:any) => {
      this.resdepo = user333.ReturnCode;
      if(this.resdepo=="RUS"){
        this.resdepo=" Deposit is Updated For "+ this.Name;
      }
      this.pppService.getdeposit()
      .subscribe((resp: any) => {
        this.deptarry=resp.ReturnValue;
        console.log(this.deptarry)
      });
    },

            );  
              this.route.navigate(['reservationoption/']);
   }


//delete
public delereturn;
subdele() {
  let body={
    "res_id":this.session.retrieve("id"),
    "res_unique_id":this.session.retrieve("uniq")
  };
    this.pppService.Delete(body)
    .subscribe( (resp:any)=> {
      this.delereturn=resp.ReturnCode;
      if(this.delereturn=="RDS"){
        this.delereturn="Reservation Deleted for " +this.Name;
      }
    },
    );  
   }


// insertCredit start
ic={}; 
public inscredit;
submit(inputt) {
  console.log(inputt);
  this.creditcard_expiry = this.month+"/"+this.year;
  inputt.pf_expiration_date = this.creditcard_expiry
    this.pppService.insertcredit(inputt)
    .subscribe( (user333:any) => {
      this.inscredit = user333.ReturnCode;
      if(this.inscredit == "RIS"){
        this.inscredit = "Credit Card is Created for "+this.Name;

        let paramss={
          "pf_id":this.session.retrieve("id1"),
       }
         this.pppService.getcredit(paramss)
         .subscribe((resp: any) => {
           this.arrycdt=resp.ReturnValue;
           console.log(this.arrycdt)
         }); 
         this.ic=" ";
      }
 
    });  
    this.route.navigate(['reservationoption/']);
   }

   // insertCredit start
ic1={}; 
submit1(inputt) {
  console.log(inputt);
  this.creditcard_expiry = this.month+"/"+this.year;
  inputt.pf_expiration_date = this.creditcard_expiry
    this.pppService.insertcredit1(inputt)
    .subscribe( (user333:any) => {
      this.inscredit = user333.ReturnCode;
      if(this.inscredit == "RUS"){
        console.log(this.inscredit);
        this.inscredit = "Credit Card Updated for "+this.Name;

        let paramss={
          "pf_id":this.session.retrieve("id1"),
       }
         this.pppService.getcredit(paramss)
         .subscribe((resp: any) => {
           this.arrycdt=resp.ReturnValue;
           console.log(this.arrycdt)
         }); 
         this.ic1="";
      }
 
    });  
    this.route.navigate(['reservationoption/']);
   }

// delete credit card
public delstatus;
delcredit(){
  let inputparms={
    "pf_id":this.session.retrieve("id1"),
    "cc_id": this.session.retrieve("ccid")
  }
  
  this.pppService.deletecredit(inputparms)
   .subscribe((resp: any) => {
    this.delstatus=resp.ReturnCode;
    if(this.delstatus == "RDS"){
      console.log(this.delstatus);
      this.delstatus = "Credit Card Detais is Delete for "+this.Name;

      let paramss={
        "pf_id":this.session.retrieve("id1"),
     }
       this.pppService.getcredit(paramss)
       .subscribe((resp: any) => {
         this.arrycdt=resp.ReturnValue;
         console.log(this.arrycdt)
       }); 
    }

  });

}
//queue
status={};
queno={};
queueProfile(){
  let inputparms={
    "Res_id":this.session.retrieve("id"),
    "rm_room":this.session.retrieve("id2"),
    "Res_unique_id":this.session.retrieve("uniq")
  }
  
  this.pppService.resqueue(inputparms)
   .subscribe((resp: any) => {
    this.status=resp.Return;
    this.queno=resp.QueueNumber;
  });

}
// fixed start

public tra;
submitrate():void {
    this.pppService.Fixedrate()
    .subscribe( (user333:any )=> {
      this.tra = user333.ReturnCode;
      if(this.tra=="RIS"){
        this.tra="Fixed Rate is created for "+this.Name;
      }
    },
      );  
      this.route.navigate(['reservationoption/']);
   }

   
privil:any;
  ngOnInit() {
    this.pppService.gethousekeepingdata()
    .subscribe((resp: any) => {
      this.house = resp.ReturnValue;

    });
    this.privil =[ { val:false, values:"No Post"},{ val:false, values:"Authourized Direct Bill"},
    { val:false, values:"Pre Stay Charging"}]

 this.pppService.getchaTables1()
   .subscribe((resp: any) => {
     this.tableschanges=resp.ReturnValue;
   });

   this.pppService.getarea()
   .subscribe((resp: any) => {
     this.alist=resp.ReturnValue;
   });

   this.pppService.getcode()
   .subscribe((resp: any) => {
     this.clist=resp.ReturnValue;
   });

   this.pppService.getdepartment()
   .subscribe((resp: any) => {
     this.dlist=resp.ReturnValue;
   });


     this.pppService.gettransaction()
   .subscribe((resp: any) => {
     this.listtc=resp.ReturnValue;
   });

   this.pppService.getroomtype()
   .subscribe((resp: any) => {
     this.roomlist=resp.ReturnValue;
   });

   this.pppService.getmarket()
   .subscribe((resp: any) => {
     this.listmarket=resp.ReturnValue;
   });

   this.pppService.getratecode()
   .subscribe((resp: any) => {
     this.rc=resp.ReturnValue;
   });
   

   this.pppService.getsourcecode()
   .subscribe((resp: any) => {
     this.sc=resp.ReturnValue;
   });
   this.pppService.getcurrency()
   .subscribe((resp: any) => {
     this.arrcu=resp.ReturnValue;
   });
   
   this.pppService.getdepositrule()
   .subscribe((resp: any) => {
     this.drget=resp.ReturnValue;
   });
   
   let paramss={
    "pf_id":this.session.retrieve("id1"),
 }
   this.pppService.getcredit(paramss)
   .subscribe((resp: any) => {
     this.arrycdt=resp.ReturnValue;
     console.log(this.arrycdt)
   });   


   this.pppService.getdeposit()
   .subscribe((resp: any) => {
     this.deptarry=resp.ReturnValue;
     console.log(this.deptarry)
   });

   let params={
    "pf_id":this.session.retrieve("id1"),
 }
   this.pppService.gethistory(params)
   .subscribe((resp: any) => {

     this.history=resp.ReturnValue;
     console.log(this.arrycdt)
   }); 
 
   this.pppService.getreason()
   .subscribe((resp: any) => {
     this.wl=resp.ReturnValue;
   });

   this.pppService.getcredittype()
   .subscribe((resp: any) => {
     this.creditlist=resp.ReturnValue;
   });
   

  }
  // room move
  public rmroom;
  selectindexs=null;
  selected( detailed,index){
this.selectindexs=index;
this.rmroom=detailed.rm_room;
  }
  //credit card
  deletes=true;
  edits=true;
public credid;   
  selectindex=null;
selectMembersCredit(details,index){
this.selectindex=index;
this.credid=details.cc_id;
if(this.credid==details.cc_id){
this.deletes=false;
this.edits=false;
}else{
  this.deletes=true;
  this.edits=true;
}
this.session.store("ccid",details.cc_id.toString());
this.session.store("depid",details.deposit_id.toString());
this.session.store("id1",details.pf_id);
}

//deposit
public dedit=true;
public did
selectMembersdeposit(details,index){
this.selectindex=index;
this.did=details.deposit_id;
if(this.did=details.deposit_id){
  this.dedit=false;
}
else
{
  this.dedit=true;
}
this.session.store("depid",details.deposit_id.toString());
}
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

  doc.save('a4.pdf');
}
}


