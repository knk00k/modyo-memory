import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-name-input',
  templateUrl: './player-name-input.component.html',
  styleUrls: ['./player-name-input.component.css']
})
export class PlayerNameInputComponent implements OnInit {

  // Input property to receive the player's name from local storage (if available)
  @Input() playerNameFromLocalStorage: string | null = null;
  playerName: string = '';

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    // Initialize the player name with the value from local storage, if available
    if (this.playerNameFromLocalStorage) {
      this.playerName = this.playerNameFromLocalStorage;
    }
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.playerName.trim() !== '') {
      // Set the player's name in local storage
      this.playerService.setPlayerName(this.playerName);
      // Redirect to the game page
      this.router.navigateByUrl('/game');
    }
  }
}
