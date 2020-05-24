import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FamilyService {
path = environment.path
TOKEN_KEY='token'
  constructor(private http:HttpClient) { }
  sendFamilyData(familyData)
  {
    this.http.post<any>(this.path+'/familyregister',(familyData)).subscribe(res=>{
      console.log(res)
      localStorage.setItem('token',res.token)
    })
  }
}
