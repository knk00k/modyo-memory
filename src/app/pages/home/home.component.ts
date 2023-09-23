import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  playerNameFromLocalStorage: string | null = null;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerNameFromLocalStorage = this.playerService.getPlayerName();
  }
}
