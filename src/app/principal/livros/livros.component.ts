import { Livro } from './../../model/livro';
import { NgForm } from '@angular/forms';
import { LivrosService } from './livros.service';
import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/model/autor';
import {ClienteService} from "../cliente/cliente.service";
import {Genero} from "../../model/genero";
import {Editora} from "../../model/editora";
import {GeneroService} from "../genero/genero.service";
import {EditoraService} from "../editora/editora.service";

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

  autores: Autor[] = [];
  generos:Genero[]=[];
  editoras:Editora[]=[];


  livros: Livro[] = [];


  constructor(private service: LivrosService, private serviceautor: ClienteService, private generoService:GeneroService, private editoraservice:
  EditoraService) {

  }

  ngOnInit(): void {
    this.listar();

  }

  private listar(): void {
    this.service.listar().subscribe((dados) => {
      console.log(dados);
      this.livros = dados;
    });
    this.generoService.listar().subscribe((dados) => {
      this.generos = dados;
    })
    this.editoraservice.listar().subscribe((dados) => {
      this.editoras = dados;
    })
  }

  cadastrar(): void{
    console.log('botão clicado');
  }

  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();

      this.livros = this.livros.filter(a =>
            a.nome_livro.toUpperCase().indexOf(palavraChave) >= 0
        );
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
