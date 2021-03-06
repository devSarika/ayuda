import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path=environment.path
  TOKEN_KEY='token'
  constructor(private http:HttpClient) { }
  sendVolunteerData(volunteerData)
  {
    
    this.http.post<any>(this.path+'/volunteerregister',(volunteerData)).subscribe(res=> {  
    
    console.log(res)
    localStorage.setItem('token',res.token)
  })
}


}
