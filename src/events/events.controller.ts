import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {
    return 'FindAll called successfully';
  }
  @Get(':id')
  findOne(@Param('id') id) {
    return id;
  }
  @Post()
  create() {
    return 'Create called successfully';
  }
  @Patch()
  update() {
    return 'Update called successfully';
  }
  @Delete()
  remove() {
    return 'Remove called successfully';
  }
}
