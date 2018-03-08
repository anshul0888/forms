import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainHomeComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    LoginComponent
  ]
})
export class CoreModule { }
