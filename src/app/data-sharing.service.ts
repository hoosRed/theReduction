import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataSharingService {
private userSource = new BehaviorSubject<any>(null);
currentUser = this.userSource.asObservable();

private favoriteSource = new BehaviorSubject<any>(null);
currentList = this.favoriteSource.asObservable();
  constructor() { }

  changeUser(user: object) {
    this.userSource.next(user);
  }
  changeFavoriteList(favoriteList: object) {
    this.favoriteSource.next(favoriteList);
  }
}
