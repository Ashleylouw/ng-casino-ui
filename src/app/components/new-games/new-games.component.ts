import { Component, OnInit } from '@angular/core';
import { CasinoService } from 'src/app/services/casino.service';

export interface GameDef {
  categories: string[];
  name: string;
  image: string;
  id: string;
}

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {
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
