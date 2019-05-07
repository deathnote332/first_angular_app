import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/core/model/hero.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/marvel/marvel.service';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() hero: Hero;
  showImage = false;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private marvelService: MarvelService) { }

  ngOnInit() {
  }

  onClickItem() {
    this.router.navigate([this.hero.id], {relativeTo: this.route});
    this.marvelService.selectHero(this.hero);
  }

}
