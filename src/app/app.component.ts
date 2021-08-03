import { Component } from '@angular/core';
import {HelloWorldService} from './services/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cypress-ten';

  constructor(private service: HelloWorldService) {
    this.title = service.sendTitle();
  }


}
