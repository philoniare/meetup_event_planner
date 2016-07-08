import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { NoContent } from './no-content';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: 'About' },
  { path: 'detail', component: 'Detail', canActivate: [ WebpackAsyncRoute ] },
  { path: '**',    component: NoContent },
];


export const asyncRoutes: AsyncRoutes = {
  'About': require('es6-promise-loader!./about'),
  'Detail': require('es6-promise-loader!./+detail'),
};


export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Detail'],
];