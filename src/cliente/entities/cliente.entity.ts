import { NumeroServico } from "./../../numero-servico/entities/numero-servico.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  empresa: string;

  @Column()
  mensalidade: number;

  @Column()
  versao: number;

  @Column()
  dataImplatancao: Date;

  @Column({ nullable: true })
  observacoes: string;

  @Column({ default: true })
  whatsapp: boolean;

  @Column({ default: false })
  telefone: boolean;

  @OneToMany(() => NumeroServico, numero => numero.cliente, { cascade: true })
  @JoinColumn({ name: "num_id" })
  numero: NumeroServico[];
}
