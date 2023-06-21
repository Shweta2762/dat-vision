// Required Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { NgxGaugeModule } from 'ngx-gauge';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';


import { ChillerRoutingModule } from './chiller-routing.module';
import { AssetsChillerComponent } from './components-chiller/assets-chiller/assets-chiller.component';


@NgModule({
  declarations: [
  
    AssetsChillerComponent,
  ],
  imports: [
    CommonModule,
    ChillerRoutingModule,
    MaterialModule,
    FormsModule,
    // NgxGaugeModule,
    // NgxChartsModule,
    // NgxSkeletonLoaderModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers : [
  ]
})
export class ChillerModule { }
