import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdministradorService } from '../servicios/administrador.service';


@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  identity: any;

  constructor(
    private _administradorService: AdministradorService,
    private router: Router
  ) {}
  
  canActivate() {

    this.identity = this._administradorService.getIdentity();  

    for(let i in this.identity) {

      if(this.identity[i].usuario === 'admin' || this.identity[i].usuario === 'jesus') {

        return true;

      } else {

        this.router.navigate(['/login']);

        return false;

      }

    }

  }
  
}
