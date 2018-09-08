import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import {BusinessBlockGridService} from "./business-block-grid.service";

@Component({
  selector: 'app-business-block-grid-current',
  templateUrl: './business-block-grid-current.component.html',
  styleUrls: ['./business-block-grid-current.component.css'],
  providers:[BusinessBlockGridService]
})
export class BusinessBlockGridCurrentComponent implements OnInit {
  public start = this.session.retrieve("starts");
  public end = this.session.retrieve("ends");
  public nights = this.session.retrieve("nght");
  public roomtype=[];
  public roomtype_select=[];
  public range:any=[];
  public gridvalues=[];
  public rmtype=[];
  public rmcount=[];
  public rmblid;
  public Occupency1:number=0;
  public Occupency2:number=0;
  public Occupency3:number=0;
  public Occupency4:number=0;
  public totalrooms;
  public Rate1:number=0;
  public Rate2:number=0;
  public Rate3:number=0;
  public Rate4:number=0;
  public addrates;
  public totalrate;
  totalroomsvalues=[];
  public check_totalrooms:any;
  public addrooms=0;
  public tota_room:any;
  public selected_roomtype=[];
  public updategrid=[];
  constructor(public blockservicegrid:BusinessBlockGridService,private route:Router,public session:SessionStorageService) { }

  ngOnInit() {
    // console.log(this.start,this.end,this.nights);

  // this.totalrooms = this.Occupency1+this.Occupency2+this.Occupency3+this.Occupency4;
  // this.totalrate = this.Rate1*this.Rate2*this.Rate3*this.Rate4;
  //  console.log("default value is zero",this.totalroomsvalues)
 this.blockservicegrid.roomtype()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;
this.roomtype_select = this.roomtype;
console.log(this.roomtype)
});
// current grid.........................................
this.blockservicegrid.querygridvalue()
.subscribe((resp: any) => {
this.gridvalues=resp.ReturnValue;
console.log("ajith working fine",this.gridvalues)
// automatically show the value
});

this.blockservicegrid.querygroomtype()
.subscribe((resp: any) => {
this.selected_roomtype=resp.ReturnValue;
console.log("selected working fine",this.selected_roomtype)
// automatically show the value
});

// this.totalrooms = 0 + this.Occupency1 + this.Occupency2 + this.Occupency3 + this.Occupency4 
  }
 selectindex=null;
    selectMembersEdit(details,index){
      this.selectindex=index; 
  }

  public grid_ids;
public grid_type;
gridtype = true;
selectgridvalues(grid,index){
  this.selectindex=index;
  this.grid_ids = grid.grid_id;
  this.grid_type = grid.grid_type_desc;
  
//   if(this.grid_type == "Current")
//   {
//     this.gridtype=false;
//   }
//  else
//  {
//   this.gridtype=true; 
//  }
  
}

  public insertgrid:any=[];
  public jio=[];

 
  
  rangegrids(input:any,Occupency1,Occupency2,Occupency3,Occupency4,Rate1,Rate2,Rate3,Rate4){
    console.log("asdfasdfadfdasfsaddsd",Occupency1,Occupency2,Occupency3,Occupency4,Rate1,Rate2,Rate3,Rate4)
    // console.log("secnd",occ1)
    input.grid_startdate = this.start;
    input.grid_enddate = this.end;
    this.totalrooms = Occupency1+Occupency2+Occupency3+Occupency4;

    console.log("total rooms count",this.totalrooms)
    this.addrates = Rate1+Rate2+Rate3+Rate4;
    console.log("rates",this.addrates)
    if(input.sunday == true)
    {
     input.sunday =1;
    }else{
     input.sunday =0;
    }

    if(input.monday == true)
    {
     input.monday =1;
    }else{
     input.monday =0;
    }

    if(input.tuesday == true)
    {
     input.tuesday =1;
    }else{
     input.tuesday =0;
    }

    if(input.wednesday == true)
    {
     input.wednesday =1;
    }else{
     input.wednesday =0;
    }

    if(input.thursday == true)
    {
     input.thursday =1;
    }else{
     input.thursday =0;
    }

    if(input.friday == true)
    {
     input.friday =1;
    }else{
     input.friday =0;
    }

    if(input.saturday == true)
    {
     input.saturday =1;
    }else{
     input.saturday =0;
    }

let body={

"block_id":this.session.retrieve("blockid"),
"roomtype_id":input.roomtype.id.toString(),
"roomtype":input.roomtype.type.toString(),
"occupancy_one":Occupency1.toString(),
"occupancy_two":Occupency2.toString(),
"occupancy_three":Occupency3.toString(),
"occupancy_four":Occupency4.toString(),
"total_rooms":this.totalrooms.toString(),
"rate_one":Rate1.toString(),
"rate_two":Rate2.toString(),
"rate_three":Rate3.toString(),
"rate_four":Rate4.toString(),
"add_rate":this.addrates.toString(),
"sunday":input.sunday,
"monday":input.monday,
"tuesday":input.tuesday,
"wednesday":input.wednesday,
"thursday":input.thursday,
"friday":input.friday,
"saturday":input.saturday,
"grid_startdate":input.grid_startdate,
"grid_enddate":input.grid_enddate,
"available_rooms":this.totalrooms.toString()
}


// this.insertgrid.push(body);
// console.log("worked",this.insertgrid);
// console.log(JSON.stringify(this.insertgrid));
// this.blockservicegrid.insertGrid(this.insertgrid)
// .subscribe( (resp:any) =>{
  this.addrooms=this.addrooms+this.totalrooms;
  console.log("push the rooms in one variale",this.addrooms)
  this.check_totalrooms = this.session.retrieve("total_room_peray")
  console.log("check ttal rooms per day", this.check_totalrooms)
  if(this.check_totalrooms >= this.addrooms)
  {

    this.tota_room = false;
    // this.addrooms=this.addrooms+this.totalrooms;
    // console.log("push the rooms in one variale",this.addrooms)
    this.insertgrid.push(body);
    this.Occupency1 = 0;
    this.Occupency2 = 0;
    this.Occupency3= 0;
    this.Occupency4 = 0;
    this.totalrooms = "";
    this.Rate1 = 0;
    this.Rate2 = 0;
    this.Rate3 = 0;
    this.Rate4 = 0;
    this.addrates = "";
    this.roomtype_select.splice(this.roomtype_select.indexOf(input.roomtype),1);
    console.log("roomselect;;;;;;;;;;;;;;",this.roomtype_select)
    console.log("if log is worked",this.totalrooms,this.check_totalrooms)
  }
  else
  {
    console.log("else log is worked")
    this.tota_room = true;
    this.addrooms=this.addrooms-this.totalrooms;
    // this.addrooms.splice(this.addrooms.indexOf(this.addrooms),1);
    console.log("splice is worked",this.addrooms)
  }
  // this.Occupency1 = 0;
  // this.Occupency2 = 0;
  // this.Occupency3= 0;
  // this.Occupency4 = 0;
  // this.totalrooms = "";
  // this.Rate1 = 0;
  // this.Rate2 = 0;
  // this.Rate3 = 0;
  // this.Rate4 = 0;
  // this.addrates = "";
  // this.roomtype_select.splice(this.roomtype_select.indexOf(input.roomtype),1);
  // console.log("roomselect;;;;;;;;;;;;;;",this.roomtype_select)
//   this.gridvalue=resp.ReturnValue;
//   console.log("return valure of range screen",this.gridvalue);
// });
}

saveshow=[];
savebutton(){
  console.log("inside insertgrid value",this.insertgrid);

// session storage

  


  this.blockservicegrid.insertGrid(this.insertgrid)
  .subscribe( (resp:any) =>{
  
   this.gridvalues=resp.ReturnValue;
  //  this.session.store("rmcount",resp.total_rooms);
  //  this.session.store("rmtype",resp.type);
  //  this.session.store("rmblid",resp.block_id);
  //  console.log("sesson values come",resp.total_rooms,resp.type,resp.block_id)
  // // this.rmtype = gridvalue.type;

  console.log("return valure of range screen",this.gridvalues);
  // this.gridvalues = this.session.retrieve("gridvalues")
  
});





}

// edit grid values screennn.....................
// successs...........................
public selected_values=[];
public idvalue;

selectdropdown(editinput){
  console.log("success it work fine",editinput.id)
  this.idvalue = editinput.id
  let params ={
    
      "block_id":this.session.retrieve("blockid".toString()),
      "roomtype_id": this.idvalue.toString()
    
  }
  this.blockservicegrid.queryroom_choice(params )
  .subscribe((resp: any) => {
    this.selected_values=resp.ReturnValue;
    console.log("selected values........",this.selected_values)
  });
}

// update grid screennnnnnnnnnnnnnnnnnnnnn.........
public totalcount;
editrangegrids(editgrid)
{
console.log("edit the grid screen value",editgrid);
this.totalcount = editgrid.occupancy_one+editgrid.occupancy_two+editgrid.occupancy_three+editgrid.occupancy_four
console.log("total count",this.totalcount )
if(editgrid.sunday == true)
{
  editgrid.sunday =1;
}else{
  editgrid.sunday =0;
}

if(editgrid.monday == true)
{
  editgrid.monday =1;
}else{
  editgrid.monday =0;
}

if(editgrid.tuesday == true)
{
  editgrid.tuesday =1;
}else{
  editgrid.tuesday =0;
}

if(editgrid.wednesday == true)
{
  editgrid.wednesday =1;
}else{
  editgrid.wednesday =0;
}

if(editgrid.thursday == true)
{
  editgrid.thursday =1;
}else{
  editgrid.thursday =0;
}

if(editgrid.friday == true)
{
  editgrid.friday =1;
}else{
  editgrid.friday =0;
}

if(editgrid.saturday == true)
{
  editgrid.saturday =1;
}else{
  editgrid.saturday =0;
}
let body={

  "block_id":this.session.retrieve("blockid".toString()),
  "roomtype_id":editgrid.roomtype_id.toString(),
  // "roomtype":input.roomtype.type.toString(),
  "occupancy_one":editgrid.occupancy_one !=null ? editgrid.occupancy_one.toString():"0",
  "occupancy_two":editgrid.occupancy_two !=null ? editgrid.occupancy_two.toString():"0",
  "occupancy_three":editgrid.occupancy_three !=null ? editgrid.occupancy_three.toString():"0",
  "occupancy_four":editgrid.occupancy_four !=null ? editgrid.occupancy_four.toString():"0",
  "total_rooms":this.totalcount.toString(),
  "rate_one":editgrid.rate_one !=null ? editgrid.rate_one.toString():"0",
  "rate_two":editgrid.rate_two !=null ? editgrid.rate_two.toString():"0",
  "rate_three":editgrid.rate_three !=null ? editgrid.rate_three.toString():"0",
  "rate_four":editgrid.rate_four !=null ? editgrid.rate_four.toString():"0",
  // "add_rate":this.addrates.toString(),
  "sunday":editgrid.sunday,
  "monday":editgrid.monday,
  "tuesday":editgrid.tuesday,
  "wednesday":editgrid.wednesday,
  "thursday":editgrid.thursday,
  "friday":editgrid.friday,
  "saturday":editgrid.saturday,
  "grid_startdate":editgrid.grid_startdate,
  "grid_enddate":editgrid.grid_enddate,
  "available_rooms":this.totalcount.toString()
  }
  this.updategrid.push(body)
  console.log("push to upadte values",this.updategrid)
  
}
public editsuccess;
editsavebutton(){
  console.log("inside editgrid value",this.updategrid);

// session storage

  


  this.blockservicegrid.updateGrid(this.updategrid)
  .subscribe( (resp:any) =>{
  
   this.editsuccess=resp.ReturnCode;
   console.log("success daisy", this.editsuccess)
});
}
closegrid(){
  this.blockservicegrid.querygridvalue()
.subscribe((resp: any) => {
this.gridvalues=resp.ReturnValue;
console.log("ajith working fine",this.gridvalues)
// automatically show the value
});
}
}
