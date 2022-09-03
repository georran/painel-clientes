import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "src/cliente/entities/cliente.entity";

@Entity()
export class NumeroServico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  identificador: number;

  @Column()
  ntipo: string;

  @ManyToOne(() => Cliente, cliente => cliente.numero, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  cliente: Cliente;
}
