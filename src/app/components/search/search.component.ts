import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Hero } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  filter: string = '';
  filterHeroes: Hero[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.filter = params.filter;
      this.filterHeroes = this.heroesService.searchHeroes(this.filter);
    });
  }
  showHero(index: number) {
    this.router.navigate(['/hero', index]);
  }
}
