import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = 'vivid';
  data = [
    {
      'name': 'Germany',
      'value': 5
    },
    {
      'name': 'USA',
      'value': 3
    },
    {
      'name': 'France',
      'value': 2
    }
  ];
  type = 'pie';


  onChanegType(type: HTMLInputElement) {
    this.type = type.value;
  }

  onChanegColor(color: HTMLInputElement) {
    this.color = color.value;
    console.log(this.color);
  }
}
