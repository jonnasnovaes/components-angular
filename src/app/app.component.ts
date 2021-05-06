import {Component, OnInit, ViewChild} from '@angular/core';

import {filter} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {LilLoadingRouterComponent} from './components/lil-loading-router/lil-loading-router.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'components-angular';

  @ViewChild(LilLoadingRouterComponent) loading: any;

  constructor(protected router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      this.loading.show();
    });
    this.router.events.pipe(filter(e => (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError))).subscribe(e => {
      this.loading.hide();
    });
  }
}
