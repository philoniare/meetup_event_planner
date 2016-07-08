import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
          <a md-button router-active [routerLink]=" ['./'] ">
            Index
          </a>
          <a md-button router-active [routerLink]=" ['./home'] ">
            Home
          </a>
          <a md-button router-active [routerLink]=" ['./about'] ">
            About
          </a>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <router-outlet></router-outlet>

      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

      <footer>
        <img [src]="angularclassLogo" width="6%">
        <span id="footerText">WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      </footer>
      </md-content>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  constructor(
    public appState: AppState) {

  }
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}