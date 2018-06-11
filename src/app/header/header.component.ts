import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import * as moment from 'moment';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  user: any;
  constructor(private dataSharing: DataSharingService) { }

  ngOnInit() {
    this.dataSharing.currentUser.subscribe(user => this.user = user);
  }
}
