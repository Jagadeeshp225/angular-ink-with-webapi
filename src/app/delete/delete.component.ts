import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CallingApiService } from '../calling-api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  email!: string;
  data:any;
  constructor(private api:CallingApiService,private share:SharedService){}
 
  ngOnInit(): void {
    this.email=this.share.getemail();
    this.api.userdetails(this.email).subscribe((re)=>this.data=re)
    this.data=JSON.stringify(this.data)
    this.data = JSON.parse(this.data);
  
  }
  ondelete()
  {
      window.alert("Are you sure u want to delete user "+this.email);
      this.api.deletedetils(this.email).subscribe();
      
    
  }


  

}
