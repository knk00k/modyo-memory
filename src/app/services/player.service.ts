import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerName = 'playerName';

  constructor() { }

  getPlayerName(): string | null {
    return localStorage.getItem(this.playerName);
  }

  setPlayerName(name: string): void {
    localStorage.setItem('playerName', name);
  }
}
