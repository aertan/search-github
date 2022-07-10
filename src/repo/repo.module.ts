import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { RepoController } from './repo.controller';
import { RepoService } from './repo.service';

import { AppConfigService } from '../app-config/app-config.service';

@Module({
  imports: [HttpModule],
  controllers: [RepoController],
  providers: [AppConfigService, ConfigService, RepoService]
})
export class RepoModule { }
