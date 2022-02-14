import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CallingApiService } from '../calling-api.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  ar: Array<any> = [];
  p:any;
  name:any;
  key1:string='name';
  email:string=""
  constructor(private api : CallingApiService,private service:SharedService) {}
    
  

  ngOnInit(): void {
    this.api.detailscall().subscribe((da)=>{
      console.warn(da);
      this.ar=da;
    })
  }
  //login(){
  //this.api.logincall().subscribe((da)=>{
  //  console.warn(da);
  //})
//}
//details(){
  //this.api.detailscall().subscribe((da)=>{
   // console.warn(da);

  //})
  

//}
search(){
  if(this.name==""){
    this.ngOnInit();
  }
  else{
    this.ar=this.ar.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}

re:boolean=false;
sort(key1:string){
  this.key1=key1;
  this.re=!this.re;

}
clickme(email:string){
  this.service.setemail(email)
 // console.log(this.service.getemail())


}


}



