import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadplanComponent } from './loadplan/loadplan.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
          
          {path: '',                  component: DashboardComponent, data:{ titulo: 'Dashboard' }},
          {path: 'loadplan',          component: LoadplanComponent, data:{ titulo: 'Load plan' }},
          {path: 'grafica1',          component: Grafica1Component, data:{ titulo: 'Graficas' }},
          {path: 'account-settings',  component: AccountSettingsComponent, data:{ titulo: 'Ajueste del theme' }},
    
        ] 
      },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
