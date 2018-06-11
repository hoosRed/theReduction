import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Politician} from '../politician/politician.model';

@Component({
  selector: 'app-politician-list',
  templateUrl: './politician-list.component.html',
  styleUrls: ['./politician-list.component.css']
})
export class PoliticianListComponent implements OnInit {
  politicians: Array<any>;
  selectedPolitician: Politician;

  constructor(private _dataService: DataService) {
    this._dataService.getPoliticians()
      .subscribe(res => this.politicians = res);
  }
  ngOnInit() {
  }
  onSelect(politician: Politician): void {
    this.selectedPolitician = politician;
    console.log('onSelect HAS FIRED on: ' + politician.name);

  }

}
