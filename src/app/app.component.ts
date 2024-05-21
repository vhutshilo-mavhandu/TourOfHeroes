import {Component} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent,MessagesComponent,RouterModule],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
