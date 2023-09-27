// En el componente HeaderComponent
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  playerName: string = 'UserName';

  constructor(
    private playerService: PlayerService,
    private router: Router,
    private scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    // Get the player's name from local storage
    const savedPlayerName = this.playerService.getPlayerName();

    if (savedPlayerName) {
      // Use the saved player's name
      this.playerName = savedPlayerName;
    } else {
      // If there's no saved player name, navigate back to the home page
      this.router.navigate(['/home']);
    }
  }

  // Method to get the number of hits from the score service
  getHits() {
    return this.scoreService.getHits();
  }

  // Method to get the number of misses from the score service
  getMisses() {
    return this.scoreService.getMisses();
  }
}
