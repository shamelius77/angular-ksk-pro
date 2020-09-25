import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap, map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IregisterForm } from '../Interfaces/register-form.interface';
import { IloginForm } from '../Interfaces/login-form.interface';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  logout(){
    localStorage.removeItem('token')
  }


  validarToken():Observable<boolean>{

    const token = localStorage.getItem('token') || '' ;

    return this.http.get(`${base_url}/login/renew` , { 
            headers : {
                'x-token' : token
                } 
            }).pipe(
                  tap( (resp:any) => {
                    localStorage.setItem('token', resp.token)
                    } ),
                  map( resp => true),
                  catchError( error => of(false) )
              )
  }

  crearUsuario( formData: IregisterForm){
      return this.http.post(`${base_url}/usuarios`, formData)
      .pipe(
        tap( (resp: any) =>{
              localStorage.setItem('token', resp.token)
          }    
        )
      )
  }

  login( formData: IloginForm){
    return this.http.post(`${base_url}/login`, formData)
        .pipe(
          tap( (resp: any) =>{
                localStorage.setItem('token', resp.token)
            }    
          )
        )
  }

}
