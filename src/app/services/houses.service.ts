import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map' ;

@Injectable()
export class HousesService {
  public newHouseSubject = new Subject<any>();
  houseList: Array<any>;
  error: String;
  constructor( private http: Http) { }
  getAllHouses() {
    return this.http.get('data/data.json')
      .map(res => res.json());
  }

  addHouse(data) {
    data.image = 'default-crib';
    this.newHouseSubject.next(data);
  }

}
