import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attendee } from "./attendee.entity";

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  name: string;
  @Column()
  description: string;
  @Column({name: 'when_date'})
  when: Date;
  @Column()
  address: string;
  @OneToMany(() => Attendee, (attendee) => attendee.event)
  attendees: Attendee[];
}