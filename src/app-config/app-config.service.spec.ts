import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

import { AppConfigService } from './app-config.service';

describe('AppConfigService', () => {
  let service: AppConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppConfigService, ConfigService],
    }).compile();

    service = module.get<AppConfigService>(AppConfigService);
  });

  describe('getAcceptedHeader', () => {
    it('should return the ACCEPTED_HEADER value from config', () => {
      const result = 'application/vnd.github+json';

      jest.spyOn(service, 'getAcceptedHeader').mockImplementation(() => result);

      expect(service.getAcceptedHeader()).toBe(result);
    });
  });

  describe('getDefaultDate', () => {
    it('should return the DEFAULT_DATE value from config', () => {
      const result = '2000-01-01';

      jest.spyOn(service, 'getDefaultDate').mockImplementation(() => result);

      expect(service.getDefaultDate()).toBe(result);
    });
  });

  describe('getOrderDirection', () => {
    it('should return the ORDER_DIRECTION value from config', () => {
      const result = 'desc';

      jest.spyOn(service, 'getOrderDirection').mockImplementation(() => result);

      expect(service.getOrderDirection()).toBe(result);
    });
  });

  describe('getSearchUrl', () => {
    it('should return the SEARCH_URL value from config', () => {
      const result = 'https://api.github.com/search/repositories';

      jest.spyOn(service, 'getSearchUrl').mockImplementation(() => result);

      expect(service.getSearchUrl()).toBe(result);
    });
  });

  describe('getSortCriteria', () => {
    it('should return the SORT value from config', () => {
      const result = 'stars';

      jest.spyOn(service, 'getSortCriteria').mockImplementation(() => result);

      expect(service.getSortCriteria()).toBe(result);
    });
  });

});
