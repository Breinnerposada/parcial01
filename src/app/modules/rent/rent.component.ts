import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent/rent.service';
import { IRent } from './models/IRent.enum';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  arrayRent: IRent[] = this._rent.get()
  constructor(private _rent: RentService) { }

  ngOnInit(): void {
  }

  returnGame(index:number){
    this.arrayRent.splice(index)
    this._rent.rents = this.arrayRent;
  }

}
