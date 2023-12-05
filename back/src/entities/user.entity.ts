import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Contact from "./contacts";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 60 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 11 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  date: string;

  @OneToMany(() => Contact, (contact) => contact.user, { onDelete: "CASCADE"})
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if (!hasRounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}
export default User;
