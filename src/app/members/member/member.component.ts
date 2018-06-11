import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService} from '../../data.service';
import { AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Member } from './member.model';
import { SignupService } from '../../signup/signup.service';

import { DataSharingService } from '../../data-sharing.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent implements AfterViewInit, OnInit {

  displayedColumns = ['last_name', 'party', 'votes_with_party_pct', 'state', 'favorite'];
  members: Array<any>;
  favoriteList: Array<any>;  // this has to be any? why cant it be a blank array
  selectedMember: Member;
  dataSource = new MatTableDataSource(this.members);
  user: any;      // we might need to change this to be an instance of the actual User model, as is done with Member
  @ViewChild(MatSort) sort: MatSort;
  selectedRowIndex: number = -1;

  constructor(private signupService: SignupService, private _dataService: DataService, private dataSharing: DataSharingService) {
    this._dataService.getMembers()
      .subscribe(res => this.members = res);
  }

  ngOnInit() {
    this._dataService.getMembers()
      .subscribe(res => this.dataSource = res);
    console.log('user @ ngOnInit:  ' + this.user);
    // get the current user signed in
    this.dataSharing.currentUser.subscribe(user => this.user = user);
    console.log('ngOnInit: ' + this.user);
    this.favoriteList = this.user.favorites; // .includes() doesnt work on null
    console.log('ngOnInit Favorites List: ' + this.favoriteList);
    this.dataSource.sort = this.sort;
  }

  highlight(row) {
    console.log(row);
    this.selectedRowIndex = row.id;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log('ngAfterViewInit just happened');
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
    console.log('onSelect HAS FIRED on: ' + member.last_name);
  }

  onFavorite(member: Member) {
    this.selectedMember = member;
    const body = {
      member: this.selectedMember.last_name,
      user: this.user
    };
    console.log('favorites update: ');
    console.log(this.user.favorites);

    if (this.favoriteList.includes(this.selectedMember.last_name)) {
      // unfavorite
      console.log('unfavorite me');
      this.signupService.unfavorite(body).subscribe(
        data => {
          this.favoriteList = JSON.parse(data.favorites);
          console.log(data.message);
          console.log('JSON.parse(data.favorites):' + this.favoriteList);
        }
      );
    } else {
      console.log('favorite me');
      this.signupService.favorite(body).subscribe(
        data => {
          this.favoriteList = JSON.parse(data.favorites);
          console.log(data.message);
          console.log('JSON.parse(data.favorites):' + this.favoriteList);

        }
      );
    }
  }

  mouseEnter() {
    alert('must login to favorite');
  }

  mouseLeave() {
  console.log('you left the favorite button');
  }
}
