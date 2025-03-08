import { Controller, Get } from '@nestjs/common';
import { HolidaysService } from './holidays.service';

@Controller('feriados')
export class HolidaysController {
  constructor(private readonly holidaysService: HolidaysService) {}

  @Get()
  async findMany() {
    return this.holidaysService.findMany();
  }
}
