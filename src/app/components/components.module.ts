import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerNameInputComponent } from './player-name-input/player-name-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
      PlayerNameInputComponent
    ],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports: [
      PlayerNameInputComponent

    ]
  })
  export class ComponentsModule { }
  