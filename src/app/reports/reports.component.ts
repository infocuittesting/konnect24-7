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
  public charts = [];
 
  public futurebook_data=[];
  public futurebook=[];
 
  ngOnInit() {
    // let statsParms={
    //   "blockid":this.session.retrieve("business_id")


    // }

    
    
  }

  fetchrecord(hideshow,startdate,enddate)
  {
    console.log("startdate and enddate #######",startdate,enddate)
    // check null condition
    if(hideshow !=null && startdate !=null && enddate !=null){
      this.showhiderestriction(hideshow,startdate,enddate);
    }else{
      alert("please choose start date, end date and Modules from dorp down list");
    }
  }

  

 

  showhiderestriction(param,startdate,enddate) {
    if (param == "Reservation") {
      this.resv = true;
      this.loadReservationChart(startdate,enddate);
    }
    else {
      this.resv = false;
     
    }
    if (param == "Profile") {
      this.prof = true;
      this.loadprofilechart(startdate, enddate);
    }
    else {
      this.prof = false;
    }
    if (param == "Front Desk") {
      this.frontdesk = true;
      this.loadfrontdeskchart(startdate,enddate);
    }
    else {
      this.frontdesk = false;
    }
    if (param == "Room Management") {
      this.roommanage = true;
      this.loadroommamagemtchart(startdate, enddate);
    }
    else {
      this.roommanage = false;
    }
    if (param == "Cashiering") {
      this.cashering = true;
      this.loadcasheringchart(startdate,enddate);
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
      this.loadbusinessblockschart(startdate,enddate);
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


loadReservationChart(startdate,enddate){
  this.ReportsService.statisticsDetails( )
  .subscribe((resp: any) => {
    // if (resp.ServiceStatus == 'Success') {
      this.getroomdetails = resp.Returnvalue;
      // this.cancelcount = resp.cancelcount;
      // this.modifycount = resp.Totalbookingcount;
      console.log("Cahrt working fine",this.getroomdetails);
      this.chartDatas=[];
      for(var i=0;i<this.getroomdetails.length;i++){
        this.chartDatas.push({
           'title':this.getroomdetails[i].title,
           'value':this.getroomdetails[i].value })
      }
      // alert(JSON.stringify(this.chartDatas));
      // this.getroomdetails=[];
        // console.log("$$$$$$",this.chartDatas);
      this.chart = this.AmCharts.makeChart('chart1', {
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
        'innerRadius': '50%',
        'labelText': '[[title]]',
        
        "export": {
          "enabled": true
         }

      });
      this.charts.push( this.chart );
    });

//reservation 2 chart


this.ReportsService.getroomdetails(startdate,enddate)
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
    this.chart = this.AmCharts.makeChart('chart2', {
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
      "titles": [{
        "text": "Due times",
        "bold": true,
        "position": "top",
        "align":"center",
        
      }],
      'dataProvider':this.chartDatas,
      'titleField': 'title',
      'valueField': 'value',
      'labelRadius': 5,

      'radius': '42%',
      'innerRadius': '%',
      'labelText': '[[title]]',
      "export": {
        "enabled": true
       }
    });
    this.charts.push( this.chart );
  });
 
  //funal chart
  this.ReportsService.statisticsDetails()
  .subscribe((resp: any) => {   
    this.futurebook = resp.Returnvalue;
    // this.cancelcount = resp.cancelcount;
    // this.modifycount = resp.Totalbookingcount;
    console.log("future booking",this.futurebook);
    // this.chartDatas=[];
    
    this.futurebook_data = [];
    for(var i=0;i<this.futurebook.length;i++){
      this.futurebook_data.push({
        'date':this.futurebook[i].date,
        'value':this.futurebook[i].value })
  

    }
    console.log("month,value",this.futurebook_data)
    this.chart = this.AmCharts.makeChart("chart3", {
    "type": "serial",
"theme": "light",
'hideCredits':true,
"marginRight":80,
"autoMarginOffset":20,
"marginTop": 25,
"titles": [{
  "text": "Future Booking Reservation",
  "bold": true,
  "position": "top",
  "align":"center",
  
}],
"legend": {
  "equalWidths": false,
  "periodValueText": "Future Booking: [[value.sum]]",
  "position": "top",
  "valueAlign": "left",
  "valueWidth": 25
},
"dataProvider": this.futurebook_data ,
"valueAxes": [{
  "axisAlpha": 0,
  "guides": [{
      "fillAlpha": 0.1,
      "fillColor": "#888888",
      "lineAlpha": 0,
      "toValue": 16,
      "value": 10
  }],
  "position": "left",
  "tickLength": 0
}],
"graphs": [{
  "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
  "bullet": "round",
  "dashLength": 3,
  "colorField":"color",
  "valueField": "value"
}],
"trendLines": [{
  "finalDate": "2012-01-11 12",
  "finalValue": 19,
  "initialDate": "2012-01-02 12",
  "initialValue": 10,
  "lineColor": "#CC0000"
}, {
  "finalDate": "2012-01-22 12",
  "finalValue": 10,
  "initialDate": "2012-01-17 12",
  "initialValue": 16,
  "lineColor": "#CC0000"
}],
"chartScrollbar": {
  "scrollbarHeight":2,
  "offset":-1,
  "backgroundAlpha":0.1,
  "backgroundColor":"#888888",
  "selectedBackgroundColor":"#67b7dc",
  "selectedBackgroundAlpha":1
},
"chartCursor": {
  "fullWidth":true,
  "valueLineEabled":true,
  "valueLineBalloonEnabled":true,
  "valueLineAlpha":0.5,
  "cursorAlpha":0
},
"categoryField": "date",
"categoryAxis": {
  "parseDates": true,
  "axisAlpha": 0,
  "gridAlpha": 0.1,
  "minorGridAlpha": 0.1,
  "minorGridEnabled": true
},
"export": {
  "enabled": true
}
});
this.charts.push( this.chart );

    });

    this.ReportsService.historybooking()
    .subscribe((resp: any) => {
      // if (resp.ServiceStatus == 'Success') {
        this.getroomdetails = resp.Returnvalue;
        // this.cancelcount = resp.cancelcount;
        // this.modifycount = resp.Totalbookingcount;
        console.log("pie chrt work",this.getroomdetails);
        this.chartDatas=[];
        for(var i=0;i<this.getroomdetails.length;i++){
          this.chartDatas.push({
             'date':this.getroomdetails[i].date,
             'value':this.getroomdetails[i].value })
        }
        // alert(JSON.stringify(this.chartDatas));
        // this.getroomdetails=[];
           console.log("history booking is working",this.chartDatas);
           this.chart = this.AmCharts.makeChart( "chart4", {
            "type": "serial",
            "theme": "light",
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "dataDateFormat": "YYYY-MM-DD",
            "valueAxes": [ {
              "id": "v1",
              "axisAlpha": 0,
              "position": "left",
              "ignoreAxisWidth": true
            } ],
            "titles": [{
              "text": "historybooking",
              "bold": true,
              "position": "top",
              "align":"center",
              
            }],
            "balloon": {
              "borderThickness": 1,
              "shadowAlpha": 0
            },
            "graphs": [ {
              "id": "g1",
              "balloon": {
                "drop": true,
                "adjustBorderColor": false,
                "color": "#ffffff",
                "type": "smoothedLine"
              },
              "fillAlphas": 0.2,
              "bullet": "round",
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "bulletSize": 5,
              "hideBulletsCount": 50,
              "lineThickness": 2,
              "title": "red line",
              "useLineColorForBulletBorder": true,
              "valueField": "value",
              "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
            } ],
            "chartCursor": {
              "valueLineEnabled": true,
              "valueLineBalloonEnabled": true,
              "cursorAlpha": 0,
              "zoomable": false,
              "valueZoomable": true,
              "valueLineAlpha": 0.5
            },
            "valueScrollbar": {
              "autoGridCount": true,
              "color": "#000000",
              "scrollbarHeight": 50
            },
            "categoryField": "date",
            "categoryAxis": {
              "parseDates": true,
              "dashLength": 1,
              "minorGridEnabled": true
            },
            "export": {
              "enabled": true
            },
            "dataProvider": this.chartDatas,
          } );
        
        
        
       this. chart.addListener("dataUpdated", zoomChart);
        
        function zoomChart() {
            this.chart.zoomToDates(new Date(2012, 0, 3), new Date(2012, 0, 11));
        }
        this.charts.push( this.chart );
      });

}
loadprofilechart(startdate, enddate){
  this.ReportsService.profile( startdate, enddate)
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
      this.chart = this.AmCharts.makeChart('chart5', {
        
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
      this.charts.push( this.chart );
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
      this.chart = this.AmCharts.makeChart('chart6', {
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
      this.charts.push( this.chart );
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
        this.chart = this.AmCharts.makeChart('chart7', {
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
        this.charts.push( this.chart );
      });
  }
// front desk
  loadfrontdeskchart(startdate,enddate){
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
        this.chart = this.AmCharts.makeChart('chart8', {
          
          'type': 'pie',
          'theme': 'light',
          'hideCredits':true,

          "legend": {

            "horizontalGap": 1,
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
        this.charts.push( this.chart );
      });
  
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
        this.chart = this.AmCharts.makeChart('chart9', {
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
        this.charts.push( this.chart );
      });

      //waterfallchart

      this.ReportsService.frontdesk1(startdate,enddate)
      .subscribe((resp: any) => {
        // if (resp.ServiceStatus == 'Success') {
          this.getroomdetails = resp.Returnvalue;
          // this.cancelcount = resp.cancelcount;
          // this.modifycount = resp.Totalbookingcount;
          console.log("pie chrt work",this.getroomdetails);
          this.chartDatas=[];


          for(var i=0;i<this.getroomdetails.length;i++){
            this.chartDatas.push({
               "name":this.getroomdetails[i].title,
               "points":this.getroomdetails[i].value,
               "color": "#7F8DA9",
               "bullet": "https://www.amcharts.com/lib/images/faces/A04.png" })
          }
            // this.chartDatas.map(function(v){
            //   v.color = "#7F8DA9";
            //   v.bullet = "https://www.amcharts.com/lib/images/faces/A04.png"
            // })          
          // alert(JSON.stringify(this.chartDatas));
          // alert(JSON.stringify(this.chartDatas));
          // this.getroomdetails=[];
            console.log("$$$$$$",this.chartDatas);
            this.chart = this.AmCharts.makeChart("chart10",
            
{
    "type": "serial",
    "theme": "light",
    "dataProvider":this.chartDatas,
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        "bulletOffset": 100,
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
this.charts.push( this.chart );
        });
    }

    //water fall chart
    

    //cashering
     
  loadcasheringchart(startdate,enddate){
      this.ReportsService.cashering(startdate,enddate)
      .subscribe((resp: any) => {
        // if (resp.ServiceStatus == 'Success') {
          this.getroomdetails = resp.Returnvalue;
          // this.cancelcount = resp.cancelcount;
          // this.modifycount = resp.Totalbookingcount;
          console.log("pie chrt work",this.getroomdetails);
          this.chartDatas=[];
          for(var i=0;i<this.getroomdetails.length;i++){
            this.chartDatas.push({
               'year':this.getroomdetails[i].title,
               'income':this.getroomdetails[i].value })
          }
          // alert(JSON.stringify(this.chartDatas));
          // this.getroomdetails=[];
            // console.log("$$$$$$",this.chartDatas);
           this.chart = this.AmCharts.makeChart("chart11", {
              "theme": "light",
              "type": "serial",
              "dataProvider": this.chartDatas,
              "valueAxes": [{
                  "title": "Cashiering Account"
              }],
              "graphs": [{
                  "balloonText": "[[category]]:[[value]]",
                  "fillAlphas": 1,
                  "lineAlpha": 0.2,
                  "title": "Income",
                  "type": "column",
                  "valueField": "income"
              }],
              "depth3D": 20,
              "angle": 30,
              "rotate": true,
              "categoryField": "year",
              "categoryAxis": {
                  "gridPosition": "start",
                  "fillAlpha": 0.05,
                  "position": "left"
              },
              "export": {
                "enabled": true
               }
          });
          this.charts.push( this.chart );
        });

        this.ReportsService.casheringtotalcount( startdate,enddate)
      .subscribe((resp: any) => {
        // if (resp.ServiceStatus == 'Success') {
          this.getroomdetails = resp.Returnvalue;
          // this.cancelcount = resp.cancelcount;
          // this.modifycount = resp.Totalbookingcount;
          console.log("totalamount chart is work",this.getroomdetails);
          this.chartDatas=[];
          for(var i=0;i<this.getroomdetails.length;i++){
            this.chartDatas.push({
               'date':this.getroomdetails[i].title,
               'value':this.getroomdetails[i].value })
          }
          // alert(JSON.stringify(this.chartDatas));
          // this.getroomdetails=[];
             console.log("chart is working fine",this.chartDatas);
             this.chart = this.AmCharts.makeChart("chart12", {
              "type": "serial",
              "theme": "light",
              "marginRight": 40,
              "marginLeft": 40,
              "autoMarginOffset": 20,
              "mouseWheelZoomEnabled":true,
              "dataDateFormat": "YYYY-MM-DD",
              "valueAxes": [{
                  "id": "v1",
                  "axisAlpha": 0,
                  "position": "left",
                  "ignoreAxisWidth":true
              }],
              "balloon": {
                  "borderThickness": 1,
                  "shadowAlpha": 0
              },
              "graphs": [{
                  "id": "g1",
                  "balloon":{
                    "drop":true,
                    "adjustBorderColor":false,
                    "color":"#ffffff"
                  },
                  "bullet": "round",
                  "bulletBorderAlpha": 1,
                  "bulletColor": "#FFFFFF",
                  "bulletSize": 5,
                  "hideBulletsCount": 50,
                  "lineThickness": 2,
                  "title": "red line",
                  "useLineColorForBulletBorder": true,
                  "valueField": "value",
                  "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
              }],
              "chartScrollbar": {
                  "graph": "g1",
                  "oppositeAxis":false,
                  "offset":30,
                  "scrollbarHeight": 80,
                  "backgroundAlpha": 0,
                  "selectedBackgroundAlpha": 0.1,
                  "selectedBackgroundColor": "#888888",
                  "graphFillAlpha": 0,
                  "graphLineAlpha": 0.5,
                  "selectedGraphFillAlpha": 0,
                  "selectedGraphLineAlpha": 1,
                  "autoGridCount":true,
                  "color":"#AAAAAA"
              },
              "chartCursor": {
                  "pan": true,
                  "valueLineEnabled": true,
                  "valueLineBalloonEnabled": true,
                  "cursorAlpha":1,
                  "cursorColor":"#258cbb",
                  "limitToGraph":"g1",
                  "valueLineAlpha":0.2,
                  "valueZoomable":true
              },
              "valueScrollbar":{
                "oppositeAxis":false,
                "offset":50,
                "scrollbarHeight":10
              },
              "categoryField": "date",
              "categoryAxis": {
                  "parseDates": true,
                  "dashLength": 1,
                  "minorGridEnabled": true
              },
              "export": {
                  "enabled": true
              },
              "dataProvider": this.chartDatas,
          });
          
         this. chart.addListener("rendered", zoomChart);
          
          zoomChart();
          
          function zoomChart() {
              this.chart.zoomToIndexes(this.chart.dataProvider.length - 40, this.chart.dataProvider.length - 1);
          }
           
          this.charts.push( this.chart ); 
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
              this.chart = this.AmCharts.makeChart( "chart13", {
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
              this.charts.push( this.chart );
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
          this.chart = this.AmCharts.makeChart('chart14', {
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
          this.charts.push( this.chart );
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
          this.chart = this.AmCharts.makeChart('chart15', {
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
          this.charts.push( this.chart );
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

 this.chart = this.AmCharts.makeChart("chart16", {
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
      this.charts.push( this.chart );  
          });
      }

      //businessblocks
      loadbusinessblockschart(startdate,enddate){
       

        this.ReportsService.businessblocks( )
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
            this.chart = this.AmCharts.makeChart('chart17', {
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
            this.charts.push( this.chart );
          });
           

          
        this.ReportsService.businessblocks1(startdate,enddate)
        .subscribe((resp: any) => {
          // if (resp.ServiceStatus == 'Success') {
            this.getroomdetails = resp.Returnvalue;
            // this.cancelcount = resp.cancelcount;
            // this.modifycount = resp.Totalbookingcount;
            console.log("business block chart service",this.getroomdetails);
            this.chartDatas=[];
            for(var i=0;i<this.getroomdetails.length;i++){
              this.chartDatas.push({
                 'title':this.getroomdetails[i].title,
                 'value':this.getroomdetails[i].value })
            }
            // alert(JSON.stringify(this.chartDatas));
            // this.getroomdetails=[];
              // console.log("$$$$$$",this.chartDatas);
            this.chart = this.AmCharts.makeChart('chart18', {
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
            this.charts.push( this.chart );
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
      loadroommamagemtchart(startdate, enddate){
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
            this.chart = this.AmCharts.makeChart('chart19', {
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
            this.charts.push( this.chart );
          });

          this.ReportsService.fecility(startdate, enddate)
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
               console.log( "chart working fine",this.chartDatas);
              this.chart = this.AmCharts.makeChart('chart20', {
                'type': 'pie',
          'theme': 'light',
          'hideCredits':true,
          "titles": [{
            "text": "Room condition",
            "bold": true,
            "align":"center"
            
          }],
          "marginTop": 25,
          "legend": {
            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "right",
            "marginRight": 80,
            "autoMargins": false
          },
          'dataProvider':this.chartDatas,
          'export': {
            "enabled": true,
            "menu": [],
           
          },
          'titleField': 'title',
          'valueField': 'value',
          'labelRadius': 5,
  
          'radius': '40%',
          'innerRadius': '60%',
          'labelText': '[[title]]',
         
          
        
          
        });
      
        this.charts.push( this.chart );
          });

          this.ReportsService.Roomconditions( startdate, enddate)
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
              this.chart = this.AmCharts.makeChart( "chart21", {
                "type": "serial",
                "addClassNames": true,
                "theme": "light",
                "autoMargins": false,
                "marginLeft": 30,
                "marginRight": 8,
                "marginTop": 10,
                "marginBottom": 26,
                "balloon": {
                  "adjustBorderColor": false,
                  "horizontalPadding": 10,
                  "verticalPadding": 8,
                  "color": "#ffffff"
                },
              
                "dataProvider": [ {
                  "year": 2009,
                  "income": 23.5,
                  "expenses": 21.1
                }, {
                  "year": 2010,
                  "income": 26.2,
                  "expenses": 30.5
                }, {
                  "year": 2011,
                  "income": 30.1,
                  "expenses": 34.9
                }, {
                  "year": 2012,
                  "income": 29.5,
                  "expenses": 31.1
                }, {
                  "year": 2013,
                  "income": 30.6,
                  "expenses": 28.2,
                  "dashLengthLine": 5
                }, {
                  "year": 2014,
                  "income": 34.1,
                  "expenses": 32.9,
                  "dashLengthColumn": 5,
                  "alpha": 0.2,
                  "additional": "(projection)"
                } ],
                "valueAxes": [ {
                  "axisAlpha": 0,
                  "position": "left"
                } ],
                "startDuration": 1,
                "graphs": [ {
                  "alphaField": "alpha",
                  "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
                  "fillAlphas": 1,
                  "title": "Income",
                  "type": "column",
                  "valueField": "income",
                  "dashLengthField": "dashLengthColumn"
                }, {
                  "id": "graph2",
                  "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
                  "bullet": "round",
                  "lineThickness": 3,
                  "bulletSize": 7,
                  "bulletBorderAlpha": 1,
                  "bulletColor": "#FFFFFF",
                  "useLineColorForBulletBorder": true,
                  "bulletBorderThickness": 3,
                  "fillAlphas": 0,
                  "lineAlpha": 1,
                  "title": "Expenses",
                  "valueField": "expenses",
                  "dashLengthField": "dashLengthLine"
                } ],
                "categoryField": "year",
                "categoryAxis": {
                  "gridPosition": "start",
                  "axisAlpha": 0,
                  "tickLength": 0
                },
                "export": {
                  "enabled": true
                }
              } );
              this.charts.push( this.chart );
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
                       'visits':this.getroomdetails[i].title,
                       'country':this.getroomdetails[i].value,
                       "color" : "#b7e021",
                       
                       })
                       
                  }
                  // alert(JSON.stringify(this.chartDatas));
                  // this.getroomdetails=[];
                    // console.log("$$$$$$",this.chartDatas);
                    this.chart = this.AmCharts.makeChart("RoomMaintenance", {
                      "type": "serial",
                      "theme": "light",
                      "hideCredits":true,
                      "marginRight": 70,
                      "dataProvider": this.chartDatas,
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
                    this.charts.push( this.chart );
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
                   'visits':this.getroomdetails[i].title,
                   'country':this.getroomdetails[i].value,
                   "color": "#FF9E01"
                  })
              }
              // alert(JSON.stringify(this.chartDatas));
              // this.getroomdetails=[];
                // console.log("$$$$$$",this.chartDatas);
                 this.chart = this.AmCharts.makeChart("chart23", {
                  "theme": "light",
                  "type": "serial",
                "startDuration": 2,
                  "dataProvider": this.chartDatas,
                  "valueAxes": [{
                      "position": "left",
                      "title": "Visitors"
                  }],
                  "graphs": [{
                      "balloonText": "[[category]]: <b>[[value]]</b>",
                      "fillColorsField": "color",
                      "fillAlphas": 1,
                      "lineAlpha": 0.1,
                      "type": "column",
                      "valueField": "visits"
                  }],
                  "depth3D": 20,
                "angle": 30,
                  "chartCursor": {
                      "categoryBalloonEnabled": false,
                      "cursorAlpha": 0,
                      "zoomable": false
                  },
                  "categoryField": "country",
                  "categoryAxis": {
                      "gridPosition": "start",
                      "labelRotation": 90
                  },
                  "export": {
                    "enabled": true
                   }
              
              });
              this.charts.push( this.chart );
            });
  
          }

          x:Number;
          exportChart() {
            // iterate through all of the charts and prepare their images for export
            var images = [];
           var pending = this.charts.length;
           console.log("pending**************",pending)
           for ( var i = 0; i < this.charts.length; i++ ) {
             var chart = this.charts[ i ];
             console.log("its came&&&&&&&&&&&&&&",chart)
             chart.export.capture( {}, function() {
               this.toJPG( {
                 multiplier: 2
               }, function( data ) {
                 images.push( {
                   "image": data,
                   "fit": [ 523.28, 769.89 ]
                   
                 } );
                 pending--;
                 if ( pending === 0 ) {
                   // all done - construct PDF
                   chart.export.toPDF( {
                     content: images
                   }, function( data ) {
                     this.download( data, "application/pdf", "downloadreport.pdf" );
                   } );
                 }
               } );
             } );
           }
         
         }
        }



