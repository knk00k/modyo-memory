import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Property to store the player's name retrieved from local storage (if available)
  playerNameFromLocalStorage: string | null = null;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    // Retrieve the player's name from the player service and store it in playerNameFromLocalStorage
    this.playerNameFromLocalStorage = this.playerService.getPlayerName();
  }
}
