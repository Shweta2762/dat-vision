import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { NgxGaugeModule } from 'ngx-gauge';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


import { ChillerDigitalOptimationRoutingModule } from './chiller-digital-optimation-routing.module';
import { LayoutChillerDigitalOptimationComponent } from './layout-chiller-digital-optimation/layout-chiller-digital-optimation.component';
import { OverviewChillerDigitalOptimationComponent } from './overview-chiller-digital-optimation/overview-chiller-digital-optimation.component';
// import { DialogOverviewChillerDigitalOptimationComponent } from './dialog-overview-chiller-digital-optimation/dialog-overview-chiller-digital-optimation.component';


@NgModule({
  declarations: [
    LayoutChillerDigitalOptimationComponent,
    OverviewChillerDigitalOptimationComponent,
    // DialogOverviewChillerDigitalOptimationComponent
  ],
  imports: [
    CommonModule,
    ChillerDigitalOptimationRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // MaterialModule,
    SharedModule,
  ],
  providers: [
    // SelectedApprovalStatusService
]
})
export class ChillerDigitalOptimationModule { }
