import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { RepoController } from './repo.controller';

import { AppConfigService } from '../app-config/app-config.service';
import { RepoService } from './repo.service';

import { Repository } from '../models/repository.model';
import { InputDto } from 'src/models/input-dto.model';

describe('RepoController', () => {
  let controller: RepoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [RepoController],
      providers: [AppConfigService, ConfigService, RepoService],
    }).compile();

    controller = module.get<RepoController>(RepoController);
  });

  describe('getRepos', () => {
    it('should return the Repository array after fetching from GitHub', () => {
      const result: Repository[] = [{
        id: 510425332,
        node_id: "R_kgDOHmx49A",
        name: "pancakeswap-prediction-bot-improved",
        full_name: "cryptobeast2/pancakeswap-prediction-bot-improved",
        private: false,
        owner: {
          login: "cryptobeast2",
          id: 108686411,
          node_id: "U_kgDOBnpsSw",
          avatar_url: "https://avatars.githubusercontent.com/u/108686411?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cryptobeast2",
          html_url: "https://github.com/cryptobeast2",
          followers_url: "https://api.github.com/users/cryptobeast2/followers",
          following_url: "https://api.github.com/users/cryptobeast2/following{/other_user}",
          gists_url: "https://api.github.com/users/cryptobeast2/gists{/gist_id}",
          starred_url: "https://api.github.com/users/cryptobeast2/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/cryptobeast2/subscriptions",
          organizations_url: "https://api.github.com/users/cryptobeast2/orgs",
          repos_url: "https://api.github.com/users/cryptobeast2/repos",
          events_url: "https://api.github.com/users/cryptobeast2/events{/privacy}",
          received_events_url: "https://api.github.com/users/cryptobeast2/received_events",
          type: "User",
          site_admin: false
        },
        html_url: "https://github.com/cryptobeast2/pancakeswap-prediction-bot-improved",
        description: "V2.0 🚀 AI Driven PancakeSwap Prediction Bot🔮",
        fork: false,
        url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved",
        forks_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/forks",
        keys_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/keys{/key_id}",
        collaborators_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/teams",
        hooks_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/hooks",
        issue_events_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/issues/events{/number}",
        events_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/events",
        assignees_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/assignees{/user}",
        branches_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/branches{/branch}",
        tags_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/tags",
        blobs_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/statuses/{sha}",
        languages_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/languages",
        stargazers_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/stargazers",
        contributors_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/contributors",
        subscribers_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/subscribers",
        subscription_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/subscription",
        commits_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/commits{/sha}",
        git_commits_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/git/commits{/sha}",
        comments_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/comments{/number}",
        issue_comment_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/contents/{+path}",
        compare_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/merges",
        archive_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/downloads",
        issues_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/issues{/number}",
        pulls_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/pulls{/number}",
        milestones_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/milestones{/number}",
        notifications_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/labels{/name}",
        releases_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/releases{/id}",
        deployments_url: "https://api.github.com/repos/cryptobeast2/pancakeswap-prediction-bot-improved/deployments",
        created_at: "2022-07-04T16:11:43Z",
        updated_at: "2022-07-08T17:12:44Z",
        pushed_at: "2022-07-04T16:35:56Z",
        git_url: "git://github.com/cryptobeast2/pancakeswap-prediction-bot-improved.git",
        ssh_url: "git@github.com:cryptobeast2/pancakeswap-prediction-bot-improved.git",
        clone_url: "https://github.com/cryptobeast2/pancakeswap-prediction-bot-improved.git",
        svn_url: "https://github.com/cryptobeast2/pancakeswap-prediction-bot-improved",
        homepage: "",
        size: 647,
        stargazers_count: 187,
        watchers_count: 187,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 2,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "ai-bot",
          "binance",
          "blockchain",
          "bnb",
          "bsc",
          "pancakeswap",
          "pancakeswap-prediction",
          "pancakeswap-prediction-winner",
          "prediction-bot",
          "web3"
        ],
        visibility: "public",
        forks: 2,
        open_issues: 0,
        watchers: 187,
        default_branch: "main",
        score: 1
      }];

      const input: InputDto = {
        limit: 10,
        language: 'ts',
        date: '2022-06-22',
      }

      jest.spyOn(controller, 'getRepos').mockResolvedValue(result);
      expect(controller.getRepos(input)).resolves.toBe(result);
    });
  });
});
