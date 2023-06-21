import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxGaugeModule } from 'ngx-gauge';
// import { ToastrModule } from 'ngx-toastr'
// import { NgxChartsModule } from "@swimlane/ngx-charts";
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Shared Module
import { SharedModule } from './shared/shared.module';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonHttpInterceptor } from './interceptors/common-http.interceptor';
import { ResetPassswordComponent } from './reset-passsword/reset-passsword.component';
import { LandingPageMapComponent } from './landing-page-map/landing-page-map.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ResetPassswordComponent,
    LandingPageMapComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    // NgxGaugeModule,
    // NgxChartsModule,
    // NgxSkeletonLoaderModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,

    // ToastrModule.forRoot({
    //   closeButton: false,
    //   disableTimeOut: false,
    //   timeOut: 3000,
    //   positionClass: 'toast-bottom-right',
    //   extendedTimeOut: 1000,
    //   easing: 'ease-in-out',
    //   easeTime: 500,
    //   progressBar: true,
    //   progressAnimation: 'increasing',
    //   titleClass: 'toast-title',
    //   messageClass: 'toast-message',
    //   tapToDismiss: true,
    //   preventDuplicates: false,
    //   countDuplicates: false,
    //   newestOnTop: true
    // }),

    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
