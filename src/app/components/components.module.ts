import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerNameInputComponent } from './player-name-input/player-name-input.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { CongratsComponent } from './congrats/congrats.component';



@NgModule({
    declarations: [
      PlayerNameInputComponent,
      HeaderComponent,
      CardsComponent,
      CongratsComponent
    ],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [
      PlayerNameInputComponent,
      HeaderComponent,
      CardsComponent,
      CongratsComponent

    ]
  })
  export class ComponentsModule { }
  