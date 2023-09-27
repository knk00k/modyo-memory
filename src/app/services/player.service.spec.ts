import { TestBed, inject } from '@angular/core/testing';
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService]
    });
    service = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get player name', () => {
    const playerName = 'John Doe';

    // Set the player name in local storage
    localStorage.setItem('playerName', playerName);

    const retrievedName = service.getPlayerName();

    expect(retrievedName).toBe(playerName);
  });

  it('should set player name', () => {
    const playerName = 'Alice Smith';

    service.setPlayerName(playerName);

    // Retrieve the player name from local storage
    const retrievedName = localStorage.getItem('playerName');

    expect(retrievedName).toBe(playerName);
  });

  it('should return null if player name is not set', () => {
    localStorage.removeItem('playerName'); // Remove the player name

    const retrievedName = service.getPlayerName();

    expect(retrievedName).toBeNull();
  });
});
