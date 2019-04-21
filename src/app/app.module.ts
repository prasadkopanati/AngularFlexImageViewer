import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbjComparionChartComponent } from './bbj-comparion-chart/bbj-comparion-chart.component';
import { BbjImageViewerComponent } from './bbj-image-viewer/bbj-image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BbjComparionChartComponent,
    BbjImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
