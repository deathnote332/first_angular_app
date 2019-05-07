import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/core/model/hero.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from 'src/app/core/service/hero.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  hero: Hero;
  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.hero = this.heroService.getHero(+params['id']);
    });
  }

}
