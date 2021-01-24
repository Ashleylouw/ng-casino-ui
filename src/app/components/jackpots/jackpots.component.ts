import { Component, OnInit } from '@angular/core';
import { CasinoService } from 'src/app/services/casino.service';

export interface Jackpot {
  amount: number;
  game: string;
}

@Component({
  selector: 'app-jackpots',
  templateUrl: './jackpots.component.html',
  styleUrls: ['./jackpots.component.css']
})
export class JackpotsComponent implements OnInit {
  jackpots: Jackpot[];
  loaded = false;

  constructor(public casinoService: CasinoService) { }

  ngOnInit(): void {
    this.getJackpotFeed();
  }

  async getJackpotFeed() {
    try {
      this.jackpots = await this.casinoService.getJackpots().toPromise();
      this.loaded = true;
    } catch (err) {
      this.loaded = false;
      console.log(err);
    }
  }

}
