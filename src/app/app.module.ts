
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from "ngx-webstorage";
import { AmChartsModule } from "amcharts3-angular2";
// import { ReservationService } from './ReservationModule/reservation/reservation.service';
import { ToasterServiceService } from './toaster-service.service';


import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';




// import { DateFormatPipe } from './date-format.pipe';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';
import { YearpickerComponent } from './yearpicker/yearpicker.component';
import { MonthComponent } from './month/month.component';
import { ResolvePipe } from './resolve.pipe';
import { FilterdataPipe } from './filterdata.pipe';


//Reservation
import { ReservationComponent } from './ReservationModule/reservation/reservation.component';
import { AdvancedsearchComponent } from './ReservationModule/advancedsearch/advancedsearch.component';
import { ReservationoptionComponent } from './ReservationModule/reservationoption/reservationoption.component';
import { SearchandeditreservationComponent } from './ReservationModule/searchandeditreservation/searchandeditreservation.component';

//Front Desk
import { ArrivalComponent } from './FrontDeskModule/arrival/arrival.component';
import { CheckinComponent } from './FrontDeskModule/checkin/checkin.component';
import { TracesComponent } from './FrontDeskModule/traces/traces.component';
import { RoomassignmentComponent } from './FrontDeskModule/roomassignment/roomassignment.component';
import { ManagingqueueComponent } from './FrontDeskModule/managingqueue/managingqueue.component';




//Cashering
import { BillingComponent } from './CasheringModule/billing/billing.component';
import { CasheringinhouseguestComponent } from './CasheringModule/casheringinhouseguest/casheringinhouseguest.component';
import { FoliohistoryComponent } from './CasheringModule/foliohistory/foliohistory.component';
import { ContextmenuModule } from 'ng2-contextmenu';
//reports
import { ReportsComponent } from './reports/reports.component';
//BusinessBlockModule
import { BlockRangeSettingComponent } from './BusinessBlockModule/block-range-setting/block-range-setting.component';
import { BusinessBlockGridCurrentComponent } from './BusinessBlockModule/business-block-grid-current/business-block-grid-current.component';
import { BusinessBlockOptionsComponent } from './BusinessBlockModule/business-block-options/business-block-options.component';
import { BusinessBlockSearchComponent } from './BusinessBlockModule/business-block-search/business-block-search.component';
import { BusinessCreateBlockComponent } from './BusinessBlockModule/business-create-block/business-create-block.component';
import { EditBusinessBlockComponent } from './BusinessBlockModule/edit-business-block/edit-business-block.component';
import { EditGridRoomsComponent } from './BusinessBlockModule/edit-grid-rooms/edit-grid-rooms.component';
import { GroupOptionsComponent } from './BusinessBlockModule/group-options/group-options.component';
import { InquriprocessComponent } from './BusinessBlockModule/inquriprocess/inquriprocess.component';
import { QueryReservationListComponent } from './BusinessBlockModule/query-reservation-list/query-reservation-list.component';
import { ReservationsListComponent } from './BusinessBlockModule/reservations-list/reservations-list.component';
import { RominglistComponent } from './BusinessBlockModule/rominglist/rominglist.component';

//packages Module
import { PackagesComponent } from './PackagesModule/packages/packages.component';
import { PackagesnewComponent } from './PackagesModule/packagesnew/packagesnew.component';

//Profile Module
import { ProfilesearchComponent } from './ProfileModule/profilesearch/profilesearch.component';
import { ProfileComponent } from './ProfileModule/profile/profile.component';
import { ModalBasicComponent } from './ProfileModule/modal-basic/modal-basic.component';
import { IndividualprofileComponent } from './ProfileModule/individualprofile/individualprofile.component';


//Revenue Management
import { RevenueRateCodeComponent } from './RevenueManagementModule/revenue-rate-code/revenue-rate-code.component';
import { EditRevenueManagementComponent } from './RevenueManagementModule/edit-revenue-management/edit-revenue-management.component';
import { RevenuemanagementComponent } from './RevenueManagementModule/revenuemanagement/revenuemanagement.component';


//Room Management
import { HousekeepingComponent } from './RoomManagementModule/housekeeping/housekeeping.component';
import { QueueroomComponent } from './RoomManagementModule/queueroom/queueroom.component';
import { RoomdiscrepanciesComponent } from './RoomManagementModule/roomdiscrepancies/roomdiscrepancies.component';
import { RoomconditionComponent } from './RoomManagementModule/roomcondition/roomcondition.component';
import { FacilityforecastComponent } from './RoomManagementModule/facilityforecast/facilityforecast.component';
import { RoomhistoryComponent } from './RoomManagementModule/roomhistory/roomhistory.component';
import { GuestservicestatusComponent } from './RoomManagementModule/guestservicestatus/guestservicestatus.component';
import { OutoforderserviceComponent } from './RoomManagementModule/outoforderservice/outoforderservice.component';
import { RoommaintainComponent } from './RoomManagementModule/roommaintain/roommaintain.component';
import { RoomoccupancyComponent } from './RoomManagementModule/roomoccupancy/roomoccupancy.component';
import { TurndownmanagementComponent } from './RoomManagementModule/turndownmanagement/turndownmanagement.component';

//Account receivable
import { NewaraccountComponent } from './Accountreceivable/newaraccount/newaraccount.component';
import { AccountmaintenanceComponent } from './Accountreceivable/accountmaintenance/accountmaintenance.component';
import { InvoiceComponent } from './Accountreceivable/invoice/invoice.component';
import { AccountoptionsComponent } from './Accountreceivable/accountoptions/accountoptions.component';
import { SetupaccountComponent } from './Accountreceivable/setupaccount/setupaccount.component';
import { ProfilestatisticsComponent } from './ProfileModule/profilestatistics/profilestatistics.component';

import { SearchfilterPipe } from './searchfilter.pipe';

//End of day Module
import { EndofdayComponent } from './Endofday/endofday/endofday.component';

// Configuration
import { GeneralconfigurationComponent } from './ConfigurationModule/generalconfiguration/generalconfiguration.component';
import { RoomconfigurationComponent } from './ConfigurationModule/roomconfiguration/roomconfiguration.component';

@NgModule({
    declarations: [
        AppComponent,

        // DateFormatPipe,
        MonthpickerComponent,
        YearpickerComponent,
        MonthComponent,
        ResolvePipe,

        //Starter
        StarterComponent,


        //Reservation
        ReservationComponent,
        AdvancedsearchComponent,
        ReservationoptionComponent,
        SearchandeditreservationComponent,

        //RoomManagement
        GuestservicestatusComponent,
        OutoforderserviceComponent,
        RoommaintainComponent,
        RoomhistoryComponent,
        FacilityforecastComponent,
        RoomconditionComponent,
        RoomdiscrepanciesComponent,
        QueueroomComponent,
        HousekeepingComponent,
        RoomoccupancyComponent,
        TurndownmanagementComponent,

        //Front Desk
        ArrivalComponent,
        CheckinComponent,
        TracesComponent,
        RoomassignmentComponent,
        ManagingqueueComponent,
        // TracesService,

        //Cashering
        BillingComponent,
        CasheringinhouseguestComponent,
        FoliohistoryComponent,
       
        //reports
        ReportsComponent,

        //BusinessBlock
        BlockRangeSettingComponent,
        BusinessBlockGridCurrentComponent,
        BusinessBlockOptionsComponent,
        BusinessBlockSearchComponent,
        BusinessCreateBlockComponent,
        EditBusinessBlockComponent,
        EditGridRoomsComponent,
        GroupOptionsComponent,
        InquriprocessComponent,
        QueryReservationListComponent,
        ReservationsListComponent,
        RominglistComponent,

        //Packages

        PackagesComponent,
        PackagesnewComponent,

        //Profile Module
        ProfilesearchComponent,
        ProfileComponent,
        ModalBasicComponent,
        IndividualprofileComponent,
        ProfilestatisticsComponent,
        // ProfileService,
        // ModalService,
        // IndividualService,


        //Revenue Management
        RevenueRateCodeComponent,
        EditRevenueManagementComponent,
        RevenuemanagementComponent,
        NewaraccountComponent,
        AccountmaintenanceComponent,
        InvoiceComponent,
        AccountoptionsComponent,
        SetupaccountComponent,
        ProfilestatisticsComponent,

        //filterpipe
        SearchfilterPipe,
        FilterdataPipe,

        //End of day
        EndofdayComponent,
        
        // Configuration
        GeneralconfigurationComponent,
        RoomconfigurationComponent,


    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        // BsDatepickerModule.forRoot(),
        HttpModule,
        ReactiveFormsModule,
        Ng2Webstorage,
        AppRoutingModule,
        ContextmenuModule,
        AmChartsModule,
       
        // HotkeyModule.forRoot()

    ],
    providers: [ToasterServiceService],
    bootstrap: [AppComponent]
})
export class AppModule { }
