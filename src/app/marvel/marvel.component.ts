import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';
import { Hero } from '../core/model/hero.model';
import { takeWhile, take } from 'rxjs/operators';
import { sortBy, paginate } from '../core/utilities/collection.ulits';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {
  heroList: Hero[];

  _isAlive = true;
  _heroList: Observable<Hero[]> = new Observable();

  pageLength: number;
  pageSize = 3;

  constructor(private marvelStateService: MarvelService) { }

  ngOnInit() {
      this.marvelStateService.loadHeroes();

      this.marvelStateService.getHeroes()
      .pipe(takeWhile(() => this._isAlive))
      .subscribe(
        (heroes) => {
          if (heroes) {
            this.heroList = sortBy(heroes, 'name');
            this._heroList = of(paginate(this.heroList, 1, this.pageSize));
            this.pageLength = heroes.length;
          }
      });
  }

  onClickNext(pageNumber: number) {
    this._heroList = of(paginate(this.heroList, pageNumber, this.pageSize));
  }

  onClickPrevious(pageNumber: number) {
    this._heroList = of(paginate(this.heroList, pageNumber, this.pageSize));
  }

  onSelectedPage(pageNumber: number) {
    this._heroList = of(paginate(this.heroList, pageNumber, this.pageSize));
  }

}
