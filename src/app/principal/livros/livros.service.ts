import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Livro} from "../../model/livro";
import {HttpClient} from "@angular/common/http";
import {Venda} from "../../model/Venda";
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
      console.log("sdufhwkjygfluhjkflhjkblhjkblhjkb:"+livro.preco)
      return this.http.post<Livro>(this.API_BACK+'/save', livro);
    }

  }
  excluir(id:number){
    return this.http.delete(this.API_BACK+'/delete/'+id);
  }

  private nome!:string | undefined | any;
  private preco!:number | undefined | any;

  setNome_livro(nome: any) {
    this.nome = nome;
    console.log("kk"+nome)
  }

  getNome_livro() {
    return this.nome;
  }

  setPreco(preco: any) {
    this.preco = preco;
    console.log("kk"+preco)
  }

  getPreco() {
    return this.preco;
  }

  livrospegos: Livro[] = [];

  adicionarLivro(livro: Livro): void {
    this.livrospegos.push(livro);
    console.log("aa"+this.livrospegos)
  }

  getLivrosPegos(): Livro[] {
    return this.livrospegos;
  }


}
