export class Venda{
  id_venda!: number;
  valor_total_venda!: number;
  data_venda!:Date;
  forma_pagamento!: string;
  id_liv!: number;
  id_cli!: number | undefined;
  quantidade!: number;
  email!: string;
}

