import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  showHero(index: number) {
    this.router.navigate(['/hero', index]);
  }
}
