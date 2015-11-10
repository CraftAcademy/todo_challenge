# "To-do" Challenge

What's this all about?  It's an individual educational project for Makers Academy.

# Current Status of Project

It's a work in progress.  Currently, the app works locally and [online](http://the-super-duper-to-do-list-app.eu-gb.mybluemix.net/).  No tests yet.  No database yet.  Missing features.  Styling "needs work."  Screenshot below:

![screenshot](https://github.com/chrisco/todo_challenge/blob/master/screenshot.png?raw=true)

## Run the App Locally

````
$ git clone git@github.com:chrisco/todo_challenge.git && cd todo_challenge
$ bower install
$ npm install
$ open index.html
````

## Try It Online

http://the-super-duper-to-do-list-app.eu-gb.mybluemix.net

## Tests and CI

* Unit tests and integration tests are on my to-do list.  Yes, I should have developed with TDD, but chose not to because I only had a little bit of time to work on this weekend challenge and was most excited to play with Angular, so that was my focus.  And it was fun!  That said, I look forward to practicing TDD/BDD with Angular.
* No CI yet, unfortunately.

## Key Technologies Used

* AngularJS
* Angular-xeditable
* Bootstrap
* Bower
* IBM Bluemix
* jQuery
* Node.js

## Roadmap

* Feature: Persist data (local and/or remote database)
* Feature: Visitors can sign up and become Users
* Tests and CI
* Better styling
* More features (due dates, reminders, etc.)

# Project Instructions and Objectives

1) Use whatever level of JavaScript you feel comfortable with.
2) Use everything you have learned so far in terms of driving your development with BDD/TDD, making good use of version control, committing often, planning your work and being mindful of your workflow.
3) **Deadline**: Submit completed pull request by 9am on Monday.

## Details

![Todo mockup](https://makersacademy.mybalsamiq.com/mockups/2914603.png?key=afabb09aef2901a2732515ae4349c1ec0458294b)

1) Build a Todo list as a mini front-end application.
2) Don't have to use a database, as the front-end is more important.  Use an appropriate data structure stored somewhere in your JavaScript.

## Core User Stories

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

## Some Optional User Stories

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

As you may imagine, implementing a To-do list is very much a solved problem. However, we are mainly interested in seeing how you approach testing and design. We are looking for:

1) Well written, well structured acceptance and unit tests.
2) Clear and expressive JavaScript.
3) Good HTML5 markup.

Don't worry about deployment, and make sure you read the CONTRIBUTING.md when submitting a pull request.

## Extensions

1) Deploy the app.
2) Create a persistence layer (e.g. MongoDB), or use LocalStorage or the filesystem through Node.
3) Make it pretty (with CSS).

## CI Instructions

Read the `.travis.yml` if any of the steps below don't make sense:

1) Make sure you have set up `npm test` in your `package.json` so that it runs your Karma tests.
2) Make sure you have your Protractor config file at `e2e/conf.js`
3) Make sure `npm start` spins up whatever serves up your app - `http-server`, Sinatra or Node.
