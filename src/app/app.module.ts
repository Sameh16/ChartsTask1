import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AdvPieComponent } from './adv-pie/adv-pie.component';
import { GridPieComponent } from './grid-pie/grid-pie.component';
import { TreeMapComponent } from './tree-map/tree-map.component';
import { NumberCardComponent } from './number-card/number-card.component';
import { GaugeComponent } from './gauge/gauge.component';
import { VerBarComponent } from './ver-bar/ver-bar.component';
import { HoriBarComponent } from './hori-bar/hori-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PieChartComponent,
    AdvPieComponent,
    GridPieComponent,
    TreeMapComponent,
    NumberCardComponent,
    GaugeComponent,
    VerBarComponent,
    HoriBarComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
