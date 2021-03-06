import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

   menuItems:any[]

  constructor(private sidebarService: SidebarService,
                private usuarioService: UsuarioService,
                private router: Router) {

    this.menuItems = sidebarService.menu;

   }

  ngOnInit(): void {
  }

  logOut(){

    this.usuarioService.logout();
    this.router.navigateByUrl('/login');


  }



}
