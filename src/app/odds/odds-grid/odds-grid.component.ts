import {Component, Input, OnInit } from '@angular/core';
import { Odds } from '../odds.model';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { DataService } from '../../data.service';
import { Contract } from '../contract.model';

@Component({
  selector: 'app-odds-grid',
  templateUrl: './odds-grid.component.html',
  styleUrls: ['./odds-grid.component.css']
})

export class OddsGridComponent implements OnInit, OnChanges {
  colnum: number;
  @Input() odds: Odds;
  selectedOddGrid: Odds;
  contracts: Contract[];
  body: object;
  // constructor(private _dataService: DataService) { }
  ngOnChanges(changes: SimpleChanges) {
    this.contracts = this.odds.Contracts;

    if (this.odds.Contracts.length % 4 === 0) {
      this.colnum = 4;
    } else if (this.odds.Contracts.length % 3 === 0) {
      this.colnum = 3;
    } else if (this.odds.Contracts.length > 7) {
        this.colnum = 5;
      } else {
      this.colnum = this.odds.Contracts.length;
    }
    // this is undefined on the first call, needs to contain the correct information
    console.log('You are in oddsPullGrid:  ' + this.selectedOddGrid.Name);
  }
  ngOnInit() {
    this.colnum = this.odds.Contracts.length;
  }
}
