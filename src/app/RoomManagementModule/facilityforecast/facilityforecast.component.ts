import { Component, OnInit } from '@angular/core';
import { FacilityforecastService } from './facilityforecast.service'
@Component({
  selector: 'app-facilityforecast',
  templateUrl: './facilityforecast.component.html',
  styleUrls: ['./facilityforecast.component.css'],
  providers:[FacilityforecastService]
})
export class FacilityforecastComponent implements OnInit {

  constructor(private FacilityforecastService:FacilityforecastService) { }
  //currect date in satrt date
  public startdate:any = new Date().toJSON().split('T')[0];
  public facilityforecast:any=[];
  ngOnInit() {
    this.FacilityforecastService.getfacilityforecast(this.startdate).subscribe((resp:any)=>{
      this.facilityforecast=resp.ReturnValue;
      console.log("this facility",this.facilityforecast)
    })
  }
  getfacility(startdate){
    this.FacilityforecastService.getfacilityforecast(startdate).subscribe((resp:any)=>{
      this.facilityforecast=resp.ReturnValue;
      console.log("this facility",this.facilityforecast)
    })
  }
}
