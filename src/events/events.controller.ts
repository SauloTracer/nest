import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { CreateEventDTO } from './create-event.dto';
import { UpdateEventDTO } from './update-event.dto';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {
  private events: Event[] = [];

  @Get()
  findAll() {
    return this.events;
  }
  @Get(':id')
  findOne(@Param('id') id) {
    const res = this.events.find((x) => x.id === parseInt(id));
    return res ? res : { error: 'Evento não encontrado' };
  }
  @Post()
  create(@Body() input: CreateEventDTO) {
    const event = {
      ...input,
      when: new Date(input.when),
      id: this.events.reduce((t, event) => (t = Math.max(t, event.id)), 0) + 1,
    };
    this.events.push(event);
    return event;
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() input: UpdateEventDTO) {
    const index = this.events.findIndex((event) => event.id === id);

    this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when,
    };

    return this.events[index];
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    this.events = this.events.filter((event) => event.id !== parseInt(id));
  }
}
