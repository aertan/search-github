import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { AppConfigService } from 'src/app-config/app-config.service';

import { Repository } from '../models/repository.model';
import { GithubResponse } from 'src/models/github-response.model';

@Injectable()
export class RepoService {

    // Dependency injection
    constructor(private readonly http: HttpService,
        private readonly appConfigService: AppConfigService) { }

    /**
     * Gets a list of most popular repositories on GitHub, sorted by number of stars
     * Could be filtered by language and created date. Also, results could be limited
     * @param limit {Number}
     * @param date {String}
     * @param lang {String}
     * @returns Promise<Repository[]>
     */
    async getFilteredRepos(limit: Number, date: String, lang: String): Promise<Repository[]> {

        let query = '';
        if (date) {
            query += `created:>=${date}`;
        }
        if (lang) {
            query += ` language:${lang}`
        }

        const options = {
            headers: {
                accept: this.appConfigService.getAcceptedHeader().toString()
            },
            params: {
                q: query,
                sort: this.appConfigService.getSortCriteria(),
                order: this.appConfigService.getOrderDirection(),
                per_page: limit,
            }
        };
        const url = this.appConfigService.getSearchUrl()
        const { data } = await firstValueFrom(this.http.get(url.toString(), options));
        const responseData: GithubResponse = data;
        responseData.items.sort((a, b) => { if (a.stargazers_count >= b.stargazers_count) { return -1 } else { return 1 } });
        return responseData.items;
    }
}
