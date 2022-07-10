import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepoModule } from './repo/repo.module';
import { AppConfigService } from './app-config/app-config.service';

@Module({
  imports: [ConfigModule.forRoot(), RepoModule],
  controllers: [AppController],
  providers: [AppService, AppConfigService],
})
export class AppModule { }
