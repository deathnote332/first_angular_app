import { NgModule } from '@angular/core';
import { HeroService } from './service/hero.service';

@NgModule({
    providers: [
        HeroService
    ]
})

export class CoreModule { }

