import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Autor} from "../../model/autor";
import {Editora} from "../../model/editora";

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  private readonly API_BACK = "http://localhost:8080/bib/editora"

  constructor(private http: HttpClient) { }

  listar(): Observable<Editora[]>{
    return this.http.get<Editora[]>(this.API_BACK+'/editoras');
  }

  cadastrar(editora: Editora): Observable<Editora>{
    if(editora.id_edit){
      return this.http.put<Editora>(this.API_BACK+'/editar', editora);
    }
    else{
      return this.http.post<Editora>(this.API_BACK+'/save', editora);
    }
  }
  excluir(id:number){
    return this.http.delete(this.API_BACK+'/delete/'+id);
  }
}
