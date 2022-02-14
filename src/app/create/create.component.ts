import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CallingApiService } from '../calling-api.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  adduser={

    name:'',
    email:'',
    gender:'',
    password:'',
    mobile:'',

  };

  submitted=false;

  constructor(private api : CallingApiService,private service:SharedService) {}

  



  ngOnInit(): void {

  }



  saveUser(){

    const data={

      name:this.adduser.name,
      email:this.adduser.email,
      gender:this.adduser.gender,
      mobile:this.adduser.mobile,
      password:this.adduser.password

    };

    this.api.add(data).subscribe(

      response =>{

        console.log(response);

        this.submitted=true;

      },

      error =>{

        console.log(error);

      });

  }

  newUser(){

    this.submitted=false;

    this.adduser={

      name:'',

      email:'',

      gender:'',

      password:'',
      mobile:''

    };

  }



}


  


