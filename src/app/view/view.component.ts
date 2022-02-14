import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CallingApiService } from '../calling-api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data!:any;
  email!:string;
   


  constructor(private api:CallingApiService,private service:SharedService)  { 
  //  this.email=
 // console.log(this.service.getemail())
  var email = this.service.getemail();
   // console.log(this.email);
   this.api.userdetails(email).subscribe(re=>{
    // console.log(JSON.stringify(re));

     this.data=JSON.stringify(re)
    this.data = JSON.parse(this.data);
     console.log(this.data)
    });
  
  
  

  
    
  
  
  }

  

  ngOnInit(): void {
    
  }
  

}
