import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HousesService } from './../services/houses.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-house-listing',
  templateUrl: './house-listing.component.html',
  styleUrls: ['./house-listing.component.css']
})
export class HouseListingComponent implements OnInit {
  houseList : Array<any>;
  error : String;
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];
  constructor(
    private http: Http,
    private housesService: HousesService,
    private utilService: UtilService
  )
    { }

  ngOnInit() {
    this.housesService.getAllHouses()
      .subscribe(
        data => this.houseList = data,
        error => this.error = error.statusText
      );
    this.housesService.newHouseSubject.subscribe(
      data => this.houseList = [data, ...this.houseList]
    )
  }
}
