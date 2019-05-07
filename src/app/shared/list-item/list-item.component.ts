import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from 'src/app/core/service/hero.service';
import { Hero } from 'src/app/core/model/hero.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() heroList: Hero[];
  constructor( private heroService: HeroService) { }

  ngOnInit() {
  }

}
