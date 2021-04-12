import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { UsersListModule } from './components/pages/users-list/users-list.module';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    UsersListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
