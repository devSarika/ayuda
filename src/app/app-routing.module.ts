import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedyformComponent } from './needyform/needyform.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
// https://guides.github.com/activities/forking/

const routes: Routes = [
  {
    path:'volunteer',
    component:VolunteerComponent
  },
  {
    path:'needy',
    component:NeedyformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
