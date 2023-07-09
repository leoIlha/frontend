import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Editora} from "../../model/editora";
import {Livro} from "../../model/livro";
import {Venda} from "../../model/Venda";
import {Cliente} from "../../model/cliente";

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private readonly API_BACK = "http://localhost:8080/bib/carrinho"
  private readonly api_cli = "http://localhost:8080/bib/carrinho/cli"

  constructor(private http: HttpClient) { }

  listar(): Observable<Venda[]>{
    return this.http.get<Venda[]>(this.API_BACK+'/carrinhos');
  }

  enviarDadosVenda(venda: Venda): Observable<Venda> {
    console.log("CARRINHO service")
    console.log("FORMA DE PAG:"+ venda.forma_pagamento);
    console.log("TOTAL"+venda.valor_total_venda)
    console.log("CLIENTE:"+venda.id_cli)
    console.log("id_liv:"+venda.id_liv)
    console.log("quantidade:"+venda.quantidade)

    return this.http.post<Venda>(this.API_BACK+'/save', venda);
  }

  // enviarDadosClientes(cliente: Cliente): void {
  //   console.log("CARRINHO SERVICE CLIENTES:"+ cliente.nome_cliente); console.log(cliente.cpf)
  // }
  //
  // enviarDadosLivros(livro: Livro): void {
  //   console.log("CARRINHO SERVICE LIVROS:"+ livro.nome_livro); console.log(livro.preco),console.log(livro.quantidade)
  // }

  listarltodosclientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.api_cli);
  }


}
