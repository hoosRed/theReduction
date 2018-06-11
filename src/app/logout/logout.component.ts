import { Component, OnInit } from '@angular/core';
import {SignupService} from '../signup/signup.service';
import {Router} from '@angular/router';
import {DataSharingService} from '../data-sharing.service';
import * as moment from 'moment';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user: any;
  currentDate: object;
  constructor(private dataSharing: DataSharingService, private signupService: SignupService, private router: Router) {}
  onLogout() {
    this.signupService.logout();
    this.router.navigateByUrl('/auth');
    this.user = null;
    // dataSharing Service
    this.dataSharing.changeUser(null);
  }
  ngOnInit() {
    this.dataSharing.currentUser.subscribe(user => this.user = user);
    // const d = new Date();
    // const momentDate = moment(d).format('dddd');
    // this.currentDate = momentDate;
  }

}

