import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/repo (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/repo?limit=10&language=js&date=2022-01-04')
      .expect(200)

    const { body } = response;
    expect(body).toBeInstanceOf(Array);
    for (let item of body) {
      // Check every item in the array is a Repository object.
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('node_id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('full_name');
      expect(item).toHaveProperty('private');
      expect(item).toHaveProperty('owner');
      expect(item).toHaveProperty('html_url');
      expect(item).toHaveProperty('description');
      expect(item).toHaveProperty('fork');
      expect(item).toHaveProperty('url');
      expect(item).toHaveProperty('forks_url');
      expect(item).toHaveProperty('keys_url');
      expect(item).toHaveProperty('collaborators_url');
      expect(item).toHaveProperty('teams_url');
      expect(item).toHaveProperty('hooks_url');
      expect(item).toHaveProperty('issue_events_url');
      expect(item).toHaveProperty('events_url');
      expect(item).toHaveProperty('assignees_url');
      expect(item).toHaveProperty('branches_url');
      expect(item).toHaveProperty('tags_url');
      expect(item).toHaveProperty('blobs_url');
      expect(item).toHaveProperty('git_tags_url');
      expect(item).toHaveProperty('git_refs_url');
      expect(item).toHaveProperty('trees_url');
      expect(item).toHaveProperty('statuses_url');
      expect(item).toHaveProperty('languages_url');
      expect(item).toHaveProperty('stargazers_url');
      expect(item).toHaveProperty('contributors_url');
      expect(item).toHaveProperty('subscribers_url');
      expect(item).toHaveProperty('subscription_url');
      expect(item).toHaveProperty('commits_url');
      expect(item).toHaveProperty('git_commits_url');
      expect(item).toHaveProperty('comments_url');
      expect(item).toHaveProperty('issue_comment_url');
      expect(item).toHaveProperty('contents_url');
      expect(item).toHaveProperty('compare_url');
      expect(item).toHaveProperty('merges_url');
      expect(item).toHaveProperty('archive_url');
      expect(item).toHaveProperty('downloads_url');
      expect(item).toHaveProperty('issues_url');
      expect(item).toHaveProperty('pulls_url');
      expect(item).toHaveProperty('milestones_url');
      expect(item).toHaveProperty('notifications_url');
      expect(item).toHaveProperty('labels_url');
      expect(item).toHaveProperty('releases_url');
      expect(item).toHaveProperty('deployments_url');
      expect(item).toHaveProperty('created_at');
      expect(item).toHaveProperty('updated_at');
      expect(item).toHaveProperty('pushed_at');
      expect(item).toHaveProperty('git_url');
      expect(item).toHaveProperty('ssh_url');
      expect(item).toHaveProperty('clone_url');
      expect(item).toHaveProperty('svn_url');
      expect(item).toHaveProperty('homepage');
      expect(item).toHaveProperty('size');
      expect(item).toHaveProperty('stargazers_count');
      expect(item).toHaveProperty('watchers_count');
      expect(item).toHaveProperty('language');
      expect(item).toHaveProperty('has_issues');
      expect(item).toHaveProperty('has_projects');
      expect(item).toHaveProperty('has_downloads');
      expect(item).toHaveProperty('has_wiki');
      expect(item).toHaveProperty('has_pages');
      expect(item).toHaveProperty('forks_count');
      expect(item).toHaveProperty('mirror_url');
      expect(item).toHaveProperty('archived');
      expect(item).toHaveProperty('disabled');
      expect(item).toHaveProperty('open_issues_count');
      expect(item).toHaveProperty('license');
      expect(item).toHaveProperty('allow_forking');
      expect(item).toHaveProperty('is_template');
      expect(item).toHaveProperty('web_commit_signoff_required');
      expect(item).toHaveProperty('topics');
      expect(item).toHaveProperty('visibility');
      expect(item).toHaveProperty('forks');
      expect(item).toHaveProperty('open_issues');
      expect(item).toHaveProperty('watchers');
      expect(item).toHaveProperty('default_branch');
      expect(item).toHaveProperty('score');
    }
  })
});
