import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icono: null,
      subMenu: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Progress', url: '/progress'},
        {title: 'Graficas', url: '/graficas1'}
      ]
    }
  ];

  constructor() { }

}
