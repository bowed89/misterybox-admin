import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministradorService } from '../../servicios/administrador.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  administrador : any;

  public user = {
    usuario: '',
    password: ''
  } 

  constructor(
    private _administradorService: AdministradorService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(loginForm) {



     this._administradorService.filtrarAdmin(loginForm.value.usuario, loginForm.value.password).subscribe(resp => {

      this.administrador = resp.map(e => {

        return {

          usuario: e.payload.doc.data()['usuario'],
          password: e.payload.doc.data()['password'],

        }


      })

      localStorage.setItem('usuario', JSON.stringify(this.administrador));


        if (Object.keys(resp).length > 0) {

          Swal.fire({
            icon: 'success',
            title: 'Bienvenido!',
            text: 'Bienvenido al listado de clientes',
          })
          

          this.router.navigate(['listado']);


        } else {

          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Por favor verifique el usuario y contraseña',
          })

        }


    })
 

}

}
