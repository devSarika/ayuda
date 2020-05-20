import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NeedyformComponent } from './needyform/needyform.component';
import { VolunteerformComponent } from './volunteerform/volunteerform/volunteerform.component';
@NgModule({
  declarations: [
    AppComponent,
    NeedyformComponent,
    VolunteerformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
