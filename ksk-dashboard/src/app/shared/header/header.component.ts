import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  
  constructor(private usuarioService: UsuarioService,
                private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){

    this.usuarioService.logout();
    this.router.navigateByUrl('/login');


  }


  buscar(termino:string){

      console.log(termino);

  }

}
