import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { GamesService } from 'src/app/services/games/games.service';
import { RentService } from 'src/app/services/rent/rent.service';
import { UsersService } from 'src/app/services/users/users.service';
import { IGames } from '../../games/models/IGames';
import { IUser } from '../../users/models/IUser';
import { Rent } from '../models/Rent';

@Component({
  selector: 'app-rent-add',
  templateUrl: './rent-add.component.html',
  styleUrls: ['./rent-add.component.scss'],
  providers: [MessageService]

})
export class RentAddComponent implements OnInit {
  userForm:FormGroup;
  users:IUser[] = this._users.get()
  games:IGames[] = this._games.get()
  constructor(
    private _rent: RentService,
    private _users:UsersService,
    private _games: GamesService,
    private messageService: MessageService,
    private router: Router)  {
    this.userForm= new FormGroup({
      idUser: new FormControl('', Validators.required),
      idGame: new FormControl('', Validators.required),
      date: new FormControl('')
    });
  }

  ngOnInit(): void {
  }
  add(){

    const { idGame, idUser, date } = this.userForm.value;
    const currentRent = this._rent.get();
    const isEqualGameRent = currentRent?.filter((rent) => rent.idGame === idGame);
    if(isEqualGameRent?.length){
      this.messageService.add({severity:'error', summary:'Operacion Fallida', detail:'El juego ya se encuentra en renta'});
      return
    }

    const rent = new Rent({
      idRent: '',
      idUser,
      idGame,
      date
    })

    rent.add({
    idRent: '',
    idUser,
    idGame,
    date: new Date()}, this._rent)
    this.messageService.add({severity:'success', summary:'Operacion Exitosa', detail:'Agregado correctamente'});
    setTimeout(() => {
    this.router.navigateByUrl('/modules/rent')
    }, 500);
  }

}
