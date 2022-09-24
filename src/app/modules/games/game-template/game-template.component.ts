import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { GamesService } from 'src/app/services/games/games.service';
import { Games } from '../models/Games';
import { IGames } from '../models/IGames';

@Component({
  selector: 'app-game-template',
  templateUrl: './game-template.component.html',
  styleUrls: ['./game-template.component.scss'],
  providers: [MessageService]
})
export class GameTemplateComponent implements OnInit {

  @Input() typeOption:string = 'Add';
  @Input() placeholder!:string;
  userForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _game: GamesService,
    private messageService: MessageService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.createFormGroup()
  }

  createFormGroup(){
    this.userForm= new FormGroup({
      name: new FormControl({value: '', disabled: this.typeOption === 'show' ? true : false}, Validators.required),
      codigo: new FormControl({value: '', disabled: this.typeOption === 'show' ? true : false}, Validators.required),
      id: new FormControl(''),
      codigoEjemplar: new FormControl(''),
    });
    if( this.typeOption !== 'Add' ){
      const valueForms = this._game.get().filter((r) =>r.id === this.activatedRoute.snapshot.params['id'])
      this.userForm.setValue(valueForms[0])
    }
  }

  add(){
    const value = this.userForm.value
    const games = new Games( value.name,value?.codigo, value?.codigoEjemplar)
    this.typeOption === 'Add'  ?
      games.create({name:value.name ,codigo: value.codigo, codigoEjemplar: value.codigoEjemplar, id: ''}, this._game) :
      games.edit({name:value.name ,codigo: value.codigo, codigoEjemplar: value.codigoEjemplar, id: value.id}, this._game)

      this.messageService.add({severity:'success', summary:'Operacion Exitosa', detail:'Agregado correctamente'});
      setTimeout(() => {
      this.router.navigateByUrl('/modules/games')
      }, 500);
  }

}
