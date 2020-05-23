import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path=environment.path
  constructor(private http:HttpClient) { }
  sendVolunteerData(registerData)
  {
    
    this.http.post<any>(this.path+'/register',(registerData)).subscribe(res=> {  
    
    console.log(res)
    localStorage.setItem('token',res.token)
  })
}


}
