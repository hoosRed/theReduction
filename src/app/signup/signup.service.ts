import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import { DataSharingService } from '../data-sharing.service';
import { Member } from '../members/member/member.model';



@Injectable()
export class SignupService {
  constructor(private http: Http, private dataSharing: DataSharingService) {}
  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/signup', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/signin', body, {headers: headers})
      .map((response: Response) => response.json())                           // retrieve response data
      .catch((error: Response) => Observable.throw(error.json()));            // catch errors

  }
  favorite(body) {
    const info = JSON.stringify(body);
    console.log('Favoriting: HERE COMES INFO --> ' + info);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/favorite', info, { headers: headers })
      .map((response: Response) => response.json())                           // retrieve response data
      .catch((error: Response) => Observable.throw(error.json()));            // catch errors
  }
  unfavorite(body) {
    const info = JSON.stringify(body);
    console.log('Favoriting: HERE COMES INFO --> ' + info);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/unfavorite', info, { headers: headers })
      .map((response: Response) => response.json())                           // retrieve response data
      .catch((error: Response) => Observable.throw(error.json()));            // catch errors
  }
  logout() {
    localStorage.clear();
  }
  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
