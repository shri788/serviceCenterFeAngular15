import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoute } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';



@NgModule({
   imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoute)
  ],
  declarations: [
    DashboardComponent,
    WelcomeInfoComponent
  ]
})
export class DashboardModule { }
