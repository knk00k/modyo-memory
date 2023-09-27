import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.css']
})
export class CongratsComponent implements OnInit {
  
  playerName: string = 'UserName';

  constructor(  private playerService: PlayerService,
                private router: Router, ) { }

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
}
