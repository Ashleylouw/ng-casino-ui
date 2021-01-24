import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { JackpotsComponent } from './components/jackpots/jackpots.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CasinoService } from './services/casino.service';
import { TopGamesComponent } from './components/top-games/top-games.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGamesComponent,
    JackpotsComponent,
    TopGamesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CasinoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
