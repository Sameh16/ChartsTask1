import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-adv-pie',
  templateUrl: './adv-pie.component.html',
  styleUrls: ['./adv-pie.component.css']
})
export class AdvPieComponent implements  OnChanges {

  @Input('data') data: any[];
  @Input('domain') domain;

  view: any[] = [500, 400];

  // options
  showLegend = true;

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
