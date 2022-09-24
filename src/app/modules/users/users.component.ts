import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { IUser } from './models/IUser';
import { User } from './models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  arrayUsers:IUser[] = this._users.get();
  constructor(private _users: UsersService) {
  }

  ngOnInit(): void {

  }

}
