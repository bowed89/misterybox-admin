import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    usuario: 'jesus',
    password: 'jesus'
  } 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm) {


    if (loginForm.value.usuario === 'jesus' && loginForm.value.password === 'jesus') {

      this.router.navigate(['listado']);
    
  } else {
    console.log('error')
  }

}

}
