import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadplanComponent } from './loadplan/loadplan.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const routes: Routes = [
    {
        path: 'dashboard',            
        component: PagesComponent,
        children: [
          
          {path: '',                  component: DashboardComponent},
          {path: 'loadplan',          component: LoadplanComponent},
          {path: 'grafica1',          component: Grafica1Component},
          {path: 'account-settings',  component: AccountSettingsComponent},
       
    
        ] 
      },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}