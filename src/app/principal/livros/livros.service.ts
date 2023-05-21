import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Livro} from "../../model/livro";
import {HttpClient} from "@angular/common/http";
import {Autor} from "../../model/autor";
import {Editora} from "../../model/editora";

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API_BACK = "http://localhost:8080/bib/livro"

  constructor(private http: HttpClient) { }

  listar(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.API_BACK+'/livros');
  }

  cadastrar(livro: Livro): Observable<Livro>{
    if(livro.id_liv){
      return this.http.put<Livro>(this.API_BACK+'/editar', livro);
    }else{
      return this.http.post<Livro>(this.API_BACK+'/save', livro);
    }

  }
  excluir(id:number){
    return this.http.delete(this.API_BACK+'/delete/'+id);
  }
}
