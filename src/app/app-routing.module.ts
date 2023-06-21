import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPassswordComponent } from './reset-passsword/reset-passsword.component';
import { LandingPageMapComponent } from './landing-page-map/landing-page-map.component';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chiller', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'reset-password', component: ResetPassswordComponent
  },
  // {
  //   path: 'landingPage', component: LandingPageMapComponent, canActivate: [AuthGuard]
  // },
  {
    path : 'chiller', canActivate: [AuthGuard], loadChildren : () => import('./chiller/chiller.module').then( m => m.ChillerModule)
  },
  {
    path: '**', redirectTo: 'chiller'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
