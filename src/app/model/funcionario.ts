export class Funcionario{
  id_func!: number| undefined;
  nome_funcionario!: string | undefined;
  salario!: number | undefined;
  telefone!: string | undefined;
  email: string | undefined;
  cargo!:string| undefined;
  senha!: string | undefined;
  token!: boolean | undefined;
  totalvendas!: number;
  constructor(nome_funcionario?: string, salario?: number, telefone?: string,email?:string ,cargo?:string,senha?:string,token?: boolean) {
    this.nome_funcionario = nome_funcionario;
    this.salario = salario;
    this.telefone = this.telefone;
    this.email=this.email;
    this.cargo=this.cargo;
    this.senha=this.senha;
    this.token = token;
  }




}
