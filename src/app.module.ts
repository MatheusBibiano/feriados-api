import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { FlowsModule } from './modules/flows/flows.module';
import { LoggerModule } from './modules/logger/logger.module';
import { EncryptionModule } from './modules/encryption/encryption.module';
import { HealthCheckModule } from './modules/health-check/health-check.module';

@Module({
  imports: [
    HttpModule,
    FlowsModule,
    LoggerModule,
    EncryptionModule,
    HealthCheckModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development.local',
    }),
  ],
  controllers: [],
})
export class AppModule {}
