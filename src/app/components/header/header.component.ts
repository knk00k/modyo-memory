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
    const savedPlayerName = this.playerService.getPlayerName();
    if (savedPlayerName) {
      this.playerName = savedPlayerName;
    } else {
      this.router.navigate(['/home']);
    }
  }

  getHits() {
    return this.scoreService.getHits();
  }

  getMisses() {
    return this.scoreService.getMisses();
  }
}
