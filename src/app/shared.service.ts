import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  email!:string

  constructor() { }
  setemail(email:string){
    this.email = email;
  }
  getemail(){
    return this.email;
  }

}
