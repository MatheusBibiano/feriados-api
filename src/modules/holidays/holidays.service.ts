import { Injectable } from '@nestjs/common';
import { IHoliday } from './interfaces/holiday.interface';

@Injectable()
export class HolidaysService {
  findMany(): IHoliday[] {
    return [{ date: '01/01/2025', name: 'Ano novo', type: 'nacional' }];
  }
}
