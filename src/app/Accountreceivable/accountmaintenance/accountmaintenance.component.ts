import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { AccountmaintenanceService} from './accountmaintenance.service';
import { ToasterServiceService } from '../../toaster-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-accountmaintenance',
  templateUrl: './accountmaintenance.component.html',
  styleUrls: ['./accountmaintenance.component.css'],
  providers:[ AccountmaintenanceService]
})
export class AccountmaintenanceComponent implements OnInit {

  constructor(private AccountmaintenanceService: AccountmaintenanceService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }
  Success(message){
    // console.log("message",message);
     this.toasterService.success(message);
}
  public ac_maintain_tabl=[];
  public filterdata=[];
  public market_val=[];
  public source_val=[];
  public room_cls_val=[];
  public payment_val=[];
  public curr_val=[];
  public pscd_dd=[];
  public pay_type=[];
  public enablebut=true;
  ngOnInit() {
    this.AccountmaintenanceService.account_table()
.subscribe((resp: any) => {
     this.ac_maintain_tabl=resp.ReturnValue;
      this.filterdata=this.ac_maintain_tabl
     console.log("account maintain table valuessssssss",this.ac_maintain_tabl)
});


   this.AccountmaintenanceService.market_dropdown()
.subscribe((resp: any) => {
    this.market_val=resp.ReturnValue;
    console.log("marketdropdown valuess",this.market_val)
});

      this.AccountmaintenanceService.source_dropdown()
.subscribe((resp: any) => {
      this.source_val=resp.ReturnValue;
      console.log("sourcedropdown valuess",this.source_val)
});

    this.AccountmaintenanceService.room_class_dropdown()
.subscribe((resp: any) => {
      this.room_cls_val=resp.ReturnValue;
      console.log("roomdropdown valuess",this.room_cls_val)
});

    this.AccountmaintenanceService.payment_dropdown()
.subscribe((resp: any) => {
    this.payment_val=resp.ReturnValue;
    console.log("payment dropdown valuess",this.payment_val)
});

    this.AccountmaintenanceService.currency_dropdown()
.subscribe((resp: any) => {
    this.curr_val=resp.ReturnValue;
    console.log("currency dropdown valuess",this.curr_val)
});
 
   this.AccountmaintenanceService.postingcodedropdown()
.subscribe((resp: any) => {
       this.pscd_dd=resp.Return_values;
        console.log("posting code dropdownnnnnnnnnnn",this.pscd_dd);
});
    
  // payment type in payment button
    this.AccountmaintenanceService.paymenttype_dropdown()
.subscribe((resp: any) => {
        this.pay_type=resp.ReturnValue;
         console.log("payment type dropdown values for payment",this.pay_type);
});

}

// filtering radio button in account maintainance screen 
radio_bt_fil(val){
    
  // console.log("radio button value",val)
  // console.log("table valuess inside condition",this.ac_maintain_tabl)
  if(val=='open_inv'){
    this.ac_maintain_tabl=this.filterdata.filter(i=>i.open_amount!=0)
    // console.log(this.ac_maintain_tabl)
  }
  if(val=='pay_oly'){
    this.ac_maintain_tabl=this.filterdata.filter(i=>i.open_amount==0)
    // console.log(this.ac_maintain_tabl)
  }
  if(val=='all_inv'){
    this.ac_maintain_tabl=this.filterdata
    // console.log(this.ac_maintain_tabl)
  }
   }

  //selecting values from multiple checkboxes in account maintainance table
  selected = [];
  selected_id = [];
  idx: any;
  public invoicenos: any;
  public rmtype: any;
  exist(item) {
    this.selected.indexOf(item) > -1;
}

public open_amt=0
public invoice_amt=0
  toggleSelection(item) {
    this.enablebut=false
    this.invoice_num=item.invoice_no
    this.idx = this.selected.indexOf(item);
    // this.room_type += item.type
    console.log(item)
    console.log("string", item.type)
    if (this.idx > -1) {
      this.selected.splice(this.idx, 1);
      this.selected_id.splice(this.idx, 1);
}
    else {
      this.selected.push(item);
      this.selected_id.push(item.invoice_no);
      this.open_amt+=item.open_amount
      this.invoice_amt+=item.invoice_amount
}

    this.invoicenos = this.selected_id;
    console.log("invoice number", this.invoicenos);
    console.log("invoice and open amount", this.open_amt,this.invoice_amt);

}

comp={}
compressfun(comp){
  console.log("compressssssss values from html",comp)
  this.AccountmaintenanceService.compress(comp,this.invoicenos,this.open_amt,this.invoice_amt)
.subscribe((resp: any) => {
  var insertresp=resp.ReturnCode
  if(insertresp=='RIS'){
    var message="Invoice Compressed Successfully"
    this.toasterService.success(message);
    
    // refresh account maintain table records //
    this.AccountmaintenanceService.account_table()
.subscribe((resp: any) => {
    this.ac_maintain_tabl=resp.ReturnValue;
    // console.log("account maintain table value",this.ac_maintain_tabl)
    this.invoicenos=[];
    this.selected_id=[];
    this.open_amt=0
    this.invoice_amt=0
  });
  }
 });
}


// uncompress
uncompress(){
  this.AccountmaintenanceService.uncompress(this.invoicenos)
.subscribe((resp: any) => {
  var insertresp=resp.ReturnCode
  if(insertresp=='RDS'){
    var message="Invoice UnCompressed Successfully"
    this.toasterService.success(message);
    
    // refresh account maintain table records //
    this.AccountmaintenanceService.account_table()
.subscribe((resp: any) => {
    this.ac_maintain_tabl=resp.ReturnValue;
    // console.log("account maintain table value",this.ac_maintain_tabl)

    this.invoicenos=[];
    this.selected_id=[];

});
}
  
});
}
// selecting any row values in account maintainance
  public unapp_tabl=[];
  selectindex
  selectMembersEdit(index,value){
    this.enablebut=false
    this.selectindex=index
    console.log("indexand value of account maintain",index,value)
    this.session.store("invoice_no",value.invoice_no)
    this.session.store("amount",value.open_amount)
    this.session.store("acc_name",value.account_name)
    this.session.store("acc_no",value.account_number)

    this.invoice_num=value.invoice_no
  

    //unapply table record values 
    this.AccountmaintenanceService.unapply_table(this.invoice_num)
.subscribe((resp: any) => {
        this.unapp_tabl=resp.ReturnValue;
          // console.log("unapply table values",this.unapp_tabl);
});
}

//On unapply table row click
selectindexx:any
public unapp_val=[];
select_unapply_Edit(index,value){
  this.selectindexx=index
  console.log("clicking unapply table row",value)
  this.unapp_val =value

}

// unapply button click
unapp_butfun(){
  this.AccountmaintenanceService.unapply_button(this.unapp_val)
.subscribe((resp: any) => {
    var insertresp=resp.ReturnCode
    if(insertresp=='RUS'){
      var message="Payment unapplied Successfully"
      this.toasterService.success(message);
}
});
}

// create new invoice button
  newinvoice={}
  public newinvoice_inp=[];
  newinvoicefun(newinvoice){
  console.log("new invoice values on clicking",newinvoice)
  this.newinvoice_inp=newinvoice
}

// changing payment dropdown
public payment_code_desc=[];
change_pay_val(paycode){
  console.log("paymentttttttt",paycode)
  this.payment_code_desc = this.payment_val.filter(
    book => book.id ==paycode)
    console.log("filtering the payment code first",this.payment_code_desc)
}

// changing payment dropdown
public currency_desc=[];

change_curr_val(curcode){
  console.log("currencyyyyyy",curcode)
  this.currency_desc = this.curr_val.filter(
    book => book.id ==curcode)
    console.log("filtering the currency code first",this.currency_desc)
}


// payment-->post button
paycode={}

  paymentfun(paycode){
    this.payment_code_desc=[];
    this.currency_desc=[];
    // console.log("paycodeeeeee from payment button",paycode)
    this.AccountmaintenanceService.payment_button(paycode,this.invoice_num)
.subscribe((resp: any) => {
    var insertresp=resp.ReturnCode
    if(insertresp=='RIS'){
      var message="Payment Posted Successfully"
      this.toasterService.success(message);
      
      // refresh account maintain table records //
      this.AccountmaintenanceService.account_table()
.subscribe((resp: any) => {
      this.ac_maintain_tabl=resp.ReturnValue;
      console.log("account maintain table value",this.ac_maintain_tabl)
});
}
    
});
}
  room={}
  add={}

  // addrows in post screen

  public codeidarr=[];
  public showdetails=[];
  public postdetails=[];
  public totalPos = 0;
  public totalamt = 0;
  addRows(add)
{
    if(add.Code!=null && add.Amount!=null && add.Qty!=null && add.Windowno!=null )
{
      
    this.codeidarr = this.pscd_dd.filter(
            orgn => orgn.short_description === add.Code);

            console.log("codeeeee_desssss",this.codeidarr,this.codeidarr[0].package_code_id);
        // console.log("totalpos and totalamt",this.totalPos,this.totalamt)

        this.showdetails.push({
          // "business_id":this.session.retrieve("business_id"),
          "Post_code_id":this.codeidarr[0].package_code_id,
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
          "account_no":this.session.retrieve("account_number"),
          "Post_code_id":String(this.codeidarr[0].package_code_id),
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

// delete buttons
  deleterows(index,room)
{
      this.showdetails.splice(index,1);
      this.postdetails.splice(index,1);
      this.totalPos -= 1;
      this.totalamt -= Number(room.Amount)*Number(room.Qty);
}

// edit rows
  editrows(index,room)
{
      console.log("showpostroom",room)
      this.showdetails[index].editFlag=true;
      this.totalPos -= 1;
      this.totalamt -= Number(room.Amount)*Number(room.Qty);
      // this.postdetails[index].editFlag=true;
      // this.postdetails.splice(index,1);
}

del_key:any;
  saveButton(index,room)
{
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
  clearpost()
{
      this.showdetails=[];
      this.postdetails=[];
      this.totalPos=0;
      this.totalamt=0;
}

// on clicking post button in post screen sending values to service 
public invoice_num:any
    saveroomDetails(postdetails)
{

      // calling invoice create service
      
      this.AccountmaintenanceService.insert_accountin(this.newinvoice_inp)
.subscribe((resp: any) => {
      var insertresp=resp.ReturnCode;
      this.invoice_num=resp.invoice_num;
      console.log("invoice numberrrrrrrr from service",this.invoice_num)
      if(insertresp=='RIS')
{
        var message="New Invoice Created Successfully"
        this.toasterService.success(message);


        for(var i in this.postdetails){
          this.postdetails[i]["invoice_no"]=String(this.invoice_num)
}

        console.log("postdetailssssssssssssssssssss after for loop",this.postdetails)

            this.AccountmaintenanceService.postingbill(this.postdetails)
.subscribe((resp: any) => {
            var billing=resp.ReturnCode;
            console.log("return of billing",billing);
            if(billing=="RIS")
{
              var message="New Invoice Created Successfully"
              this.toasterService.success(message);
}
            console.log("return of billing outside",billing);


              // refresh traces table records //
            this.AccountmaintenanceService.account_table()
.subscribe((resp: any) => {
            this.ac_maintain_tabl=resp.ReturnValue;
            console.log("account maintain table value",this.ac_maintain_tabl)
});
            
});
}
      console.log("invoice numberrrrrrrr from service out",this.invoice_num)
});

          
}


    // ---------------------------post and new invoice ends-----------------//
}