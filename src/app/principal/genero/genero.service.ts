import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Autor} from "../../model/autor";
import {Genero} from "../../model/genero";

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private readonly API_BACK = "http://localhost:8080/bib/genero"

  constructor(private http: HttpClient) { }

  listar(): Observable<Genero[]>{
    return this.http.get<Genero[]>(this.API_BACK+'/generos');
  }

  cadastrar(genero: Genero): Observable<Genero>{
    if(genero.id_gen){
      return this.http.put<Genero>(this.API_BACK+'/editar', genero);
    }
    else{
      return this.http.post<Genero>(this.API_BACK+'/save', genero);
    }
  }
  excluir(id:number){
    return this.http.delete(this.API_BACK+'/delete/'+id);
  }
}
