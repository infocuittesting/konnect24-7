import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { InquriprocessserviceService} from './inquriprocessservice.service'


@Component({
  selector: 'app-inquriprocess',
  templateUrl: './inquriprocess.component.html',
  styleUrls: ['./inquriprocess.component.css'],
  providers:[InquriprocessserviceService]
})
export class InquriprocessComponent implements OnInit {
  
  showSelected: boolean = false;
  
  
  constructor(private inquiry:InquriprocessserviceService) { }
  onSelect(){
    this.showSelected = true;
  }

public roomtype=[];
public i:number;
public days;
public nightscount;
public roomtype_one;
public roomtype_two;
public roomtype_three;
public count_one;
public count_two;
public count_three;
public value;
IsHidden: false;
total:number;
van:any=[];
grid:any=[];
  user:any={};

public inquirygridtable: any [] ;
public obj:{};
  //date difference 
  arriveDepartureDateFun(arrDate,depDate){
    if(arrDate!=null && depDate!=null){
  const daydiff = moment(arrDate).diff(moment(depDate), "days");
  this.user.RES_Nights=Math.abs(daydiff);
    }
  }
 // user33={};
  // veronica(daisy):any {
  //   console.log("vaal vaal daisy",daisy);
  //   this.inquiry.vallvall (daisy)
  //   .subscribe( (resp:any) => {
  //     this.van = resp;  
  //     }
  //   }
  user33={};
   veronica(inputt):void {
      console.log(inputt);
      this.inquiry.vallvall (inputt)
      .subscribe( (resp:any) => {
        
        this.van = resp;
        console.log("vaall vall valll daisy",this.van);
      });
    }
   
    inquirygrid(gridinput):void{
 
      console.log("inquiy inputs",gridinput)
      this.nightscount = gridinput.RES_Nights;
      this.total = gridinput.roomperday;
      
      // this.roomtype_one = String.Format("{0:U}",gridinput.roomtypeselection);
      this.roomtype_one = gridinput.roomtypeselection.type;
      console.log("type1",this.roomtype_one)
      this.roomtype_two =gridinput.roomtype1selection.type;
      console.log("type2",this.roomtype_two);
      this.roomtype_three = gridinput.roomtype2selection.type;
      console.log("type3",this.roomtype_three);
      // console.log("id,type",this.roomtype_three.id,this.roomtype_three.type);

      this.count_one = gridinput.count;
      this.count_two = gridinput.count2;
      this.count_three = gridinput.count3;
      // this.value =
      
      // this.user.total =  this.total;
      console.log("jksf",  this.total)
      console.log("getnigths",this.nightscount)
     
      //  for(i=0;i<gridinput.RES_Nights;i++)
      this.inquirygridtable = [];
      for (let i=1; i<=gridinput.RES_Nights; i++)
      {  
          this.days = "day"+i.toString();
          console.log(this.days)
          // this.user.days =  this.days;
          
          this.inquirygridtable.push({'KNGN':this.count_one,'SDBN': this.count_two,'KSBN':this.count_three,'KNGS':'5','KSBS':'4','COMP':2,'days':this.days,'total':gridinput.roomperday});
          // console.log("Rocket",this.inquirygridtable);

          //  console.log("table",this.user.days)
          // console.log("table",emp.days)
      }
     
      // this.inquirygridtable = [];
      // this.inquirygridtable.push({'KNGN':'10','SDBN':'3','KSBN':'4','KNGS':'5','KSBS':'4','SJSN':'5','SJSS':7,'COMP':2,'days':this.days,'total':gridinput.roomperday});
      // console.log(this.inquirygridtable);
    }
//           this.confim=resp.ConfirmationNumber;
//           this.usera=resp.ReturnCode;
//           if(this.usera == "RIS"){
//             this.usera = "Reservation is Created for "+this.PF_Firstname+" "+this.Pf_lastname;
//             this.confim= "The Confirmation Number is:"+this.confim;

//           }
// else{
//   this.usera="Reservation is Already Exist";
// } 
// }
      
  
  ngOnInit() {
    // RoomtypeDroupDown
    this.inquiry.roomtypedroupdown()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;

});

this.inquiry.roomtypedroupdown1()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;
// console.log(this.roomtype);
});

this.inquiry.roomtypedroupdown2()
.subscribe((resp: any) => {
this.roomtype=resp.ReturnValue;
// console.log(this.roomtype);
});
  }


  
}
