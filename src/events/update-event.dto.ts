import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDTO } from './create-event.dto';

export class UpdateEventDTO extends PartialType(CreateEventDTO) {}
