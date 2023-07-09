import { Permissao } from "./permissao";

export class Cliente{

  id_cli!: number| undefined;
  cpf!: string | undefined;
  nome_cliente!: string | undefined | any;
  email_cliente!: string | undefined;
  telefone_cliente!: string | undefined;
  totaldecompras!: number;


  /*constructor(id?: number, nome?: string, email?: string, senha?: string, permissao?: Permissao) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.permissao = permissao;
  }*/

/*
  constructor(private _id?: string, private _nome?: string, private _endereco?: string, private _ativo? : boolean) {

  }

  get nome(): string{
    return this._nome!;
  }

  set nome(nome : string){
    this._nome = nome;
  }


  get id(): string {
    return this._id!;
  }

  set id(value: string) {
    this._id = value;
  }

  get endereco(): string {
    return this._endereco!;
  }

  set endereco(value: string) {
    this._endereco = value;
  }


  get ativo(): boolean {
    return this._ativo!;
  }

  set ativo(value: boolean) {
    this._ativo = value;
  }*/
}
