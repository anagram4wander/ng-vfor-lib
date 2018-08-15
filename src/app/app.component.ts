import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngGUD';

  testData = new Array<string>();

  constructor() {
    for (let loop = 0; loop < 100000; loop++) {
      this.testData.push('Testing ' + loop);
    }
  }
}
