import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from "ngx-webstorage";

// import { ReservationService } from './ReservationModule/reservation/reservation.service';


import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';


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


@NgModule({
    declarations: [
        AppComponent,

        FilterdataPipe,
        // DateFormatPipe,
        MonthpickerComponent,
        YearpickerComponent,
        MonthComponent,
        ResolvePipe,

        //Starter
        StarterComponent,
        StarterHeaderComponent,
        StarterLeftSideComponent,
        StarterContentComponent,
        StarterControlSidebarComponent,

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
        // ProfileService,
        // ModalService,
        // IndividualService,


        //Revenue Management
        RevenueRateCodeComponent,
        EditRevenueManagementComponent,
        RevenuemanagementComponent,

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
        // HotkeyModule.forRoot()

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }