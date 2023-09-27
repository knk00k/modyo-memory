import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PlayerService } from '../services/player.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let playerService: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, PlayerService]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    playerService = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should canActivate() return true if playerName is not set', () => {
    spyOn(playerService, 'getPlayerName').and.returnValue(null);

    const canActivate = guard.canActivate();

    expect(canActivate).toBe(true);
  });

  it('should canActivate() return false and navigate to /game if playerName is set', () => {
    spyOn(playerService, 'getPlayerName').and.returnValue('John');
    const routerNavigateSpy = spyOn(router, 'navigate');

    const canActivate = guard.canActivate();

    expect(canActivate).toBe(false);
    expect(routerNavigateSpy).toHaveBeenCalledWith(['/game']);
  });
});
