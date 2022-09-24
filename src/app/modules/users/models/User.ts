import { UsersService } from "src/app/services/users/users.service";
import { IUser } from "./IUser";

export class User {
  name:string;
  cedula:string;
  email:string;
  constructor(name:string,cedula:string,email:string){
    this.name = name;
    this.cedula = cedula;
    this.email = email;
  }

  create = (user:IUser,userService:UsersService) => userService.add(user)
  update = (user:IUser,userService:UsersService) => userService.edit(user)
  getUsers= (userService:UsersService) => userService.get()
  getUserById = (userService:UsersService, id:string) => userService.get().filter((r) => r.cedula === id)

}
