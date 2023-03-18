import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { WelcomeInfoComponent } from "./welcome-info/welcome-info.component";

export const dashboardRoute: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'welcome-info',
        component: WelcomeInfoComponent
    }
]