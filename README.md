GitHub Repository Listing App by Ahmet Ertan

This project is built on NestJS.


GETTING THE PROJECT RUNINNG

After cloning the repo, in order to run the project, you first need to install the Node dependencies with:

cd directory_of_project
npm install

After installation, you can get the project running with the command
npm run start

Project will be running on your port 3000.

Afterwards, you can call the endpoint (GET) http://localhost:3000/repo to get the repository list. There are 3 possible query parameters:

limit (required and must be either 10, 50, or 100): The number of repositories you want to see on the response.
date (optional and in YYYY-MM-DD format): The date you want the repositories' minimum created date. If not provided, this will be determined as the value in .env file.
language (optional): the programming language you want to list the repositories are written in.

Example form of request: http://localhost:3000/repo?limit=10&language=js&date=2022-07-01

TESTS

Also, you can run unit tests by:
npm run test

and the end-to-end tests by:
npm run test:e2e