import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnDestroy } from '@angular/core';
import { fadeAnimation } from '../animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnDestroy{
  users: Array<any>;

  constructor(private _dataService: DataService) {

    this._dataService.getUsers()
      .subscribe(res => this.users = res);

    }
    loadedFeature = '$event';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
ngOnDestroy() {
    localStorage.clear();
}
}
