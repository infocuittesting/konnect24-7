import { Component, OnInit, Input ,ViewChild,ElementRef } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as jsPDF from 'jspdf';
import { Router } from "@angular/router";
import { ReservationoptionService } from "./reservationoption.service";
import { SessionStorageService } from "ngx-webstorage";
import { DatePipe } from '@angular/common'; 
import * as $ from 'jquery';

 import { ToasterServiceService } from '../../toaster-service.service'; 

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
  public uniqres=this.session.retrieve("uniq");
  //for accompany guest
  public aname = this.session.retrieve("pf_fname");
  public lastnam =this.session.retrieve("pf_lastname");
  public accname:any;
  public profid =this.session.retrieve("profileid");
  public acccountry=this.session.retrieve("pf_individual_country");
  public accdob=this.session.retrieve("dateofbirth");
   
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
  public listaccompay:any =[];
  public listrate;
  public StayTotal;
  public listprivileges;
  public rate;
  find={};

  constructor(private pppService:ReservationoptionService,private route:Router,public session:SessionStorageService,private toasterService:ToasterServiceService ) { }
   Success(message){
    //  console.log("message",message);
     this.toasterService.success(message);
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
        this.Success(this.user3);
      }
     this.alerts=" ";
    },
    );  
   }

     //Fixed charges options 
    fixed:any=[];     
    public fixs;
     fix(inputt) {
       console.log("Fixed charges workinggggggg",inputt);
         this.pppService.Fixedcharges(inputt)
         .subscribe(( user333:any )=> {
          this.fixs=user333.ReturnCode;
          if(this.fixs =="RIS"){
            this.fixs = "Fixed Charges is Created for "+this.Name;
            this.Success(this.fixs);
            console.log("workingggggg",this.fixs)
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
checkedvalue1=[];
     checkboxfun1(chk1){
this.checkedvalue1.push(chk1.privileges_id);
console.log("tesssssssss",this.checkedvalue1)
     }
 pri;
    privillege=[];    
  submits(inputt):void {
    console.log(inputt);
    let body= {'privileges_key_id': this.checkedvalue1,"schedule_time":inputt.checkouttime };
      this.pppService.privileges (body)
      .subscribe((users333:any) => {
     this.pri=users333.ReturnCode;
     if(this.pri=="RIS"){
       this.pri="Privilleges is created for "+this.Name;
       this.Success(this.pri);
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
    this.Success(this.waitlist);
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
        this.Success(this.tracess);
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
        this.Success(this.resdepo);
      }
      this.pppService.getdeposit()
      .subscribe((resp: any) => {
        this.deptarry=resp.ReturnValue;
        console.log("workinggggggg",this.deptarry)
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
        console.log("workingggggggg",this.delereturn)
        this.Success(this.delereturn);
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
        this.Success(this.inscredit);
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
        this.Success(this.ic1);
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
      this.Success(this.delstatus);

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
status:any;
queno:any;
queueProfile(){
  let inputparms={
    "Res_id":this.session.retrieve("id"),
    "rm_room":this.session.retrieve("id2"),
    "Res_unique_id":this.session.retrieve("uniq")
  }

  this.pppService.resqueue(inputparms)
   .subscribe((resp: any) => {
    
    if(resp.ReturnCode=="PQTR"){
      this.status=" ";
      this.queno=resp.Return;
    }else{
      this.status=resp.Return;
      this.queno="Queue Number is"+ resp.QueueNumber;
    }
    
  });

}
//fixedrate checkbok value
checkvalue(fixedrate){
  if(fixedrate=="true"){
    this.fixedrate=1;
  }else{
    this.fixedrate=0;
  }
}

// fixed start

public tra;
public fixedrate;

submitrate() {
  if(this.Currency==null){
    this.Currency="";
  }
  if(this.DiscAmount==null){
    this.DiscAmount="";
  }
  if(this.Percentage==null){
    this.Percentage="";
  }
  if(this.market==null){
    this.market="";
  }
  if(this.Source==null){
    this.Source="";
  }
  let body=
  {
   "Res_id":this.session.retrieve("id"),
   "fixed_rate":this.fixedrate,
   "RES_Arrival":this.Arrival,
   "RES_Depature":this.Departure,
   "RES_Adults":this.Adults,
   "RES_Child":this.child,
   "RES_Room_Type":this.RoomType,
   "RES_RTC":this.RoomType,
   "RES_Room":this.Room,
   "RES_Rate_Code":this.Ratecode,
   "RES_Rate":this.Rate,
   "RES_Disc_Amount":this.DiscAmount,
   "RES_Disc_perc":this.Percentage,
   "RES_Disc_Reason":this.Discreasons,
   "RES_Market":this.market,
   "RES_Source":this.Source,
   "RES_Currency":this.Currency
   };
    this.pppService.Fixedrate(body)
    .subscribe( (user333:any )=> {
      this.tra = user333.ReturnCode;
      if(this.tra=="RIS"){
        this.tra="Fixed Rate is created for "+this.Name;
        console.log("working fine",this.tra)
        this.Success(this.tra);
        console.log("workinggggggg")
      }
    },
      );  
      this.route.navigate(['reservationoption/']);
   }
//accompany insert
public acco;
subaccin(){
  if(this.accdob==null){
    this.accdob=" ";
  }else{
    this.accdob=this.accdob;
  }
  let body={
    "res_id":this.Id,
    "res_unique_id":this.uniqres,
    "pf_id":this.profid,
    "accompanying_name":this.accname,
    "accompanying_city":this.acccountry,
    "accompanying_birthday":this.accdob
  }
  console.log("testttst",body)
  this.pppService.accompanyinsert(body).subscribe((resp:any)=>{
  this.acco=resp.Returncode;
  if(this.acco=="RIS"){
    this.acco="Accompany Guest is add Successfully";
    this.session.clear("pf_fname");
    this.session.clear("pf_lastname");
  
    this.session.clear("profileid");
    this.session.clear("pf_individual_country");
    this.session.clear("dateofbirth");
    this.accname="";
    this.acccountry="";
    this.accdob='';
    this.pppService.getaccompany()
    .subscribe((resp: any) => {
      this.listaccompay=resp.ReturnValue;
    });
  }

})
}

//select table row in accompany 
public accid;
selectMembersEdit(details){
  this.accid= details.accompanying_id;
}

//accompany Detach
public detac;
detach(){
  let body={
    "res_id":this.session.retrieve("id"),
    "res_unique_id":this.uniqres,
    "accompanying_id":this.accid
  }
  this.pppService.accompanydelete(body).subscribe((resp:any)=>{
    this.detac=resp.Returncode;
    if(this.detac=="RDS"){
      this.acco="Accompany Guest is Detached Successfully ";
      this.pppService.getaccompany()
      .subscribe((resp: any) => {
        this.listaccompay=resp.ReturnValue;
      });
    }
  })
}   

//Select date
selectEdit(details){
this.rate=details.RateCode +" Rate $10 flat off standard rate" ;
}
// privil:any;
  ngOnInit() {
    if(this.aname==null && this.lastnam==null){
      this.aname=" ";
      this.lastnam=" ";
      this.accname=this.aname+" "+this.lastnam;
    }
    else{
      this.accname=this.aname+" "+this.lastnam;
    }
    console.log("testttttttttt",this.accname);
    this.pppService.gethousekeepingdata()
    .subscribe((resp: any) => {
      this.house = resp.ReturnValue;

    });
    // this.privil =[ { val:false, values:"No Post"},{ val:false, values:"Authourized Direct Bill"},
    // { val:false, values:"Pre Stay Charging"}]

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


//Get privileges
this.pppService.getprivileges()
.subscribe((resp: any) => {
  this.listprivileges=resp.ReturnValue;
});

//Get accompany
   this.pppService.getaccompany()
   .subscribe((resp: any) => {
     this.listaccompay=resp.ReturnValue;
   });

   //Get rate summary
   this.pppService.getratesummary()
   .subscribe((resp: any) => {
     this.listrate=resp.ReturnValue;
     this.StayTotal=resp.StayTotal;
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

//navigationnroute
navi(){
   //  this.navtag.navigate ="Rev";
   this.session.store("navigate","Revopt");
}

}


