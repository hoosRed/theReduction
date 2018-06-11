import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Politician } from './politician.model';


@Component({
  selector: 'app-politician',
  templateUrl: './politician.component.html',
  styleUrls: ['./politician.component.css']
})

export class PoliticianComponent implements OnInit {
  politicians: Array<any>;
  selectedPolitician: Politician;

  constructor(private _dataService: DataService) {
    // this._dataService.getPoliticians()
    //   .subscribe(res => this.politicians = res);
  }

  ngOnInit() {
    this._dataService.getPoliticians()
      .subscribe(res => this.politicians = res);
  }
  onSelect(politician: Politician): void {
    this.selectedPolitician = politician;
    console.log('onSelect HAS FIRED on: ' + politician.name);

  }
}

