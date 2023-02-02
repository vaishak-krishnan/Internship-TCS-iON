import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:"",
    password:""
  }
  message:any;
  id:any;


  constructor(private api:ApiService, private route:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    try{
    this.api.login(this.user).subscribe(res=>{
       if(res.message){
        alert(res.message)
      }
      else  if (res.email == "admin1234@gmail.com" && res.password =="Admin@1234" ){
      localStorage.setItem('token',this.id);

        alert("Root user has successfully logged in")
        this.route.navigate(['/adminhome'])
       }
       else if (res.email == "theertha@gmail.com" && res.password == "Theertha@1234" || res.email == "rahul12@gmail.com" && res.password == "Rahul@1234"){
        alert("Admin has successfully logged in")
        this.route.navigate(['/userAdmin'])
       }
       else{
        localStorage.setItem('token',this.id);

        alert("User has successfully logged in")
        this.route.navigate(['/userhome'])
  
       }
   })
}
catch(error){
  console.log(error)
}
  }
}
