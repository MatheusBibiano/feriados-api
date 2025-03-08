import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { HolidayType } from '../types/holiday-type.type';

export class HolidayDto {
  @IsDate()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: HolidayType;
}
