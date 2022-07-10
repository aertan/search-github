import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepoModule } from './repo/repo.module';

@Module({
  imports: [RepoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
