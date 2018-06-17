import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';

// the http client is what enables hitting the back end

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get('/api/users')
      .map(result => this.result = result.json().data);
  }
  getPoliticians() {
    return this._http.get('/api/politicians')
      .map(result => this.result = result.json().data);
    }
  getMembers() {
    return this._http.get('/api/members')
      .map(result => this.result = result.json().data);
  }

  getReps() {
    return this._http.get('/api/reps')
      .map(result => this.result = result.json().data);
  }
  getOdds(body) {
    const info = JSON.stringify(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('/predictIt/predictItOne', info, {headers: headers})
      .map(result => this.result = result.json().data);
      // .map((result: Response) => result.json().data);
  }
  getOddsFeat(body) {
    const info = JSON.stringify(body);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post('/predictIt/predictItFeat', info, {headers: headers})
      .map(result => this.result = result.json().data);
    // .map((result: Response) => result.json().data);
  }
  getAllOdds() {
    return this._http.get('/predictIt/predictItAll')
      .map(result => this.result = result.json().data);
    // .map((result: Response) => result.json().data);
  }
}

