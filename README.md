# Vue-Training

This project is a basic Single Page Application built using [Vue](https://vuejs.org/) and [Vuetify](https://vuetifyjs.com/vuetify/quick-start).
This project makes remote API calls to a Node-Express server running locally, found [here](https://github.com/aturingmachine/mean-training).

## Installation

Simply clone this repo:

`git clone https://github.com/aturingmachine/vue-training.git <dir name>`

`cd <dir name>`

`npm install`

`npm run dev`

The application will watch for changes made to the files and restart as needed during development.

### Deployment

`npm run build` will bundle and minify the project for deployment to whereever you want.

### Project Structure

`/src`

`--/config/`-Stores Axios setup

`--/pages/`--Has all the Vue components we will need

`--/router/`-Router config for the [vue-router](https://github.com/vuejs/vue-router) we use for SPA

`--/stylus/`-Stylings for the application

`--/App.vue`-Main Vue component, contains the Toolbar, Nav-Drawer, and Footer w/ the router view

`--/main.js`-Driver for the application
