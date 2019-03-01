import { Component, OnInit, OnDestroy } from '@angular/core';
import{StarterService} from "./starter/starter.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StarterService]
})
export class AppComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(private StarterService:StarterService) { }

  public checkin:any;
  public reservation:any;
  public checkout:any;
  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
     //dashboard cout panel
     this.StarterService.getcard().subscribe((resp:any) =>{
      this.checkin=resp.ReturnValue[1].count;
      this.reservation=resp.ReturnValue[4].count;
      this.checkout=resp.ReturnValue[2].count;
    })
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
}