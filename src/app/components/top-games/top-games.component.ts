import { Component, OnInit } from '@angular/core';
import { CasinoService } from 'src/app/services/casino.service';
import { GameDef } from '../new-games/new-games.component';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {
  games: GameDef[];
  loaded = false;

  constructor(public casinoService: CasinoService) { }

  ngOnInit(): void {
    this.getGameFeed();
  }

  async getGameFeed() {
    try {
      this.games = await this.casinoService.getGames().toPromise();
      this.loaded = true;
    } catch (err) {
      this.loaded = false;
      console.log(err);
    }
  }
}
