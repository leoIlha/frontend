import { Injectable } from '@angular/core';
import {Funcionario} from "../model/funcionario";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {HomeComponent} from "../home/home.component";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly url = 'http://localhost:8080/bib/funcionario';
  private readonly USUARIO_LOGADO = 'usuario-logado';


  constructor(private http: HttpClient, private  router: Router) { }

  login(funcionario: Funcionario): Observable<Funcionario>{
    return  this.http.post<Funcionario>(this.url + '/login', funcionario)
  }

  setarUsuarioLogado(funcionario: Funcionario): void{
    sessionStorage.setItem(this.USUARIO_LOGADO, JSON.stringify(funcionario));
  }

  logout():void{
    sessionStorage.removeItem(this.USUARIO_LOGADO);
    this.router.navigate(['/login']);

  }

  usuario_logado(): Funcionario{
    return JSON.parse(<string>sessionStorage.getItem(this.USUARIO_LOGADO));
  }

  private cargo!:string | undefined | any;

  setCargo(cargo: any) {
    this.cargo = cargo;
    console.log("kk"+cargo)
  }

  getCargo() {
    return this.cargo;
  }
}
