import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service'
@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  

  ngOnInit() {  
  }
  volunteerData:any = { }
  constructor(private authservice:AuthService) {} 
  post(){
    console.log(this.volunteerData)
    this.authservice.sendVolunteerData(this.volunteerData)
  }
 

}
