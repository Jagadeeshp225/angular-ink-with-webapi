import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'https://localhost:44305/api/Details'
@Injectable({
  providedIn: 'root'
})

export class CallingApiService {

  constructor(
    private http:HttpClient
  ) { }
  detailscall()
  {
    return this.http.get<any>('https://localhost:44305/api/Details')
  }
  logincall(){
    return this.http.get('https://localhost:44305/api/login')
  }
  userdetails(email:string){
    return this.http.get('https://localhost:44305/api/Details?email='+email);

  }
  deletedetils(email:string){
    return this.http.delete('https://localhost:44305/api/Details?email='+email)


  }
  update(data:any){
    return this.http.put(baseUrl, data);
  }
  add(data:any){
    return this.http.post(baseUrl, data);


  }
}
