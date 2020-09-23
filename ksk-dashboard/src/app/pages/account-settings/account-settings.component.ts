import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  // ./assets/css/colors/default-dark.css
  public linkTheme = document.querySelector('#theme');
  public links:NodeListOf<Element> ;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.links =   document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme:string){
  
   const url = `./assets/css/colors/${ theme }.css`;

   this.linkTheme.setAttribute('href', url);
   localStorage.setItem('theme', url);

   this.checkCurrentTheme();

  }

  checkCurrentTheme():void{


    this.links.forEach( elem=>{
      elem.classList.remove('working');

      const btnTheme =  elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if (currentTheme === btnThemeUrl ){

        elem.classList.add('working');

      }


    })


  }

}
