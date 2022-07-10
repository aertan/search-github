import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { Repository } from '../models/repository.model';
import { GithubResponse } from 'src/models/github-response.model';

@Injectable()
export class RepoService {
    constructor(private readonly http: HttpService) { }
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
                accept: 'application/vnd.github+json'
            },
            params: {
                q: query,
                sort: 'stars',
                order: 'desc',
                per_page: limit,
            }
        };
        const { data } = await firstValueFrom(this.http.get('https://api.github.com/search/repositories', options));
        const responseData: GithubResponse = data;
        responseData.items.sort((a, b) => { if (a.stargazers_count >= b.stargazers_count) { return -1 } else { return 1 } });
        return responseData.items;
    }
}
