import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomdiscrepencyService  } from './roomdiscrepency.service';
import { Router } from "@angular/router";
import * as jsPDF from 'jspdf';
import { ToasterServiceService } from '../../toaster-service.service'; 


@Component({
  selector: 'app-roomdiscrepancies',
  templateUrl: './roomdiscrepancies.component.html',
  styleUrls: ['./roomdiscrepancies.component.css'],
  providers:[RoomdiscrepencyService]
})
export class RoomdiscrepanciesComponent implements OnInit {

  @ViewChild('myModal') content:ElementRef;


  public  downloadPDF(){

    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor':function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,10,15,{
      'width':200,
      'elementHandlers': specialElementHandlers
    });

    doc.save('test.pdf');
  }


  onSelect2(val){
    // val = val.toLowerCase();
    console.log(val);
    this.room = this.qroom2.filter(x => x.rm_room == val)
  }
  onSelect3(val){
    // val = val.toLowerCase();
    console.log(val);
    this.room = this.qroom2.filter(x => x.rm_room_class == val)
  }

  public qroom2 = [];
  public room = [];

  public list = [];
  public class1 = [];
  public floor = [];
  constructor(private pService: RoomdiscrepencyService,private route:Router,private toasterService:ToasterServiceService) { }

  Success(message){
    //  console.log("message",message);
     this.toasterService.success(message);
   }

   refre(){
   this.pService.getroomdiscrepencies()
    .subscribe((resp: any) => {
    this.room=resp.ReturnValue;
    });
  }
  ngOnInit() {

    this.pService.getroomdiscrepencies()
    .subscribe((resp: any) => {
    this.room=resp.ReturnValue;
    this.qroom2=resp.ReturnValue;
    });

    this.pService.roomdropdown()
   .subscribe((resp: any) => {
    this.list=resp.ReturnValue;
  });

  this.pService.roomclassdropdown()
  .subscribe((resp: any) => {
   this.class1=resp.ReturnValue;
 });

 this.pService.getfloordropdown()
 .subscribe((resp: any) => {
 this.floor=resp.ReturnValue;

 });

      
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
     this.copy =JSON.parse(JSON.stringify(this.room))
      }
    this.room=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].rm_room_discrepancy)){
        this.room.push(this.copy[j]);
      }
    }
  }else{
    this.room=this.copy; 
  }
  }

}