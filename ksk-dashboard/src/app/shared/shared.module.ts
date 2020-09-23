import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SidebarComponent,
  ],
  exports:[
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
