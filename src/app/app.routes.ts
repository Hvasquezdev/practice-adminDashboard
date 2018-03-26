import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {path: '', component: PagesComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'graficas1', component: Graficas1Component},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotFound404Component}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
