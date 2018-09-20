import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

//BusinessBlockModule
import { BusinessBlockOptionsComponent } from './../BusinessBlockModule/business-block-options/business-block-options.component';
import { BusinessBlockSearchComponent } from './../BusinessBlockModule/business-block-search/business-block-search.component';
import { RominglistComponent } from './../BusinessBlockModule/rominglist/rominglist.component';
import { BusinessCreateBlockComponent } from './../BusinessBlockModule/business-create-block/business-create-block.component';
import { InquriprocessComponent } from './../BusinessBlockModule/inquriprocess/inquriprocess.component'
import { BusinessBlockGridCurrentComponent } from './../BusinessBlockModule/business-block-grid-current/business-block-grid-current.component';
import { ReservationsListComponent } from './../BusinessBlockModule/reservations-list/reservations-list.component';
import { GroupOptionsComponent } from './../BusinessBlockModule/group-options/group-options.component';
import { BlockRangeSettingComponent } from './../BusinessBlockModule/block-range-setting/block-range-setting.component';
import { EditBusinessBlockComponent } from './../BusinessBlockModule/edit-business-block/edit-business-block.component';
import { QueryReservationListComponent} from './../BusinessBlockModule/query-reservation-list/query-reservation-list.component'
import { EditGridRoomsComponent } from './../BusinessBlockModule/edit-grid-rooms/edit-grid-rooms.component'; 

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: StarterComponent  },
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


      //BusinessBLockSearch
      { path: 'business', component: BusinessBlockSearchComponent },
      { path: 'inquiri', component: InquriprocessComponent },
      { path: 'bcreate', component: BusinessCreateBlockComponent },
      { path: "options", component: BusinessBlockOptionsComponent },
      { path: "rominglist", component: RominglistComponent },
      { path: "grid", component: BusinessBlockGridCurrentComponent },
      { path: "reservationlist", component: ReservationsListComponent },
      { path: "grouplist", component: GroupOptionsComponent },
      { path: "blockrange", component: BlockRangeSettingComponent },
      { path: "editblock", component: EditBusinessBlockComponent },
      { path: "queryreservation", component: QueryReservationListComponent },
      { path: "editgrid", component: EditGridRoomsComponent },

    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndividualprofileComponent,ReservationComponent,ModalBasicComponent,ReservationoptionComponent,StarterComponent,
  ProfileComponent,ProfilesearchComponent,SearchandeditreservationComponent,HousekeepingComponent,QueueroomComponent,RoomdiscrepanciesComponent,RoomconditionComponent
,FacilityforecastComponent,RoomhistoryComponent,ArrivalComponent,CheckinComponent,TracesComponent,ManagingqueueComponent,RoomassignmentComponent,AdvancedsearchComponent,EditGridRoomsComponent,EditBusinessBlockComponent,
GuestservicestatusComponent,OutoforderserviceComponent,RoommaintainComponent,BillingComponent,CasheringinhouseguestComponent,RevenuemanagementComponent,
BusinessBlockSearchComponent,InquriprocessComponent,BusinessCreateBlockComponent,BusinessBlockOptionsComponent,RominglistComponent,BusinessBlockGridCurrentComponent,ReservationsListComponent,GroupOptionsComponent,BlockRangeSettingComponent,RevenueRateCodeComponent,EditRevenueManagementComponent,PackagesComponent,PackagesnewComponent,FoliohistoryComponent]
