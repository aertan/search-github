import { Controller, Get, Query } from '@nestjs/common';

import { RepoService } from './repo.service';

import { InputDto } from '../models/input-dto.model';
import { Repository } from '../models/repository.model';


@Controller('repo')
export class RepoController {
    constructor(private readonly repoService: RepoService) { }

    @Get()
    async getRepos(@Query() query: InputDto): Promise<Repository[]> {
        const limit: Number = query.limit;
        const date: String = query.date || '2000-01-01';
        const lang: String = query.language;
        return await this.repoService.getFilteredRepos(limit, date, lang);
    }
}
