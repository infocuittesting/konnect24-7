import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';
import { ProfilesearchService } from '../profilesearch/profilesearch.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as moment from 'moment';
import { ToasterServiceService } from '../../toaster-service.service'; 
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css'],
  providers:[ModalService]
})
export class ModalBasicComponent implements OnInit {
  
  public Id = this.session.retrieve("pf_id");
  public Name = this.session.retrieve("pf_fname");

  public now:any;
  public tables =[];

  public negotes =[];
  public nego:any =[];
  public negotes1 =[];

  public notes =[];
  public notes1 = [];

  public credit =[];

  public prefer =[];
  public prefer1 =[];
  public prefer2 =[];

  public rate = [];
  public note1 = [];
  public future =  [];
  public history = [];

  public preference1 = [];
  public preference2 = [];
 creditcard = [];
 del ={};

  
  constructor(private pppService:ModalService,private route:Router
    ,public session:SessionStorageService,private toasterService:ToasterServiceService ) { 
this.negotes = this.negotes1;
this.prefer = this.prefer1;
this.prefer = this.prefer2;
this.negotes = this.nego;
}
Success(message){
  //  console.log("message",message);
   this.toasterService.success(message);
 }

private month:any;
private year:any;
onMonthChange(month:any){
  this.month = month.toString();
}
onYearChange(year:any){
  this.year = year.toString();
}
private creditcard_expiry:any;
getcreditexpiry(){
    this.creditcard_expiry = this.month+"/"+this.year;
    console.log(this.creditcard_expiry);
}

    user2:any = {};
    user21 = {};
    profile1 =[];
    profile2;
    user1 ={};
    user3 ={};
    user5 ={};
  public  mbc={};
    cu1:any=[];
  public card;
  public profilenego;
  public profilenegotes;
  public profilenotes;
  public profileprefer;
  public profileprefer1;
  user33={};
  user34={};
  user35={};
  user36={};
  user37={};
  user38={};
  user40={};
  user24={};
  updatecard={};
  public delcard;
  public delcard1;
  public delcard2;
  delcard3={};
  delcard4={};
  delcard6={};
  public delcard7;
  user25={};
  futurereservation={};
  public updatenotes;
  nup:any=[];
  noup:any=[];
  user13={};
  ratecode = {};
  someData1 = [];
  user14 = {};
  user15 = {};
  user16 = {};
  // profile2 ={};
  user7:any=[];
  user39:any ={};
  clist ={};
  

  ngtypeselection;
  pgtypeselection;
  prtypeselection;

  onSelect(val){
    console.log(val);
    this.negotes = this.negotes1.filter(x => x.pf_rate_code == val)
  }

  notesfilter(val){
    console.log(val);
    this.notes = this.notes1.filter(x => x.pf_note_type == val)
  }

  onSelectpop(val){
    console.log(val);
    this.negotes = this.negotes1.filter(x => x.pf_rate_code == val)
  }

  onSelect1(val){
    console.log(val);
    this.prefer = this.prefer1.filter(x => x.pf_guest_preference == val)
  }

  onSelect2(val){
    console.log(val);
    this.prefer = this.prefer2.filter(x => x.pf_preference_group == val)
  }

  preferencefilter(args1,args2){
    console.log(args1);
    console.log(args2);
    if(args1 === undefined){
      this.prefer = this.prefer2.filter(x => x.pf_preference_group == args2)
    }
    else if(args2 === undefined){
      this.prefer = this.prefer1.filter(x => x.pf_guest_preference == args1)
    }
    else{
      this.prefer = this.prefer2.filter(x => x.pf_preference_group == args2,y => y.pf_guest_preference == args1)
      // this.prefer = this.prefer1.filter(x => x.pf_guest_preference == args1)
      console.log(this.prefer);
    }
    // this.prefer = this.prefer1.filter(x => x.pf_guest_preference == args1)
    // this.prefer = this.prefer2.filter(x => x.pf_preference_group == args2)

  }
//   selectedDevice = 'Master';
//   onChange(newValue) {
//     console.log(newValue);
//     this.selectedDevice = newValue;
// }

  
  submit(inputt){
    this.creditcard_expiry = this.month+"/"+this.year;
    console.log(this.creditcard_expiry);
    console.log('sruthi',inputt,'kanu');
    inputt.PF_Expiration_Date = this.creditcard_expiry;
      this.pppService.insertCreditcard (inputt)
      .subscribe(( user333:any)=> {
        this.user33 = user333;
        this.card=user333.ReturnCode;
        this.mbc="";
        if(this.card=="RIS"){
          this.card="Creditcard is Add";
          this.Success(this.card);
        }
        
        let paramss={
          "pf_id":this.session.retrieve("pf_id"),
       }
       
        this.pppService.getCreditcard(paramss)
        .subscribe((resp: any) => {
          this.credit=resp.ReturnValue;
          console.log("creditcard details");
          console.log(this.credit);
       
      });
      
      },
       );  
        }


        update(inputt) {
          this.creditcard_expiry = this.month+"/"+this.year;
          console.log(this.creditcard_expiry);
          console.log(inputt);
          inputt.PF_Expiration_Date = this.creditcard_expiry;
            this.pppService.updateCredit(inputt)
            .subscribe(( user339:any)=> {
              this.user38 = user339;
              this.card=user339.ReturnCode;
              if(this.card=="RUS"){
                this.card="CreditCard is Updated "
                this.Success(this.card)
                let paramss={
                  "pf_id":this.session.retrieve("pf_id"),
               }
               
                this.pppService.getCreditcard(paramss)
                .subscribe((resp: any) => {
                  this.credit=resp.ReturnValue;             
              });
                this.cu1=[];
              }

            },
             );  
              }

     

     negoinsert(inputt):void {
        this.pppService.insertNegotiated (inputt)
        .subscribe(( user334:any)=> {
          this.user34 = user334;
          this.profilenego=user334.ReturnCode;
          if(this.profilenego=="RIS"){
            this.profilenego="The Negotiated Rate is Add for the Guest";
            let paramss={
              "pf_id":this.session.retrieve("pf_id"),
           }
            this.pppService.getNegotiated(paramss)
            .subscribe((resp: any) => {
              this.negotes=resp.ReturnValue;
          });
          }
        },
        );  

        let paramss={
          "pf_id":this.session.retrieve("pf_id"),
        
       }
       
        this.pppService.getNegotiated(paramss)
        .subscribe((resp: any) => {
          this.negotes=resp.ReturnValue;
         console.log(this.negotes);
       
      });
                       
       }

       negoupdate(inputt) {
          this.pppService.updateNegotiated(inputt)
          .subscribe(( user134:any)=> {
            this.user24 = user134;
            this.profilenegotes=user134.ReturnCode;
            if(this.profilenegotes=="RUS"){
              this.profilenegotes="The Negotiated Rate is Updated for the Guest";
              this.Success(this.profilenegotes)
              let paramss={
                "pf_id":this.session.retrieve("pf_id"),
             }
              this.pppService.getNegotiated(paramss)
              .subscribe((resp: any) => {
                this.negotes=resp.ReturnValue; 
            });
              this.nup=[];
            }
          },
          );  
                         
         }


       notesinsert(inputt):void {
        inputt.PF_Notes_Date= this.now;
        console.log(inputt);
          this.pppService.insertNotes(inputt)
          .subscribe(( user335:any)=> {
            this.user35 = user335;
            this.profilenotes=user335.ReturnCode;
            if(this.profilenotes=="RIS"){
              this.profilenotes="Special Notes is Add for the Guest";
              this.Success(this.profilenotes);
              let paramss={
                "pf_id":this.session.retrieve("pf_id"),
             }
              this.pppService.getNotes(paramss)
              .subscribe((resp: any) => {
                this.notes=resp.ReturnValue;
            })
            }
          },
          );  

          let paramss={
            "pf_id":this.session.retrieve("pf_id"),
            
         }
         
          this.pppService.getNotes(paramss)
          .subscribe((resp: any) => {
            this.notes=resp.ReturnValue;
            this.notes1=this.notes;
           console.log(this.credit);
         
        });
                        
         }

         notesupdate(inputt) {
          inputt.PF_Notes_Date= this.now;
            this.pppService.updateNotes(inputt)
            .subscribe(( user235:any)=> {
              this.user25 = user235;
              this.updatenotes=user235.ReturnCode;
              if(this.updatenotes=="RUS"){
                this.updatenotes="The Notes is Updated for the Guest";
                this.Success(this.updatenotes)
                let paramss={
                  "pf_id":this.session.retrieve("pf_id"),
               }
                this.pppService.getNotes(paramss)
                .subscribe((resp: any) => {
                  this.notes=resp.ReturnValue;
              })
              this.noup=[];
              }
            },
            );  
                           
           }

         preferinsert(inputt){
            this.pppService.insertPrefer(inputt)
            .subscribe((user336:any)=> {
              this.user36 = user336;
              this.profileprefer=user336.ReturnCode;
              if(this.profileprefer=="RIS"){
                this.profileprefer="Preferences is Add for the Guest";
                this.Success(this.profileprefer);
                console.log("workingggggggggg",this.profileprefer)
                let paramss={
                  "pf_id":this.session.retrieve("pf_id"),
               }
                this.pppService.getPreferences(paramss)
                .subscribe((resp: any) => {
                  this.prefer=resp.ReturnValue;
              });
              }
            },
            );  
                           
           }


           preferupdate(inputt){
              this.pppService.updatePrefer(inputt)
              .subscribe((user339:any)=> {
                this.user39 = user339;
                this.profileprefer1=user339.ReturnCode;
                if(this.profileprefer1=="RUS"){
                  this.profileprefer1="The Preferences is Updated for the Guest";
                  this.Success(this.profileprefer1);
                  let paramss={
                    "pf_id":this.session.retrieve("pf_id"),
                 }
                  this.pppService.getPreferences(paramss)
                  .subscribe((resp: any) => {
                    this.prefer=resp.ReturnValue;
                });
                this.user7=[];
                }
              },
              );  
                             
             }

     flagsId:string;
changeClick(flag){
  if(flag=='CHANGE'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
  
 }
 
  this.pppService.getTables(paramss)
  .subscribe((resp: any) => {
    this.tables=resp.ReturnValue;
   
    console.log("working fine",this.tables);
 
});
}

flagsnegotesId:string;
negotesClick(flag){
  if(flag=='NEGOTES'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
  
 }
 
  this.pppService.getNegotiated(paramss)
  .subscribe((resp: any) => {
    this.negotes=resp.ReturnValue;
    this.negotes1=resp.ReturnValue;
});
}





flagfutureId:string;
futureClick(flag){
  if(flag=='FUTURE'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
  
 }
 
  this.pppService.getFuture(paramss)
  .subscribe((resp: any) => {
    this.future=resp.ReturnValue;
    console.log(this.future);
 
});
}


flagshistoryId:string;
historyClick(flag){
  if(flag=='HISTORY'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
  
 }
 
  this.pppService.getHistory(paramss)
  .subscribe((resp: any) => {
    this.history=resp.ReturnValue;
    console.log(this.future);
 
});
}


flagpreferencesId:string;
preferenceClick(flag){
  if(flag=='PREFER'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
   
 }
 
  this.pppService.getPreferences(paramss)
  .subscribe((resp: any) => {
    this.prefer=resp.ReturnValue;
});
}


flagnotesId:string;
notesClick(flag){
  if(flag=='NOTES'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
    
 }
 
  this.pppService.getNotes(paramss)
  .subscribe((resp: any) => {
    this.notes=resp.ReturnValue;
    this.notes1=this.notes;
   console.log(this.credit);
 
});
}


flagsdelId:string;
deletecreditClick(){
 let params={
   "cc_id":this.deleteDataDetails.cc_id.toString(),
    "pf_id":this.deleteDataDetails.pf_id,

  }
 
  this.pppService.deleteCredit(params)
.subscribe(( user313:any)=> {
  this.user13 = user313;
  this.delcard=user313.ReturnCode;
  if(this.delcard=="RDS"){
    this.delcard=" The Creditcard detail is deleted";
    this.Success(this.delcard);
    console.log("working",this.delcard)
  }

  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
 }
 
  this.pppService.getCreditcard(paramss)
  .subscribe((resp: any) => {
    this.credit=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.credit);
 
})
});
}



flagsnegoId:string;
deletenegotesClick(){
 let params={
   "negotiate_id":this.deleteDataDetails2.negotiate_id.toString(),
    "pf_id":this.deleteDataDetails2.pf_id,

  }
 
  this.pppService.negotesDelete(params)
.subscribe(( user314:any)=> {
  this.user14 = user314;
  this.delcard1=user314.ReturnCode;
  if(this.delcard1=="RDS"){
    this.delcard1="The Negotiated Rate is Deleted ";
  }

  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
 }
 
  this.pppService.getNegotiated(paramss)
  .subscribe((resp: any) => {
    this.negotes=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.negotes);
 
})
});
}

flagsnotesId:string;
deletenotesClick(){
 let params={
   "notes_id":this.deleteDataDetails1.notes_id.toString(),
    "pf_id":this.deleteDataDetails1.pf_id,

  }
 
  this.pppService.notesDelete(params)
.subscribe(( user315:any)=> {
  this.user15 = user315;
  this.delcard2=user315.ReturnCode;
  if(this.delcard2=="RDS"){
    this.delcard2="Notes is Deleted ";
    this.Success(this.delcard2);
    console.log("workingggggggggggg",this.delcard2)
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
 }
 
  this.pppService.getNotes(paramss)
  .subscribe((resp: any) => {
    this.notes=resp.ReturnValue;
 
})
});
}




flagspreferId:string;
deletepreferClick(){
 let params={
   "preference_id":this.deleteDataDetails4.preference_id.toString(),
    "pf_id":this.deleteDataDetails4.pf_id,
}
 
  this.pppService.preferDelete(params)
.subscribe(( user415:any)=> {
  this.user21 = user415;
  this.delcard7=user415.ReturnCode;
  if(this.delcard7=="RDS"){
    this.delcard7="Preferences is Deleted for the Guest";
    this.Success(this.delcard7);
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
 }
 
  this.pppService.getPreferences(paramss)
  .subscribe((resp: any) => {
    this.prefer=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.prefer);
 
})
});
}



  ngOnInit() 
 {

  //Date and time
  setInterval(()=>{
    this.now =  moment().format("DD-MMM-YYYY HH:mm:ss");
  },1000); 

this.pppService.ratecodedropdown()
   .subscribe((resp: any) => {
     this.rate=resp.records;
console.log("res",this.rate);
  
});



this.pppService.notedropdown()
   .subscribe((resp: any) => {
     this.note1=resp.ReturnValue;
   console.log("res");
  
});



this.pppService.credicardtype()
   .subscribe((resp: any) => {
     this.creditcard=resp.ReturnValue;
   console.log("res");
  
});

this.pppService.credicardtype()
  .subscribe((resp: any) => {
   this.clist=resp.ReturnValue;
 });

this.pppService.preferencedropdown()
   .subscribe((resp: any) => {
     this.preference1=resp.ReturnValue;
  console.log("res");
  
});


this.pppService.preferencegroupdropdown()
   .subscribe((resp: any) => {
     this.preference2=resp.ReturnValue;
   console.log("res");
  
});
let paramss={
  "pf_id":this.session.retrieve("Pf_id"),
  
}


this.pppService.Preferences(paramss)
.subscribe((resp: any) => {
this.prefer1=resp.ReturnValue;
});

this.pppService.Preferences(paramss)
.subscribe((resp: any) => {
this.prefer2=resp.ReturnValue;
});

}


  creditlist=[];
  servicestatus=[];


flagId:string;
creditClick(flag){
  if(flag=='CREDIT'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
 }
 
  this.pppService.getCreditcard(paramss)
  .subscribe((resp: any) => {
    this.credit=resp.ReturnValue;
    console.log("creditcard details");
     console.log(this.credit);
 
});
}



flagdeletesId:string;
deletesClick(flag){
  if(flag=='DELETE'){
    this.flagId=flag;
  }
  let paramss={
    "pf_id":this.session.retrieve("pf_id"),
 }
 
  this.pppService.deleterecordDelete(paramss)
  .subscribe((resp: any) => {
    this.profile1=resp.ReturnValue;
   this.profile2=resp.ReturnCode;
   if(this.profile2=="RDS"){
    this.profile2="The profile is Deleted";
    this.Success(this.profile2);
   }
    // console.log("creditcard details");
    //  console.log(this.credit);
 
});
}

//select Credit card
edit=true;
delet=true;
cid;
selectindex=null;
public deleteDataDetails:any;
selectMembersCredit(details,index){
this.selectindex=index;
this.cid=details.cc_id;
this.cu1.PF_Creditcard_No=details.pf_creditcard_no;
this.cu1.PF_Card_Type=details.pf_card_type;
if(this.cid==details.cc_id)
{
this.edit=false;
this.delet=false;
}else{this.edit=true;this.delet=true;}
this.deleteDataDetails=details;
this.session.store("id1",details.cc_id);
}

// Notes Select Edit and Delete
selectindex1=null;
public deleteDataDetails1:any;
public noteid;
noteedit=true;
notedelete=true;
selectMembersNotes(details,index){
this.noteid=details.notes_id;
this.noup.PF_Note_Type=details.pf_note_type;
this.noup.PF_Note_Title=details.pf_note_title;
this.noup.PF_Note_Description=details.pf_note_description
if(this.noteid==details.notes_id){
  this.noteedit=false;
  this.notedelete=false;
}else{
  this.noteedit=true;
  this.notedelete=true;
}
this.selectindex=index;
this.deleteDataDetails1=details;
this.session.store("id2",details.notes_id);
}

//select Negotes
selectindex2=null;
negoteid;
negoteedit=true;
negotedelete=true;
public deleteDataDetails2:any;
selectMembersNegotes(details,index){
  this.negoteid=details.negotiate_id;
  this.nup.PF_Rate_Code=details.pf_rate_code;
  this.nup.PF_Start_Sell_Date=details.pf_start_sell_date;
  this.nup.PF_End_Sell_Date=details.pf_end_sell_date;
  if(this.negoteid==details.negotiate_id){
    this.negoteedit=false;
    this.negotedelete=false;
  }else{
    this.noteedit=true;
    this.notedelete=true;
  }
this.selectindex=index;
this.deleteDataDetails2=details;
this.session.store("id3",details.negotiate_id);
}

//preferences modal select
selectindex3=null;
prefid;
prefedit=true;
prefdelete=true;
public deleteDataDetails4:any;
selectMembersPrefer(details,index){
  this.prefid=details.negotiate_id;
  this.user7.PF_Preference_Group=details.pf_preference_group;
  this.user7.PF_Preference_Description=details.pf_preference_description;
  this.user7.PF_Guest_Preference=details.pf_guest_preference;
  if(this.prefid==details.negotiate_id){
    this.prefedit=false;
    this.prefdelete=false;
  }else{
    this.prefedit=true;
    this.prefdelete=true;
  }
this.selectindex=index;
this.deleteDataDetails4=details;
this.session.store("id4",details.preference_id);
}
ngOnDestroy(){
  //Timer clear for ETA input
  if(this.now){
    clearInterval(this.now);
  }
}


  }
