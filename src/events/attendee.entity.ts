import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Attendee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Event, (event) => event.attendees, {
    nullable: false,
  })
  /*
    Se a coluna de relacionamento na outra tabela 
    não for a chave primária, especificamos ela 
    utilizando o decorator abaixo com as propriedade name e referencedColumn.
    name ==> O nome da coluna nessa tabela
    referencedColumn ==> O nome da coluna na tabela de origem
    @JoinColumn({
        name: 'event_id',
        referencedColumn: 'secondary'
    })
    */
  @JoinColumn()
  event: Event;
}
