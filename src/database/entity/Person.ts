import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Contact } from "./Contact";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  name!: string;

  @OneToMany(() => Contact, (contact) => contact.person, {
    eager: true,
    onDelete: "CASCADE",
  })
  contacts!: Contact[];
}
