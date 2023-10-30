import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataUploaderToDbComponent } from './data-uploader-to-db/data-uploader-to-db.component';
import { HomeComponent } from './home/home.component';
import { RangeCalcComponent } from './range-calc/range-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    DataUploaderToDbComponent,
    HomeComponent,RangeCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
