import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerName: string | null = null;

  constructor() { }

  getPlayerName(): string | null {
    return this.playerName;
  }

  setPlayerName(name: string): void {
    this.playerName = name;
    localStorage.setItem('playerName', name);
  }
}
