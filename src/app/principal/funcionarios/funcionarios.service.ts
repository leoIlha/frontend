import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Cliente} from "../../model/cliente";
import {Funcionario} from "../../model/funcionario";
import {Genero} from "../../model/genero";

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API_BACK = 'http://localhost:8080/bib/funcionario';
/*
* é necessário injetar o HttpClientModule no módulo ...
* */
  constructor(private http: HttpClient) { }

  listar(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API_BACK+'/funcionarios');
  }

  cadastrar(funcionario:Funcionario): Observable<Funcionario>{
    console.log("funcionario service "+funcionario.nome_funcionario)

  if(funcionario.id_func){
     return this.http.put<Funcionario>(this.API_BACK+'/editar', funcionario);
   }else{
     return this.http.post<Funcionario>(this.API_BACK+'/save', funcionario);
   }
    //return this.http.post<Usuario>(this.API_BACK+'/save', usuario);

  }
  excluir(login:string){
    return this.http.delete(this.API_BACK+'/delete/'+login);
  }


}
