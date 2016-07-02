# test-app1

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.6.
`npm install -g yo grunt-cli gulp-cli bower generator-angular-fullstack`

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)

### Developing

1. Run `npm install` to install server dependencies.
2. Run `bower install` to install front-end dependencies.
3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

##Deploy to google cloud

Create a project on google cloud platform: https://console.cloud.google.com/home/dashboard
Add datastore api to your project: https://console.cloud.google.com/apis/library
Change the project id in [app.js](https://github.com/ronnyelkayam/node-on-gcloud/blob/ac4ad47dffd8c8d6d18b5838b4d056f166f2d5f9/server/app.js#L17)
Run `gcloud init` and select the right account
Run `npm run deploy`

##Managing data in datastore
Check your data in https://console.cloud.google.com/datastore/entities/

## Testing

Running `npm test` will run the unit tests with karma.
