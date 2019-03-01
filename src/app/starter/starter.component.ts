import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
import{StarterService} from "./starter.service";
@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css'],
  providers:[StarterService]
})
export class StarterComponent implements OnInit {
private chart: any;
  constructor(private AmCharts: AmChartsService ,private StarterService:StarterService) { }
  public chartDatas = [];
  public getroomdetails=[] ;
  public cancelcount=[];
  public modifycount; 
  public getcard;

  //dashboard.card
  public checkin;
  public checkout;
  public reservation;
  public roomavailable;
  public dueout;
  public arrival;
  public rese:any;arriv:any;
  ngOnInit() {

    //dashboard cout panel
    this.StarterService.getcard().subscribe((resp:any) =>{
      this.getcard=resp.ReturnValue;
      this.checkin=resp.ReturnValue[1].count;
      this.reservation=resp.ReturnValue[4].count;
      this.roomavailable=resp.ReturnValue[5].count;
      this.checkout=resp.ReturnValue[2].count;
      this.dueout=resp.ReturnValue[3].count;
      this.arrival=resp.ReturnValue[0].count;
    })

    //dashboard panel
    this.StarterService.getpanel().subscribe((resp:any) =>{
      this.rese=resp.Today_booked_reservation;
      this.arriv = resp.Today_arrival;
    })

    this.StarterService.statisticsDetails()
    .subscribe((resp: any) => {
      // if (resp.ServiceStatus == 'Success') {
        this.getroomdetails = resp.Returnvalue;
        // this.cancelcount = resp.cancelcount;
        // this.modifycount = resp.Totalbookingcount;
        console.log("pie chrt work",this.getroomdetails);
        this.chartDatas=[];
        for(var i=0;i<this.getroomdetails.length;i++){
          this.chartDatas.push({
             'title':this.getroomdetails[i].title,
             'value':this.getroomdetails[i].value })
        }
        // this.getroomdetails=[];
          // console.log("$$$$$$",this.chartDatas);
        this.chart = this.AmCharts.makeChart('chartdiv', {
          'type': 'pie',
          'theme': 'light',
          'hideCredits':true,
          'dataProvider':this.chartDatas,
          'titleField': 'title',
          'valueField': 'value',
          'labelRadius': 5,

          'radius': '42%',
          'innerRadius': '60%',
          'labelText': '[[title]]',
          'export': {
            "legend": {
              "display":"Users"
            }
          }
        });
        
      });
  }
  
}
