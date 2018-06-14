import {Injectable} from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';


import {DataService} from './data.service';

@Injectable()
export class ResolverService implements Resolve<any> {
  constructor(private _dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot): Promise<any> | boolean {
    return this._dataService.getReps().toPromise()
      .then(res => {
        if (res) {
          return res;
        } else {
          return false;
        }
      });
  }
}
