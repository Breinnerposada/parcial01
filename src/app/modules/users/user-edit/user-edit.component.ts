import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';
import { User } from '../models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  users:User = new User('Usuario', '119275478', 'email@prueba.com')
  arrayUsers!: IUser[];
  constructor() { }

  ngOnInit(): void {
  }

}
