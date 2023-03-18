import { Routes } from "@angular/router";
import { FullComponent } from "./full/full.component";

export const routes: Routes = [
    {
        path: '',
        component: FullComponent, 
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: 
                () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: '',
                loadChildren:
                    () => import('./scm/scm.module').then(m => m.ScmModule)
            }
        ]
    }
]