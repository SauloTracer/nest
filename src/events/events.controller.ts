import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseIntPipe,
  ValidationPipe,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateEventDTO } from './create-event.dto';
import { UpdateEventDTO } from './update-event.dto';
import { Event } from './event.entity';
import { Like, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('events')
export class EventsController {
  private readonly logger = new Logger(EventsController.name);
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}
  @Get()
  async findAll() {
    this.logger.debug('Hit the findAll endpoint');
    const events = await this.repository.find();
    this.logger.log(`Retrieved ${events.length} events`);
    return events;
  }
  @Get('search')
  async practice() {
    return await this.repository.find({
      select: ['id', 'name', 'when'],
      where: [
        {
          id: MoreThanOrEqual(3),
          when: MoreThan(new Date('2021-02-12T13:00:00')),
        },
        {
          description: Like('%meet%'),
        },
      ],
      take: 3,
      order: {
        id: 'DESC',
      },
    });
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const event = await this.repository.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    return event;
  }
  @Post()
  async create(@Body(ValidationPipe) input: CreateEventDTO) {
    return await this.repository.save({
      ...input,
      when: new Date(input.when),
    });
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() input: UpdateEventDTO,
  ) {
    const event = await this.repository.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    return await this.repository.save({
      ...event,
      ...input,
      when: input?.when ? new Date(input?.when) : event.when || null,
    });
  }
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number) {
    const event = await this.repository.findOne(id);

    if (!event) {
      throw new NotFoundException();
    }

    await this.repository.remove(event);
  }
}
