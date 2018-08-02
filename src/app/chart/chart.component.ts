import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { colorSets } from '../colorData';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {


  @Input('type') type;
  @Input('data') data;
  @Input('color') color;

  view: any[] = [500, 200];

  // options
  showLegend = true;
  gradient = true;
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    colorSets.forEach(element => {
      if ( element.name === this.color ) {
          this.color = element.domain;
      }
    });
    this.colorScheme = {domain: this.color};

  }


}
