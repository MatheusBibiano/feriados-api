import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './modules/logger/logger.module';
import { HealthCheckModule } from './modules/health-check/health-check.module';
import { HolidaysModule } from './modules/holidays/holidays.module';

@Module({
  imports: [
    HttpModule,
    LoggerModule,
    HolidaysModule,
    HealthCheckModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development.local',
    }),
  ],
  controllers: [],
})
export class AppModule {}
