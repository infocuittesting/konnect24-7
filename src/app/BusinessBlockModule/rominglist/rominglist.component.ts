import { Component, OnInit } from '@angular/core';
import {RominglistService} from './rominglist.service';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-rominglist',
  templateUrl: './rominglist.component.html',
  styleUrls: ['./rominglist.component.css'],
  providers: [RominglistService]
})
export class RominglistComponent implements OnInit {

  constructor(private roomlistservice:RominglistService,public session:SessionStorageService,private route:Router) { }

public room_type_count=[];
public roomsgrid=[];
public roomtype_one=[];
public total_count:any;
public i:any;
public show_room_type=[];
  ngOnInit() {
    this.roomlistservice.QueryRoomtypeGrid()
  .subscribe((resp: any) => {
          this.roomsgrid=resp.Return_value;
       
          // console.log("type",item[].available_rooms)
          for (var item of this.roomsgrid){
                //  console.log("type",this.i.type)  
                console.log("item",item)  
                console.log("type",item.available_rooms)
                this.room_type_count.push(item.type,item.available_rooms) 
                this.show_room_type.push(item.type)
                console.log("diiiiiiiiiii",this.show_room_type)
          }
          console.log("QueryRoomtypeGrid",this.roomsgrid);
          console.log("list",this.room_type_count)
          
       });  
  
  }
  
  
//  Add rows in rooming list screen............................
public affFlagg=false;
public savedetails=[];
public add;
public Names;
public Arrival;
public Depature;
public nights;
public roomtype;
public adult;
public child;
public numberofrooms;
public blockid;
public savedetails1=[];
public roomlistselect = [];
public totalcount = [];
public resgroup;
public l:number;
public j:number;
public k:number;
public edit_key;
public res_details=[];
size(roomtype){
  console.log("selected room type",roomtype)
  if (this.room_type_count[0] == roomtype){
    console.log("roomtype",roomtype,this.room_type_count.indexOf(roomtype))
    this.room_type_count[this.room_type_count.indexOf(roomtype)+1] = this.room_type_count[this.room_type_count.indexOf(roomtype)+1]-1  
    this.roomsgrid[0].available_rooms = this.room_type_count[this.room_type_count.indexOf(roomtype)+1]  
    if (this.room_type_count[this.room_type_count.indexOf(roomtype)+1] == 0 ){
      this.show_room_type.splice(this.show_room_type.indexOf(roomtype),1);
      // this.room_type_count.splice(this.room_type_count.indexOf(roomtype),this.room_type_count.indexOf(roomtype)+2);
      // this.i = this.room_type_count.indexOf(roomtype)+2     
      // console.log(this.i)
    }
  }
  else if(this.room_type_count[2] == roomtype){
    console.log("roomtype",roomtype)
    this.room_type_count[this.room_type_count.indexOf(roomtype)+1] = this.room_type_count[this.room_type_count.indexOf(roomtype)+1]-1
    this.roomsgrid[1].available_rooms = this.room_type_count[this.room_type_count.indexOf(roomtype)+1]  

    if (this.room_type_count[this.room_type_count.indexOf(roomtype)+1] == 0 ){
      this.show_room_type.splice(this.show_room_type.indexOf(roomtype),1);
      // this.room_type_count.splice(this.room_type_count.indexOf(roomtype),this.room_type_count.indexOf(roomtype)+2);

      // console.log(";alksdjfa;lskdsdkj")
   }
  }
  else if(this.room_type_count[4] == roomtype){
    console.log("roomtype",roomtype)
    this.room_type_count[this.room_type_count.indexOf(roomtype)+1] = this.room_type_count[this.room_type_count.indexOf(roomtype)+1]-1
    this.roomsgrid[2].available_rooms = this.room_type_count[this.room_type_count.indexOf(roomtype)+1]  

    if (this.room_type_count[this.room_type_count.indexOf(roomtype)+1] == 0 ){
      this.show_room_type.splice(this.show_room_type.indexOf(roomtype),1);
      // this.room_type_count.splice(this.room_type_count.indexOf(roomtype),this.room_type_count.indexOf(roomtype)+2);
       
      // console.log(";alksdjfa;lskdsdkj")
   }
  }
  
  console.log("list1111",this.room_type_count)
  console.log("final room grid.********8",this.roomsgrid)
}

public update_rooms=[];
UpdateRoomingList(){
  this.roomlistservice.updateroom(this.roomsgrid)
  .subscribe((resp: any) => {
    this.update_rooms=resp.ReturnCode;
    console.log("return of update_rooms",this.update_rooms)
  });

}
addRows(Names,Arrival,Depature,nights,roomtype,adult,child,numberofrooms,blockid)
{
  if( roomtype!=null)
  {
 

   this.savedetails.push({
        // "business_id":this.session.retrieve("business_id")     
          "res_arrival":this.session.retrieve("arrive"),
          "res_depature":this.session.retrieve("depature"),
          "res_nights":this.session.retrieve("nightss").toString(),
          "res_adults":adult,
          "res_child":child,
          "res_number_of_rooms":numberofrooms,
          "res_room_type":roomtype,
          "res_block_code":this.session.retrieve("blockid"),
          "pf_firstname":Names,
          "editFlag":false
      });  

      this.savedetails1.push({
        // "business_id":this.session.retrieve("business_id")     
          "res_arrival":this.session.retrieve("arrive"),
          "res_depature":this.session.retrieve("depature"),
          "res_nights":this.session.retrieve("nightss").toString(),
          "res_adults":adult.toString(),
          "res_child":child.toString(),
          "res_number_of_rooms":numberofrooms,
          "res_room_type":roomtype,
          "res_block_code":this.session.retrieve("blockid"),
          "pf_firstname":Names,
          
      });  
     console.log("without edit flag",this.savedetails1)
      console.log("retrieve id",this.session.retrieve("blockid"));  
      // this.add={};
      this.Arrival="";
      this.Depature="";
      this.nights = "";
      this.Names="";
      this.roomtype="";
      this.adult="";
      this.child="";
      this.numberofrooms="";
      this.blockid="";


    console.log('this.savedetailssssss',this.savedetails1)
      // console.log("postdetails",this.postdetails);
  }
}


editrows(index,rooms){
  this.savedetails[index].editFlag=true;
  // this.show_room_type.push(rooms.res_room_type)

    console.log("edit rows ..............",this.savedetails1)

  // this.savedetails.splice(this.savedetails.indexOf(msg), 1);
  // console.log("edit rows working fine...........................")
}

saveRows(index,rooms){
  console.log("push code",this.savedetails1)
  this.savedetails1[index]['pf_firstname'] = rooms.pf_firstname
  this.savedetails1[index]['res_adults'] = rooms.res_adults
  this.savedetails1[index]['res_child'] = rooms.res_child
  this.savedetails1[index]['res_room_type'] = rooms.res_room_type
  // this.savedetails1.push(rooms)
  console.log("remove rooms",typeof(this.savedetails1),this.savedetails1)
  
  this.savedetails[index].editFlag=false;
  
}
// CREATE GROUP RESERVATION
public groupresv;
CreateGroupReservation(){

  console.log("enter to component",this.savedetails1)
  this.roomlistservice.GroupReservation(this.savedetails1)
  .subscribe((resp: any) => {
          this.groupresv=resp.ReturnCode;
           console.log("success reservation",this.groupresv);
           if(this.groupresv=="RIS")
           {
              this.resgroup="Reservation created successfully for group"
           }
          else{
            this.resgroup="wrong"
          }
       });
}

}
