import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { NewaraccountService} from './newaraccount.service';
import { ToasterServiceService } from '../../toaster-service.service'; 

@Component({
  selector: 'app-newaraccount',
  templateUrl: './newaraccount.component.html',
  styleUrls: ['./newaraccount.component.css'],
  providers:[ NewaraccountService]
})
export class NewaraccountComponent implements OnInit {

  constructor(private NewaraccountService: NewaraccountService, public session:SessionStorageService,private route:Router,private toasterService:ToasterServiceService) { }
  Success(message){
    //  console.log("message",message);
     this.toasterService.success(message);
   }
  mini = false;
  onerecord = false;
  public user41 ={};
  public setupdate:any;
  public statetype=[];
  public roomtype=[];
  // public count=[];
  public confim;
  public PF_Firstname;
  public market_val=[];
  public someData=[];
  public filterdata=[];

  showhiderestriction(param){
    // if(param == "all"){
    // this.mini = false;
    // }else{
    // this.mini = true;
    // }
    if(param == "onerecord"){
      this.onerecord = true;
      this.mini = true;
    }
    else{
      this.onerecord = false;
      this.mini = false;
    }
  }
  public res_table=[];
  public temp_tabl_val=[];
  public enable_select=true
  ngOnInit() {

    this.NewaraccountService.ar_account_table()
    .subscribe((resp: any) => {
 
     this.res_table=resp.ReturnValue;
     this.filterdata = this.res_table;
     console.log("table valuessssssss",this.res_table)
   });

   this.NewaraccountService.accounttype_dropdown()
   .subscribe((resp: any) => { 
    this.market_val=resp.ReturnValue;
    console.log("accounttype dropdown valuess",this.market_val)
    });
    
  }

  resetfile(params){

    params.reset();
    this.NewaraccountService.ar_account_table()
    .subscribe((resp: any) => {
 
     this.res_table=resp.ReturnValue;
     this.filterdata = this.res_table;
     console.log("table valuessssssss",this.res_table)
   });

  }


// filtering radio buttons in ar account screen
  radio_bt_fil(val){
    
    // console.log("radio button value",val)
    // console.log("radio button value",this.temp_tabl_val)
    // console.log("table valuess inside condition",this.res_table)
    if(val=='open'){
      this.res_table=this.filterdata.filter(i=>i.account_balance!=0)
      // console.log(this.res_table)
    }
    if(val=='no_bl'){
      this.res_table=this.filterdata.filter(i=>i.account_balance==0)
      // console.log(this.res_table)
    }
    if(val=='all_ar'){
      this.res_table=this.filterdata
    }
   
     }
   


  onSel(val){
    console.log("whole table",JSON.stringify(this.res_table));
    console.log("droup down filter working fine",val);
    // this.res_table = this.someData.filter(x => x.status == val)
    this.res_table=this.filterdata.filter(x => x.account_type == val)
  }

  public prof_id:any
selectindex
  selectMembersEdit(details,index){
    this.selectindex=index
    console.log("selected ar_account table value",details)
    //setup account

    this.session.store("account_number",details.account_number.toString());
    this.session.store("credit_limit",details.credit_limit);
    this.session.store("contact",details.contact.toString());
    this.session.store("phone",details.phone.toString());
    this.session.store("email",details.pf_account.toString());
    this.session.store("ar_address",details.ar_address.toString());
    this.session.store("city",details.city.toString());
    this.session.store("postal_code",details.postal_code.toString());
    this.session.store("country_id",details.country_id.toString());
    this.session.store("state_id",details.state_id);
    this.session.store("permanent_account",details.permanent_account);
    this.prof_id=details.profile_id
  





    this.enable_select=false;
  }
  newsetupaccount(){
    this.session.store("araccount","new");
    this.route.navigate(['psearch/']);

  }

  editsetupaccount(){
    this.session.store("araccount","edit");
    this.route.navigate(['Setupaccount/']);

  }

delete(inputt){

    console.log("service working",inputt);
   this.NewaraccountService.accountdelete(this.prof_id)
   .subscribe(( user349:any)=> {
     this.user41 = user349;
     this.setupdate=user349.Return;
     console.log("delete working fine",this.setupdate)
     if(this.setupdate == "RDS"){
       console.log("delete woking ",this.setupdate)
      this.setupdate = "new ar  account  is deletes for "+this.PF_Firstname;
      this.Success(this.setupdate);
      // this.setupdate= "The Confirmation Number is:"+this.confim;
      console.log("return value",this.setupdate)

    }
    else{
      this.setupdate="Pf Account has deleted";
    }
   },
  
    );  
     }
      //filter data in table  using checkbox
  checkboxflg=[];
  house = [];
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
     this.copy =JSON.parse(JSON.stringify(this.res_table))
      }
    this.res_table=[];
    console.log("this.filtercheckboxList   ----"+this.filtercheckboxList);

    for(var j=0;j<this.copy.length;j++){
      if(this.filtercheckboxList.includes(this.copy[j].account_balance)){
        this.res_table.push(this.copy[j]);
      }
    }
  }else{
    this.res_table=this.copy; 
  }
  }
  routeaccountoption(){
    this.session.store("showoption","false");
    this.route.navigate(['Accountoptions/']);
  }
  routeaccountmaintenance(){
    this.session.store("showoption","true");
    this.route.navigate(['AccountMaintenance/']); 
  }
}
