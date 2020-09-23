import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo: 'Main',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/' },
        { titulo: 'Load plan', url: 'loadplan' },
        { titulo: 'Graficas', url: 'grafica1' },
      ]
    },
    {
      titulo: 'Planning',
      icono: 'mdi mdi-bullseye',
      submenu: [
        { titulo: 'Load plan', url: 'loadplanxx' },
        { titulo: 'Daily loads', url: 'grafica1xx' },
      ]
    }
    
  ];

  constructor() { }





}
