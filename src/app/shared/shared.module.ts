import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LoadingComponent } from './loading/loading.component';
// import { UserTemplateComponent } from './user-template/user-template.component';
// import { ListOfOnOffMetersComponent } from './list-of-on-off-meters/list-of-on-off-meters.component';
// import { LayoutTemplateComponent } from './layout-template/layout-template.component';
import { LeafletMapComponent } from '../leaflet-map/leaflet-map.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { LayoutTemplateComponent } from './layout-template/layout-template.component';
import { UserTemplateComponent } from './user-template/user-template.component';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { NgxGaugeModule } from 'ngx-gauge';
// import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
// import { ToastrModule } from 'ngx-toastr';
// import { AlarmsTemplateComponent } from './alarms-template/alarms-template.component';
// import { NgxChartTemplateComponent } from './ngx-chart-template/ngx-chart-template.component';


@NgModule({
    declarations: [
        // LoadingComponent,
        // UserTemplateComponent,
        // ListOfOnOffMetersComponent,
        // LayoutTemplateComponent,
        LeafletMapComponent,
        // AlarmsTemplateComponent,
        // InputTemplateComponent,
        // NgxChartTemplateComponent,
        // KpiTemplateComponent

        LoadingComponent,
        LayoutTemplateComponent,
        UserTemplateComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        FormsModule,
        // NgxGaugeModule,
        // NgxChartsModule,
        // NgxSkeletonLoaderModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,

        // ToastrModule.forRoot({
        //     closeButton: false,
        //     disableTimeOut: false,
        //     timeOut: 3000,
        //     positionClass: 'toast-bottom-right',
        //     extendedTimeOut: 1000,
        //     easing: 'ease-in-out',
        //     easeTime: 500,
        //     progressBar: true,
        //     progressAnimation: 'increasing',
        //     titleClass: 'toast-title',
        //     messageClass: 'toast-message',
        //     tapToDismiss: true,
        //     preventDuplicates: false,
        //     countDuplicates: false,
        //     newestOnTop: true
        // }),
    ],
    exports: [
        LoadingComponent,
        UserTemplateComponent,
        // ListOfOnOffMetersComponent,
        LayoutTemplateComponent,
        LeafletMapComponent,
        // AlarmsTemplateComponent,
        // InputTemplateComponent,
        // NgxChartTemplateComponent,
        // KpiTemplateComponent
    ]
})
export class SharedModule { }
