import { Controller, Get, Query } from '@nestjs/common';

import { AppConfigService } from 'src/app-config/app-config.service';
import { RepoService } from './repo.service';

import { InputDto } from '../models/input-dto.model';
import { Repository } from '../models/repository.model';


@Controller('repo')
export class RepoController {
    constructor(private readonly repoService: RepoService,
        private readonly appConfigService: AppConfigService) { }

    /**
     * Returns the repositories called by GET /repo
     * @param query InputDto
     * @returns Promise<Repository[]>
     */
    @Get()
    async getRepos(@Query() query: InputDto): Promise<Repository[]> {

        // Matching the query input to constants to be used in the function.
        // Query is a must-have for GitHub search and language is an optional value.
        // Therefore if date is not provided, set it to default date from config.
        const limit: Number = query.limit;
        const date: String = query.date || this.appConfigService.getDefaultDate();
        const lang: String = query.language;

        // Call and return the value from getFilteredRepos from RepoService
        return await this.repoService.getFilteredRepos(limit, date, lang);
    }
}
