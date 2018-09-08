import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Route } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import { FoliohistoryService} from './foliohistory.service';

@Component({
  selector: 'app-foliohistory',
  templateUrl: './foliohistory.component.html',
  styleUrls: ['./foliohistory.component.css'],
  providers:[ FoliohistoryService],
})
export class FoliohistoryComponent implements OnInit {

  constructor(private folioservice: FoliohistoryService, public session:SessionStorageService,private route:Router) { }

  public foliohis;

  ngOnInit() {
    
  this.folioservice.foliohistory()
  .subscribe((resp: any) => {
    this.foliohis = resp.Return;
    console.log("folioooooooooooooooo",this.foliohis);
  });
  }


}
