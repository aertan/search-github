import { Repository } from './repository.model';

export class GithubResponse {
    total_count: Number;
    incomplete_results: Boolean;
    items: Repository[];
}