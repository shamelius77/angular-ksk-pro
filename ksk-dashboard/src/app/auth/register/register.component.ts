import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
//
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css' ]
})
export class RegisterComponent implements OnInit {

  public formSubmitted:boolean = false

  public registerForm = this.fb.group( 
    {
      nombre:     ['', Validators.required  ],
      email:      ['', [Validators.required, Validators.email ] ],
      password:   ['',  Validators.required  ],
      password2:  ['', Validators.required  ],
      terminos:   [false, Validators.required  ]
    } ,
    {
      validators: this.passwordsIguales('password', 'password2')
    }
    );


  constructor(private fb: FormBuilder ,
              private usuarioService: UsuarioService,
              private router: Router) { }


  ngOnInit(): void {
  }

  crearUsuario(){
    this.formSubmitted = true;

    console.log(this.registerForm.invalid);

    if( this.registerForm.invalid){
      return ;
    }

    // realizar la alta del usuario

    this.usuarioService.crearUsuario(this.registerForm.value)
              .subscribe( resp => {
                
                   // navegar al deashboard
                // this.router.navigateByUrl('/');


              }, (err) => {

                  // si sucede un error enviar mensaje sweetAlert2
                  Swal.fire({
                    title: 'Error!',
                    text: err.error.msg,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  });
              } );

  }

  campoNoValido(campo:string):boolean{

    if( this.registerForm.get(campo).invalid && this.formSubmitted ){
      return true
    }else{
      return false
    }

  }
  
  contraseniasNoValidas(){
      const pass1 = this.registerForm.get('password').value;
      const pass2 = this.registerForm.get('password2').value;

      if ( (pass1 !== pass2) && this.formSubmitted){
        return true
      }else{
        return false
      }

  }
  
  passwordsIguales(pass1:string, pass2:string){
      
      return ( formGroup: FormGroup ) => {
        const pass1Control =    formGroup.get(pass1);
        const pass2Control =    formGroup.get(pass2);

        if (pass1Control.value === pass2Control.value){
          pass2Control.setErrors(null)
        }else{
          pass2Control.setErrors({ noEsIgual : true })
        }
      } 
  }



  aceptaTerminos(){

    // if( this.registerForm.get('terminos').invalid && this.formSubmitted ){
    //   return false
    // }else{
    //   return true
    // }
    return this.formSubmitted && !this.registerForm.get('terminos').value ;
  }
  
  

}
