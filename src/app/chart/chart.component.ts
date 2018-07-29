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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    colorSets.forEach(element => {
      if ( element.name === this.color ) {
          this.color = element.domain;
      }
    });

    console.log('my color =   ', this.color);
  }


}
