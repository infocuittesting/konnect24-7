import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PackagesnewService } from './packagesnew.service';
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-packagesnew',
  templateUrl: './packagesnew.component.html',
  styleUrls: ['./packagesnew.component.css'],
  providers: [PackagesnewService]
})
export class PackagesnewComponent implements OnInit {
  public val: any = {};
  public pack;
  public packdetails;
  public user: any = [];
  public foredropdown;
  public transactiondropdown;
  public currdropdown;
  public rhythmdropdown;
  public calculatedropdown;
  public Seasoncodedropdown;
  public iteminventorydropdown;
  public iventryname;
  public item_inventory_selected_id;
  public Alternatedropdown;
  public Altername;
  public Alternates;
  public packnego: any = {};
  public packnegos;
  public packnav;
  public packtable: any = [];
  public attributes_id: any;
  public delpackdetails;

  constructor(private PackagesnewService: PackagesnewService, public session: SessionStorageService) {
    this.packnego = this.packnegos;
  }

  // table select item inventary
  selected = [];
  selected_id = [];
  selected_name = [];
  idx: any;
  exist(item) {
    this.selected.indexOf(item) > -1;
  }
  toggleSelection(item) {
    this.idx = this.selected.indexOf(item);
    // this.room_type += item.type
    console.log("string", item.item_name)
    if (this.idx > -1) {
      this.selected.splice(this.idx, 1);
      this.selected_id.splice(this.idx, 1);
      this.selected_name.splice(this.idx, 1);

    }
    else {
      this.selected.push(item);
      this.selected_id.push(item.item_inventory_id);
      this.selected_name.push(item.item_name);

    }
    this.iventryname = this.selected_name.toString();
    this.item_inventory_selected_id = this.selected_id.toString();

  }

  // table select item Alternative
  selected1 = [];
  selected_id1 = [];
  selected_name1 = [];
  editpack_details: any = {};
  packtables: any = {};
  idx1: any;
  packmod = true;
  exist1(item) {
    this.selected1.indexOf(item) > -1;
  }
  toggleSelection1(item) {
    this.idx1 = this.selected1.indexOf(item);
    // this.room_type += item.type
    console.log("string", item.package_code)
    if (this.idx1 > -1) {
      this.selected1.splice(this.idx1, 1);
      this.selected_id1.splice(this.idx1, 1);
      this.selected_name1.splice(this.idx1, 1);

    }
    else {
      this.selected1.push(item);
      this.selected_id1.push(item.package_code_id);
      this.selected_name1.push(item.package_code);

    }
    this.Alternates = this.selected_id1.toString();
    this.Altername = this.selected_name1.toString();


  }

  ngOnInit() {

    this.PackagesnewService.Forecastgroupdropdown()
      .subscribe((resp: any) => {
        this.foredropdown = resp.Return_values;
      });
    this.PackagesnewService.Transactiondropdown()
      .subscribe((resp: any) => {
        this.transactiondropdown = resp.Return_values;
      });
    this.PackagesnewService.currencydropdown()
      .subscribe((resp: any) => {
        this.currdropdown = resp.ReturnValue;
      });

    this.PackagesnewService.rhythmdropdown()
      .subscribe((resp: any) => {
        this.rhythmdropdown = resp.Return_values;
      });
    this.PackagesnewService.Calculaterule()
      .subscribe((resp: any) => {
        this.calculatedropdown = resp.Return_values;
      });
    this.PackagesnewService.Seasoncode()
      .subscribe((resp: any) => {
        this.Seasoncodedropdown = resp.Return;
      });

    this.PackagesnewService.Iteminventory()
      .subscribe((resp: any) => {
        this.iteminventorydropdown = resp.Return_values;
      });

    this.PackagesnewService.Alternate()
      .subscribe((resp: any) => {
        this.Alternatedropdown = resp.Return_values;
      });

    this.PackagesnewService.packagedetails()
      .subscribe((resp: any) => {
        this.packtable = resp.Package_details;
        if (this.session.retrieve("packcode") == "New") {
          this.editpack_details = [];
          this.packmod = false;


        } else {
          //this.packtable=resp.Package_details[0];
          this.editpack_details = resp.Package_header[0];
          this.packtables.packagecode = this.editpack_details.package_code;
          this.packtables.short_description = this.editpack_details.short_description;
          this.packtables.forecast_code_id = this.editpack_details.forecast_group_description;
          this.packtables.description = this.editpack_details.description;
          this.packtables.transactioncodeid = this.editpack_details.transaction_code_description;
          this.packtables.currencys = this.editpack_details.currency;
          this.packtables.Alternates = this.editpack_details.alternates_selected_id;
          this.packtables.validtimefrom = this.editpack_details.valid_time_from;
          this.packtables.postingrhythm = this.editpack_details.posting_rhythm_desctiption;
          this.packtables.attributes_id = this.editpack_details.attributes_id;
          this.packtables.post_next_day = this.editpack_details.post_next_day;
          this.packtables.valid_time_to = this.editpack_details.valid_time_to;
          this.packtables.calculateruleid = this.editpack_details.calculate_rule_description;
          this.packtables.sell_separate = this.editpack_details.sell_separate;
          this.packtables.item_inventory_selected_id = this.editpack_details.item_inventory_selected_id;
          this.packtables.package_code_id = this.editpack_details.package_code_id;
          // this.packtables.item_inventory_selected_id = this.editpack_details.item_inventory_selected_id;
          // this.packtables.alternates_selected_id = this.editpack_details.alternates_selected_id;
          //this.attributes_id=this.editpack_details.attributes_id;

          console.log("ttttttttttttttt", this.packtables.packagecode)

        }
      });
  }



  //insert packages header
  submit(inputt) {
    if (inputt.sell_separate == true) {
      inputt.sell_separate = 1;
    } else {
      inputt.sell_separate = 0;
    }
    if (inputt.post_next_day == true) {
      inputt.post_next_day = 1;
    } else {
      inputt.post_next_day = 0;
    }
    this.packnegos = this.session.retrieve("packcode");
    console.log("#####################"+this.packnegos);
    if (this.packnegos == "New") {
      this.PackagesnewService.Packages(inputt, this.Alternates, this.item_inventory_selected_id)
        .subscribe((resp: any) => {
          this.pack = resp.ReturnCode;
          if (this.pack == "RIS") {
            this.pack = "The Package Header is Created"
          }
        });
    }else if(this.packnegos == "Edit"){
      inputt.alternate_id = this.packtables.Alternates;
      inputt.item_id = this.packtables.item_inventory_selected_id;
      this.PackagesnewService.EditPackages(inputt, this.Alternates, this.item_inventory_selected_id)
        .subscribe((resp: any) => {
          this.pack = resp.ReturnCode;
          if (this.pack == "RUS") {
            this.pack = "The Package Header is Updated"
          }
        });
    }

  }

  //insert packages details
  packsub(inputt) {
    this.PackagesnewService.Packdetails(inputt)
      .subscribe((resp: any) => {
        this.packdetails = resp.ReturnCode;
        if (this.packdetails == "RIS") {
          this.packdetails = "The Package Detail is Created"
        }


      });
  }
  public packid = [];
  selectindex = null;
  select(detail, index) {
    this.selectindex = index;
    this.packid = detail.packages_details_id;
    this.val.package_code_id = detail.package_code_id;
    this.val.season_code_id = detail.season_code;
    this.val.start_date = detail.start_date;
    this.val.end_date = detail.end_date;
    this.val.price = detail.price;
    this.val.allowance = detail.allowance;


    console.log("selectmemmmmmmmmmmmmm", this.packid)

  }

  delepackdetail() {
    let body = {
      "packages_details_id": this.packid
    }
    this.PackagesnewService.deletepackagedetails(body)
      .subscribe((resp: any) => {
        this.delpackdetails = resp.ReturnCode;
        if (this.delpackdetails == "RDS") {
          this.delpackdetails = "The Package Details is Deleted"
          this.PackagesnewService.packagedetails()
            .subscribe((resp: any) => {
              this.packtable = resp.Package_details;
            });
        }
        this.val = "";
      });
  }

  ngOnDestroy() {

    //Clearing session
    this.session.clear();
  }
}
