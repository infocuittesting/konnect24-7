import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {PackagesService} from './packages.service';
import { SessionStorageService } from "ngx-webstorage";

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
  providers:[PackagesService]
})
export class PackagesComponent implements OnInit {
  public pack=[];
  public sort=[];
  public delpack;
  public codesr=[];
  public detailspacks:any={};
  constructor(private PackagesService:PackagesService,private route:Router,public session:SessionStorageService ) { this.pack=this.sort;}
  

  onSelect(val){
    console.log(val);
    this.pack = this.sort.filter(x => x.package_code == val)
  }
  clean(){
    this.PackagesService.Packages()
    .subscribe((resp: any) => {
     this.pack=resp.Return_values;
     this.sort=resp.Return_values;
    });
  }

  setmem(){
  this.PackagesService.Packages()
  .subscribe((resp: any) => {
   this.pack=resp.Return_values;
   this.sort=resp.Return_values;
  
   //this.session.store("ids",this.detailspack.package_code_id);
  console.log("settttttttt",this.codesr);
  });
}
  ngOnInit() {
    this.PackagesService.Packages()
    .subscribe((resp: any) => {
     this.pack=resp.Return_values;
     this.sort=resp.Return_values;
   });
  }


  delete(){
    let body={
      "package_code_id":this.id
    }
    this.PackagesService. delePack(body)
    .subscribe((resp: any) => {
     this.delpack=resp.ReturnCode;
    if(this.delpack=="RDS"){
      this.delpack="The Package is Deleted"
      this.PackagesService.Packages()
      .subscribe((resp: any) => {
       this.pack=resp.Return_values;
     });
    }
   });
  }
 

  loadpack(param){
    if(param == "New"){
      this.session.store("packcode",param)
      console.log("NEW")
    }else if(param == "Edit"){
      this.session.store("packcode",param)
      console.log("Edit")
    }
    this.route.navigate(['packagecodenew/'])

  }
  public id;
  new=false;
  edit=true;
  selectindex=null;
  select(detapack,index){
  console.log(detapack)
  this.selectindex=index;
  this.id=detapack.package_code_id
  if(this.id==detapack.package_code_id){
    this.new=true;
    this.edit=false;
  }else{
    this.new=false;
    this.edit=true;
  }
  this.session.store("id",detapack.package_code_id);

  //this.id=details.package_code_id;
//this.session.store("ids",detailspack.package_code_id);
  //this.codesr=this.detapack.package_code_id;
  console.log("idddddddd",detapack.package_code_id);
  }
}
