import { IGames } from "../../games/models/IGames";
import { IUser } from "../../users/models/IUser";

export interface IRent {
  idRent:string;
  idUser:string,
  idGame:string,
  date:Date,
  // user: IUser,
  // game: IGames
}
