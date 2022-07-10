import { Controller, Get, Query } from '@nestjs/common';

import { RepoService } from './repo.service';

import { Repository } from '../models/repository.model';


@Controller('repo')
export class RepoController {
    constructor(private readonly repoService: RepoService) { }

    @Get()
    async getRepos(@Query() query): Promise<Repository[]> {
        const limit: Number = query.limit || 10;
        const date: String = query.date || '2016-01-01';
        const lang: String = query.language;
        return await this.repoService.getFilteredRepos(limit, date, lang);
    }
}
