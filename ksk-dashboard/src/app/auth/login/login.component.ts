import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  
  public formSubmitted:boolean = false

  public loginForm = this.fb.group( 
    {
      email:    [ localStorage.getItem('email') || '', [Validators.required, Validators.email ] ],
      password: ['',  [Validators.required , Validators.maxLength(8)] ],
      remember: [ localStorage.getItem('remember') || false] 
    }  );

  constructor(private router:Router, 
              private fb: FormBuilder ,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }


  login(){

    this.formSubmitted = true;

    this.usuarioService.login(this.loginForm.value)
            .subscribe( resp =>{
              // console.log(resp);
              // actualizar el remember
                if (this.loginForm.get('remember').value){
                  localStorage.setItem('email', this.loginForm.get('email').value)
                  localStorage.setItem('remember', this.loginForm.get('remember').value)
                }else{
                  localStorage.removeItem('email')
                  localStorage.removeItem('remember')
                }
                
                // navegar al deashboard
                this.router.navigateByUrl('/');


            }, (err) => {
                 // si sucede un error enviar mensaje sweetAlert2
                 Swal.fire({
                  title: 'Error!',
                  text: err.error.msg,
                  icon: 'error',
                  confirmButtonText: 'Ok'
                });
            });


  }

  
  campoNoValido(campo:string):boolean{

    console.log('valida campo', campo);
    if( this.loginForm.get(campo).invalid && this.formSubmitted ){
      return true
    }else{
      return false
    }

  }

}
