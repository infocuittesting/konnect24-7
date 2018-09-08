import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from "ngx-webstorage";
import {EditGridRoomsService} from './edit-grid-rooms.service'

@Component({
  selector: 'app-edit-grid-rooms',
  templateUrl: './edit-grid-rooms.component.html',
  styleUrls: ['./edit-grid-rooms.component.css'],
  providers:[EditGridRoomsService]
})
export class EditGridRoomsComponent implements OnInit {

  constructor(private editgridroomkservice:EditGridRoomsService,private route:Router,public session:SessionStorageService ) { }

  ngOnInit() {
    
  }

}
