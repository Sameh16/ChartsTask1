import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-grid-pie',
  templateUrl: './grid-pie.component.html',
  styleUrls: ['./grid-pie.component.css']
})
export class GridPieComponent implements OnChanges {

  @Input('data') data: any[];
  @Input('domain') domain;
  view: any[] = [700, 200];

  // options
  showLegend = true;
  gradient = true;


  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };




  constructor() { }
  onSelect(event) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.colorScheme = {domain: this.domain};
  }

}