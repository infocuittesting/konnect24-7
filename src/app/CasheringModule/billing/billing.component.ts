import { Component, OnInit, Input } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
import {BillingService} from './billing.service';
// import { ContextMenuService } from 'angular2-contextmenu/src/contextMenu.service';
// import { ContextMenuComponent } from 'angular2-contextmenu/src/contextMenu.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  providers:[BillingService],
})
export class BillingComponent implements OnInit {
edtvar=true;
house=[];
home=[];
hist=[];
public navigat=[];
public navtbl=[];
public windowbal=[];
public transroom:any;

public wind=[];
public money=[];
public roomnum=[];
public windowvar=[];
public billing:any;

public letter:any;
public successmsg:any;
public failuremsg:any;
public postsuccessmsg:any;
public postfailuremsg:any;
public editfailuremsg:any;
public editsuccessmsg:any;
public paysuccessmsg:any;
public payfailuremsg:any;
public transroomsuccessmsg:any;
public transroomfailuremsg:any;
public PF_Expiration_Date:any;
public postdetails=[];
public showdetails=[];
public pscd_dd=[];
public paycode=[];


public expdt:any;

add={};
resty=[];
vaal1:any=[];
vaal2:any=[];

public totalPos = 0;
public totalamt = 0;

public editbil:any;

butn1:boolean;
butn2:boolean;

limit=10;
public company;
  public historyitems = [
    // { Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    // {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    // {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    // {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
    // {Action: 'Night Audit posting', Revenue_Date:'2018-06-19' ,Posting_date:'2018-06-19',User:'Supervisor',name:'Antony',Reason:'Payment posted for 2',Description:'Payment posted successfully'},
  ];

  public items = [
    // { Date: '16-04-2018', Code: 4121,Description:'parking',Amount:300 },
    // { Date: '17-04-2018', Code: 4525,Description:'hotel',Amount:500 },
    // { Date: '18-04-2018', Code: 4444,Description:'parking',Amount:400 },
    // { Date: '19-04-2018', Code: 4321,Description:'hotel',Amount:100 },
  ];
  showMore=false;
  showMore1=false;
  showMore2=false;
  showMoretable=false;
   constructor(private cashbillservice: BillingService, public session:SessionStorageService,private route:Router) { }
  public listmark:any=[];

    //show more
    showMoreBut(){
      this.showMore=true;
    }
    //show less
    showLessBut(){
      this.showMore=false;
    }

        //show more
        showMoreBut1(){
          this.showMore1=true;
        }
        //show less
        showLessBut1(){
          this.showMore1=false;
        }
        
    //show more
    showMoreBut2(){
      this.showMore2=true;
    }
    //show less
    showLessBut2(){
      this.showMore2=false;
    }
        //show more
        showMoreButtable(){
          this.showMoretable=true;
        }
        //show less
        showLessButtable(){
          this.showMoretable=false;
        }
  // service call for editposting payment 
  editbilling(amt,quan,ed_arcode,supple,ref,ed_cqno)
  {
    console.log("edit values",amt,quan,ed_arcode,supple,ref,ed_cqno);
    this.cashbillservice.updateeditposting(amt,quan,ed_arcode,supple,ref,ed_cqno)
    .subscribe((resp: any) => {
      this.editbil=resp.ReturnCode;
      console.log(this.editbil);

      if(this.editbil=="RUS")
      {
        this.editsuccessmsg="payment was updated successfully";
      }
      else
      {
        this.editfailuremsg="Currently we are unable to process your request. please try again later";
      }
   });
  }

//  service for transfer to another window
win_id:any;
transfertowindow(args)
{
      console.log("windoww");
      if(args == "win1"){
        this.win_id = "1";
      }else{
        this.win_id = "2";
      }
      this.cashbillservice.transferwindow(this.poscdid,this.win_id)
      .subscribe((resp: any) => {
       this.windowvar=resp.Return;
      //  console.log(this.windowvar);
     });

    // to refresh the page after transferred
     this.cashbillservice.inhousetobilling()
    .subscribe((resp: any) => {
      this.navigat = resp.ReturnValue;
      this.navtbl=resp.ReturnValue1;
      this.windowbal=resp.ReturnValue2;
     
      //seperating values for window1 and window2 
      this.vaal1=[];
      this.vaal2=[];
      for(let seperat of this.navtbl){
        
        if (seperat['post_window']==1){
          this.vaal1.push(seperat) //for window1
        }
        else{
          this.vaal2.push(seperat)  //for window2

        }
      }
    });
   }


//payment button service

  checkoutpost(selected,currency,amount,ref,supp,cardno)
  { 
    if(this.showdiv=='2'){
    this.creditcard_expiry = this.month+"/"+this.year;
     //PF_Expiration_Date is the name should given in webservice 
    console.log("twodata",cardno,this.expdt)
    this.cashbillservice.expirydate(cardno, this.creditcard_expiry)
    .subscribe((resp: any) => {
        this.expdt=resp.Return_value;
         console.log("credit card expiry date",typeof(this.expdt),this.expdt);

         this.cashbillservice.postbuttoninsert(selected,currency,amount,ref,supp,this.expdt)     
         .subscribe((resp: any) => {
           console.log("payment inputs",selected,currency,amount,ref,supp,this.expdt)
   
         this.letter=resp.ReturnCode;
        //  console.log("letterrrrrrrrrrrrrrrrrrrrrrrr",this.letter);
         if(this.letter=="RIS"){
           this.paysuccessmsg="payment was done successfully";
         }
         else{
           this.payfailuremsg="Unable to update";
         }
       })
     });
    }

    else
    {
        this.cashbillservice.postbuttoninsert1(selected,currency,amount,ref,supp)     
        .subscribe((resp: any) => {
          console.log("payment inputs other than credit card",selected,currency,amount,ref,supp)

        this.letter=resp.ReturnCode;
      //  console.log("letterrrrrrrrrrrrrrrrrrrrrrrr",this.letter);
        if(this.letter=="RIS"){
          this.paysuccessmsg="payment was done successfully";
        }
        else{
          this.payfailuremsg="Unable to update";
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

public codeidarr=[];
  //add rows in post screen
public affFlagg=false;
addRows(add)
{
  if(add.Code!=null && add.Amount!=null && add.Qty!=null && add.Windowno!=null )
  {
    
  this.codeidarr = this.pscd_dd.filter(
           orgn => orgn.posting_code_description === add.Code);

           console.log("codeeeee_desssss",this.codeidarr,this.codeidarr[0].posting_code_id);
      // console.log("totalpos and totalamt",this.totalPos,this.totalamt)

      this.showdetails.push({
        // "business_id":this.session.retrieve("business_id"),
        "Post_code_id":this.codeidarr[0].posting_code,
        "Post_des":add.Code,
        "Posting_amount":add.Amount,
        "Posting_quantity":add.Qty,
        "Post_window":add.Windowno,
        "Arrangement_code":add.Arr_Code,
        "Checkno":add.Check_No,
        "Posting_supplement":add.Supplement,
        "Posting_reference":add.Reference,
        "emp_id":"2",
        "editFlag":false
      });

      this.postdetails.push({
        // "business_id":this.session.retrieve("business_id"),
        "Post_code_id":this.codeidarr[0].posting_code_id,
        // "Post_des":add.Description,
        "Posting_amount":add.Amount,
        "Posting_quantity":add.Qty,
        "Post_window":add.Windowno,
        "Arrangement_code":add.Arr_Code,
        "Checkno":add.Check_No,
        "Posting_supplement":add.Supplement,
        "Posting_reference":add.Reference,
        "emp_id":"2",
    
      });
      console.log("amount", add.Amount,typeof( add.Amount))

      this.totalPos += 1;
      this.totalamt += Number(add.Amount)*Number(add.Qty);

      this.add={};
      // console.log("postdetails",this.postdetails);
  }
}
saveroomDetails(postdetails)
{
      console.log("postdetailssssssssssss",this.postdetails,this.totalPos,this.totalamt);
      this.cashbillservice.postingbill(this.postdetails,this.totalPos,this.totalamt)
      .subscribe((resp: any) => {
       this.billing=resp.ReturnCode;
       console.log("return of billing",this.billing);
       if(this.billing=="RIS")
       {
        this.postsuccessmsg="Payment was posted successfully";
       }
      else
      {
        this.postfailuremsg="Currently we are unable to process your request. please try again later";
      }
     });

     this.showdetails=[];
     this.postdetails=[];
     this.totalPos=0;
     this.totalamt=0;
     //refresh
     this.cashbillservice.inhousetobilling()
     .subscribe((resp: any) => {
       this.navigat = resp.ReturnValue;
       this.navtbl=resp.ReturnValue1;
       this.windowbal=resp.ReturnValue2;
       console.log("return  value 111111111111111111")
       console.log(this.navtbl)
       //seperating values for window1 and window2 
       this.vaal1=[];
       this.vaal2=[];
       for(let seperat of this.navtbl){
         
         if (seperat['post_window']==1){
           this.vaal1.push(seperat) //for window1
         }
         else
         {
           this.vaal2.push(seperat)  //for window2
 
         }
       }
       console.log("***************************after service hits******************************");
       console.log("vaal1",this.vaal1);
       console.log("vaal2",this.vaal2);
          
     });
     
}

// delete buttons
deleterows(index,room){
  this.showdetails.splice(index,1);
  this.postdetails.splice(index,1);
  this.totalPos  -= 1;
  this.totalamt -= Number(room.Amount)*Number(room.Qty);
}

// edit rows
editrows(index,room){
  console.log("showpostroom",room)
  this.showdetails[index].editFlag=true;
  this.totalPos  -= 1;
  this.totalamt -= Number(room.Amount)*Number(room.Qty);
  // this.postdetails[index].editFlag=true;
  // this.postdetails.splice(index,1);
}
del_key:any;
saveButton(index,room){
  console.log("room details savebutton",room,typeof(room))

  // this.del_key = "editFlag"
  // delete room.editFlag;
  console.log("room details savebutton after delete flag",room)
  this.totalPos += 1;
  this.totalamt += Number(room.Amount)*Number(room.Qty);

  this.postdetails[index]['Posting_amount'] = room.Posting_amount;
  this.postdetails[index]['Posting_quantity'] = room.Posting_quantity;
  this.postdetails[index]['Post_window'] = room.Post_window;
  this.postdetails[index]['Arrangement_code'] = room.Arrangement_code;
  this.postdetails[index]['Checkno'] = room.Checkno;
  this.postdetails[index]['Posting_supplement'] = room.Posting_supplement;
  this.postdetails[index]['Posting_reference'] = room.Posting_reference;
  this.showdetails[index].editFlag=false;
  this.postdetails[index].editFlag=false;
  
}
//close button in posting payment 
clearpost(){
  this.showdetails=[];
  this.postdetails=[];
  this.totalPos=0;
  this.totalamt=0;
}


ngOnInit() {

  // posting history
  this.cashbillservice.gethistorylog()
  .subscribe((resp: any) => {
      this.house = resp.History;
      this.home = resp.Changes;
      this.hist = resp.Original;
      console.log("house",this.house,typeof(this.house));
      console.log("original",this.home,typeof(this.home));
      console.log("changes",this.hist,typeof(this.hist));

    });
  //currency dropdown
  this.cashbillservice.currencydropdown()
  .subscribe((resp: any) => {
      this.money=resp.Return;
      //  console.log(this.money);
   });

   //postingcode dropdown
  this.cashbillservice.postingcodedropdown()
  .subscribe((resp: any) => {
      this.pscd_dd=resp.ReturnValue;
      //  console.log(this.pscd_dd);
   });

    //payment code dropdown
  this.cashbillservice.paymentcodedropdown()
  .subscribe((resp: any) => {
      this.paycode=resp.ReturnValue;
      //  console.log(this.paycode);
   });

   //roomnumber dropdown
   this.cashbillservice.roomdropdown()
   .subscribe((resp: any) => {
    this.roomnum=resp.ReturnValue;
  });

  this.cashbillservice.inhousetobilling()
  .subscribe((resp: any) => {
      this.navigat = resp.ReturnValue;
      this.navtbl=resp.ReturnValue1;
      this.windowbal=resp.ReturnValue2;
      // console.log("header",this.navigat,typeof(this.navigat));
      // console.log("table_val",this.navtbl,typeof(this.navtbl));
      // console.log("windows valuesssssssssssssssssssssssssssssssssssss",this.navtbl);

      //seperating values for window1 and window2 

      for(let seperat of this.navtbl)
      {
        
        if (seperat['post_window']==1)
        {
          this.vaal1.push(seperat) //for window1
        }
        else
        {
          this.vaal2.push(seperat)  //for window2
        }
      }
      // console.log("vaal1",this.vaal1,typeof(this.vaal1));
      // console.log("vaal2",this.vaal2,typeof(this.vaal2));

});
}

//on selecting history record
public logg_id
public home1=[];
public hist1=[];
selectind=null;
selecthistory(det,i){
  this.home1=[];
  this.hist1=[];
  this.selectind=i;
  console.log(det,typeof(det))
  this.logg_id=det.log_link_id;
  console.log("link_id",this.logg_id)
  this.home1.push(this.home.find(j => j.log_link_id === this.logg_id));
  this.hist1.push(this.hist.find(j => j.log_link_id === this.logg_id));
  console.log("home1",this.home1,typeof(this.home1))
  console.log("hist1",this.hist1,typeof(this.hist1))
  

  // let item1 = array.find(i => i.id === 1);
}

//show payment type with condition 
showdiv="900";
selectoption(flag)
{
  console.log("showdiv",flag);
  this.showdiv=flag;
  console.log(flag);
}
//show currency type with condition 

showdivv="0";
selectoption1(flag)
{
  console.log("showdivv",flag);
  this.showdivv=flag;
  console.log(flag);
}


public room=this.session.retrieve("id");
public name=this.session.retrieve("name");
// public code=this.session.retrieve("Code");
public idpos=this.session.retrieve("posid");
public creditcd=this.session.retrieve("cc");
public creditexpdt=this.session.retrieve("expdate");
public reservtn_id=this.session.retrieve("res_id");
    // display billing values
    // public gbalance=this.session.retrieve("balanc");
public supple
public ref
public cqno
public poscd
public amt
public posdt
public quant
public posid
public poscdid
public postwindow
sidx=null;

vaalvaalfunc(dtl,idx){

  this.edtvar=false;
  console.log("selectMembersEdit",dtl)
  //displaying values in edit posting on clicking value in table
  this.supple=dtl.posting_supplement;
  this.ref=dtl.posting_reference;
  this.cqno=dtl.checkno;
  this.poscd=dtl.posting_code;  
  this.amt=dtl.posting_amount;
  this.posdt=dtl.posting_date;
  this.quant=dtl.posting_quantity;
  this.poscdid=dtl.post_id;  
  this.postwindow = dtl.post_window;
  // console.log("window noo",this.postwindow)

  this.sidx=idx;
  // this.session.store("Code",dtl.posting_code);
  this.session.store("posid",dtl.post_id);
}
 
selectindexx=null;
selectMembersEditt(detailss,indexx){
  this.edtvar=false;
  // console.log("selectMembersEditttttt",detailss);
  this.supple=detailss.posting_supplement;
  this.ref=detailss.posting_reference;
  this.cqno=detailss.checkno;
  this.poscd=detailss.posting_code;  
  this.amt=detailss.posting_amount;
  this.posdt=detailss.posting_date;
  this.quant=detailss.posting_quantity;
  this.poscdid=detailss.post_id;
  this.postwindow = detailss.post_window;
  // console.log("window no",this.postwindow)
  this.selectindexx=indexx;
  // this.session.store("quant",detailss.posting_quantity);
  this.session.store("posid",detailss.post_id);
}



transferroom(toroomno,grppos){
console.log(toroomno,grppos);
//   if(grppos==true)
//   {
//     grppos="GP";
//     console.log("grouped posting value",grppos);
//   }
// else{
//   console.log("elseeeeeeeeeeeeeee");
// }

  console.log(toroomno,this.cqno)
  this.cashbillservice.transferanotherroom(toroomno,grppos,this.cqno)
  .subscribe((resp: any) => {
   this.transroom=resp.ReturnCode;
   if(this.transroom=="RUS")
   {
    this.transroomsuccessmsg="Payment was posted successfully";
   }
  else
  {
    this.transroomfailuremsg="Sorry,unable to transfer to another room";
  }
   
 });

//refresh
 this.cashbillservice.inhousetobilling()
 .subscribe((resp: any) => {
   this.navigat = resp.ReturnValue;
   this.navtbl=resp.ReturnValue1;
   this.windowbal=resp.ReturnValue2;
  
   //seperating values for window1 and window2 
   this.vaal1=[];
   this.vaal2=[];
   for(let seperat of this.navtbl){
     
     if (seperat['post_window']==1){
       this.vaal1.push(seperat) //for window1
     }
     else{
       this.vaal2.push(seperat)  //for window2

     }
   }
 });
}



private fieldArray: Array<any> = [];
private newAttribute: any = {};
addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

//month and year dropdown in expiry date
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

// enable and disable window1 and 2 buttons in transfer another window 
  window_button()
  {
    console.log("post id-----------------------",this.postwindow);
    if(this.postwindow == 1){

      this.butn2=false;
      this.butn1=true;
    }
    else{
      console.log("post id-------start----------------",this.postwindow)
      this.butn1=false ;
      this.butn2=true;
      console.log("post id-------end  ----------------",this.postwindow)

    }
  }



}
