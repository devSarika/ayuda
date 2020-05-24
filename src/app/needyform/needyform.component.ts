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

register(){
  console.log(this.familyData)
  this.familyservice.sendFamilyData(this.familyData)
}

}
