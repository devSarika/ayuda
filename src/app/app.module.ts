import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeedyformComponent } from './needyform/needyform.component';
import {FormsModule} from '@angular/forms'

import {AuthService} from './auth.service';
import { VolunteerComponent } from './volunteer/volunteer.component'
@NgModule({
  declarations: [
    AppComponent,
    NeedyformComponent,
    
    VolunteerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
