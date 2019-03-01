import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { CasheringinhouseguestService} from './casheringinhouseguest.service';
import { ToasterServiceService } from '../../toaster-service.service'; 

@Component({
  selector: 'app-casheringinhouseguest',
  templateUrl: './casheringinhouseguest.component.html',
  styleUrls: ['./casheringinhouseguest.component.css'],
  providers:[ CasheringinhouseguestService],
  
})
export class CasheringinhouseguestComponent implements OnInit {

  public checkout:any={};
  list:any = [
    {
      id: 1,
      label: 'one'
    },
    {
      id: 2,
      label: 'two'
    },
    {
      id: 3,
      label: 'three'
    },
    {
      id: 4,
      label: 'four'
    },
  ];

  public items = [
    // { Room: '101', Name: 'Anderson',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design' },
    // { Room: '102', Name: 'Bala',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'STAY OVER',Company:'Metro Design'},
    // { Room: '103', Name: 'Jeevitha',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'DUE OUT',Company:'Metro Design'},
    // {  Room: '104', Name: 'Priya',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'NO SHOWS',Company:'Metro Design' },
    // {  Room: '105', Name: 'peter',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CHECKED IN',Company:'Metro Design' },
    // {  Room: '106', Name: 'prince',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'CANCELLATION',Company:'Metro Design' },
   
    // {  Room: '107', Name: 'Ander',Alt_name:'',Arrival:'20-05-2018',Departure:'21-05-2018',Balance:500,Status:'OPEN FOLIO',Company:'Metro Design' },
  ];

public folio=[
  // {FolioNo:'122',Date:'20-05-2018',Name:'Anderson',Wnd:'1',FolioAmount:'5000',payeeName:'Jack',Invoice:''},
  // {FolioNo:'122',Date:'20-05-2018',Name:'Anderson',Wnd:'1',FolioAmount:'5000',payeeName:'Jack',Invoice:''},
  // {FolioNo:'122',Date:'20-05-2018',Name:'Anderson',Wnd:'1',FolioAmount:'5000',payeeName:'Jack',Invoice:''},
  // {FolioNo:'122',Date:'20-05-2018',Name:'Anderson',Wnd:'1',FolioAmount:'5000',payeeName:'Jack',Invoice:''},
  // {FolioNo:'122',Date:'20-05-2018',Name:'Anderson',Wnd:'1',FolioAmount:'5000',payeeName:'Jack',Invoice:''},
  // {FolioNo:'122',Date:'20-05-2018',Name:'Anderson',Wnd:'1',FolioAmount:'5000',payeeName:'Jack',Invoice:''},

  
];


  constructor(private cashinservice: CasheringinhouseguestService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { 
    this.orderr=this.housetable;
    this.housetable1=this.housetable;
  }
  Success(message){
    //  console.log("message",message);
     this.toasterService.success(message);
   }
public money=[];
public paycode=[];
public housetable=[];
public resty=[];
public foliohis=[];
public zerovar:any;
public letter:any;
public orderr=[];
public housetable1=[];
public window=[];
public exprydt:any;
public successmsg:any;
public failuremsg:any;
public zerosuccessmsg:any;
public zerofailuremsg:any;
public privilegesreturn;
public privilegesstatus;
public privilegesbind;
public showhideprivileges;
checkselectClr:boolean;

public restyp:any;
disone=true
distwo=true
siva=true
  ngOnInit() {
    this.cashinservice.currencydropdown()
    .subscribe((resp: any) => {

     this.money=resp.Return;
    //  console.log(this.money);
   });

   this.cashinservice.inhousetable()
   .subscribe((resp: any) => {

    this.housetable=resp.ReturnValue;
    this.orderr=this.housetable;
    // console.log(this.housetable);
  });

//   this.cashinservice.inhousetable()
//   .subscribe((resp: any) => {

//    this.orderr=resp.ReturnValue;
//    console.log(this.housetable);
//  });

  this.cashinservice.restypedropdown()
  .subscribe((resp: any) => {
    this.resty = resp.ReturnValue;
// console.log(this.resty);
  });


  // this.cashinservice.foliohistory()
  // .subscribe((resp: any) => {
  //   this.foliohis = resp.Return;
  // });

  this.cashinservice.paymentcodedropdown()
  .subscribe((resp: any) => {
      this.paycode=resp.ReturnValue;
       console.log(this.paycode);
   });

  }
  showdiv="900";
  selectoption(flag){
    console.log(flag);
    this.showdiv=flag;
    console.log(flag);
  }

  showdivv="0";
  selectoption1(flag)
  {
    console.log("showdivv",flag);
    this.showdivv=flag;
    console.log(flag);
  }
public balnc=[];  
public checkname; 
public lambreturn:any;
public pristatus:any;
public showhide=false;
public Res_unique_id_getting:any;
public Res_id_getting:any;
selectindex=null;
selectMembersEdit(details,index)
{
    
      
      this.Res_id_getting = details.res_id
      this.Res_unique_id_getting = details.res_unique_id
      this.session.store("arr",details.res_arrival.toString());
      this.session.store("depar",details.res_depature.toString());
      this.session.store("guest_status",details.res_guest_status);
      this.session.store("accuratebalance",details.balance);
      this.session.store("companyname",details.pf_account)
          console.log("ession valuw",details.res_arrival,details.balance,details.pf_account)
      console.log("Res_id_getting",this.Res_id_getting,this.Res_unique_id_getting)


      this.selectindex=index;
      // condition for checkout button
      console.log("statussssssssssssssssss",details);
      if(details.balance!=0 && details.res_guest_status=="due out"){
        this.distwo=false;
        console.log("cashiering check status",details.res_guest_balance,details.res_guest_status)
      }
      else{
        this.disone=true;
        console.log("cashiering check status else",details.res_guest_balance,details.res_guest_status)
      }
      // condition for checkout zero button
      if(details.balance <=0 && details.res_guest_status=="due out"){
        console.log("status,balance",details.res_guest_balance,details.res_guest_status)
        this.disone=false;
        this.distwo=true;
      }
      else{
        this.disone=true;
        console.log("status,balance,else",details.res_guest_balance,details.res_guest_status)
      }

      // condition for billing button
      if(details.res_guest_balance!="null"){
        this.siva=false; 
      }
      else{
        this.siva=true; 
      }

      //  console.log("res id",details.res_id)
      // if(details.res_id!=0){
      //   this.disthree=false;
      // }
      // else{
      //   this.disthree=true;
      // }
      this.balnc=details.balance;
      this.session.store("id",details.res_room.toString());
      this.session.store("id1",details.res_id.toString());
      this.session.store("name",details.pf_firstname);
      this.session.store("cc",details.res_creditcard_number);
      this.session.store("expdate",details.res_exp_date);
      // for displaying
      // this.session.store("balanc",details.res_guest_balance);
 
      // this.session.store("gstat",details.res_guest_status);
      // this.session.store("rtcd",details.res_rate_code);
      // this.session.store("rte",details.res_rate);
      // this.session.store("persn",details.res_adults);
      this.checkname=details.Name;

      // alert id getting 
      this.cashinservice.lampalert(this.Res_id_getting,this.Res_unique_id_getting)
      .subscribe((resp: any) => {
      this.lambreturn=resp.ReturnValue;
      this.pristatus=resp.Status;
      if(this.pristatus=="Success"){
      if(this.lambreturn.length!=0){
      this.showhide=true;
      }else if(this.lambreturn.length==0){
      this.showhide=false;
 }
 }

});
// privileges alert
this.cashinservice.lampprivilegest(this.Res_id_getting)
      .subscribe((resp: any) => {
      this.privilegesreturn=resp.ReturnValue;
      this.privilegesstatus=resp.Status;
      if(this.privilegesstatus=="Success"){
      if(this.privilegesreturn.length!=0){
      this.showhideprivileges=true;
      }else if(this.privilegesreturn.length==0){
      this.showhideprivileges=false;
}
      }
    });
  }
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



  //Checkout button
checkoutpost(arg1,balnc)
  {
    if(this.showdiv=='2')
    {
      console.log("checking arguements in checkout",arg1,balnc)
      this.creditcard_expiry = this.month+"/"+this.year;
      console.log("before expiry",arg1.cardno,this.creditcard_expiry);
  
      this.cashinservice.expirydate(arg1.cardno,this.creditcard_expiry)
      .subscribe((resp: any) => {
          this.exprydt=resp.Return_value;
          console.log(this.exprydt);
  
  
        this.cashinservice.checkoutbuttoninsert(arg1,balnc,this.exprydt)
        .subscribe((resp: any) => {
        this.letter=resp.ReturnCode;
        if(this.letter=="RIS")
        {
          this.successmsg="payment was done successfully";
          console.log("workinggggggggggggggggg",this.successmsg)
          this.Success(this.successmsg);
                  //refresh
         this.cashinservice.inhousetable()
         .subscribe((resp: any) => {
   
         this.housetable=resp.ReturnValue;
         // console.log(this.housetable);
         });
        }
        else   
        {
          this.failuremsg="Unable to update";
        }
        })
 
       });  
        
       
    }
    else
    {
      this.cashinservice.checkoutbuttoninsert1(arg1,balnc)
      .subscribe((resp: any) => {
      this.letter=resp.ReturnCode;
      if(this.letter=="RIS")
      {
        this.successmsg="payment was done successfully";
        this.cashinservice.inhousetable()
        .subscribe((resp: any) => {
  
        this.housetable=resp.ReturnValue;
        // console.log(this.housetable);
        });
      }
      else   
      {
        this.failuremsg="Unable to update";
      }

      })
      
      
    }
    this.showdiv="900";
    this.showdivv="0";
}

close(){
  this.showdiv="900";
    this.showdivv="0";
}

//zero checkout
checkoutfun(){
  this.cashinservice.checkoutzero()
  .subscribe((resp: any) => {
    this.zerovar = resp.ReturnCode;
    if(this.zerovar=="RUS"){
      this.zerosuccessmsg="successfully checked out";
      this.cashinservice.inhousetable()
      .subscribe((resp: any) => {
    
       this.housetable=resp.ReturnValue;
       // console.log(this.housetable);
     });
    }
    else{
      this.zerofailuremsg="Unable to update";
    }
  });
  //refresh
  this.cashinservice.inhousetable()
  .subscribe((resp: any) => {

   this.housetable=resp.ReturnValue;
   // console.log(this.housetable);
 });
}


//filter data in table  using checkbox
checkboxflg=[];
count=0;
copy=[];
filtercheckboxList:any=[];
filtercheckboxData(ngmodel, flag) {
  if (ngmodel == true) {
       this.filtercheckboxList.push(flag);
       console.log("fileter checkbox",this.filtercheckboxList)
  }else{
    for(var i=0;i<this.filtercheckboxList.length;i++){
      if(flag==this.filtercheckboxList[i]){
        this.filtercheckboxList.splice(i,1);
        console.log("else filter checkbox",this.filtercheckboxList)
        break;
      }
    }
  }
  //final list for table
  if(this.filtercheckboxList!=null && this.filtercheckboxList.length>0){
   
    if(this.count==0){
      this.count++;
   this.copy =JSON.parse(JSON.stringify(this.housetable))
    }
  this.housetable=[];
  // console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
  for(var j=0;j<this.copy.length;j++){
    if(this.filtercheckboxList.includes(this.copy[j].res_guest_status)){
      this.housetable.push(this.copy[j]);
    }
  }
}else{
  this.housetable=this.copy; 
}
}

//dropdown filter
onSelect(val){
  console.log(val);
  console.log("orderrrrrrrrrrrr",this.orderr)
  this.housetable = this.orderr.filter(x => x.res_res_type == val)
} 

public mainroom:string;
public mainpersonname:string
public company:string
clear(){

  this.mainroom=''
  this.mainpersonname=''
  this.company=''
  this.restyp=''
  this.filtercheckboxList=[];
  this.checkselectClr=false;
  console.log("clear log",this.checkselectClr)
  this.cashinservice.inhousetable()
  .subscribe((resp: any) => {

   this.housetable=resp.ReturnValue;
   // console.log(this.housetable);
 });
}
//date filter

filterDatefrmList(startDate,endDate){
  if(startDate!=null && endDate!=null){
    let selectedMembers = this.housetable.filter(
      m => new Date(m.res_arrival) >= new Date(startDate) && new Date(m.res_arrival) <= new Date(endDate)
      );
        console.log(selectedMembers);
        this.housetable = selectedMembers;
  }else {
    this.housetable = this.housetable;
  }
  
}


filterDatefrmdep(startDate,endDate){
  if(startDate!=null && endDate!=null){
    let selectedMembers = this.housetable.filter(
      m => new Date(m.res_depature) >= new Date(startDate) && new Date(m.res_depature) <= new Date(endDate)
      );
        console.log(selectedMembers);
        this.housetable = selectedMembers;
  }else {
    this.housetable = this.housetable;
  }
  
}
}
