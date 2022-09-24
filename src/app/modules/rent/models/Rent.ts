import { RentService } from "src/app/services/rent/rent.service";
import { IRent } from "./IRent.enum";

export class Rent {
  rent:IRent;
  constructor(rent:IRent){
    this.rent = rent
  }

  add = (rent:IRent, _rent: RentService) => _rent.add(rent)
  update = (rent:IRent, _rent: RentService) => _rent.update(rent)
  get = (_rent: RentService) => _rent.get()

}
