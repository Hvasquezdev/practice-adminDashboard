import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { NotFound404Component } from './shared/not-found404/not-found404.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotFound404Component}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
