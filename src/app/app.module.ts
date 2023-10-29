import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataUploaderToDBComponent } from './data-uploader-to-db/data-uploader-to-db.component';
import { RangeCalcComponent } from './range-calc/range-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    DataUploaderToDBComponent,
    RangeCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
