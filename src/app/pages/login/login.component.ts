import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private rutas:Router) { }

  ngOnInit(): void { }

  async onLogin(){ }

  accesoRapido(){
    const checkbox:any = document.getElementById('accRap');

    if(checkbox.checked){
      this.email = 'ejemplo@gmail.com';
      this.password = '123456';
    }
    else{
      this.email = '';
      this.password = '';
    } 
  }

}
