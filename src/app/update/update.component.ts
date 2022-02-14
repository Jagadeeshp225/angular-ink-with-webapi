import { Component, OnInit } from '@angular/core';
import { CallingApiService } from '../calling-api.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  submitted=false; 
  updatedetails={
    Email:"",
    Name:"",
    Mobile:"",
    Gender:""
  };
  data!:any;
  email!:string;
  
  

  

  constructor(private api:CallingApiService,private service:SharedService) {
    var email = this.service.getemail();
   // console.log(this.email);
   this.api.userdetails(email).subscribe(re=>{
    // console.log(JSON.stringify(re));

     this.data=JSON.stringify(re)
    this.data = JSON.parse(this.data);
     //console.log(this.data)
     this.updatedetails.Email=this.data.email;
     this.updatedetails.Name=this.data.name;
     this.updatedetails.Mobile=this.data.mobile;
     this.updatedetails.Gender=this.data.gender;
    });
   }

  ngOnInit(): void {

  }
  update(){
    const data={
      name:this.updatedetails.Name,
      email:this.updatedetails.Email,
      gender:this.updatedetails.Gender,
      mobile:this.updatedetails.Mobile,
    };
    this.api.update(data).subscribe(
      response =>{
        console.log(response);
        this.submitted=true;
      },
      error =>{
        console.log(error);
      });

    
  }

}

