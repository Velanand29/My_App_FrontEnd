import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RangeCalcComponent } from './range-calc/range-calc.component';
import { StocksComponent } from './stocks/stocks.component';
import { IndexComponent } from './index/index.component';
import { FNOComponent } from './fno/fno.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,RangeCalcComponent, StocksComponent, IndexComponent, FNOComponent, AllComponent
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
