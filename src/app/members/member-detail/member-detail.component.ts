import {Component, Input, OnInit} from '@angular/core';
import {Member} from '../member/member.model';
import {DataService} from '../../data.service';


import {trigger, transition, style, animate, state} from '@angular/animations'


@Component({
  selector: 'app-member-detail',

  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() member: Member;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}
