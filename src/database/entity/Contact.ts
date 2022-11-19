import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Min, Max } from "class-validator";
import { Person } from "./Person";

enum ContactType {
  Telephone,
  Email,
  Whatsapp,
}

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("int")
  @Min(1)
  @Max(3)
  contactType!: ContactType;

  @Column({ unique: true })
  contact!: string;

  @ManyToOne(() => Person, (person) => person.contacts, {
    nullable: false,
    onDelete: "CASCADE",
  })
  person!: Person;
}
