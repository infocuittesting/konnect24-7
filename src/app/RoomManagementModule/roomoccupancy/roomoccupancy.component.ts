import { Component, OnInit } from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
import { RoomoccupancyService} from './roomoccupancy.service';
@Component({
  selector: 'app-roomoccupancy',
  templateUrl: './roomoccupancy.component.html',
  styleUrls: ['./roomoccupancy.component.css'],
  providers:[RoomoccupancyService]
})
export class RoomoccupancyComponent implements OnInit {

  constructor(private AmCharts: AmChartsService,private RoomoccupancyService:RoomoccupancyService) { }
public occupancy_details = [];
public occupancy_data = [];
public start_date:any = new Date().toJSON().split('T')[0];
  ngOnInit() {
    this.occupany_graph(this.start_date);
    
  }
  occupany_graph(start_date){
   
    this.RoomoccupancyService.gestservices(start_date)
    .subscribe((resp: any) => {   
      this.occupancy_details = resp.ReturnValue;
      // this.cancelcount = resp.cancelcount;
      // this.modifycount = resp.Totalbookingcount;
      console.log("future booking",this.occupancy_details);
      // this.chartDatas=[];
      
      this.occupancy_data = [];
      for(var i=0;i<this.occupancy_details.length;i++){
        this.occupancy_data.push({
          'date':this.occupancy_details[i].date,
          'deduct':this.occupancy_details[i].deduct,
           'nondeduct':this.occupancy_details[i].nondeduct,
           'total_rooms':this.occupancy_details[i].total_rooms })
    
  
      }
    var chart = this.AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "theme": "light",
      "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10
      },
      "titles":[{
      "text":"Occupancy Graph",
      "align":"center"
      }],
      "dataProvider":this.occupancy_data,
      "valueAxes": [{
        "stackType": "regular",
        
        /**
         * A proprietary setting `stackByValue` which is not an
         * official config option. It will be used by our custom
         * plugin
         */
        "stackByValue": true,
        "axisAlpha": 0.3,
        "gridAlpha": 0
      }],
      "graphs": [{
        
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "labelPosition": "middle",
        "lineAlpha": 0.3,
        "title": "Non deduct",
        "type": "column",
        "color": "#000000",
        "valueField": "nondeduct"
      }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "labelPosition": "middle",
        "lineAlpha": 0.3,
        "title": "Deduct",
        "type": "column",
        "color": "#000000",
        "valueField": "deduct"
      }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "labelPosition": "middle",
        "lineAlpha": 0.3,
        "title": "Total Rooms",
        "type": "column",
        "color": "#000000",
        "valueField": "total_rooms"
      }],
      "categoryField": "date",
      "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
      },
      "export": {
        "enabled": true
      }
    });
  });
  }

}