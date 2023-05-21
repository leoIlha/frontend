import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Autor} from "../../model/autor";
import {Cliente} from "../../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly API_BACK = "http://localhost:8080/bib/cliente"

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API_BACK+'/clientes');
  }

  cadastrar(cliente: Cliente): Observable<Autor>{
    if(cliente.id_cli){
      return this.http.put<Autor>(this.API_BACK+'/editar', cliente);
    }
    else{
      return this.http.post<Autor>(this.API_BACK+'/save', cliente);
    }
  }
  excluir(id_cli:number){
    return this.http.delete(this.API_BACK+'/delete/'+id_cli);
  }

}
