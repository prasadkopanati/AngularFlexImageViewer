import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BbjComparionChartComponent} from "./bbj-comparion-chart/bbj-comparion-chart.component";
import {BbjImageViewerComponent} from "./bbj-image-viewer/bbj-image-viewer.component";

const routes: Routes = [
  { path: 'chart', component: BbjComparionChartComponent },
  { path: 'image', component: BbjImageViewerComponent },
  { path: '', redirectTo: 'image', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
