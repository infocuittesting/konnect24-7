import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { AccountoptionsService} from './accountoptions.service';
import { ToasterServiceService } from '../../toaster-service.service';
import { DatePipe } from '@angular/common'; 



@Component({
  selector: 'app-accountoptions',
  templateUrl: './accountoptions.component.html',
  styleUrls: ['./accountoptions.component.css'],
  providers:[ AccountoptionsService,DatePipe]
})
export class AccountoptionsComponent implements OnInit {

  constructor(private datePipe: DatePipe,private AccountoptionsService: AccountoptionsService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }

  public Success(message){
    //  console.log("message",message);
     this.toasterService.success(message);
   }
  public showoption;
  public acc_trace_val=[]
  public notes_tabl_val=[]
  public payhis_tabl_val=[]
  public posthis_tabl_val=[]
  public tableschanges =[]
  public tableschanges_new=[]
  public Transfer=[]
  public market_val=[]
  public filterdata=[]
 
  public yearview_val=[]
  
  
  public traces_account_name:any
  public curdate:any
  newtrace={};
  public hideshowoption = false;
  ngOnInit() {
    this.showoption = this.session.retrieve("showoption");
    if(this.showoption == "true"){
      this.hideshowoption = true;
    }else{
      this.hideshowoption = false;
    }
    this.AccountoptionsService.acc_traces_table()
    .subscribe((resp: any) => {

      this.acc_trace_val=resp.ReturnValue;
    //  console.log("trace table valuessssssss",this.acc_trace_val)
      this.traces_account_name=this.session.retrieve("pf_account_name")  
    });

    this.AccountoptionsService.ar_notes_table()
    .subscribe((resp: any) => {
    this.notes_tabl_val=resp.ReturnValue;
    });

 

  this.AccountoptionsService.payhis_table()
  .subscribe((resp: any) => {
   this.payhis_tabl_val=resp.ReturnValue;
  //  console.log("payhis table",this.payhis_tabl_val)
  
 });
 
 this.AccountoptionsService.accounttype_dropdown()
   .subscribe((resp: any) => { 
    this.market_val=resp.ReturnValue;
    console.log("accounttype dropdown valuess",this.market_val)
    });

  this. AccountoptionsService.transfer_table()
  .subscribe((resp: any) => {
    this.tableschanges=resp.ReturnValue;
    console.log("table account setup working",this.tableschanges)
    var acc=this.session.retrieve("account_number")
    this.tableschanges_new=this.tableschanges.filter(trans=>trans.account_number!=acc)
    console.log("new table records after filter",this.tableschanges_new)
    //  this.someData=resp.ReturnValue;
 });
    this.AccountoptionsService.payhis_table()
    .subscribe((resp: any) => {
    this.payhis_tabl_val=resp.ReturnValue;
    console.log("payhis table",this.payhis_tabl_val)
    });


    this.AccountoptionsService.posthis_table()
    .subscribe((resp: any) => {
    this.posthis_tabl_val=resp.ReturnValue;
    console.log("posthis table",this.posthis_tabl_val)
    });

    this.AccountoptionsService.ar_notes_table()
    .subscribe((resp: any) => {
    this.notes_tabl_val=resp.ReturnValue;
    });

    this.AccountoptionsService.yearview_table()
    .subscribe((resp: any) => {
    this.yearview_val=resp.ReturnValue;
    });

    
  }
  onSel(val){
    console.log("whole table",JSON.stringify(this.tableschanges_new));
    console.log("droup down filter working fine",val);
    // this.res_table = this.someData.filter(x => x.status == val)
    this.tableschanges_new=this.filterdata.filter(x => x.account_type == val)
  }

// insert new trace//
  public insertresp:any
  newtracefun(newtrace){

    this.curdate=new Date()    
    this.curdate=this.datePipe.transform(this.curdate,'yyyy-MM-dd')
    // console.log("current date",this.curdate)

    this.AccountoptionsService.acc_traces_new(newtrace,this.curdate)
    .subscribe((resp: any) => {
      this.insertresp=resp.ReturnCode
      if(this.insertresp=='RIS'){
        var message="New Trace Created Successfully"
        this.toasterService.success(message);
      }
  // refresh traces table records //
      this.AccountoptionsService.acc_traces_table()
    .subscribe((resp: any) => {
     this.acc_trace_val=resp.ReturnValue;  
   });
   });
  }
 

  // on clicking traces table values
  public createdon:any
  public trace_txt:any
  public trace_id:any

  public disabltrace=true
  traceselectindex
  selecttracesvalue(value,index){
 this.disabltrace=false
 this.traceselectindex=index
console.log("trace selecting table value",value)
this.createdon=value.created_on
this.trace_txt=value.trace_text
this.trace_id=value.account_traces_id
console.log("trave id after clicking the value",this.trace_id)
  } 

//clicking edit traces-->ok 
  edittracefun(createdon,trace_txt){
    console.log("after clicking ok in edittrace",createdon,trace_txt)
    this.curdate=new Date()    
    this.curdate=this.datePipe.transform(this.curdate,'yyyy-MM-dd')
    // console.log("current date",this.curdate)

    this.AccountoptionsService.acc_traces_edit(createdon,trace_txt,this.curdate)
    .subscribe((resp: any) => {
      this.insertresp=resp.ReturnCode
      if(this.insertresp=='RUS'){
        var message="Trace Updated Successfully"
        this.toasterService.success(message);
      }
  // refresh traces table records //
    this.acc_trace_val=[];
      this.AccountoptionsService.acc_traces_table()
    .subscribe((resp: any) => {
     this.acc_trace_val=resp.ReturnValue;  
   });
   });
  }

  deletetracefun(){
    this.AccountoptionsService.Trace_delete(this.trace_id)
    .subscribe((resp: any) => {
      this.insertresp=resp.ReturnCode
      if(this.insertresp=='RDS'){
        var message="Trace Deleted Successfully"
        this.toasterService.success(message);
      }
  // refresh traces table records //
    this.acc_trace_val=[];
      this.AccountoptionsService.acc_traces_table()
    .subscribe((resp: any) => {
     this.acc_trace_val=resp.ReturnValue;  
   });
   });
  }
//---------------------trace ends---------------//
//transfer options
public to_acc:any
selectTransEdit(value,index){
console.log("selecting a transfer table row",value)
this.to_acc=value.account_number
}
// transfer table data
public invoice_no:any
//  this.invoice_no=value.account_traces_id
transferfun(){
  this.AccountoptionsService.Transferdata(this.invoice_no,this.to_acc)
  .subscribe((resp: any) => {
    this.insertresp=resp.ReturnCode
    console.log("transfer service working fine",this.insertresp)
    if(this.insertresp=='RIS'){
      var message="Transfer Successfully"
      // this.toasterService.success(message);
    }

 });
}
//-------------------notes starts--------------//

// insert new arnotes
newnotes={}
newnotesfun(newnotes)
{
  console.log("values",newnotes)
  this.AccountoptionsService.ar_notes_new(newnotes)
  .subscribe((resp: any) => {
     var notesinsertresp=resp.ReturnCode
    if(notesinsertresp=='RIS'){
      var message="Notes Created Successfully"
      this.toasterService.success(message);
    }
// refresh notes table records //
  this.notes_tabl_val=[];
    this.AccountoptionsService.ar_notes_table()
  .subscribe((resp: any) => {
    this.notes_tabl_val=resp.ReturnValue;  
 });
 });
}


// on clicking table values in notes
public disablnote=true
public notes_id:any
public editnotedate:any
public editnotetitle:any
public editnotedesc:any
selectindex;
selectnotesvalue(value,index)
{
  this.selectindex=index;
  this.disablnote=false
  console.log("value in notes table row",value)
  this.notes_id=value.ar_notes_id
  this.editnotedate=value.ar_note_date
  this.editnotetitle=value.ar_note_title
  this.editnotedesc=value.ar_note_description
  }


// edit arnotes
editnotes={}
editnotesfun(editnotedate,editnotetitle,editnotedesc)
{
  console.log("after clicking ok in editnotes",editnotedate,editnotetitle,editnotedesc)
  this.AccountoptionsService.ar_notes_edit(editnotedate,editnotetitle,editnotedesc,this.notes_id)
  .subscribe((resp: any) => {
    var insertresp=resp.ReturnCode
    if(insertresp=='RUS'){
      var message="Notes Updated Successfully"
      this.toasterService.success(message);
    }
// refresh notes table records //
this.notes_tabl_val=[];
this.AccountoptionsService.ar_notes_table()
.subscribe((resp: any) => {
this.notes_tabl_val=resp.ReturnValue;  
});
 });
}


// delete notes
deletenotefun()
{
this.AccountoptionsService.ar_notes_delete(this.notes_id)
.subscribe((resp: any) => {
  var insertresp=resp.ReturnCode
  if(insertresp=='RDS'){
    var message="Notes Deleted Successfully"
    this.toasterService.success(message);
  }  
// refresh notes table records //
this.notes_tabl_val=[];
this.AccountoptionsService.ar_notes_table()
.subscribe((resp: any) => {
this.notes_tabl_val=resp.ReturnValue;  
});

});
}



}

