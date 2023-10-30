import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataUploaderToDbComponent } from './data-uploader-to-db/data-uploader-to-db.component';
import { HomeComponent } from './home/home.component';
import { RangeCalcComponent } from './range-calc/range-calc.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'data-uploader', component: DataUploaderToDbComponent },
  {path:'range-cal',component:RangeCalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
