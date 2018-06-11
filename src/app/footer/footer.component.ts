import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDate: string;

  constructor() {
  }

  ngOnInit() {
    this.updateTime();
    // var d = Date.now();
    // var momentDate = moment(d).format('MMMM Do YYYY, h:mm:ss a').toString();
    // this.currentDate = momentDate;
  }
  updateTime(): void {

    let x = Observable.interval(1000);
    x.subscribe(i => this.currentDate = moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'));
    // setInterval(() => {
    //   this.currentDate = this.currentDate + 10;
    //   console.log(this.currentDate);
    // }, 1500);
    // setInterval(() => {         // replaced function() by ()=>
    //   this.currentDate = new Date();
    //   console.log(this.currentDate);         // just testing if it is working
    // }, 1000);
  }

}
