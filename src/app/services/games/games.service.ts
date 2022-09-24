import { Injectable } from '@angular/core';
import { IGames } from 'src/app/modules/games/models/IGames';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
date = new Date().getTime().toString()
currentGames: IGames[] = [
  {
    id: `GMLOL-${0}`,
    name: 'Lol',
    codigo: 'GMLOL',
    codigoEjemplar: `${0}`
  },
  {
    id: `GMFT-${0}`,
    name: 'Fornite',
    codigo: 'GMFT',
    codigoEjemplar: `${1}`
  },
]

constructor() { }

get(){
  return this.currentGames
}

add(game:IGames){
  return this.currentGames.push({...game, id: `${game.codigo}-${this.currentGames.length}`, codigoEjemplar: `${this.currentGames.length}`})
}

edit(game:IGames){
  const currentGame = this.currentGames.map((r)  => {
    if(r.id === game.id){
      r = game
    }
    return r
  });

  return this.currentGames = currentGame
}

}
