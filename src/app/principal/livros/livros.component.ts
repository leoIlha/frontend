import { Livro } from './../../model/livro';
import { NgForm } from '@angular/forms';
import { LivrosService } from './livros.service';
import { Component, OnInit } from '@angular/core';
import { Venda } from '../../model/Venda';
import {ClienteService} from "../cliente/cliente.service";
import {Genero} from "../../model/genero";
import {Editora} from "../../model/editora";
import {RelatoriosService} from "../relatorios/relatorios.service";
import {CarrinhoService} from "../carrinho/carrinho.service";

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  livro: Livro = new Livro;
  numaux:number=0;
  levarnhtml:number=0;

  filtro: string = '';

  autores: Venda[] = [];
  generos:Genero[]=[];
  editoras:Editora[]=[];

  livrospegos: Livro[] = [];

  livros: Livro[] = [];


  constructor(private service: LivrosService, private serviceautor: ClienteService, private generoService:RelatoriosService, private editoraservice:
  CarrinhoService) {

  }

  ngOnInit(): void {
    this.listar();

  }

  private listar(): void {
    this.service.listar().subscribe((dados) => {
      console.log(dados);
      this.livros = dados;
    });
  }

  cadastrar(): void{
    console.log('botão clicado');
  }

  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();

      this.livros = this.livros.filter(a =>
            a.nome_livro.toUpperCase().indexOf(palavraChave) >= 0 ||
            a.autor.toUpperCase().indexOf(palavraChave) >= 0 ||
            a.editora.toUpperCase().indexOf(palavraChave) >= 0 ||
            a.genero.toUpperCase().indexOf(palavraChave) >= 0
          //  a.data_lanc.toDateString().indexOf(palavraChave) >= 0
      );
      console.log(this.livros);
    }
    else{
      this.listar();
    }
  }

  saveLivro(form: NgForm){
    this.service.cadastrar(this.livro).subscribe(
      () => {
        this.listar();
        form.resetForm();
      }
    )
    console.log(this.livro.nome_livro)
  }

  editLivro(livro: Livro){
    console.log("livro component:"+livro.id_liv)
    this.livro= { ...livro};
   this.numaux=1
  }

  excluirLivro(id: number): void{
    this.service.excluir(id).subscribe(()=>{this.listar()})
  }

  // adicionarcar(livro:Livro):void{
  //   console.log("operação carrinho:"+livro.nome_livro)
  //   console.log("operação carrinho:"+livro.preco)
  //   this.service.setNome_livro(livro.nome_livro)
  //   this.service.setPreco(livro.preco)
  // }

  adicionarcar(livro:Livro):void{
    console.log("operação carrinho:"+livro.nome_livro)
    console.log("operação carrinho:"+livro.preco)
  //  livro.quantidade=1
    this.livrospegos.push(livro)
    console.log("livros selecionados"+this.livrospegos)
   // this.service.setNome_livro(livro.nome_livro)
   // this.service.setPreco(livro.preco)
    for (let i = 0; i < this.livrospegos.length; i++) {
      console.log("Livro selecionado " + (i+1) + ":");
      console.log(JSON.stringify(this.livrospegos[i], null, 2));
    }
    this.service.adicionarLivro(livro);
  }

  adicionarEstoque(n:number){
    console.log("botao clicado")
    console.log("novo valor:"+n)
    this.livro.estoque_liv+=n
    console.log(this.livro.estoque_liv)
  }
  removerEstoque(n:number){
    console.log("botao clicado")
    console.log("novo valor:"+n)
    this.livro.estoque_liv-=n
    console.log(this.livro.estoque_liv)

  }

}
