import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsChillerComponent } from './components-chiller/assets-chiller/assets-chiller.component';
import { ChillerDigitalOptimationModule } from './components-chiller/chiller-digital-optimation/chiller-digital-optimation.module';
import { LayoutChillerDigitalOptimationComponent } from './components-chiller/chiller-digital-optimation/layout-chiller-digital-optimation/layout-chiller-digital-optimation.component';

const routes: Routes = [
  {
    // path: '', component: InfoObComponent
    path: '', redirectTo: 'assets', pathMatch: 'full',
    // path: '', component : LayoutComponent
  },
  {
    path: 'assets', children: [
      {
        path: '', component: AssetsChillerComponent
      },
      {
        path: 'front-axle', component: LayoutChillerDigitalOptimationComponent, loadChildren : () => import('./components-chiller/chiller-digital-optimation/chiller-digital-optimation.module').then(m => m.ChillerDigitalOptimationModule)
      },
      
      // {
      //   path: 'chiller-digital-optimation', component: LayoutChillerDigitalOptimationComponent, loadChildren : () => import('./components-chiller/chiller-digital-optimation/chiller-digital-optimation.module').then(m => m.ChillerDigitalOptimationModule)
      // },
      // {
      //   path: 'chiller-digital-optimation', component: ChillerDigitalOptimationModule
      // },
      // {
      //   path: 'chiller-reports', component: ChillerReportsModule
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChillerRoutingModule { }
