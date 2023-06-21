import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewChillerDigitalOptimationComponent } from './overview-chiller-digital-optimation/overview-chiller-digital-optimation.component';

const routes: Routes = [
  {
    path: "", redirectTo: "overview", pathMatch: "full"
  },
  {
    path: 'overview', component: OverviewChillerDigitalOptimationComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChillerDigitalOptimationRoutingModule { }
