import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { CasheringinhouseguestService} from './casheringinhouseguest.service';

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


  constructor(private cashinservice: CasheringinhouseguestService, public session:SessionStorageService,private route:Router) { 
    this.orderr=this.housetable;
    this.housetable1=this.housetable;
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
selectindex=null;
selectMembersEdit(details,index)
{
      this.selectindex=index;
      // condition for checkout button
      console.log("statussssssssssssssssss",details);
      if(details.res_guest_balance!=0 && details.res_guest_status=="due out"){
        this.distwo=false;
      }
      else{
        this.disone=true;
      }
      // condition for checkout zero button
      if(details.res_guest_balance==0 && details.res_guest_status=="due out"){
        this.disone=false;
        this.distwo=true;
      }
      else{
        this.disone=true;
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
      this.balnc=details.res_guest_balance;
      this.session.store("id",details.res_room.toString());
      this.session.store("id1",details.res_id.toString());
      this.session.store("name",details.pf_firstname);
      this.session.store("cc",details.res_creditcard_number);
      this.session.store("expdate",details.res_exp_date);
      // for displaying
      // this.session.store("balanc",details.res_guest_balance);
      // this.session.store("arr",details.res_arrival);
      // this.session.store("depar",details.res_depature);
      // this.session.store("gstat",details.res_guest_status);
      // this.session.store("rtcd",details.res_rate_code);
      // this.session.store("rte",details.res_rate);
      // this.session.store("persn",details.res_adults);
      this.checkname=details.Name;
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
        }
        else   
        {
          this.failuremsg="Unable to update";
        }
        })
         //refresh
         this.cashinservice.inhousetable()
         .subscribe((resp: any) => {
   
         this.housetable=resp.ReturnValue;
         // console.log(this.housetable);
         });
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
      }
      else   
      {
        this.failuremsg="Unable to update";
      }
      this.cashinservice.inhousetable()
      .subscribe((resp: any) => {

      this.housetable=resp.ReturnValue;
      // console.log(this.housetable);
      });
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

clear(){

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
