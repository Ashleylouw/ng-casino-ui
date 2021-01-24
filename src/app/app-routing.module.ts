import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewGamesComponent } from './components/new-games/new-games.component';
import { JackpotsComponent } from './components/jackpots/jackpots.component';
import { BrowserModule } from '@angular/platform-browser';
import { TopGamesComponent } from './components/top-games/top-games.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopGamesComponent },
  { path: 'new', component: NewGamesComponent },
  { path: 'jackpots', component: JackpotsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
