import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { TrackingComponent } from './tracking/tracking.component';
import { NotificationComponent } from './notification/notification.component';
import { NewApplicationComponent } from './application/new-application/new-application.component';
import { TransferApplicationComponent } from './application/transfer-application/transfer-application.component';
import { ClosingApplicationComponent } from './application/closing-application/closing-application.component';
import { YourApplicationsComponent } from './application/your-applications/your-applications.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    ApplicationComponent,
    CustomerCareComponent,
    TrackingComponent,
    NotificationComponent,
    NewApplicationComponent,
    TransferApplicationComponent,
    ClosingApplicationComponent,
    YourApplicationsComponent
  ],
  exports: [
    ApplicationComponent
  ]
})
export class ConsumerModule { }
