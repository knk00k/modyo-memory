import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-name-input',
  templateUrl: './player-name-input.component.html',
  styleUrls: ['./player-name-input.component.css']
})
export class PlayerNameInputComponent implements OnInit {
  @Input() playerNameFromLocalStorage: string | null = null;
  playerName: string = '';

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    if (this.playerNameFromLocalStorage) {
      this.playerName = this.playerNameFromLocalStorage;
    }
  }

  onSubmit(): void {
    if (this.playerName.trim() !== '') {
      this.playerService.setPlayerName(this.playerName);
      console.log('Iniciar el juego para', this.playerName);
      this.router.navigateByUrl('/game');
    }
  }
}
