import { Autor } from "./autor";

export class Livro{


  id_liv!: number;
  nome_livro!: string | any;
  autor!: string;
  editora!: string;
  genero!: string;
  num_paginas!:number;
  data_lanc!:Date;
  estoque_liv!: number;

  novoestoq!:number;




  /*constructor(id?: number, nome?: string, autor?: string, ano_publi?: string, num_pag?: string, genero?: string) {
    this.id = id;
    this.nome = nome;
    this.autor = autor;
    this.num_pag = num_pag;
    this.ano_publi = ano_publi;
    this.genero = genero;
  }*/


}
