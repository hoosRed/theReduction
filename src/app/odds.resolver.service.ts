import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable()
export class OddsResolverService implements Resolve<any> {
  constructor(private _dataService: DataService) { }
  resolve(route: ActivatedRouteSnapshot): Promise<any> | boolean {
    return this._dataService.getAllOdds().toPromise()
      .then(res => {
        if (res) {
          return JSON.parse(res);
        } else {
          return false;
        }
      });
  }
}
