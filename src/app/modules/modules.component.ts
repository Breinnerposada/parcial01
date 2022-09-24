import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api/megamenuitem';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  items:MegaMenuItem[] = [
    {
      label: 'Usuarios',
      items : [
      [
        {
          label: 'Usuarios', icon: 'pi pi-fw pi-user',
          url: '/modules/users',
          replaceUrl: true,
        },
      ]
      ]
    },
    {
      label: 'Video Juegos',
      items : [
      [
        {
          label: 'Video Juegos', icon: 'pi pi-fw pi-eject',
          url: '/modules/games',
          replaceUrl: true
      },
      ]
      ]
    },
    {
      label: 'Rentas',
      items : [
      [
        {
          label: 'Rentas', icon: 'pi pi-fw pi-folder',
          url: '/modules/rent',
          replaceUrl: true
      },
      ]
      ]
    },



]
  constructor() { }

  ngOnInit(): void {
  }

}
