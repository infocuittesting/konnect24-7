import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from "ngx-webstorage";
import { Router } from "@angular/router";
import { EditBusinessBlockService } from './edit-business-block.service';

@Component({
    selector: 'app-edit-business-block',
    templateUrl: './edit-business-block.component.html',
    styleUrls: ['./edit-business-block.component.css'],
    providers: [EditBusinessBlockService]
})
export class EditBusinessBlockComponent implements OnInit {

    constructor(private editblockservice: EditBusinessBlockService, public session: SessionStorageService, private route: Router) { }
    // declare variable....................................
    public blockstatus = [];
    public market = [];
    public source = [];
    public origin = [];
    public payment = [];
    public cancelreason = [];
    public meetingsizetype = [];
    public inventory = [];
    public ratecode = [];
    public restype = [];
    public blocktype = [];
    public block: any = {};
    public createblock: any;
    public blocksuccess: string;
    public blockids: any = " ";
    public block_name: any = " ";
    public block_code: any = " ";
    public paymasters: any;
    public querypay: any;
    public queryroomrevenue;
    public payblockid;
    public queryedit = [];
    public blid;
    public paysucess;
    public payfailure;
    public queryroomtype;
    public roomtype1;
    public editblock: any;
    public travelpf;
    public businessDetails: any;
    selecteddesc: any;
    Orginselecteddesc: any;
    selecteddetail: any;
    public travelagent;
    public profile_types;
    public acc_com;
    public account_name;
    public Travel_Agent;
    public revenueroom =[];
    public source_name;
    public Contact_name;
    public Group_name;
    public package_value = " ";
    public packages_code_bind=[]
    selected_id1 = [];
  selected_code = [];
  idx1: any;
  public packages_details:any;
  public package_details_value:any;
  public rmid1:any;
  public rmcodes:any;
  public selected1=[];
  public print_rates:any;
  public suppress_rates:any;
  public guranted_block:any;
  exist1(item) {
    this.selected1.indexOf(item) > -1;
  }
  toggleSelection1(item) {
    this.idx1 = this.selected1.indexOf(item);
    // this.room_type += item.type
    console.log("string", item)
    if (this.idx1 > -1) {
      this.selected1.splice(this.idx1, 1);
      this.selected_id1.splice(this.idx1, 1);
      this.selected_code.splice(this.idx1, 1);

    }
    else {
      this.selected1.push(item);
      this.selected_id1.push(item.package_code_id);
      this.selected_code.push(item.package_code);

    }
    this.rmcodes = this.selected_code.toString();
    this.rmid1 = this.selected_id1.toString();
    console.log("selected id", this.rmid1,this.selected_id1);
    console.log("selected code", this.rmcodes);

  }
  
    ngOnInit() {

         //packages
 this.editblockservice.revenuepackages()
 .subscribe((resp: any) => {
   this.revenueroom = resp.ReturnValue;
   console.log("package value",this.revenueroom)
 });
        // block status sropdown.....................
        this.editblockservice.blockstatusdropdown()
            .subscribe((resp: any) => {
                this.blockstatus = resp.ReturnValue;
                console.log(this.blockstatus);
            });

        //   // market dropdown...........................
        this.editblockservice.marketdropdown()
            .subscribe((resp: any) => {
                this.market = resp.ReturnValue;
                console.log(this.market);
            });

        //  source dropdown.......................
        this.editblockservice.sourcedropdown()
            .subscribe((resp: any) => {
                this.source = resp.ReturnValue;
                console.log(this.source);
            });

        // Origin dropdown.........................
        this.businessDetails = this.session.retrieve("businessDet");
        // this.selecteddesc = this.businessDetails.origin_id;
        this.editblockservice.origindropdown()
            .subscribe((resp: any) => {
                this.origin = resp.ReturnValue;
            });

        //  payment dropdown........................
        this.editblockservice.paymentdropdown()
            .subscribe((resp: any) => {
                this.payment = resp.ReturnValue;
                console.log(this.payment);
            });
        // cancel reason dropdown....................
        this.editblockservice.cancelreasondropdown()
            .subscribe((resp: any) => {
                this.cancelreason = resp.ReturnValue;
                console.log(this.cancelreason);
            });

        //  Meetingspacetpye dropdown......................
        this.editblockservice.meetingsizetypedropdown()
            .subscribe((resp: any) => {
                this.meetingsizetype = resp.ReturnValue;
                console.log(this.meetingsizetype);
            });
        // inventory dropdown.............................
        this.editblockservice.Inventorydropdown()
            .subscribe((resp: any) => {
                this.inventory = resp.ReturnValue;
                console.log(this.inventory);
            });

        //  Ratecode Dropdown.............................
        this.editblockservice.Ratecodedropdown()
            .subscribe((resp: any) => {
                this.ratecode = resp.Return;
                console.log(this.ratecode);
            });
        // Reservation type dropdown......................
        this.editblockservice.Resetypedropdown()
            .subscribe((resp: any) => {
                this.restype = resp.ReturnValue;
                console.log(this.restype);
            });
        //  blocktype dropdown...............................
        this.editblockservice.BlockTypedropdown()
            .subscribe((resp: any) => {
                this.blocktype = resp.ReturnValue;
                console.log(this.blocktype);
            });

        //  Query Editblock ....................................
        this.editblockservice.QueryEditblock()
            .subscribe((resp: any) => {
                this.packages_code_bind=resp.packages;
                console.log("packages details",this.packages_code_bind)
                for (var i = 0; i < this.packages_code_bind.length; i++)
                {
                 this.packages_details = this.packages_code_bind[i]['package_code']
                //  this.packages_details = this.packages_details.split(0)
                
                 //  console.log(this.roomdetails)
                 //  this.amentiesss = this.amenitiestemp.amenitie.slice(0,3);
                 //  this.amentiesss = this.amentiesss.slice(0,3);
                 //  console.log(this.amentiesss)
                //   console.log(this.packages_details)
                if (this.package_value == " "){
                   this.package_value += this.packages_details.toString() 
                }
                else{
                    this.package_value += ","+this.packages_details.toString() 
                }
                console.log("*",this.package_value) 
                // this.package_details_value.push(this.package_value)
                // this.package_value = this.package_value.concat(this.package_value)
                // this.package_value = this.package_value.replace(',','')
                // console.log("00",this.package_value)
                }
                console.log(this.package_value)
                this.queryedit = resp.ReturnValue;
                this.profile_types = resp.profiletype;
                this.account_name = resp.accountname;
                if(this.profile_types == "Company"){
                      this.acc_com = this.account_name;
                      console.log("company account name")
                }
                else if(this.profile_types == "Travel Agent"){
                       this.Travel_Agent = this.account_name;
                }
                else if(this.profile_types == "Source"){
                    this.source_name = this.account_name;
               }
             else if(this.profile_types == "Contact"){
                this.Contact_name = this.account_name;
               }
               else if(this.profile_types == "Group"){
                this.Group_name = this.account_name;
               }
                // this.blid=this.queryedit.block_id;
                console.log(this.queryedit);
            });

    }
    //orgin slected id
    orginChange(orginId) {
        console.log("orginId " + orginId);
    }

    // edit lbock screen....................................................

    orginSelectedDetail: any;
    marketdetail: any;
    sourcedetails:any;
    blockstatusetails:any;
    blocktypedetails:any;
    restypedetails:any;
    Inventorydetails:any;
    ratecodedetails:any;
    paymentdetails:any;
    meetingspacedetails:any;
    
    editblockheader(block) {
        console.log(block.print_rate,block.suppress_rate,block.guranteed)
            if(block.print_rate == true)
            {
               this.print_rates = "1"
            }
            else
            {
               this.print_rates = "0"
            }
            if(block.suppress_rate == true)
            {
                this.suppress_rates = "1"
            }
            else{
              this.suppress_rates = "0"
            }
            if(block.guranteeds == true)
            {
                this.guranted_block = "1"

            }
            else{
                this.guranted_block = "0"
            }
console.log("checkbo values",this.guranted_block,this.print_rates,this.suppress_rates)
        this.orginSelectedDetail = this.origin.filter(
            orgn => orgn.origindescription === block.origindescription);
            // console.log("orginSelectedDetail ++"+this.orginSelectedDetail !=null ? this.orginSelectedDetail[0].id : null);
        this.marketdetail =  this.market.filter(
            market => market.marketgroup_description === block.marketgroup_description);
            // console.log("sourcedescription")
        this.sourcedetails = this.source.filter(
            sources => sources.sourcedescription   === block.sourcedescription );
        this.blockstatusetails = this.blockstatus.filter(
            blockstaus => blockstaus.status   === block.status );
        this.blocktypedetails = this.blocktype.filter(
            bltype => bltype.block_type   === block.block_type );  
        this.restypedetails = this.restype.filter(
             restypes => restypes.restype_description   === block.restype_description );  
        this.Inventorydetails = this.inventory.filter(
            inventoryde => inventoryde.inventory_control   === block.inventory_control );  
        this.ratecodedetails = this.ratecode.filter(
            rateco => rateco.rate_code   === block.ratecode );  
            console.log("rate code is worked",this.ratecodedetails[0].ratecode_id)
        this.paymentdetails = this.payment.filter(
            paymnt => paymnt.payment_description   === block.payment_description );  
        this.meetingspacedetails = this.meetingsizetype.filter(
             meetingtype => meetingtype.size_type   === block.size_type );      
        let params = {
    
                // "block_id": this.session.retrieve("blockid".toString())
                "Definite":
                     {
                       "block_id":this.session.retrieve("blockid").toString(),
                       "block_status_id":this.blockstatusetails !=null ? this.blockstatusetails[0].id.toString() : "",
                       "market_id":this.marketdetail.length > 0 ? this.marketdetail[0].id.toString() : "",
                       "source_id":this.sourcedetails.length > 0  ? this.sourcedetails[0].id.toString() : "",
                       "owner":block.owner !=null ? block.owner.toString(): "",
                       "origin_id":this.orginSelectedDetail.length > 0 ? this.orginSelectedDetail[0].id.toString() : "",
                       "start_date":block.start_date ,
                       "end_date":block.end_date,
                       "nights":block.nights.toString(),
                       "block_name":block.block_name !=null ? block.block_name:"",
                       "block_type":this.blocktypedetails.length > 0? this.blocktypedetails[0].id.toString() : ""
                      },
               "Rooms":   {
                      "block_id":this.session.retrieve("blockid").toString(),
                      "res_type_id":this.restypedetails.length > 0 ? this.restypedetails[0].id.toString() : "",
                      "cutoff_date":block.cutoff_date !=null ? block.cutoff_date.toString() : "",
                      "cutoff_days":block.cutoff_days != null ? block.cutoff_days.toString():"",
                      "inventory_control_id ":this.Inventorydetails.length > 0 ? this.Inventorydetails[0].inventory_control_id.toString() : "",
                      "ratecode_id":this.ratecodedetails.length > 0 ? this.ratecodedetails[0].ratecode_id.toString() : "",
                      "print_rate":this.print_rates !=null ? this.print_rates.toString() : "",
                      "suppress_rate":this.suppress_rates !=null ? this.suppress_rates.toString():"",
                      "packages":this.selected_id1 !=null ? this.selected_id1:"",
                             
                      "follow_date":block.follow_date !=null ? block.follow_date.toString():"",
                      "decision_date":block.decision_date != null ?block.decision_date.toString():""
                      
                      },
                 "Block_details":
                       {
                       "block_id":this.session.retrieve("blockid") ,
                       "payments_id":this.paymentdetails.length > 0 ? this.paymentdetails[0].id.toString() : "",
                       "rooming_list_duedate":block.rooming_list_duedate !=null ? block.rooming_list_duedate.toString():"",
                       "arrivaltime":block.arrivaltime !=null ? block.arrivaltime.toString():"",
                       "depaturetime":block.depaturetime !=null ? block.depaturetime.toString():"",
                       "commission":block.commission !=null ? block.commission.toString():"",
                       "total_rooms_perday":block.total_rooms_perday !=null ? block.total_rooms_perday.toString():""
                       },
                  "Catering":
                       {
                       "block_id":this.session.retrieve("blockid").toString(),
                       "guranteed":this.guranted_block != null ? this.guranted_block.toString() : "",
                       "attenders":block.attenders !=null ? block.attenders.toString() : "",
                       "info_board":block.info_board !=null ? block.info_board.toString():"",
                        "contract_no":block.contract_no !=null ? block.contract_no.toString():"",
                        "onsite_name":block.onsite_name !=null ? block.onsite_name.toString():"",
                       "followup_date":block.followup_date !=null ? block.followup_date.toString():""
                       },
                  "block_meeting":
                          {
                        "block_id":this.session.retrieve("blockid").toString(),
                        "meeting_space":block.meeting_space != null ? block.meeting_space.toString() : "",
                        "meeting_space_type_id ":this.meetingspacedetails.length > 0 ? this.meetingspacedetails[0].id.toString() : "",
                        "attendess":block.attendess !=null ? block.attendess.toString():""
                                }
               
            };
            console.log("successs ",JSON.stringify(params));
            this.editblockservice.Edit_grid_data(params)
        .subscribe((resp: any) => {
            this.createblock=resp.ReturnCode;

             console.log(this.createblock);
            //  this.session.store("blids",this.blockids.toString());
             if(this.createblock=="RUS"){
                this.blocksuccess="Block Updated Successfully"
                console.log("outputblock",this.blocksuccess)
             }
             else{
                 this.blocksuccess="something"
             }
         });

          }
        // Query Room Revenue Button
          RoomrevenueButton(){
            console.log("going to calculate room revenue")
          this.editblockservice.QueryRoomRevenue()
          .subscribe((resp: any) => {
              this.queryroomrevenue=resp.ReturnValue;
               console.log(this.queryroomrevenue);
           });
        }

        CreatePaymaster(){
            // console.log("going to reservation button",this.blockids,typeof(this.blockids));
          // this.payblockid = this.blockids.toString();
          // console.log("stringvalue",typeof(this.payblockid))
        this.editblockservice.PaymasterReservation()
        .subscribe((resp: any) => {
            this.paymasters=resp.ReturnCode;
            if(this.paymasters=="RIS"){
                this.paysucess="A Pay Master will be created"
            }
            else if(this.paymasters=="RAE"){
                this.paysucess="Paymaster Already exist"
            }
            else{
                this.paysucess="paymaster failed"
            }
             console.log("paymasertresponse",this.paymasters);
         });

        }
    // grid current.......................................
    // public gridvalues:any = [];
    // selectgrid_data(){
    //   console.log("Nowwwwwwwwww")
    //   this.editblockservice.select_grid_data()

    //   .subscribe((resp: any) => {
    //   this.gridvalues=resp.ReturnValue;
    //   this.session.store("gridvalues",this.gridvalues)
    //   console.log("hi daisyyyyy",this.gridvalues)
    //   });
    // }

//   package data etween date
packagedatas(startdate,enddate){
    console.log("dates",startdate,enddate)
    this.editblockservice.packagebetweendate(startdate,enddate)
    .subscribe((resp: any) => {
        this.revenueroom = resp.ReturnValue;
        console.log("package between values value",this.revenueroom)
      });
}

}
