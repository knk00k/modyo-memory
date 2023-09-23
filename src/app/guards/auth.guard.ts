import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  private playerService: PlayerService,
                private router: Router ) { }

  canActivate(): boolean {
    const playerName = this.playerService.getPlayerName();

    if (playerName) {
      // Si el nombre de usuario ya está presente, redirige al usuario a la página del juego
      this.router.navigate(['/game']);
      return false; // Evita que se acceda a la página de inicio(home)
    }

    return true; // Permite el acceso a la página de inicio(home)
  }
  
}
