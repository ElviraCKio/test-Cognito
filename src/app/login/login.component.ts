import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = ""
  // password =""

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  // async loginWithCognito () {
  //   try {
  //     var user = await Auth.signIn(this.email.toString(), this.password.toString());
  //     var tokens = user.signInUserSession
  //     if ( tokens != null){
  //       console.log('Usuario autenticado')
  //       this.router.navigate(['Home']);
  //       alert('Esta logueado')
  //     }
  //   } catch (error) {
  //     console.log(error) 
  //   } 
  // }
}
