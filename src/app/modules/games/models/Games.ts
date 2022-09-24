import { GamesService } from "src/app/services/games/games.service";
import { IGames } from "./IGames";

export class Games {
  name:string;
  codigo:string;
  codigoEjemplar:string;

  constructor(name:string, codigo:string, codigoEjemplar:string){
    this.name = name;
    this.codigo = codigo;
    this.codigoEjemplar = codigoEjemplar
  }

  create = (game:IGames,_gameService: GamesService) =>  _gameService.add(game)
  edit = (game:IGames,_gameService: GamesService) => _gameService.edit(game)
  get = (_gameService:GamesService) => _gameService.get()

}
