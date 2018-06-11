import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../data.service';
import {SignupService} from '../../signup/signup.service';
import { Rep } from './rep.model';
import { DataSharingService} from '../../data-sharing.service';

@Component({
  selector: 'app-reps',
  templateUrl: './reps.component.html',
  styleUrls: ['./reps.component.css']
})
export class RepsComponent implements AfterViewInit, OnInit {

  displayedColumns = ['last_name', 'party', 'votes_with_party_pct', 'state', 'favorite'];
  reps: Array<any>;
  selectedRep: Rep;
  dataSource = new MatTableDataSource(this.reps);
  user: string;
  @ViewChild(MatSort) sort: MatSort;
  selectedRowIndex: number = -1;
  constructor(private signupService: SignupService, private _dataService: DataService, private dataSharing: DataSharingService) {
    this._dataService.getReps()
      .subscribe(res => this.reps = res);
  }
  ngOnInit() {
    this._dataService.getReps()
      .subscribe(res => this.dataSource = res);
    console.log('ngAfterViewInit');
    // get the current user signed in
    this.dataSharing.currentUser.subscribe(user => this.user = user);
  }
  highlight(row){
    console.log(row);
    this.selectedRowIndex = row.id;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    console.log('ngAfterViewInit just happened');
  }
  onSelect(rep: Rep): void {
    this.selectedRep = rep;
    console.log('onSelect HAS FIRED on: ' + rep.last_name);
  }

  onFavorite(): void {
    const body = {
      member: this.selectedRep.last_name,
      user:   this.user
    };
    console.log('Favorited Politician is: ' + body.member);
    console.log('Current User is: ' + body.user);
    console.log('fuck');
    this.signupService.favorite(body).subscribe(
      data => {
        localStorage.setItem('user', data.user);
        localStorage.setItem('rep', data.rep);
      }
    );
  }
}
