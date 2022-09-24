import { Injectable } from '@angular/core';
import { IRent } from 'src/app/modules/rent/models/IRent.enum';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  rents: IRent[] = []

constructor() { }

add(rent:IRent){
  return this.rents.push(rent)
}

update(rent:IRent){
  const currentRent = this.rents.map((r)  => {
    if(r.idRent === rent.idRent){
      r = rent
    }
    return r
  });
  return this.rents = currentRent}

get(){
  return this.rents
}


}
