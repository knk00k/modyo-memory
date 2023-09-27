import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { PlayerService } from 'src/app/services/player.service';
import { ScoreService } from '../../services/score.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let playerService: PlayerService;
  let scoreService: ScoreService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule], // Importa RouterTestingModule para configurar las rutas
      providers: [PlayerService, ScoreService]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    playerService = TestBed.inject(PlayerService);
    scoreService = TestBed.inject(ScoreService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize playerName from PlayerService', () => {
    const savedPlayerName = 'TestPlayer';
    spyOn(playerService, 'getPlayerName').and.returnValue(savedPlayerName);

    fixture.detectChanges();

    expect(component.playerName).toBe(savedPlayerName);
  });

  it('should navigate to /home if playerName is not saved', () => {
    spyOn(playerService, 'getPlayerName').and.returnValue(null);
    spyOn(router, 'navigate');

    fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should call scoreService.getHits', () => {
    spyOn(scoreService, 'getHits').and.returnValue(5);

    const hits = component.getHits();

    expect(hits).toBe(5);
  });

  it('should call scoreService.getMisses', () => {
    spyOn(scoreService, 'getMisses').and.returnValue(3);

    const misses = component.getMisses();

    expect(misses).toBe(3);
  });
});
