import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RangeCalcComponent } from './range-calc/range-calc.component';
import { IndexComponent } from './index/index.component';
import { StocksComponent } from './stocks/stocks.component';
import { FNOComponent } from './fno/fno.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'range-calc', component: RangeCalcComponent },
  { path: 'index', component: IndexComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'fno', component: FNOComponent },
  { path: 'all', component: AllComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
