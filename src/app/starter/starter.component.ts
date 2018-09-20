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
  ngOnInit() {
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
