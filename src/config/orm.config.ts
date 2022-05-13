import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Event } from '../events/event.entity';
import { Attendee } from '../events/attendee.entity';

export default (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Event, Attendee],
  synchronize: Boolean(process.env.DATABASE_SYNC), // ambient === dev
});
