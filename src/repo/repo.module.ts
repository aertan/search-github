import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { RepoController } from './repo.controller';
import { RepoService } from './repo.service';

@Module({
  imports: [HttpModule],
  controllers: [RepoController],
  providers: [RepoService]
})
export class RepoModule { }
