import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { HouseListingComponent } from './house-listing/house-listing.component';
import { HouseCardComponent } from './house-card/house-card.component';
import { HousesService } from './services/houses.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { UtilService } from './services/util.service';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HouseListingComponent,
    HouseCardComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HousesService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
