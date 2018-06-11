import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Politician} from '../politician/politician.model';



@Component({
  selector: 'app-politician-detail',
  templateUrl: './politician-detail.component.html',
  styleUrls: ['./politician-detail.component.css']
})
export class PoliticianDetailComponent implements OnInit {
@Input() politician: Politician;
  constructor(private _dataService: DataService) {
  }
  ngOnInit() {
  }

}
