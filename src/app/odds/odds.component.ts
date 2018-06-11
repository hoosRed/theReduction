import {Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { DataService } from '../data.service';
import { Odds } from './odds.model';
import { Contract } from './contract.model';
import {Member} from '../members/member/member.model';


@Component({
  selector: 'app-odds',
  templateUrl: './odds.component.html',
  styleUrls: ['./odds.component.css']
})
export class OddsComponent implements OnInit {
  odds: Odds;
  selectedOdd: Odds;
  contracts: Contract[];
  oddsAll: Odds[];
  selected: String;
  ticker = ['SENMAJ.2019', 'HOUSEMAJ.2019', 'TRUMP.PRES.123118', 'TRUMP.RNOM20'];
  featArray: Odds[];


  constructor(private dataSharing: DataSharingService, private _dataService: DataService) {}

  onSelect(odds: Odds): void {
    this.selectedOdd = odds;
    console.log('onSelect HAS FIRED on: ' + odds.TickerSymbol);
  }
  oddsPull(selected) {
    console.log('this is selected' + selected);
    const body = {
      selected: selected
    };
    console.log(body.selected);
    // import the selected specific odd to import with getOdds
      this._dataService.getOdds(body).subscribe(res => {
      this.odds = JSON.parse(res); // why do we need to set this here?
      this.selectedOdd = JSON.parse(res);
      this.contracts = this.odds.Contracts;
      console.log('this is the ticker: ' + this.odds.TickerSymbol);
    });
    console.log('You are in oddsPull');
  }


  oddsPullFeatured(ticker, counter) {
    const featItem = this.oddsAll.find(o => o.TickerSymbol === ticker);
    this.featArray.push(featItem);
  }
  oddsPullFeaturedTest() {
    this.featArray = [];
    for (let count in this.ticker) {
      this.oddsPullFeatured(this.ticker[count], count);
    }
    console.log(this.featArray);
  }
  oddsPullAll() {
    this._dataService.getAllOdds().subscribe(res => {
    this.oddsAll = JSON.parse(res);
    console.log(this.oddsAll);
    });
    console.log('You are in OddsPullAll');
  }
  ngOnInit() {
    this._dataService.getAllOdds().subscribe(res => {
      this.oddsAll = JSON.parse(res);
    });
    this.featArray = [];
    for (let count in this.ticker) {
      this.oddsPullFeatured(this.ticker[count], count);
    }
    console.log(this.featArray);
  }
}









