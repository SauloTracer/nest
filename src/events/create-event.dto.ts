import { IsDateString, IsString, Length } from "class-validator";

export class CreateEventDTO {
  @IsString()
  @Length(3, 255)
  name: string;
  @Length(3, 255)
  description: string;
  @IsDateString()
  when: string;
  @Length(3, 255)
  address: string;
}
