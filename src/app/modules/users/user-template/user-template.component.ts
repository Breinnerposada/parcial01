import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from '../models/User';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.scss'],
  providers: [MessageService]
})
export class UserTemplateComponent implements OnInit {
  @Input() typeOption:string = 'Add';
  @Input() placeholder!:string;
  userForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _user: UsersService,
    private messageService:MessageService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.createFormGroup()
  }

  createFormGroup(){
    this.userForm= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required)
    });
    if( this.typeOption !== 'Add' ){
      const valueForms = this._user.get().filter((r) => r.cedula === this.activatedRoute.snapshot.params['id'])
      this.userForm.setValue(valueForms[0])
    }
  }

  add(){
    const formValue = this.userForm.value
    const user = new User(formValue.name, formValue.cedula, formValue.email)
    this.typeOption === 'Add' ?
      user.create({
        name: formValue.name,
        email: formValue.email,
        cedula: formValue.cedula
      }, this._user)
      : user.update(
        {
          name: formValue.name,
          email: formValue.email,
          cedula: formValue.cedula
        }, this._user
      )

      this.messageService.add({severity:'success', summary:'Operacion Exitosa', detail:'Agregado correctamente'});
      setTimeout(() => {
      this.router.navigateByUrl('/modules/users')
      }, 500);
  }

}
