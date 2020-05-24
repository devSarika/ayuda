import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedyformComponent } from './needyform/needyform.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HomeComponent } from './home/home.component';
import { VolunteerhomepageComponent } from './volunteerhomepage/volunteerhomepage.component'

// https://guides.github.com/activities/forking/

const routes: Routes = [
  {path:'volunteer',component:VolunteerComponent},
  {path:'volunteerhomepage',component:VolunteerhomepageComponent},
  {path:'needyform',component:NeedyformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
