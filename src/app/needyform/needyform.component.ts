import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';
@Component({
  selector: 'app-needyform',
  templateUrl: './needyform.component.html',
  styleUrls: ['./needyform.component.css']
})
export class NeedyformComponent implements OnInit {
familyData:any = {}
  constructor(private familyservice:FamilyService) { }

  ngOnInit() {
  }
persons=document.getElementsByName('adults');
register(){
  console.log(this.familyData)
  alert('Registration is successful')
  this.familyservice.sendFamilyData(this.familyData)
}

}
