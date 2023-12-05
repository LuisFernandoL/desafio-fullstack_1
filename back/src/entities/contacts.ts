import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 60 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 11 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  date: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}
export default Contact;
