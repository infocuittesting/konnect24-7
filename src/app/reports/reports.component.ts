import { Component, OnInit } from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
// import { ReportsService } from './reports.service';
import { ReportsService } from './reports.service';
import { SessionStorageService } from "ngx-webstorage";
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers:[ReportsService]
  
})
export class ReportsComponent implements OnInit {
  
  constructor(private AmCharts: AmChartsService,private ReportsService:ReportsService) { }
  public reports:any= {}
  public resv = false;
  public statisticsDetails=[]
  public prof = false;
  public frontdesk = false;
  public roommanage = false;
  public cashering = false;
  public revenue = false;
  public blocks = false;
  public packages = false;
  private chart: any;
  public param =[];
   public chartDatas = [];
  public getroomdetails=[] ;
  public cancelcount=[];
  public modifycount;
  public staticdetails=[];
  public blockid;
 
  ngOnInit() {
    // let statsParms={
    //   "blockid":this.session.retrieve("business_id")
    // }
    
  }
  

 

  showhiderestriction(param) {
    if (param == "Reservation") {
      this.resv = true;
      this.loadReservationChart();
    }
    else {
      this.resv = false;
     this.loadfrontdeskchart();
    }
    if (param == "Profile") {
      this.prof = true;
      this.loadprofilechart();
    }
    else {
      this.prof = false;
    }
    if (param == "Front Desk") {
      this.frontdesk = true;
      this.loadfrontdeskchart();
    }
    else {
      this.frontdesk = false;
    }
    if (param == "Room Management") {
      this.roommanage = true;
      this.loadroommamagemtchart();
    }
    else {
      this.roommanage = false;
    }
    if (param == "Cashiering") {
      this.cashering = true;
      this.loadcasheringchart();
    }
    else {
      this.cashering = false;
    }
    if (param == "Revenue Management") {
      this.revenue = true;
      this.loadrevenuechart();
    }
    else {
      this.revenue = false;
    }
    if (param == "Business Block") {
      this.blocks = true;
      this.loadbusinessblockschart();
    }
    else {
      this.blocks = false;
    }
    if (param == "Packages") {
      this.packages = true;
    }
    else {
      this.packages = false;
    }
  }


loadReservationChart(){
  this.ReportsService.statisticsDetails()
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
      // alert(JSON.stringify(this.chartDatas));
      // this.getroomdetails=[];
        // console.log("$$$$$$",this.chartDatas);
      this.chart = this.AmCharts.makeChart('resvchart', {
        'type': 'pie',
        'theme': 'light',
        'hideCredits':true,
        "marginTop": 25,
        "legend": {

          "horizontalGap": 10,
          "maxColumns": 1,
          "position": "right",
          "marginRight": 90,
          "margintop":10,
          "autoMargins": false
        },
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

//reservation 2 chart

this.ReportsService.statisticsDetails1()
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
    // alert(JSON.stringify(this.chartDatas));
    // this.getroomdetails=[];
      // console.log("$$$$$$",this.chartDatas);
    this.chart = this.AmCharts.makeChart('resvchart1', {
      'type': 'pie',
      'theme': 'light',
      'hideCredits':true,

      "legend": {

        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "marginRight": 90,
        "margintop":10,
        "autoMargins": false
      },
      'dataProvider':this.chartDatas,
      'titleField': 'title',
      'valueField': 'value',
      'labelRadius': 5,

      'radius': '42%',
      'innerRadius': '%',
      'labelText': '[[title]]',
      'export': {
        "legend": {
          "display":"Users"
        }
      }
    });
    
  });
 
  //funal chart
  this.ReportsService.statisticsDetails1()
.subscribe((resp: any) => {
  // if (resp.ServiceStatus == 'Success') {
    this.getroomdetails = resp.Returnvalue;
    // this.cancelcount = resp.cancelcount;
    // this.modifycount = resp.Totalbookingcount;
    console.log("funal chart is working",this.getroomdetails);
    this.chartDatas=[];
    for(var i=0;i<this.getroomdetails.length;i++){
      this.chartDatas.push({
         'title':this.getroomdetails[i].title,
         'value':this.getroomdetails[i].value })
    }
    this.chart = this.AmCharts.makeChart( "ganttchat", {
      "type": "gantt",
      "theme": "light",
      "marginRight": 70,
      "period": "hh",
      "dataDateFormat":"YYYY-MM-DD",
      "balloonDateFormat": "JJ:NN",
      "columnWidth": 0.5,
      "valueAxis": {
          "type": "date"
      },
      "brightnessStep": 10,
      "graph": {
          "fillAlphas": 1,
          "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
      },
      "rotate": true,
      "categoryField": "category",
      "segmentsField": "segments",
      "colorField": "color",
      "startDate": "2015-01-01",
      "startField": "start",
      "endField": "end",
      "durationField": "duration",
      "dataProvider": [ {
          "category": "John",
          "segments": [ {
              "start": 7,
              "duration": 2,
              "color": "#46615e",
              "task": "Task #1"
          }, {
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 2,
              "color": "#8dc49f",
              "task": "Task #3"
          } ]
      }, {
          "category": "Smith",
          "segments": [ {
              "start": 10,
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 1,
              "color": "#8dc49f",
              "task": "Task #3"
          }, {
              "duration": 4,
              "color": "#46615e",
              "task": "Task #1"
          } ]
      }, {
          "category": "Ben",
          "segments": [ {
              "start": 12,
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "start": 16,
              "duration": 2,
              "color": "#FFE4C4",
              "task": "Task #4"
          } ]
      }, {
          "category": "Mike",
          "segments": [ {
              "start": 9,
              "duration": 6,
              "color": "#46615e",
              "task": "Task #1"
          }, {
              "duration": 4,
              "color": "#727d6f",
              "task": "Task #2"
          } ]
      }, {
          "category": "Lenny",
          "segments": [ {
              "start": 8,
              "duration": 1,
              "color": "#8dc49f",
              "task": "Task #3"
          }, {
              "duration": 4,
              "color": "#46615e",
              "task": "Task #1"
          } ]
      }, {
          "category": "Scott",
          "segments": [ {
              "start": 15,
              "duration": 3,
              "color": "#727d6f",
              "task": "Task #2"
          } ]
      }, {
          "category": "Julia",
          "segments": [ {
              "start": 9,
              "duration": 2,
              "color": "#46615e",
              "task": "Task #1"
          }, {
              "duration": 1,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 8,
              "color": "#8dc49f",
              "task": "Task #3"
          } ]
      }, {
          "category": "Bob",
          "segments": [ {
              "start": 9,
              "duration": 8,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 7,
              "color": "#8dc49f",
              "task": "Task #3"
          } ]
      }, {
          "category": "Kendra",
          "segments": [ {
              "start": 11,
              "duration": 8,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "start": 16,
              "duration": 2,
              "color": "#FFE4C4",
              "task": "Task #4"
          } ]
      }, {
          "category": "Tom",
          "segments": [ {
              "start": 9,
              "duration": 4,
              "color": "#46615e",
              "task": "Task #1"
          }, {
              "duration": 3,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 5,
              "color": "#8dc49f",
              "task": "Task #3"
          } ]
      }, {
          "category": "Kyle",
          "segments": [ {
              "start": 6,
              "duration": 3,
              "color": "#727d6f",
              "task": "Task #2"
          } ]
      }, {
          "category": "Anita",
          "segments": [ {
              "start": 12,
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "start": 16,
              "duration": 2,
              "color": "#FFE4C4",
              "task": "Task #4"
          } ]
      }, {
          "category": "Jack",
          "segments": [ {
              "start": 8,
              "duration": 10,
              "color": "#46615e",
              "task": "Task #1"
          }, {
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          } ]
      }, {
          "category": "Kim",
          "segments": [ {
              "start": 12,
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 3,
              "color": "#8dc49f",
              "task": "Task #3"
          } ]
      }, {
          "category": "Aaron",
          "segments": [ {
              "start": 18,
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 2,
              "color": "#FFE4C4",
              "task": "Task #4"
          } ]
      }, {
          "category": "Alan",
          "segments": [ {
              "start": 17,
              "duration": 2,
              "color": "#46615e",
              "task": "Task #1"
          }, {
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 2,
              "color": "#8dc49f",
              "task": "Task #3"
          } ]
      }, {
          "category": "Ruth",
          "segments": [ {
              "start": 13,
              "duration": 2,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "duration": 1,
              "color": "#8dc49f",
              "task": "Task #3"
          }, {
              "duration": 4,
              "color": "#46615e",
              "task": "Task #1"
          } ]
      }, {
          "category": "Simon",
          "segments": [ {
              "start": 10,
              "duration": 3,
              "color": "#727d6f",
              "task": "Task #2"
          }, {
              "start": 17,
              "duration": 4,
              "color": "#FFE4C4",
              "task": "Task #4"
          } ]
      } ],
      "valueScrollbar": {
          "autoGridCount":true
      },
      "chartCursor": {
          "cursorColor":"#55bb76",
          "valueBalloonsEnabled": false,
          "cursorAlpha": 0,
          "valueLineAlpha":0.5,
          "valueLineBalloonEnabled": true,
          "valueLineEnabled": true,
          "zoomable":false,
          "valueZoomable":true
      },
      "export": {
          "enabled": true
       }
  } );
  });

}
loadprofilechart(){
  this.ReportsService.profile()
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
      // alert(JSON.stringify(this.chartDatas));
      // this.getroomdetails=[];
        // console.log("$$$$$$",this.chartDatas);
      this.chart = this.AmCharts.makeChart('profile', {
        
        'type': 'pie',
        'theme': 'light',
        'hideCredits':true,
        "legend": {

          "horizontalGap": 10,
          "maxColumns": 1,
          "position": "right",
          "marginRight": 90,
          "margintop":10,
          "autoMargins": false
        },
        'dataProvider':this.chartDatas,
        'titleField': 'title',
        'valueField': 'value',
        'labelRadius': 5,

        
  
        'radius': '42%',
        'innerRadius': '%',
        'labelText': '[[title]]',
        'export': {
          "legend": {
            "display":"Users"
          }
        }
      });
      
    });

    this.ReportsService.profile1()
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
      // alert(JSON.stringify(this.chartDatas));
      // this.getroomdetails=[];
        // console.log("$$$$$$",this.chartDatas);
      this.chart = this.AmCharts.makeChart('profile1', {
        'type': 'pie',
        'theme': 'light',
        'hideCredits':true,

        "legend": {

          "horizontalGap": 10,
          "maxColumns": 1,
          "position": "right",
          "marginRight": 90,
          "margintop":10,
          "autoMargins": false
        },
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
   

    this.ReportsService.profile2()
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
        // alert(JSON.stringify(this.chartDatas));
        // this.getroomdetails=[];
          // console.log("$$$$$$",this.chartDatas);
        this.chart = this.AmCharts.makeChart('profile2', {
          'type': 'pie',
          'theme': 'light',
          'hideCredits':true,

          "legend": {

            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
            "marginRight": 90,
            "margintop":10,
            "autoMargins": false
          },
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
// front desk
  loadfrontdeskchart(){
    this.ReportsService.frontdesk()
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
        // alert(JSON.stringify(this.chartDatas));
        // this.getroomdetails=[];
          // console.log("$$$$$$",this.chartDatas);
        this.chart = this.AmCharts.makeChart('Frontdesk', {
          
          'type': 'pie',
          'theme': 'light',
          'hideCredits':true,

          "legend": {

            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
            "marginRight": 90,
            "margintop":10,
            "autoMargins": false
          },
          'dataProvider':this.chartDatas,
          'titleField': 'title',
          'valueField': 'value',
          'labelRadius': 5,
  
          
    
          'radius': '42%',
          'innerRadius': '%',
          'labelText': '[[title]]',
          'export': {
            "legend": {
              "display":"Users"
            }
          }
        });
        
      });
  
      this.ReportsService.frontdesk1()
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
        // alert(JSON.stringify(this.chartDatas));
        // this.getroomdetails=[];
          // console.log("$$$$$$",this.chartDatas);
        this.chart = this.AmCharts.makeChart('Frontdesk1', {
          'type': 'pie',
          'theme': 'light',
          'hideCredits':true,
          "legend": {

            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
            "marginRight": 90,
            "margintop":10,
            "autoMargins": false
          },
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

      //waterfallchart

      this.ReportsService.frontdesk1()
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
          // alert(JSON.stringify(this.chartDatas));
          // this.getroomdetails=[];
            // console.log("$$$$$$",this.chartDatas);
            this.chart = this.AmCharts.makeChart("waterfall",
            {
                "type": "serial",
                "theme": "light",
                "hideCredits":true,
                "dataProvider": [{
                    "name": "John",
                    "points": 35654,
                    "color": "#7F8DA9",
                    "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
                }, {
                    "name": "Damon",
                    "points": 65456,
                    "color": "#FEC514",
                    "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
                }, {
                    "name": "Patrick",
                    "points": 45724,
                    "color": "#DB4C3C",
                    "bullet": "https://www.amcharts.com/lib/images/faces/D02.png"
                }, {
                    "name": "Mark",
                    "points": 13654,
                    "color": "#DAF0FD",
                    "bullet": "https://www.amcharts.com/lib/images/faces/E01.png"
                }],
                "valueAxes": [{
                    "maximum": 80000,
                    "minimum": 0,
                    "axisAlpha": 0,
                    "dashLength": 4,
                    "position": "left"
                }],
                "startDuration": 1,
                "graphs": [{
                    "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                    "bulletOffset": 10,
                    "bulletSize": 52,
                    "colorField": "color",
                    "cornerRadiusTop": 8,
                    "customBulletField": "bullet",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0,
                    "type": "column",
                    "valueField": "points"
                }],
                "marginTop": 0,
                "marginRight": 0,
                "marginLeft": 0,
                "marginBottom": 0,
                "autoMargins": false,
                "categoryField": "name",
                "categoryAxis": {
                    "axisAlpha": 0,
                    "gridAlpha": 0,
                    "inside": true,
                    "tickLength": 0
                },
                "export": {
                  "enabled": true
                 }
            });
          
        });
    }

    //water fall chart
    

    //cashering
     
  loadcasheringchart(){
      this.ReportsService.cashering()
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
          // alert(JSON.stringify(this.chartDatas));
          // this.getroomdetails=[];
            // console.log("$$$$$$",this.chartDatas);
          this.chart = this.AmCharts.makeChart('cashring', {
            'type': 'pie',
            'theme': 'light',
            'hideCredits':true,

            "legend": {

              "horizontalGap": 10,
              "maxColumns": 1,
              "position": "right",
              "marginRight": 90,
              "margintop":10,
              "autoMargins": false
            },
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

        this.ReportsService.cashering1()
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
          // alert(JSON.stringify(this.chartDatas));
          // this.getroomdetails=[];
            // console.log("$$$$$$",this.chartDatas);
           this.chart = this.AmCharts.makeChart("cashring1", {
              "theme": "orange",
              "type": "gauge",
              'hideCredits':true,
              "axes": [{
                "topTextFontSize": 20,
                "topTextYOffset": 70,
                "axisColor": "#31d6ea",
                "axisThickness": 1,
                "endValue": 100,
                "gridInside": true,
                "inside": true,
                "radius": "50%",
                "valueInterval": 10,
                "tickColor": "#67b7dc",
                "startAngle": -90,
                "endAngle": 90,
                "unit": "%",
                "bandOutlineAlpha": 0,
                "bands": [{
                  "color": "#0080ff",
                  "endValue": 100,
                  "innerRadius": "105%",
                  "radius": "170%",
                  "gradientRatio": [0.5, 0, -0.5],
                  "startValue": 0
                }, {
                  "color": "#3cd3a3",
                  "endValue": 0,
                  "innerRadius": "105%",
                  "radius": "170%",
                  "gradientRatio": [0.5, 0, -0.5],
                  "startValue": 0
                }]
              }],
              "arrows": [{
                "alpha": 1,
                "innerRadius": "35%",
                "nailRadius": 0,
                "radius": "170%"
              }]
            });
            
            setInterval(randomValue, 2000);
            
            // set random value
            function randomValue() {
              var value = Math.round(Math.random() * 100);
            this.chart.arrows[0].setValue(value);
            this.chart.axes[0].setTopText(value + " %");
              // adjust darker band to new value
              this.chart.axes[0].bands[1].setEndValue(value);
            }
          
        });
        this.ReportsService.Roomtransver()
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
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
              this.chart = this.AmCharts.makeChart( "Roomtransver", {
                "theme": "light",
                "type": "gauge",
                'hideCredits':true,
                "axes": [ {
                  "axisColor": "#67b7dc",
                  "axisThickness": 3,
                  "endValue": 240,
                  
                  "gridInside": false,
                  "inside": false,
                  "radius": "100%",
                  "valueInterval": 20,
                  "tickColor": "#67b7dc"
                }, {
                  "axisColor": "#fdd400",
                  "axisThickness": 3,
                  "endValue": 160,
                  "radius": "80%",
                  "valueInterval": 20,
                  "tickColor": "#fdd400"
                } ],
                "arrows": [ {
                  "color": "#67b7dc",
                  "innerRadius": "20%",
                  "nailRadius": 0,
                  "radius": "85%"
                } ],
                "export": {
                  "enabled": true
                }
              } );
              
              setInterval( randomValue, 2000 );
              
              // set random value
              function randomValue() {
                var value = Math.round( Math.random() * 240 );
                this.chart.arrows[ 0 ].setValue( value );
              }
          });
      }
  //  Revenuemanagement
      loadrevenuechart(){
        this.ReportsService.revenue()
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
          // alert(JSON.stringify(this.chartDatas));
          // this.getroomdetails=[];
            // console.log("$$$$$$",this.chartDatas);
          this.chart = this.AmCharts.makeChart('revenue', {
            'type': 'pie',
            'theme': 'light',
            'hideCredits':true,
            "legend": {

              "horizontalGap": 10,
              "maxColumns": 1,
              "position": "right",
              "marginRight": 90,
              "margintop":10,
              "autoMargins": false
            },
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

        this.ReportsService.revenue1()
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
          // alert(JSON.stringify(this.chartDatas));
          // this.getroomdetails=[];
            // console.log("$$$$$$",this.chartDatas);
          this.chart = this.AmCharts.makeChart('revenue1', {
            'type': 'pie',
            'theme': 'light',
            'hideCredits':true,
            "legend": {

              "horizontalGap": 10,
              "maxColumns": 1,
              "position": "right",
              "marginRight": 90,
              "margintop":10,
              "autoMargins": false
            },
            'dataProvider':this.chartDatas,
            'titleField': 'title',
            'valueField': 'value',
            'labelRadius': 5,
      
            'radius': '42%',
            'innerRadius': '%',
            'labelText': '[[title]]',
            'export': {
              "legend": {
                "display":"Users"
              }
            }
          });
          
        });
       
        this.ReportsService.revenue2()
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
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
            // generate data
var chartData = [];

function generateChartData() {
    var firstDate = new Date();
    firstDate.setTime(firstDate.getTime() - 10 * 24 * 60 * 60 * 1000);

    for (var i = firstDate.getTime(); i < (firstDate.getTime() + 10 * 24 * 60 * 60 * 1000); i += 60 * 60 * 1000) {
        var newDate = new Date(i);

        if (i == firstDate.getTime()) {
            var value1 = Math.round(Math.random() * 10) + 1;
        } else {
            var value1 = Math.round(chartData[chartData.length - 1].value1 / 100 * (90 + Math.round(Math.random() * 20)) * 100) / 100;
        }

        if (newDate.getHours() == 12) {
            // we set daily data on 12th hour only
            var value2 = Math.round(Math.random() * 12) + 1;
            chartData.push({
                date: newDate,
                value1: value1,
                value2: value2
            });
        } else {
            chartData.push({
                date: newDate,
                value1: value1
            });
        }
    }
}

generateChartData();

 this.chart = this.AmCharts.makeChart("revenue2", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "dataProvider": chartData,
    "valueAxes": [{
        "axisAlpha": 0.1
    }],

    "graphs": [{
        "balloonText": "[[title]]: [[value]]",
        "columnWidth": 20,
        "fillAlphas": 1,
        "title": "daily",
        "type": "column",
        "valueField": "value2"
    }, {
        "balloonText": "[[title]]: [[value]]",
        "lineThickness": 2,
        "title": "intra-day",
        "valueField": "value1"
    }],
    "zoomOutButtonRollOverAlpha": 0.15,
    "chartCursor": {
        "categoryBalloonDateFormat": "MMM DD JJ:NN",
        "cursorPosition": "mouse",
        "showNextAvailable": true
    },
    "autoMarginOffset": 5,
    "columnWidth": 1,
    "categoryField": "date",
    "categoryAxis": {
        "minPeriod": "hh",
        "parseDates": true
    },
    "export": {
        "enabled": true
    }
});
            
          });
      }

      //businessblocks
      loadbusinessblockschart(){
       

        this.ReportsService.businessblocks()
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
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
            this.chart = this.AmCharts.makeChart('blocks', {
              'type': 'pie',
              'theme': 'light',
              'hideCredits':true,
              "legend": {

                "horizontalGap": 10,
                "maxColumns": 1,
                "position": "right",
                "marginRight": 90,
                "margintop":10,
                "autoMargins": false
              },
              'dataProvider':this.chartDatas,
              'titleField': 'title',
              'valueField': 'value',
              'labelRadius': 5,
        
              'radius': '42%',
              'innerRadius': '%',
              'labelText': '[[title]]',
              'export': {
                "legend": {
                  "display":"Users"
                }
              }
            });
            
          });
           

          
        this.ReportsService.businessblocks1()
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
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
            this.chart = this.AmCharts.makeChart('blocks1', {
              'type': 'pie',
              'theme': 'light',
              'hideCredits':true,
              "legend": {

                "horizontalGap": 10,
                "maxColumns": 1,
                "position": "right",
                "marginRight": 90,
                "margintop":10,
                "autoMargins": false
              },
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

    //       this.ReportsService.statistics(statsParms)
    // .subscribe((resp: any) => {
    //   if (resp.ServiceStatus == 'Success') {
    //     this.staticdetails=resp.Result;
    //     console.log("statisctics details",this.staticdetails)
      //   this.getroomdetails= [
      //     {
      //       month:"June",          
      // standardRoomTotal:41,          
      // deluxRoomTotal:30,          
      // deluxSuiteRoomTotal:13,           
      // superiorRoomTotal:14,         
      //     year:2018 },        
      // {          
      //     month:"July",          
      // standardRoomTotal:91,          
      // deluxRoomTotal:70,           
      // deluxSuiteRoomTotal:32,           
      // superiorRoomTotal:23,         
      //     year:2018},          
      // {          
      //     month:"Augest",          
      // standardRoomTotal:45,         
      // deluxRoomTotal:59,           
      // deluxSuiteRoomTotal:43,           
      // superiorRoomTotal:20,           
      //     year:2018}];

    //availale count rooms   
// this.chart = this.AmCharts.makeChart('blocksstatistics', {
//   "theme": "light",
//   'hideCredits':true,
// "type": "serial",
// 'titleField': ['Standard Room'],
// "titles": [{
//   "text": "Room Statistics",
//   "bold": true,
//   "align": "middle"
  
// }],
// "marginTop": 25,

// "legend": {
//   "horizontalGap": 10,
//   "maxColumns": 1,
//   "position": "right",
//   "useGraphSettings": true,
//   "markerSize": 10
// },
// "dataProvider": this.staticdetails,
// "valueAxes": [{
//     //"unit": "%",
//     "position": "left",
//     "title": "Arrived Room Count",
// }],
// "startDuration": 1,
// "graphs": [{
//     "balloonText": "Standard Room in [[category]] ([[year]]): <b>[[value]]</b>",
//     "fillAlphas": 0.9,
//     "lineAlpha": 0.2,
//     "labelText":'Standard',
//     "title": "Standard",
//     "type": "column",
//     "valueField": "standardRoomTotal"
// }, {
//     "balloonText": "Delux Room in [[category]] ([[year]]): <b>[[value]]</b>",
//     "fillAlphas": 0.9,
//     "lineAlpha": 0.2,
//     "labelText":'Delux',
    
//     "title": "Delux",
//     "type": "column",
//     // "clustered":false,
//     // "columnWidth":0.5,
//     "valueField": "deluxRoomTotal"
// }, {
//   "balloonText": "Delux Suite Room in [[category]] ([[year]]): <b>[[value]]</b>",
//   "fillAlphas": 0.9,
//   "lineAlpha": 0.2,
//   "labelText":'Delux Suite',
//   "title": "Delux Suite",
//   "type": "column",
//   // "clustered":false,
//  // "columnWidth":0.5,
//   "valueField": "deluxSuiteRoomTotal"
// }, {
// "balloonText": "Superior Room in [[category]] ([[year]]): <b>[[value]]</b>",
// "fillAlphas": 0.9,
// "lineAlpha": 0.2,
// "labelText":'Superior',
// "title": "Superior",
// "type": "column",    
// // "clustered":false,
// //"columnWidth":0.5,
// "valueField": "superiorRoomTotal"
// }],
// "balloon": {
//   "fixedPosition": true,
  
// },
// "chartCursor": {
//   "cursorAlpha": 0,
//   "oneBalloonOnly": true
// },

// "plotAreaFillAlphas": 0.1,

// "categoryField": "year",
// "categoryAxis": {
//     "gridPosition": "start"
// },
// "export": {
//   "enabled": true,
//   "menu": []
//   },
// //  "titles": [
// //       {
// //          "text": "",
// //          "size": 15
// //        }
// //      ],
// });

// this.charts.push( this.chart );
// }
// });
      }

      // Roommanagement charts
      loadroommamagemtchart(){
        this.ReportsService.roomdisk()
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
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
            this.chart = this.AmCharts.makeChart('roomdisk', {
              'type': 'pie',
              'theme': 'light',
              'hideCredits':true,
              "legend": {

                "horizontalGap": 10,
                "maxColumns": 1,
                "position": "right",
                "marginRight": 90,
                "margintop":10,
                "autoMargins": false
              },
              'dataProvider':this.chartDatas,
              'titleField': 'title',
              'valueField': 'value',
              'labelRadius': 5,
        
              'radius': '42%',
              'innerRadius': '%',
              'labelText': '[[title]]',
              'export': {
                "legend": {
                  "display":"Users"
                }
              }
            });
            
          });

          this.ReportsService.fecility()
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
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
            this.chart = this.AmCharts.makeChart('fecility', {
              'type': 'pie',
              'theme': 'light',
              'hideCredits':true,
              "legend": {

                "horizontalGap": 10,
                "maxColumns": 1,
                "position": "right",
                "marginRight": 90,
                "margintop":10,
                "autoMargins": false
              },
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

          this.ReportsService.Roomconditions()
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
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
              this.chart = this.AmCharts.makeChart( "HouseKeeping", {
                "type": "serial",
                "theme": "light",
                'hideCredits':true,
                "depth3D": 20,
                "angle": 30,
                "legend": {
                  "horizontalGap": 10,
                  "useGraphSettings": true,
                  "markerSize": 10
                },
                "dataProvider": [ {
                  "year": 2003,
                  "europe": 2.5,
                  "namerica": 2.5,
                  "asia": 2.1,
                  "lamerica": 1.2,
                  "meast": 0.2,
                  "africa": 0.1
                }, {
                  "year": 2004,
                  "europe": 2.6,
                  "namerica": 2.7,
                  "asia": 2.2,
                  "lamerica": 1.3,
                  "meast": 0.3,
                  "africa": 0.1
                }, {
                  "year": 2005,
                  "europe": 2.8,
                  "namerica": 2.9,
                  "asia": 2.4,
                  "lamerica": 1.4,
                  "meast": 0.3,
                  "africa": 0.1
                } ],
                "valueAxes": [ {
                  "stackType": "regular",
                  "axisAlpha": 0,
                  "gridAlpha": 0
                } ],
                "graphs": [ {
                  "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                  "fillAlphas": 0.8,
                  "labelText": "[[value]]",
                  "lineAlpha": 0.3,
                  "title": "Europe",
                  "type": "column",
                  "color": "#000000",
                  "valueField": "europe"
                }, {
                  "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                  "fillAlphas": 0.8,
                  "labelText": "[[value]]",
                  "lineAlpha": 0.3,
                  "title": "North America",
                  "type": "column",
                  "color": "#000000",
                  "valueField": "namerica"
                }, {
                  "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                  "fillAlphas": 0.8,
                  "labelText": "[[value]]",
                  "lineAlpha": 0.3,
                  "title": "Asia-Pacific",
                  "type": "column",
                  "newStack": true,
                  "color": "#000000",
                  "valueField": "asia"
                }, {
                  "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                  "fillAlphas": 0.8,
                  "labelText": "[[value]]",
                  "lineAlpha": 0.3,
                  "title": "Latin America",
                  "type": "column",
                  "color": "#000000",
                  "valueField": "lamerica"
                }, {
                  "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                  "fillAlphas": 0.8,
                  "labelText": "[[value]]",
                  "lineAlpha": 0.3,
                  "title": "Middle-East",
                  "type": "column",
                  "color": "#000000",
                  "valueField": "meast"
                }, {
                  "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
                  "fillAlphas": 0.8,
                  "labelText": "[[value]]",
                  "lineAlpha": 0.3,
                  "title": "Africa",
                  "type": "column",
                  "color": "#000000",
                  "valueField": "africa"
                } ],
                "categoryField": "year",
                "categoryAxis": {
                  "gridPosition": "start",
                  "axisAlpha": 0,
                  "gridAlpha": 0,
                  "position": "left"
                },
                "export": {
                  "enabled": true
                }
              
              } );
          });

              //roommaintence
          this.ReportsService.roommaintence()
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
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
              this.chart = this.AmCharts.makeChart("RoomMaintenance", {
                "type": "serial",
                "theme": "light",
                "hideCredits":true,
                "marginRight": 70,
                "dataProvider": [{
                  "country": "USA",
                  "visits": 3025,
                  "color": "#FF0F00"
                }, {
                  "country": "China",
                  "visits": 1882,
                  "color": "#FF6600"
                }, {
                  "country": "Japan",
                  "visits": 1809,
                  "color": "#FF9E01"
                }, {
                  "country": "Germany",
                  "visits": 1322,
                  "color": "#FCD202"
                }, {
                  "country": "UK",
                  "visits": 1122,
                  "color": "#F8FF01"
                }, {
                  "country": "France",
                  "visits": 1114,
                  "color": "#B0DE09"
                }, {
                  "country": "India",
                  "visits": 984,
                  "color": "#04D215"
                }, {
                  "country": "Spain",
                  "visits": 711,
                  "color": "#0D8ECF"
                }, {
                  "country": "Netherlands",
                  "visits": 665,
                  "color": "#0D52D1"
                }, {
                  "country": "Russia",
                  "visits": 580,
                  "color": "#2A0CD0"
                }, {
                  "country": "South Korea",
                  "visits": 443,
                  "color": "#8A0CCF"
                }, {
                  "country": "Canada",
                  "visits": 441,
                  "color": "#CD0D74"
                }],
                "valueAxes": [{
                  "axisAlpha": 0,
                  "position": "left",
                  "title": "Visitors from country"
                }],
                "startDuration": 1,
                "graphs": [{
                  "balloonText": "<b>[[category]]: [[value]]</b>",
                  "fillColorsField": "color",
                  "fillAlphas": 0.9,
                  "lineAlpha": 0.2,
                  "type": "column",
                  "valueField": "visits"
                }],
                "chartCursor": {
                  "categoryBalloonEnabled": false,
                  "cursorAlpha": 0,
                  "zoomable": false
                },
                "categoryField": "country",
                "categoryAxis": {
                  "gridPosition": "start",
                  "labelRotation": 45
                },
                "export": {
                  "enabled": true
                }
              
              });
            
          });

          this.ReportsService.gestservices()
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
              // alert(JSON.stringify(this.chartDatas));
              // this.getroomdetails=[];
                // console.log("$$$$$$",this.chartDatas);
                this.chart = this.AmCharts.makeChart("guestservices", {
                  "theme": "light",
                  "type": "serial",
                  "hideCridets":true,
                  "startDuration": 2,
                  "dataProvider": [{
                      "country": "USA",
                      "visits": 4025,
                      "color": "#FF0F00"
                  }, {
                      "country": "China",
                      "visits": 1882,
                      "color": "#FF6600"
                  }, {
                      "country": "Japan",
                      "visits": 1809,
                      "color": "#FF9E01"
                  }, {
                      "country": "Germany",
                      "visits": 1322,
                      "color": "#FCD202"
                  }, {
                      "country": "UK",
                      "visits": 1122,
                      "color": "#F8FF01"
                  }, {
                      "country": "France",
                      "visits": 1114,
                      "color": "#B0DE09"
                  }, {
                      "country": "India",
                      "visits": 984,
                      "color": "#04D215"
                  }, {
                      "country": "Spain",
                      "visits": 711,
                      "color": "#0D8ECF"
                  }, {
                      "country": "Netherlands",
                      "visits": 665,
                      "color": "#0D52D1"
                  }, {
                      "country": "Russia",
                      "visits": 580,
                      "color": "#2A0CD0"
                  }, {
                      "country": "South Korea",
                      "visits": 443,
                      "color": "#8A0CCF"
                  }, {
                      "country": "Canada",
                      "visits": 441,
                      "color": "#CD0D74"
                  }, {
                      "country": "Brazil",
                      "visits": 395,
                      "color": "#754DEB"
                  }, {
                      "country": "Italy",
                      "visits": 386,
                      "color": "#DDDDDD"
                  }, {
                      "country": "Taiwan",
                      "visits": 338,
                      "color": "#333333"
                  }],
                  "valueAxes": [{
                      "position": "left",
                      "axisAlpha":0,
                      "gridAlpha":0
                  }],
                  "graphs": [{
                      "balloonText": "[[category]]: <b>[[value]]</b>",
                      "colorField": "color",
                      "fillAlphas": 0.85,
                      "lineAlpha": 0.1,
                      "type": "column",
                      "topRadius":1,
                      "valueField": "visits"
                  }],
                  "depth3D": 40,
                "angle": 30,
                  "chartCursor": {
                      "categoryBalloonEnabled": false,
                      "cursorAlpha": 0,
                      "zoomable": false
                  },
                  "categoryField": "country",
                  "categoryAxis": {
                      "gridPosition": "start",
                      "axisAlpha":0,
                      "gridAlpha":0
              
                  },
                  "export": {
                    "enabled": true
                   }
              
              }, 0);
            });
      }
}

