import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jackpot } from '../components/jackpots/jackpots.component';
import { GameDef } from '../components/new-games/new-games.component';

@Injectable({
  providedIn: 'root',
})
export class CasinoService {

  constructor(private http: HttpClient) { }

  getGames() {
   return this.http.get<GameDef[]>('http://stage.whgstage.com/front-end-test/games.php');
  }

  getJackpots() {
   return this.http.get<Jackpot[]>('http://stage.whgstage.com/front-end-test/jackpots.php');
  }

}