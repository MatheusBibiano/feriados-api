import { HolidayType } from '../types/holiday-type.type';

export interface IHoliday {
  date: string;
  name: string;
  type: HolidayType;
}
