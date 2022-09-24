import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modules/users/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUsers:IUser[] = [
    {
      name: 'Usuario de prueba',
      cedula: '123456789',
      email: 'pruebas@email.com'
    },
    {
      name: 'Usuario de prueba 1',
      cedula: '12345689',
      email: 'pruebas1@email.com'
    },
    {
      name: 'Usuario de prueba 2',
      cedula: '12356789',
      email: 'pruebas2@email.com'
    },
  ]
  constructor() { }

  add(user:IUser){
    return this.currentUsers.push({...user})
  }

  edit(user:IUser){
    const currentUser = this.currentUsers.map((r)  => {
      if(r.cedula === user.cedula){
        r = user
      }
      return r
    });
    return this.currentUsers = currentUser
  }

  get(){
    return this.currentUsers
  }
}
