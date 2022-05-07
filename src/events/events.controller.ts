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
import { CreateEventDTO } from 'src/create-event.dto';

@Controller('events')
export class EventsController {
  mockData = [
    { id: 1, name: 'Event 1', description: 'Evento de teste 1' },
    { id: 2, name: 'Event 2', description: 'Evento de teste 2' },
  ];

  @Get()
  findAll() {
    return this.mockData;
  }
  @Get(':id')
  findOne(@Param('id') id) {
    const res = this.mockData.find((x) => x.id == id);
    return res ? res : { error: 'Evento não encontrado' };
  }
  @Post()
  create(@Body() input : CreateEventDTO) {
    return input;
  }
  @Patch(':id')
  update(@Param('id') id: number, @Body() input) {
    return input;
  }
  @Delete()
  @HttpCode(204)
  remove() {
    return;
  }
}
