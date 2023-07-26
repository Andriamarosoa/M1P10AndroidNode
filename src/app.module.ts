import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { databaseConfigValidator } from './config/database.config';

@Module({
  imports: [
    UserModule,
    EventModule,
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: databaseConfigValidator,
      envFilePath: ['.env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
