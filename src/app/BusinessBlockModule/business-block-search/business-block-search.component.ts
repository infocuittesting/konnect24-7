import { Component, OnInit } from '@angular/core';
import {BusinessBlockSearchService} from './business-block-search.service';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";


@Component({
  selector: 'app-business-block-search',
  templateUrl: './business-block-search.component.html',
  styleUrls: ['./business-block-search.component.css'],
  providers :[BusinessBlockSearchService]
})
export class BusinessBlockSearchComponent implements OnInit {
  public tableschanges=[];
  public roomtype=[];
  public statustype=[];
  blockopt=true;
  // public querylist=[];
  public someData=[];
  public mainratecode=[];
  public showMore;
  public ClearAll=[];
  public filterdata=[];
 public notesglow;
public printstatus;
public showhidenotes=false;
public followupglow;
public followstatus;
public showhiddenfollow=false;
public cutoffglow;
public cutoffstatus;
public showhidencutoff=false;
public cutoffdatestatus;
public roominlistglow;
public roomingliststatus;
public showhiddenroominglist;
public rooming_status;
public queryString:any;
  public =[];
  blc = true;
  grop = true;
  newblockbut=false;
  public querylist=[];
  constructor(private blocksearch:BusinessBlockSearchService,private route:Router,public session:SessionStorageService) {this.tableschanges=this.someData }
  // onSelcat(val){
  //   console.log(val);
  //   this.tableschanges = this.someData.filter(x => x.status == val)
  // }

 


  ngOnInit() {
     this.blocksearch.bsearchtable()
    .subscribe((resp: any) => {
      this.tableschanges=resp.ReturnValue;
      this.someData=this.tableschanges;
      console.log("online pasgss",this.someData)
    });

    
    this.blocksearch.blockstatus()
    .subscribe((resp: any) => {
    this.roomtype=resp.ReturnValue;
    // console.log(this.roomtype);
    });
    this.blocksearch.status()
    .subscribe((resp: any) => {
    this.roomtype=resp.ReturnValue;
    //  console.log(this.roomtype);
    });
  

  }

  blocknamecheck(Name){
    if (Name == this.tableschanges['block_name'])
    {
      console.log("its worfdsd",this.tableschanges['block_name'])
       return true;
       
    }
    else{
      return false;
    }
  }
  // dropdown status filter
  onSelect(val){
    console.log(val);
      this.tableschanges = this.someData.filter(x => x.status == val)
      console.log("onselect",this.tableschanges)
      // this.tableschanges=this.filterdata.filter(x => x.status == val)
  }

  // onSelectblockname(val){
  //   this.tableschanges = this.someData.filter(x => x.block_name == val)
  // }
  
  // onSel(val){
  //   console.log(val);
  //   this.tableschanges = this.someData.filter(x => x.status == val)
  //   this.tableschanges=this.filterdata.filter(x => x.status == val)
  // }
  //show more
  showMoreBut(){
    this.showMore=true;
  }
  //show less
  showLessBut(){
    this.showMore=false;
  } 
  cleartab(){
    this.blocksearch.bsearchtable()
    .subscribe((resp: any) => {
      this.tableschanges=resp.ReturnValue;
      // this.someData=resp.ReturnValue;
      console.log("clearall button",this.tableschanges)
    });

  }
  

  // select unselect table
 


  // filter the from to to

  filterDatefrmList(startDate,endDate){
    if(startDate!=null && endDate!=null){
      let selectedMembers = this.tableschanges.filter(
        m => new Date(m.start_date) >= new Date(startDate) && new Date(m.start_date) <= new Date(endDate)
        );
          console.log(selectedMembers);
          this.tableschanges = selectedMembers;
          this.filterdata=selectedMembers;
    }else {
      this.tableschanges = this.tableschanges;
      console.log("datefilter",this.tableschanges )
    }
    
  }

  

public status;
public reinstate;
public Blockid;
public blockname;
public startdate;
public enddate;
public nights;
selectindex=null;
flag=false;

  selectMembersEdit(details,index){
if(this.flag==false){
  this.flag=true;

    
    this.selectindex=index;
    this.Blockid=details.block_id;
    this.blockname=details.block_name;
    this.startdate=details.start_date;
    this.enddate=details.end_date;
    this.nights=details.nights;

    if(this.Blockid==details.block_id){
      this.blockopt=false;
      this.blc=false;
      this.grop=false;
      this.newblockbut=true;
    }
  }else{
    this.flag=false;
    this.blockopt=true;
    this.blc=true;
    this.grop=true;
    this.newblockbut=false;
  }
    // if(this.Blockid==details.block_id){
    //   this.new=true;
    //   this.profile=true;
    //   this.option=false;
    // }else{
    //   this.new=false;
    //   this.profile=false;
    //   this.option=true;
    // }

//Notes Glow
this.blocksearch.Notes(this.Blockid)
.subscribe((resp: any) => {
  this.notesglow=resp.ReturnValue;
  console.log("notes lamp",this.notesglow)
  this.printstatus=resp.Status;
  if(this.printstatus=="Success"){
  if(this.notesglow.length!=0){
   this.showhidenotes=true;
  }else if(this.notesglow.length==0){
   this.showhidenotes=false;
  }
  }
 
 });

//  followup group
this.blocksearch.followupgroup(this.Blockid)
.subscribe((resp: any) => {
  this.followupglow=resp.Return;
  console.log("followupglow lamp",this.followupglow)
  this.followstatus=resp.ReturnCode;
  if(this.followstatus=="RV"){
   this.showhiddenfollow=true;
  }else if(this.followstatus=="RIV"){
   this.showhiddenfollow=false;
  }
  
 
 });

//  cutoff date group
this.blocksearch.cutoffdate(this.Blockid)
.subscribe((resp: any) => {
  this.cutoffglow=resp.ReturnCode;
  console.log("cutoff lamp",this.followupglow)
  this.cutoffstatus=resp.ReturnCode;
  if(this.cutoffstatus=="RV"){
   this.showhidencutoff=true;
   this.cutoffdatestatus="Valid"
  }else if(this.cutoffstatus=="RIV"){
   this.showhidencutoff=true;
   this.cutoffdatestatus="Invalid"
  }
  else if (this.cutoffstatus=="NOR"){
    this.showhidencutoff=false;
  }
  
 
 });
// rooming list due
this.blocksearch.rooming_list_due(this.Blockid)
.subscribe((resp: any) => {
  this.roominlistglow=resp.Return;
  console.log("roominglist lamp",this.roominlistglow)
  this.roomingliststatus=resp.ReturnCode;
  if(this.roomingliststatus=="RV"){
   this.showhiddenroominglist=true;
   this.rooming_status="Valid"
  }else if(this.roomingliststatus=="RIV"){
   this.showhiddenroominglist=false;
   this.rooming_status="Invalid"
  }
  else if (this.roomingliststatus=="NOR"){
    this.showhiddenroominglist=false;
  }
  
 
 });
// business block valuee...............................................
   this.session.store("blockid",details.block_id.toString());
  this.session.store("blockname",details.block_name.toString());
  this.session.store("starts",details.start_date.toString());
  this.session.store("ends",details.end_date.toString());
  this.session.store("nght",details.nights.toString());
  this.session.store("total_room_peray", details.total_rooms_perday.toString())
  // this.session.store("startdate",details.start_date.toString());
  // this.session.store("enddate",details.end_date.toString());
  // this.session.store("nights",details.nights.toString());
  this.session.store("businessDet",details);
  console.log("start date and end date",details.start_date.toString(),details.end_date.toString(),details.nights.toString())



}

// public edlock_id;
// EDIT BUTTON Service
// editblockservice(blockedit){
//   this.edlock_id = blockedit.block_id;
  
// }
}



