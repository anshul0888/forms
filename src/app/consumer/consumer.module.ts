import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { TrackingComponent } from './tracking/tracking.component';
import { NotificationComponent } from './notification/notification.component';
import { NewApplicationComponent } from './application/new-application/new-application.component';
import { ClosingApplicationComponent } from './application/closing-application/closing-application.component';
import { YourApplicationsComponent } from './application/your-applications/your-applications.component';
import { UpdateApplicationComponent } from './application/update-application/update-application.component';
import { ConsumerRoutingModule } from './consumer-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    ApplicationComponent,
    CustomerCareComponent,
    TrackingComponent,
    NotificationComponent,
    NewApplicationComponent,
    ClosingApplicationComponent,
    YourApplicationsComponent,
    UpdateApplicationComponent
  ],
  exports: [
  ]
})
export class ConsumerModule { }
