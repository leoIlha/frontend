import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Genero} from "../../model/genero";
import {Livro} from "../../model/livro";
import {Funcionario} from "../../model/funcionario";
import {Cliente} from "../../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {

  private readonly api_livromaisvendido = "http://localhost:8080/bib/relatorios/livromaisvendido"
  private readonly api_livrosemfalta = "http://localhost:8080/bib/relatorios/livrosemfalta"
  private readonly api_funcmais = "http://localhost:8080/bib/relatorios/funcmais"
  private readonly api_funcmenos = "http://localhost:8080/bib/relatorios/funcmenos"
  private readonly api_cli = "http://localhost:8080/bib/relatorios/cli"

  constructor(private http: HttpClient) { }

  listarlivromaisvendido(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.api_livromaisvendido);
  }

  listarlivrosemfalta(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.api_livrosemfalta);
  }

  listarfuncionariomais(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.api_funcmais);
  }

  listarfuncionariomenos(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.api_funcmenos);
  }
  listarcliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.api_cli);
  }
}
