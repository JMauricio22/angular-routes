import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'hero/:id',
    component: HeroComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

export const app_routing = RouterModule.forRoot(ROUTES);
