import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CallingApiService } from '../calling-api.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private api : CallingApiService) { }
 
  ngOnInit(): void {
  }
  
  hide = true;
 
  loginform =new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')])
  })
  get email(){return this.loginform.get('email')}
  get password(){return this.loginform.get('password')}
 
  Check(){
    this.api.detailscall().subscribe((da)=>{
      console.warn(da);
      
    })
  }
  check1(){
    

      
  
      {
  
        localStorage.setItem("useremail",this.loginform.value['email']);
  
        localStorage.setItem("password",this.loginform.value['password']);
  
        
  
      }
  
    }
  }
