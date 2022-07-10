import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {

    constructor(private configService: ConfigService) { }

    // Gets the accepted header for the GitHub request
    getAcceptedHeader(): string {
        return this.configService.get<string>('ACCEPTED_HEADER');
    }

    // Gets the default date for search, if not provided
    getDefaultDate(): string {
        return this.configService.get<string>('DEFAULT_DATE');
    }

    // Gets the order direction (ASC or DESC)
    getOrderDirection(): string {
        return this.configService.get<string>('ORDER_DIRECTION');
    }

    // Gets the GitHub's search repository endpoint Base URL
    getSearchUrl(): string {
        return this.configService.get<string>('SEARCH_URL');
    }

    // Gets the sorting criteria for listing repositories
    getSortCriteria(): string {
        return this.configService.get<string>('SORT');
    }

}
