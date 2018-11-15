import { Component, OnInit } from '@angular/core';
import { SetupaccountService } from './setupaccount.service';
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-setupaccount',
  templateUrl: './setupaccount.component.html',
  styleUrls: ['./setupaccount.component.css'],
  providers:[SetupaccountService]
})
export class SetupaccountComponent implements OnInit {

  public Id = this.session.retrieve("id");
  public user41 ={};
  public setupdate=[];
  public Account= [];
  public roomtype=[];

  constructor(private pService: SetupaccountService, public session:SessionStorageService ) { }

  ngOnInit() {
    
    this.pService.blockstatus()
    .subscribe((resp: any) => {
    this.roomtype=resp.ReturnValue;
     console.log("service working fine",this.roomtype);
    });

  }
  update(inputt):void {

    console.log(inputt);
   this.pService.accountsetup(inputt)
   .subscribe(( user349:any)=> {
     this.user41 = user349;
     this.setupdate=user349.Return;
     console.log("service working fine",this.setupdate)
   },
    );  
     }
  
 
}
