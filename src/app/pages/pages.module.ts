import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { GameComponent } from './game/game.component';

@NgModule({
    declarations: [
      HomeComponent,
      GameComponent,
    ],
    imports: [
      CommonModule,
      ComponentsModule
    ]
  })
  export class PagesModule { }