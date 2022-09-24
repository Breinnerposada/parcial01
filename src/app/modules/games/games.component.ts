import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { IGames } from './models/IGames';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  arrayGames: IGames[] = this._games.get()
  constructor(private _games: GamesService) { }

  ngOnInit(): void {
  }

}
