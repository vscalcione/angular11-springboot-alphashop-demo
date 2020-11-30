import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular11-alphashop-fe';
  title = 'alphashop';

  welcome: string = `Welcome to site ${this.title}`
  title2: string = 'Select items you want to purchase'
}
