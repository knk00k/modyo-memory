import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerName = 'playerName';

  constructor() { }

  // Method to retrieve the player's name from local storage
  getPlayerName(): string | null {
    return localStorage.getItem(this.playerName);
  }

  // Method to set the player's name in local storage
  setPlayerName(name: string): void {
    localStorage.setItem('playerName', name);
  }
}
