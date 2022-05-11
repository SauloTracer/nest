import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}