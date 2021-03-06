
import { StarterComponent } from './../starter/starter.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Reservation
import { ReservationComponent } from './../ReservationModule/reservation/reservation.component';
import { SearchandeditreservationComponent } from './../ReservationModule/searchandeditreservation/searchandeditreservation.component';
import { ReservationoptionComponent } from './../ReservationModule/reservationoption/reservationoption.component';
import { AdvancedsearchComponent } from './../ReservationModule/advancedsearch/advancedsearch.component';


//Profile
import { ProfileComponent } from './../ProfileModule/profile/profile.component';
import { ProfilesearchComponent } from './../ProfileModule/profilesearch/profilesearch.component';
import { IndividualprofileComponent } from './../ProfileModule/individualprofile/individualprofile.component';
import { ModalBasicComponent } from './../ProfileModule/modal-basic/modal-basic.component';
import { ProfilestatisticsComponent } from './../ProfileModule/profilestatistics/profilestatistics.component';


//FrontDesk
import { ArrivalComponent } from './../FrontDeskModule/arrival/arrival.component';
import { CheckinComponent } from './../FrontDeskModule/checkin/checkin.component';
import { ManagingqueueComponent } from './../FrontDeskModule/managingqueue/managingqueue.component';
import { RoomassignmentComponent } from './../FrontDeskModule/roomassignment/roomassignment.component';
import { TracesComponent } from './../FrontDeskModule/traces/traces.component';

//RoomManagement
import { FacilityforecastComponent } from './../RoomManagementModule/facilityforecast/facilityforecast.component';
import { GuestservicestatusComponent } from './../RoomManagementModule/guestservicestatus/guestservicestatus.component';
import { HousekeepingComponent } from './../RoomManagementModule/housekeeping/housekeeping.component';
import { OutoforderserviceComponent } from './../RoomManagementModule/outoforderservice/outoforderservice.component';
import { QueueroomComponent } from './../RoomManagementModule/queueroom/queueroom.component';
import { RoomconditionComponent } from './../RoomManagementModule/roomcondition/roomcondition.component';
import { RoomdiscrepanciesComponent } from './../RoomManagementModule/roomdiscrepancies/roomdiscrepancies.component';
import { RoomhistoryComponent } from './../RoomManagementModule/roomhistory/roomhistory.component';
import { RoommaintainComponent } from './../RoomManagementModule/roommaintain/roommaintain.component';
import { RoomoccupancyComponent } from './../RoomManagementModule/roomoccupancy/roomoccupancy.component';
import { TurndownmanagementComponent } from './../RoomManagementModule/turndownmanagement/turndownmanagement.component';

//Packages
import { PackagesComponent } from './../PackagesModule/packages/packages.component';
import { PackagesnewComponent } from './../PackagesModule/packagesnew/packagesnew.component';

//Cashering
import { BillingComponent } from './../CasheringModule/billing/billing.component';
import { CasheringinhouseguestComponent } from './../CasheringModule/casheringinhouseguest/casheringinhouseguest.component';
import { FoliohistoryComponent } from './../CasheringModule/foliohistory/foliohistory.component';

//RevenueManagement
import { EditRevenueManagementComponent } from './../RevenueManagementModule/edit-revenue-management/edit-revenue-management.component';
import { RevenueRateCodeComponent } from './../RevenueManagementModule/revenue-rate-code/revenue-rate-code.component';
import { RevenuemanagementComponent } from './../RevenueManagementModule/revenuemanagement/revenuemanagement.component';
//reports
import { ReportsComponent } from '../reports/reports.component';
//BusinessBlockModule
import { BusinessBlockOptionsComponent } from './../BusinessBlockModule/business-block-options/business-block-options.component';
import { BusinessBlockSearchComponent } from './../BusinessBlockModule/business-block-search/business-block-search.component';
import { RominglistComponent } from './../BusinessBlockModule/rominglist/rominglist.component';
import { BusinessCreateBlockComponent } from './../BusinessBlockModule/business-create-block/business-create-block.component';
import { InquriprocessComponent } from './../BusinessBlockModule/inquriprocess/inquriprocess.component'
import { BusinessBlockGridCurrentComponent } from './../BusinessBlockModule/business-block-grid-current/business-block-grid-current.component';
import { ReservationsListComponent } from './../BusinessBlockModule/reservations-list/reservations-list.component';
import { GroupOptionsComponent } from './../BusinessBlockModule/group-options/group-options.component';
import { EditBusinessBlockComponent } from './../BusinessBlockModule/edit-business-block/edit-business-block.component';
import { QueryReservationListComponent} from './../BusinessBlockModule/query-reservation-list/query-reservation-list.component'

//Account receivable
import { NewaraccountComponent } from './../Accountreceivable/newaraccount/newaraccount.component';
import { AccountmaintenanceComponent } from './../Accountreceivable/accountmaintenance/accountmaintenance.component';
import { InvoiceComponent } from './../Accountreceivable/invoice/invoice.component';
import { AccountoptionsComponent } from './../Accountreceivable/accountoptions/accountoptions.component';
import { SetupaccountComponent } from './../Accountreceivable/setupaccount/setupaccount.component';

//End of day
import { EndofdayComponent } from './../Endofday/endofday/endofday.component';

// Configuration
import { GeneralconfigurationComponent } from './../ConfigurationModule/generalconfiguration/generalconfiguration.component';
import { RoomconfigurationComponent } from './../ConfigurationModule/roomconfiguration/roomconfiguration.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: StarterComponent},
      { path: 'mains', component: StarterComponent },
      //Reservation
      { path: 'reservation', component: ReservationComponent },
      { path: 'searchedit', component: SearchandeditreservationComponent },
      { path: 'reservationoption', component: ReservationoptionComponent },
      { path: 'advancedsearch', component: AdvancedsearchComponent },
      //profile
      { path: 'profile', component: ProfileComponent },
      { path: 'psearch', component: ProfilesearchComponent },
      { path: 'individualprofile', component: IndividualprofileComponent },
      { path: 'modal-basic', component: ModalBasicComponent },
      {path: 'profilestatistics',component:ProfilestatisticsComponent},
      //Frontdesk
      { path: 'arrival', component: ArrivalComponent },
      { path: 'roomassignment', component: RoomassignmentComponent },
      { path: 'checkin', component: CheckinComponent },
      { path: 'managingqueue', component: ManagingqueueComponent },
      { path: 'trace', component: TracesComponent },
      //RoomManagement
      { path: 'housekeeping', component: HousekeepingComponent },
      { path: 'queueroom', component: QueueroomComponent },
      { path: 'roomdisc', component: RoomdiscrepanciesComponent },
      { path: 'roomcondn', component: RoomconditionComponent },
      { path: 'facility', component: FacilityforecastComponent },
      { path: 'roomhistory', component: RoomhistoryComponent },
      { path: 'gss', component: GuestservicestatusComponent },
      { path: 'oos', component: OutoforderserviceComponent },
      { path: 'roomcondn', component: RoomconditionComponent },
      { path: 'roommaintenance', component: RoommaintainComponent },
      { path: 'occupancygraph', component: RoomoccupancyComponent},
      { path: 'turndown',component:TurndownmanagementComponent},
      //packages Module
      { path: "packages", component: PackagesComponent },
      { path: "packagecodenew", component: PackagesnewComponent },
      //cashering
      { path: 'inhousecashering', component: CasheringinhouseguestComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'foliohis', component: FoliohistoryComponent },
      //Revenue Management
      { path: 'revenue', component: RevenuemanagementComponent },
      { path: 'revenueratecode', component: RevenueRateCodeComponent },
      { path: 'ratetier', component: EditRevenueManagementComponent },
      //reports

      { path:'reports', component:ReportsComponent},

      //BusinessBLockSearch
      { path: 'business', component: BusinessBlockSearchComponent },
      { path: 'inquiri', component: InquriprocessComponent },
      { path: 'bcreate', component: BusinessCreateBlockComponent },
      { path: "options", component: BusinessBlockOptionsComponent },
      { path: "rominglist", component: RominglistComponent },
      { path: "grid", component: BusinessBlockGridCurrentComponent },
      { path: "reservationlist", component: ReservationsListComponent },
      { path: "grouplist", component: GroupOptionsComponent },
      { path: "editblock", component: EditBusinessBlockComponent },
      { path: "queryreservation", component: QueryReservationListComponent },
      
      // Account receivable
      { path:"newaraccount",component:NewaraccountComponent},
      { path:"AccountMaintenance",component:AccountmaintenanceComponent},
      { path:"Invoice",component:InvoiceComponent},
      { path:"Accountoptions",component:AccountoptionsComponent},
      {path:"Setupaccount",component:SetupaccountComponent},

      //end of day
      {path:'endofday',component: EndofdayComponent},

      // Configuration
      {path:'GeneralConfiguration',component: GeneralconfigurationComponent }, 
      {path:'RoomConfiguration',component: RoomconfigurationComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndividualprofileComponent,ReservationComponent,ModalBasicComponent,ReservationoptionComponent,StarterComponent,
  ProfileComponent,ProfilesearchComponent,SearchandeditreservationComponent,HousekeepingComponent,QueueroomComponent,RoomdiscrepanciesComponent,RoomconditionComponent
,FacilityforecastComponent,RoomhistoryComponent,ArrivalComponent,CheckinComponent,TracesComponent,ManagingqueueComponent,RoomassignmentComponent,AdvancedsearchComponent,EditBusinessBlockComponent,
GuestservicestatusComponent,OutoforderserviceComponent,RoommaintainComponent,BillingComponent,CasheringinhouseguestComponent,RevenuemanagementComponent,
BusinessBlockSearchComponent,InquriprocessComponent,BusinessCreateBlockComponent,BusinessBlockOptionsComponent,RominglistComponent,BusinessBlockGridCurrentComponent,ReservationsListComponent,GroupOptionsComponent,
RevenueRateCodeComponent,EditRevenueManagementComponent,PackagesComponent,PackagesnewComponent,FoliohistoryComponent,NewaraccountComponent,AccountmaintenanceComponent,
InvoiceComponent,AccountoptionsComponent,SetupaccountComponent,ProfilestatisticsComponent, EndofdayComponent, RoomoccupancyComponent,TurndownmanagementComponent,GeneralconfigurationComponent,RoomconfigurationComponent]
