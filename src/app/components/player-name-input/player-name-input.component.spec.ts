import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlayerNameInputComponent } from './player-name-input.component';
import { PlayerService } from 'src/app/services/player.service';
import { Component } from '@angular/core';

describe('PlayerNameInputComponent', () => {
  let component: PlayerNameInputComponent;
  let fixture: ComponentFixture<PlayerNameInputComponent>;
  let playerService: PlayerService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerNameInputComponent],
      imports: [FormsModule, RouterTestingModule.withRoutes([
        { path: 'game', component: DummyComponent }
      ])],
      providers: [PlayerService]
    });

    fixture = TestBed.createComponent(PlayerNameInputComponent);
    component = fixture.componentInstance;
    playerService = TestBed.inject(PlayerService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set player name and navigate to /game after submitting the form', () => {
    const playerName = 'John Doe';
    spyOn(playerService, 'setPlayerName');
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl');
  
    component.playerName = playerName;
    component.onSubmit();
  
    expect(playerService.setPlayerName).toHaveBeenCalledWith(playerName);
    expect(navigateByUrlSpy).toHaveBeenCalledWith('/game');
  });
  
});

@Component({ template: '' })
class DummyComponent {}
