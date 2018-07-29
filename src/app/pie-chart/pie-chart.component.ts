import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent  implements OnChanges {

  @Input('data') data: any[];
  @Input('domain') domain;

  view: any[] = [500, 200];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };


  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  gradient = false;


  constructor() {  }
  onSelect(event) {
    console.log(event);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.colorScheme = {domain: this.domain};
  }


}
