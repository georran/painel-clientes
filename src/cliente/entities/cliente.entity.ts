import { NumeroServico } from "./../../numero-servico/entities/numero-servico.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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
  dtImplatancao: Date;

  @Column()
  dtFechamento: Date;

  @Column({ nullable: true })
  obs: string;

  @Column({ default: true })
  whatsapp: boolean;

  @Column({ default: false })
  telefone: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => NumeroServico, numero => numero.cliente, { cascade: true })
  @JoinColumn({ name: "num_id" })
  numero: NumeroServico[];
}
