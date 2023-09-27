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
    const savedPlayerName = this.playerService.getPlayerName();
    if (savedPlayerName) {
      this.playerName = savedPlayerName;
    } else {
      this.router.navigate(['/home']);
    }
  }
}
