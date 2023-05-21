import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private service: LoginService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuario_logado = this.service.usuario_logado();

    if(!usuario_logado){
      if (state.url.endsWith('login')){
        return true;
      }
      this.router.navigate(['login'])
    }
    else {
      if (state.url.endsWith('login')){
        this.router.navigate(['principal'])
      }
    }

    return true;
  }
}
