import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { InvoiceService} from './invoice.service';
import { ToasterServiceService } from '../../toaster-service.service';
import { DatePipe } from '@angular/common'; 


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers:[InvoiceService]
})
export class InvoiceComponent implements OnInit {

  constructor(private InvoiceService: InvoiceService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }
 
  public disablbut=true;
  public invoice_tab=[];
  public reasndropdown=[];
  public pscd_dd=[];
  ngOnInit() {
    this.InvoiceService.invoice_table()
    .subscribe((resp: any) => { 
     this.invoice_tab=resp.ReturnValue;
    //  console.log("invoice table valuessssssss",this.invoice_tab)
   });

   this.InvoiceService.adjst_reasondropdown()
   .subscribe((resp: any) => { 
    this.reasndropdown=resp.ReturnValue;
    console.log("reason dropdownvalues",this.reasndropdown)
  });

  this.InvoiceService.postingcodedropdown()
  .subscribe((resp: any) => {
      this.pscd_dd=resp.ReturnValue;
       console.log("posting code dropdown",this.pscd_dd);
   });
  }

  //on clicking table values
  public acc_bill:any 
  selectindex
  selectMembersEdit(index,value){
    this.selectindex=index
    this.disablbut=false
    this.acc_bill=value.account_bill
    console.log(this.acc_bill)
  }
  

  // invoice-->adjust -->on clicking ok button
  public adjust_res:any
  adjust={}
  adjustfun(adjust){
    console.log("adjust ok button click",adjust,this.acc_bill)
    this.InvoiceService.invoice_adjust(adjust,this.acc_bill)
    .subscribe((resp: any) => { 
     this.adjust_res=resp.ReturnCode;
     if(this.adjust_res=='RUS'){
      var message="Adjust Trn posted successfully"
      this.toasterService.success(message);
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
          "account_no":this.session.retrieve("account_number"),
          "Post_code_id":String(this.codeidarr[0].posting_code_id),
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
      this.totalPos  -= 1;
      this.totalamt -= Number(room.Amount)*Number(room.Qty);
    }

// edit rows
  editrows(index,room)
    {
      console.log("showpostroom",room)
      this.showdetails[index].editFlag=true;
      this.totalPos  -= 1;
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

      for(var i in this.postdetails){
        this.postdetails[i]["invoice_no"]=String(this.session.retrieve("invoice_no"))
      }

      this.InvoiceService.postingbill(this.postdetails)
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
        this.InvoiceService.invoice_table()
        .subscribe((resp: any) => { 
         this.invoice_tab=resp.ReturnValue;
        //  console.log("invoice table valuessssssss",this.invoice_tab)
       });
      
    });
      
  
      console.log("invoice numberrrrrrrr from service out",this.invoice_num)
   

          
    }

}
