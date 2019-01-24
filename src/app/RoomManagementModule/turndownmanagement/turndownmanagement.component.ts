import { Component, OnInit } from '@angular/core';
import { TurndownmanagementService} from './turndownmanagement.service';
import { ToasterServiceService } from '../../toaster-service.service'; 
@Component({
  selector: 'app-turndownmanagement',
  templateUrl: './turndownmanagement.component.html',
  styleUrls: ['./turndownmanagement.component.css'],
  providers:[TurndownmanagementService]
})
export class TurndownmanagementComponent implements OnInit {

  constructor(private TurndownmanagementService:TurndownmanagementService,private toasterService:ToasterServiceService) { }
  public turndown:any=[];
  public dropdown:any=[];
  public turnmodal:boolean=true;
  ngOnInit() {
    this. TurndownmanagementService.getturndown().subscribe((resp:any)=>{
      this.turndown=resp.ReturnValue; 
    })

    this. TurndownmanagementService.turndowndropdown().subscribe((resp:any)=>{
      this.dropdown=resp.ReturnValue;
     
    })  
  }

  //update turndown management
  public insertresponse;
  insertturndown(user){
    this. TurndownmanagementService.insertturndown(user,this.traceid).subscribe((resp:any)=>{
      this.insertresponse=resp.ReturnCode; 
      this.toasterService.success("The Turndown Status is Updated for Room "+this.room);
      if(this.insertresponse=="RUS"){
        this. TurndownmanagementService.getturndown().subscribe((resp:any)=>{
          this.turndown=resp.ReturnValue; 
          this.turnmodal=true;this.traceid.clear();
        })
      }
    })
  }

  //select the row from the table
  public user:any;
  public traceid:any;
  public room:any;
  public selectedindex;
  select(detais,index){
    this.selectedindex=index;
    this.user=detais.turndown_status;
    this.room=detais.room;
    this.traceid=detais.traces_id;
    if(this.traceid==detais.traces_id){
      this.turnmodal=false;
    }
  }

    //Turndown filter in table  using checkbox
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
       this.copy =JSON.parse(JSON.stringify(this.turndown))
        }
      this.turndown=[];
      console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
      console.log("checkbox filter ",this.filtercheckboxList);
      for(var j=0;j<this.copy.length;j++){
        if(this.filtercheckboxList.includes(this.copy[j].turndown_status)){
          this.turndown.push(this.copy[j]);
        }
      }
    }else{
      this.turndown=this.copy; 
    }
    }

    //Reservation status filter in table  using checkbox
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
       this.copy =JSON.parse(JSON.stringify(this.turndown))
        }
      this.turndown=[];
      console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);
      for(var j=0;j<this.copy.length;j++){
        if(this.filtercheckboxList.includes(this.copy[j].rm_fo_status)){
          this.turndown.push(this.copy[j]);
        }
      }
    }else{
      this.turndown=this.copy; 
    }
    }
    checkselectClr:boolean;
    cleardata(p,p1,p2){
      if((p==true&&p1==true&&p2==true)||(p==true)||(p1==true)||(p2==true)||(p==true&&p1==true)||(p==true&&p2==true)||(p1==true&&p2==true)){
        this.checkselectClr=false;
      }
      
    }
}
